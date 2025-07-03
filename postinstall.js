const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Skip if not inside node_modules (i.e., we're developing the package)
if (!__dirname.includes('node_modules')) {
    console.log('⏩ postinstall skipped (development mode)');
    process.exit(0);
}

// Detect package manager
const userAgent = process.env.npm_config_user_agent || '';
let installCmd;

if (userAgent.includes('pnpm')) {
    installCmd = 'pnpm add video.js@8.21.0';
} else if (userAgent.includes('yarn')) {
    installCmd = 'yarn add video.js@8.21.0';
} else {
    installCmd = 'npm install video.js@8.21.0 --save';
}

// Parent project root
const projectRoot = path.resolve(__dirname, '..', '..');

// Confirm we’re in a real project
if (!fs.existsSync(path.join(projectRoot, 'package.json'))) {
    console.error('❌ Could not find parent project package.json — aborting.');
    process.exit(1);
}

console.log(`📦 Detected package manager: ${installCmd.split(' ')[0]}`);
console.log(`📥 Installing video.js@8.21.0 in parent project...`);

exec(installCmd, { cwd: projectRoot }, (error, stdout, stderr) => {
    if (error) {
        console.error(`❌ Error installing video.js: ${error.message}`);
        process.exit(1);
    }
    if (stderr) {
        console.error(`⚠️ stderr: ${stderr}`);
    }
    console.log(stdout);
    console.log('✅ video.js@8.21.0 installed successfully in parent project.');
});
