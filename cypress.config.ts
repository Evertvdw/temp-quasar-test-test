import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: 'test/cypress/fixtures',
  videosFolder: 'test/cypress/videos',
  downloadsFolder: 'test/cypress/downloads',
  screenshotsFolder: 'test/cypress/screenshots',
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    supportFile: 'test/cypress/support/component.ts',
    indexHtmlFile: 'test/cypress/support/component-index.html',
  },
});
