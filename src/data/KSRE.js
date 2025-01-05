const KSRE_VERSION = 'v2.0.0';

export default {
    version: KSRE_VERSION,
    platform: {
        web: "https://play.fhs.sh/",
        windows: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/KSRE-win.zip`,
        linux: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/KSRE-linux.tar.bz2`,
        flathub: "https://flathub.org/apps/sh.fhs.ksre",
        mac: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/KSRE-mac.zip`,
        android: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/sh.fhs.ksre-release.apk`,
        fdroid: `https://f-droid.org/en/packages/com.fhs.ksre`,
        ios: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/KSRE-ios.ipa`
    }
}
