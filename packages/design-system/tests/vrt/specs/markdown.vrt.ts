import 'jasmine';
import { VisualRegressionTester } from '@porsche-ui/visual-regression-tester';
import { getVisualRegressionTester } from '../helpers/setup';

describe('Markdown', () => {
  let vrt: VisualRegressionTester;

  beforeAll(async () => {
    vrt = await getVisualRegressionTester();
  });

  it('should have no visual regression', async () => {
    expect(
      await vrt.test(
        'markdown',
        async () => {
          await vrt.goTo('/#/web/markdown');
        },
        '#app > .content > .main > .router-view'
      )
    ).toBeFalsy();
  });
});
