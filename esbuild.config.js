// eslint-disable-next-line import/no-extraneous-dependencies
const svgrPlugin = require('esbuild-plugin-svgr');

require('esbuild')
  .build({
    entryPoints: ['app/frontend/index.tsx'],
    bundle: true,
    outfile: 'app/assets/builds/index.js',
    watch: process.argv[2] == '--watch',
    plugins: [svgrPlugin()],
  })
  .catch(() => process.exit(1));
