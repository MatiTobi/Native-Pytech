const { execSync } = require('child_process')
const run = (cmd) => execSync(cmd, { stdio: 'inherit' })

try {
	run('rimraf dist')
	run('tsc')
	run('tsc-alias')
	run('copyfiles -u 2 "src/libs/assets/images/**/*" dist/libs/')
} catch (err) {
	console.error('\n❌ Build failed')
	process.exit(1)
}