import { GlovesPage } from './app.po';

describe('gloves App', () => {
  let page: GlovesPage;

  beforeEach(() => {
    page = new GlovesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
