import typescriptEslintParser from '@typescript-eslint/parser'
import vueEslintPlugin from 'eslint-plugin-vue'
import * as espree from 'espree'
import vueEslintParser from 'vue-eslint-parser'

import { typescriptPlugins, typescriptRules } from './typescript'

import type { LanguageOptions, Plugins, Rules, FlatConfigItem } from '../types'

export const vueWithTypescriptLanguageOptions: LanguageOptions = {
  parser: vueEslintParser,
  /**
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/parser/README.md
   * @see https://typescript-eslint.io/packages/parser/
   */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      globalReturn: false,
      impliedStrict: true
    },
    parser: {
      // @see https://github.com/vuejs/vue-eslint-parser/issues/104#issuecomment-909082288
      // @see https://github.com/vuejs/vue-eslint-parser/issues/104#issuecomment-909191552
      js: typescriptEslintParser,
      ts: typescriptEslintParser,
      '<template>': espree
    },
    cacheLifetime: {
      glob: 30
    },
    emitDecoratorMetadata: undefined,
    extraFileExtensions: ['.vue'],
    jsDocParsingMode: 'none',
    project: true,
    projectFolderIgnoreList: ['**/node_modules/**'],
    tsconfigRootDir: undefined,
    warnOnUnsupportedTypeScriptVersion: true,
    EXPERIMENTAL_useProjectService: true,
    vueFeatures: {
      filter: false,
      interpolationAsNonHTML: true,
      styleCSSVariableInjection: false,
      customMacros: []
    }
  }
}

export const vueWithTypescriptPlugins: Plugins = { ...typescriptPlugins, vue: vueEslintPlugin }

