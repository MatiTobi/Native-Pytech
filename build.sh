rimraf dist
tsc
tsc-alias
copyfiles -u 2 "src/libs/assets/images/**/*" dist/libs/