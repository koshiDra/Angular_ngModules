import { NgModulesPage } from './app.po';

describe('ng-modules App', () => {
  let page: NgModulesPage;

  beforeEach(() => {
    page = new NgModulesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
