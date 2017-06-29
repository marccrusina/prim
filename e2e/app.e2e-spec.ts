import { PRIMPage } from './app.po';

describe('prim App', () => {
  let page: PRIMPage;

  beforeEach(() => {
    page = new PRIMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
