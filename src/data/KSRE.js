const KSRE_VERSION_BACKUP = 'v2.0.4';
const KSRE_VERSION_API = fetch(`https://api.github.com/repos/fleetingheart/ksre/releases/latest`);
const KSRE_VERSION = await KSRE_VERSION_API.then(response => response.json()).then(data => data.tag_name).catch(() => KSRE_VERSION_BACKUP);


export default {
    version: KSRE_VERSION,
    platform: {
        web: "https://play.fhs.sh/",
        windows: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/KSRE-win.zip`,
        linux: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/KSRE-linux.tar.bz2`,
        flathub: "https://flathub.org/apps/sh.fhs.ksre",
        mac: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/KSRE-mac.zip`,
        android: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/sh.fhs.ksre-release.apk`,
        ios_testflight: `https://testflight.apple.com/join/dq13g5C7`,
        ios: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/KSRE-ios.ipa`,
        fdroid: 'https://f-droid.org/en/packages/sh.fhs.ksre/',
        aur: 'https://aur.archlinux.org/packages/katawa-shoujo-reengineered-bin',
        nix_os: 'https://search.nixos.org/packages?channel=24.11&from=0&size=50&sort=relevance&type=packages&query=katawa-shoujo-re-engineered'
    }
}
