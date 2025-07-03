const { exec } = require('child_process');

const userAgent = process.env.npm_config_user_agent || '';

let installCmd;

if (userAgent.includes('pnpm')) {
    installCmd = 'pnpm add video.js@8.21.0 --save';
} else if (userAgent.includes('yarn')) {
    installCmd = 'yarn add video.js@8.21.0';
} else {
    // default to npm
    installCmd = 'npm install video.js@8.21.0 --save';
}

console.log(`Detected package manager: ${installCmd.split(' ')[0]}`);
console.log(`Running install command: ${installCmd}`);

exec(installCmd, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error installing video.js: ${error.message}`);
        process.exit(1);
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
    }
    console.log(stdout);
    console.log('video.js@8.21.0 installed successfully.');
});
