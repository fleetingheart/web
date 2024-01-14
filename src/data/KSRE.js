const KSRE_VERSION = 'v1.4.2';

export default {
    version: KSRE_VERSION,
    platform: {
        web: "https://play.fhs.sh/",
        windows: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/KSRE-win.zip`,
        linux: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/KSRE-linux.tar.bz2`,
        flathub: "https://flathub.org/apps/sh.fhs.KatawaShoujoReEngineered",
        mac: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/KSRE-mac.zip`,
        android: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/com.fhs.ksre-release.apk`,
        ios: `https://github.com/fleetingheart/ksre/releases/download/${KSRE_VERSION}/KSRE-ios.ipa`
    }
}