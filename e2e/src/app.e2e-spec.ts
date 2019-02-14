import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';
// import { element } from '@angular/core/src/render3';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.pause();
    expect(page.getTitleText()).toEqual('Estacionamiento');
 
  });

  // describe('Guardado de Vehiculo', () => {

   

  // });

  it('Guardado de vehiculo en el estacionamiento', () => {
    page.navigateTo();
    browser.pause();

    element(by.id('licensePlate')).sendKeys('HNF88E');
    element(by.id('cilindraje')).sendKeys('650');
    element(by.id('saveParking')).click();

  });

  it('Buscar Vehiculo en el Estacionamiento y generar El pago', () => {
    page.navigateTo();
    browser.pause();

    element(by.id('licensePlatePayment')).sendKeys('HNF88E');
    element(by.id('savePayment')).click();

  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
