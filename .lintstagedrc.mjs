import { relative } from 'path';

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => relative(process.cwd(), f)).join(' --file ')}`;

export default {
  '*.{js,jsx,ts,tsx}': ['prettier --write', buildEslintCommand],
  '*.{json,md,yml}': ['prettier --write'],
};
