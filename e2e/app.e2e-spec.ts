import { VehicleCostComparatorPage } from './app.po';

describe('vehicle-cost-comparator App', function() {
  let page: VehicleCostComparatorPage;

  beforeEach(() => {
    page = new VehicleCostComparatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
