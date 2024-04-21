# Preserving Katawa Shoujo - A deep dive into the remaking of katawa-shoujo.com

Welcome to the very first FHS blog article, today I'll present to you a deep dive into remaking the katawa-shoujo.com website. It will be quite technical, so if you're a programmer or just interested in software engineering in general, this will hopefully hit all the right spots. Get a cup of coffee or tea (albeit I prefer the former, being a programmer and all that) and enjoy the read!

## TLDR
As of April 17th, 2024, FHS has remade the entirety of the [katawa-shoujo.com](http://katawa-shoujo.com) website, available over at [katawa-shoujo.online](http://katawa-shoujo.online) and [katawa-shoujo.ru](http://katawa-shoujo.ru). As stated before, all of our work is open-source; contributions, constructive criticism, and feedback are all more than welcome. You can find all the contents discussed in this article over at [Codeberg](https://codeberg.org/fhs/ks-web).

## Premise
As I'm sure some of you already know, the [katawa-shoujo.com](http://katawa-shoujo.com) domain is about to expire in 2025, as stated in the whois manifest (`Registry Expiry Date: 2025-06-28T04:44:19Z`). For a while we've attempted to track down the original owner, because it seems like nobody truly has a grip on what will happen to the domain and its contents after the expiry date, but we've come up largely empty handed. FHS has already been maintaining some of the core Katawa Shoujo infrastructure for a while now, such as the forums under [ks.fhs.sh](https://ks.fhs.sh) as well as our very own [Katawa Shoujo: Re-Engineered](https://fhs.sh/projects). The idea of preserving the original website has been a topic of discussion for a few months, until we've finally decided to bite the bullet and get to it.

## The Plan
The first question in everyone's mind is probably the "how" aspect. Its important to mention that FHS is in possession of the original source code for the website, thus we've debated whether or not we should just take the existing codebase, spin up a PHP webserver, and call it a day. Ultimately we've decided not to do this, for several reasons. First off, the original website was made in the early 2010-s, using pure PHP. Web standards were way different back in those days, and I was pretty sure we could do better with today's technologies. Sites like katawa-shoujo.com don't necessarily need to be serverside-rendered, because they offer static content. Platforms like Vercel are a blessing for clientside-rendered websites, as they serve content fast, efficiently, and closest to the user's location without any need for managed backend infrastructure. We are already making heavy use of Vercel for our primary [fhs.sh](https://fhs.sh) website, so the choice here was pretty obvious. But then, as we are now in CSR land, we can no longer use PHP (not that *I* mind), so then what?

Luckily, many modern JavaScript frameworks have mastered CSR and even static rendering (for example, Astro is an excellent contender for static rendering). The framework of our choosing ended up being Vue.js. It is the framework that also powers [fhs.sh](https://fhs.sh) and the one that I have the most experience with, maintained by a community of lovely contributors. Vue offers excellent CSR out of the box, with a mature package ecosystem that makes development a breeze.

You might've noticed that the original site is extremely slow, refreshes each time that you navigate, and its sometimes even outright broken, for example when trying to visit the Staff page, or when trying to change languages. We want to alleviate all of this and more with our remake, while also preserving the look as close to the original as we can get.

## Style
The first thing we needed to get right was the style. The original site makes use of a couple of tricks to get itself to look the way it does, which was surprisingly hard back in the days when nearly everyone was using Internet Explorer. For the CSS framework I ended up using Tailwind as I do with most of my projects.

You'd expect the text on the homepage to be done with simple HTML tags that have a custom CSS font, right? Well, so did I, but that assumption turned out to be wrong entirely. Every piece of text you see on the site that's not using the default system font is either a static image or a canvas-rendered font. The original developers achieved this with the Cufon library, which seems to have been popular back in the days when custom fonts weren't that well supported by browsers. It wasn't that hard to figure out that the font used by the site is the same one used in the game: Playtime. Powered with that knowledge, it was simply a matter of declaring a TTF font face in the CSS, and we had identical fonts without any of the canvas rendering nonsense. One caveat here is that we didn't manage to figure out which font was used for the CJK language text renders, so for now the system default is used until we can track it down.

The main layout consists of a container that has a static image as it's background, on which a navbar is placed, and the page contents right below it. Implementing that part was relatively straightforward, just a div centered in the middle of the screen. The footer is a grid with three segments, one for the copyright, one for the language picker, and the last one for the Twitter follow button and the license.

The navbar had some interesting quirks, for example the red download circle is burnt into the original background image, so the original developers went with the solution of aligning the nav items to said circle using padding and margin. We've opted for a different solution. We used the image without the circle, made our own circle, and applied that as a pseudo-element to the "Download" nav item. This also enabled us to make new differently sized circles for certain languages where the text is longer or shorter. Thank you for the extra circles goes to Nijo.

Implementing the actual pages was also largely straightforward in terms of styling. I've mostly used simple flexbox and grid logic to get them done, and did the KS-themed separators with some background-image magic. Figuring out and converting the font sizing in certain places to different units was also a fair bit of fun, chasing `em` units 'till the top of the DOM tree like a cat and mouse game. All this while trying to at least somewhat respect to the Tailwind defaults.

## Translation / Internationalization (i18n)
The original site is available in many different languages, making Katawa Shoujo accessible to a much wider audience, which we believe is a great thing. We not only wanted to preserve this aspect of the site, but to make it even better with seamless language switching, and added support for more languages.

I ended up using the `vue-i18n` library for this task for its simplicity, seamless integration with the Vue Composition API, and community support. The main custom logic for this module is found within `i18n/provider.ts`. In a nutshell, I've split the strings for their respective pages and subpages into different files that provide the strings for all languages. The provider just merges all these objects into one final object that is plugged into the library as the final string store.

```js
// i18n provider
import * as VueI18n from "vue-i18n";
import { taglines } from "./taglines";
import { navigation } from "./navigation";
import { characters } from "./characters";
import { about } from "./about";
import { downloads } from "./downloads";
import { samples } from "./samples";
import { footer } from "./footer";
import { staff } from "./staff";
import { WritableComputedRef, computed } from "vue";

function deepMerge(...objects) {
    const merged = {};

    // Iterate through all objects
    objects.forEach(obj => {
        // Iterate through all keys in the object
        for (const key in obj) {
            // Check if the key exists in the merged object and if both values are objects
            if (key in merged && typeof merged[key] === 'object' && typeof obj[key] === 'object') {
                // Recursively merge the nested objects
                merged[key] = deepMerge(merged[key], obj[key]);
            } else {
                // If the key doesn't exist in the merged object or if the values are not objects, overwrite the merged value
                merged[key] = obj[key];
            }
        }
    });

    return merged;
}

console.time('[i18nProvider] Merging strings');
const strings = deepMerge(taglines, navigation, characters, about, downloads, samples, footer, staff);
console.timeEnd('[i18nProvider] Merging strings');
// ...
```

Other than that, I've implemented a persistent locale changer, which saves locales between refreshes in the Local Storage, and a locale detector that sets your initial locale based on the system/browser language.

This aspect of the remake ended up being the most difficult and time-consuming task out of them all. The original site used if-else blocks that contained the entire template as many times as many languages there were, or functions that generated these templates. If you worked with any i18n supporting projects before, I don't exactly have to explain to you why this is cursed from a technical standpoint. If you want to change something, you'll have to change it in 14 other places, every single time. It becomes tedious and unmaintainable, biting you back in the rear sometime after. I wanted to avoid this as much as I could. Luckily, AI has many uses, and, as it turns out, it does extracting text from templates pretty well. Given an example for a single language that has been crafted manually, it finishes the job without much complaint. Still, it took multiple days to finish extracting most of the strings. In the end all the hard work has paid off, because now if you want a tag to say "Full Version" in any language you can insert `<h1 class="font-bold">{{ t('downloads.full') }}</h1>` into the template and `vue-i18n` will figure it out, instead of 14 if-else statements. This also enables us to add new languages to the site very easily in the future, as Vlad has already done with Russian.

There were two clear outliers to this process, namely the About and the Staff page. About is a very text-heavy page with many links that redirect to different pages internally. Apart from that, some languages contained a different number of paragraphs and had a different order to their content than others. Still, I tried to generalize them into digestible keys as best as I could. Another interesting thing related to this page in specific is that some languages still contained text as if the game wasn't yet released. We've tried our best removing these lines from all languages, since that's clearly not the case. The other issues were the links that redirected internally. Since Vue is CSR, you are not actually meant to refresh the whole website when you navigate to another page within the same app, instead the Vue Router handles navigation for you using `<router-link to="/path"></router-link>` tags that internally render themselves as simple anchor tags with their events caught and consumed. In this case, I made a simple function that is triggered when the page mounts or when the locale is changed, which queries the page for all anchor tags that redirect inside the site, and patches them to be consumed by the router instead.

```js
// WARN: v-html is not recommended, but i18n strings tie our hands
// v-html will not convert <a href="..."> to <router-link to="...">, so we need to do it manually
function fixLinks() {
    document.querySelectorAll('.about a').forEach((el: HTMLAnchorElement) => {
        // If link is not relative, do nothing
        if (!el.href.startsWith(window.location.origin)) return;

        el.addEventListener('click', (e) => {
            e.preventDefault();
            $router.push(el.href);
        });
    });
    console.log("[About] Fixed links.")
}

onMounted(() => {
    fixLinks();
});

watch(locale, () => {
    nextTick(() => {
        fixLinks();
    });
});
```

With that out of the way, we get to the nightmare fuel that is `staff.php`. Now, the problem here is that the strings cannot be generalized whatsoever because the entire template differs for all languages. The English (and some other languages') one has neat sections with different roles, and bulleted lists for the personnel under them, while other languages had bulleted lists with all personnel listed and their respective roles after in the same line. Some were complete, some were incomplete, and patching up things for languages we were unfamiliar with was out of the scope for the initial release. The only logical thing I could do was to paste the entire template as the translated string for every single language. I'm not satisfied at all with this hack, but for the time being it works well. Also its noteworthy that `vue-i18n` complains every time you use a translated string inside `v-html`, which opposed to template expressions, renders as HTML, not text. This is necessary for links and linebreaks to function properly, so not much we can do regarding that.

Additionally, the only remaining thing left on our laundry list of translation related chores was to QA and fix up the Hungarian translation, since it was questionable or too raw in some places. Me and Nijo are both native Hungarian speakers, still, Nijo ended up doing the bulk of the work, so a big thank you goes to her.

## Additional Improvements
Now that we got most of the headaches out of our way, we can get to the extra improvements we've wanted to make to the site. Some of them you've already read above, but there's plenty more.

I've implemented mobile responsiveness, so now the site should look much-much better on mobile devices than the original one did. Not that I would ever blame the original developers of course, mobile-specific designs weren't that popular more than a decade ago since most users were from desktop.

I've swapped the image viewer for the way more modern `v-viewer` package, so now scrolling and viewing images should be much more comfortable and snappy on both desktop and mobile.

We've also added HTTPS support, something that the original site was missing causing all those "Connection not secure" warnings.

Additionally, as mentioned above, Nijo has updated the Hungarian translation, while Vlad added Russian to the site.

## The Future
Of course this initial release doesn't mark the finish line by any means. We'll continue supporting and improving the remake as we go, and we've still got a few things on our mind that we'd like to get done soon.

We want to transfer all downloadable binaries, torrents and extras to a separate CDN instead of redirecting to the original site. We'll most likely get this done in the next couple of weeks, so stay tuned.

Regarding the inconsistencies in the Staff page, we also seek to fix those and hopefully get native speakers to approve/audit the translations for every language.

We also plan to track down the original CJK font used, so if you have any tips regarding that feel free to throw us a message on Discord or via e-mail.

## Conclusion
If you've reached this part, thank you for reading! I hope that this article was an interesting perspective into the things we've been working on regarding the remake in the past few months.

There's plenty of other cool things we've been cooking up that are not quite ready for the public eye just yet, but rest assured we'll share information and collect feedback as soon as we feel adequate.

Until then, see you in the next blog post! :)
\- Tibix