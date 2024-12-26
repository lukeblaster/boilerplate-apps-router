import { FlatCompat } from '@eslint/eslintrc'
const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})
const eslintConfig = [
  ...compat.config({
    files: [],
    extends: [
      'next',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@react/recommended',
      'prettier'
    ],
    settings: {
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    }
  }),
]
export default eslintConfig
