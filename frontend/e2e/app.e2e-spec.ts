import { GpManagerTemplatePage } from './app.po';

describe('GpManager App', function() {
  let page: GpManagerTemplatePage;

  beforeEach(() => {
    page = new GpManagerTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
