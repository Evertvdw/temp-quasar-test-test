import QuasarComponent from 'src/components/QuasarComponent.vue';
import { Notify } from 'quasar';

describe('ComponentName.cy.ts', () => {
  it('playground', () => {
    cy.mount(QuasarComponent, {}, { plugins: { Notify } });
  });
});
