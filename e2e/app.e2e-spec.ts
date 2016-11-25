import { MladCmsPage } from './app.po';

describe('mlad-cms App', function() {
  let page: MladCmsPage;

  beforeEach(() => {
    page = new MladCmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
