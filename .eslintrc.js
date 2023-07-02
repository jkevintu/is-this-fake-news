module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ['import', 'prettier', 'simple-import-sort', 'vue'],
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:prettier-vue/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  settings: {
    // See https://www.npmjs.com/package/eslint-plugin-prettier-vue for configuation options
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        /**
         * Use prettier to process `<template>` blocks or not
         *
         * If set to `false`, you may need to enable those vue rules that are disabled by `eslint-config-prettier`,
         * because you need them to lint `<template>` blocks
         *
         * @default true
         */
        template: true,

        /**
         * Use prettier to process `<script>` blocks or not
         *
         * If set to `false`, you may need to enable those rules that are disabled by `eslint-config-prettier`,
         * because you need them to lint `<script>` blocks
         *
         * @default true
         */
        script: true,

        /**
         * Use prettier to process `<style>` blocks or not
         *
         * @default true
         */
        style: true,
      },
    },
    // eslint-import-resolver-alias - https://www.npmjs.com/package/eslint-import-resolver-alias
    // without this eslint will give false errors for '@' imports
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
  },
  rules: {
    'prettier-vue/prettier': [
      'error',
      {
        arrowParens: 'always',
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
      },
    ],
    curly: 'error',
    eqeqeq: ['error', 'always'],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-console': 'off',
    'no-empty': 'off',
    'no-empty-function': 'off',
    'no-undef': 'warn',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'no-unused-vars': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // `vue` and related packages come first.
          ['^vue'],
          // Packages starting with `@`.
          ['^@?\\w'],
          // Internal packages.
          ['^(@|@ads|@assets|@core|@embed|@images|@microsites|@player|@pwa|@src|@trans)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          // CT-1432 This borks the studio by making the project modal permanently visible... comment out for now
          // ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
  globals: {
    NvsVideoResolution: true,
    NvsRational: true,
    NvsStreamingEngineStateEnum: true,
    NvsLiveWindowFillModeEnum: true,
    NvsVideoPreviewSizeModeEnum: true,
    NvsAudioResolution: true,
    NvsClipRoleInThemeEnum: true,
    NvsCaptionRoleInThemeEnum: true,
    nvsResumeAudioContext: true,
    FS: true,
    nvsGetStreamingContextInstance: true,
    WASMLoader: true,
    Module: true,
    videojs: true,
    NvsXmlStreamReader: true,
    NvsXmlStreamWriter: true,
    NvsTimeline: true,
    NvsPointF: true,
    NvsAssetPackageStatusEnum: true,
    NvsSeekFlagEnum: true,
    NvsColor: true,
    NvsVectorFloat: true,
    axios: true,
    NvsCaptionTextBoundingTypeEnum: true,
    NvsRectF: true,
    NvsVideoClipMotionModeEnum: true,
    Vue: true,
  },
}