export const vueWithTypescriptRulesBase: Rules = {
  'vue/comment-directive': ['error'],
  'vue/jsx-uses-vars': ['error']
}
export const vueWithTypescriptRulesEssential: Rules = {
  'vue/multi-word-component-names': ['error'],
  'vue/no-arrow-functions-in-watch': ['error'],
  'vue/no-async-in-computed-properties': ['error'],
  'vue/no-child-content': ['error'],
  'vue/no-computed-properties-in-data': ['error'],
  'vue/no-deprecated-data-object-declaration': ['error'],
  'vue/no-deprecated-destroyed-lifecycle': ['error'],
  'vue/no-deprecated-dollar-listeners-api': ['error'],
  'vue/no-deprecated-dollar-scopedslots-api': ['error'],
  'vue/no-deprecated-events-api': ['error'],
  'vue/no-deprecated-filter': ['error'],
  'vue/no-deprecated-functional-template': ['error'],
  'vue/no-deprecated-html-element-is': ['error'],
  'vue/no-deprecated-inline-template': ['error'],
  'vue/no-deprecated-props-default-this': ['error'],
  'vue/no-deprecated-router-link-tag-prop': ['error'],
  'vue/no-deprecated-scope-attribute': ['error'],
  'vue/no-deprecated-slot-attribute': ['error'],
  'vue/no-deprecated-slot-scope-attribute': ['error'],
  'vue/no-deprecated-v-bind-sync': ['error'],
  'vue/no-deprecated-v-is': ['error'],
  'vue/no-deprecated-v-on-native-modifier': ['error'],
  'vue/no-deprecated-v-on-number-modifiers': ['error'],
  'vue/no-deprecated-vue-config-keycodes': ['error'],
  'vue/no-dupe-keys': ['error'],
  'vue/no-dupe-v-else-if': ['error'],
  'vue/no-duplicate-attributes': ['error'],
  'vue/no-export-in-script-setup': ['error'],
  'vue/no-expose-after-await': ['error'],
  'vue/no-lifecycle-after-await': ['error'],
  'vue/no-mutating-props': ['error'],
  'vue/no-parsing-error': ['error'],
  'vue/no-ref-as-operand': ['error'],
  'vue/no-reserved-component-names': ['error'],
  'vue/no-reserved-keys': ['error'],
  'vue/no-reserved-props': ['error'],
  'vue/no-setup-props-destructure': ['error'],
  'vue/no-shared-component-data': ['error'],
  'vue/no-side-effects-in-computed-properties': ['error'],
  'vue/no-template-key': ['error'],
  'vue/no-textarea-mustache': ['error'],
  'vue/no-unused-components': ['error'],
  'vue/no-unused-vars': ['error'],
  'vue/no-use-computed-property-like-method': ['error'],
  'vue/no-use-v-if-with-v-for': ['error'],
  'vue/no-useless-template-attributes': ['error'],
  'vue/no-v-for-template-key-on-child': ['error'],
  'vue/no-v-text-v-html-on-component': ['error'],
  'vue/no-watch-after-await': ['error'],
  'vue/prefer-import-from-vue': ['error'],
  'vue/require-component-is': ['error'],
  'vue/require-prop-type-constructor': ['error'],
  'vue/require-render-return': ['error'],
  'vue/require-slots-as-functions': ['error'],
  'vue/require-toggle-inside-transition': ['error'],
  'vue/require-v-for-key': ['error'],
  'vue/require-valid-default-prop': ['error'],
  'vue/return-in-computed-property': ['error'],
  'vue/return-in-emits-validator': ['error'],
  'vue/use-v-on-exact': ['error'],
  'vue/valid-attribute-name': ['error'],
  'vue/valid-define-emits': ['error'],
  'vue/valid-define-props': ['error'],
  'vue/valid-next-tick': ['error'],
  'vue/valid-template-root': ['error'],
  'vue/valid-v-bind': ['error'],
  'vue/valid-v-cloak': ['error'],
  'vue/valid-v-else-if': ['error'],
  'vue/valid-v-else': ['error'],
  'vue/valid-v-for': ['error'],
  'vue/valid-v-html': ['error'],
  'vue/valid-v-if': ['error'],
  'vue/valid-v-is': ['error'],
  'vue/valid-v-memo': ['error'],
  'vue/valid-v-model': ['error'],
  'vue/valid-v-on': ['error'],
  'vue/valid-v-once': ['error'],
  'vue/valid-v-pre': ['error'],
  'vue/valid-v-show': ['error'],
  'vue/valid-v-slot': ['error'],
  'vue/valid-v-text': ['error']
}
export const vueWithTypescriptRulesStronglyRecommended: Rules = {
  'vue/attribute-hyphenation': ['warn'],
  'vue/component-definition-name-casing': ['warn'],
  'vue/first-attribute-linebreak': ['warn'],
  'vue/html-closing-bracket-newline': ['warn'],
  'vue/html-closing-bracket-spacing': ['warn'],
  'vue/html-end-tags': ['warn'],
  'vue/html-indent': ['warn'],
  'vue/html-quotes': ['warn'],
  'vue/html-self-closing': ['warn'],
  'vue/max-attributes-per-line': ['warn'],
  'vue/multiline-html-element-content-newline': ['warn'],
  'vue/mustache-interpolation-spacing': ['warn'],
  'vue/no-multi-spaces': ['warn'],
  'vue/no-spaces-around-equal-signs-in-attribute': ['warn'],
  'vue/no-template-shadow': ['warn'],
  'vue/one-component-per-file': ['warn'],
  'vue/prop-name-casing': ['warn'],
  'vue/require-default-prop': ['warn'],
  'vue/require-explicit-emits': ['warn'],
  'vue/require-prop-types': ['warn'],
  'vue/singleline-html-element-content-newline': ['warn'],
  'vue/v-bind-style': ['warn'],
  'vue/v-on-event-hyphenation': ['warn'],
  'vue/v-on-style': ['warn'],
  'vue/v-slot-style': ['warn']
}
export const vueWithTypescriptRulesRecommended: Rules = {
  'vue/attributes-order': ['warn'],
  'vue/component-tags-order': ['warn'],
  'vue/no-lone-template': ['warn'],
  'vue/no-multiple-slot-args': ['warn'],
  'vue/no-v-html': ['warn'],
  'vue/order-in-components': ['warn'],
  'vue/this-in-template': ['warn']
}
export const vueWithTypescriptRulesFromMobius: Rules = {
  'vue/first-attribute-linebreak': ['warn', { singleline: 'beside', multiline: 'below' }],
  'vue/max-attributes-per-line': ['warn', { singleline: { max: 5 }, multiline: { max: 5 } }],
  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always'
      },
      svg: 'never',
      math: 'always'
    }
  ]
}

export const vueRules: Rules = {
  ...typescriptRules,
  ...vueWithTypescriptRulesBase,
  ...vueWithTypescriptRulesEssential,
  ...vueWithTypescriptRulesStronglyRecommended,
  ...vueWithTypescriptRulesRecommended,
  ...vueWithTypescriptRulesFromMobius
}

export const vueWithTypescript: FlatConfigItem = {
  files: ['**/*.vue'],
  languageOptions: vueWithTypescriptLanguageOptions,
  processor: vueEslintPlugin.processors['.vue'],
  plugins: vueWithTypescriptPlugins,
  rules: vueRules
}
