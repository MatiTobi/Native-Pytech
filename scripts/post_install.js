const packageJson = require('../package.json')

const required = Object.keys(
    packageJson.peerDependencies ?? {}
)

const missing = []

for (const pkg of required) {
    try {
        require.resolve(pkg)
    } catch {
        missing.push(pkg)
    }
}

if (missing.length > 0) {
    console.warn('\n[NativePytech] Missing peer dependencies:\n')

    for (const pkg of missing) {
        console.warn(`- ${pkg}`)
    }

    console.warn('')
}