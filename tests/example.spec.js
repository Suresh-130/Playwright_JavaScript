const { test, expect } = require('@playwright/test');
const testData = require("../data/testData.json")
import { LetCodePage } from '../pages/letCode.page';
import { InputFieldsPage } from '../pages/inputFields.page';
import { DropDownsPage } from '../pages/dropDown.page';
import { AlertsPage } from '../pages/alerts.page';
import { RadioButtonsPage } from '../pages/radioButtons.page';
import { IframesPage } from '../pages/iframes.page';
import { WindowsPage } from '../pages/windows.page';
import { DragPage } from '../pages/drag.page';

test.beforeEach(async ({ page }) => {
  const letCode = new LetCodePage(page);
  await letCode.gotoPage();
  await letCode.gotoWorkSpace();
})

test('Input fields operations', async ({ page }) => {
  const inputFielsPage = new InputFieldsPage(page);
  //await expect(page).toHaveTitle("Input")
  await inputFielsPage.inputFields(testData.fullName, testData.appendValue, testData.checkValue);
});

test('Drop down operations', async ({ page }) => {
  const dropDownsPage = new DropDownsPage(page);
  await dropDownsPage.dropDownOperations();
})

test('Alerts operations', async ({ page }) => {
  const alertsPage = new AlertsPage(page);
  await alertsPage.aboutAlerts();
})

test('radio Button operations', async ({ page }) => {
  const radioButtonsPage = new RadioButtonsPage(page);
  await radioButtonsPage.radioButtons();
})

test('Iframes', async ({ page }) => {
  const iframesPage = new IframesPage(page);
  await iframesPage.aboutIframes(testData.firstName, testData.lastName, testData.email);
})

test('Windows navigation', async ({ page }) => {
  const windows = new WindowsPage(page)
  await windows.singlePageNavigation();
})

test('Drag Operations', async ({ page }) => {
  const dragPage = new DragPage(page)
  await dragPage.dragOperations();
}) 












