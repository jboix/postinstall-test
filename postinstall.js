const RECOMMENDED_VERSION = '8.21.0';

function checkVideoJs() {
    try {
        const videojsPkg = require('video.js/package.json');
        const installedVersion = videojsPkg.version;

        if (installedVersion !== RECOMMENDED_VERSION) {
            console.warn(`[pillarbox-web] WARNING: video.js version ${installedVersion} detected.`);
            console.warn(`[pillarbox-web] Recommended version is ${RECOMMENDED_VERSION} or higher in patch version.`);
            console.warn('[pillarbox-web] Please verify compatibility.');
        }
    } catch (e) {
        console.warn('[pillarbox-web] WARNING: video.js is not installed!');
        console.warn(`[pillarbox-web] Please install video.js@${RECOMMENDED_VERSION} as a peer dependency.`);
        console.warn(`[pillarbox-web] Run: npm install video.js@${RECOMMENDED_VERSION} --save`);
    }
}

checkVideoJs();
