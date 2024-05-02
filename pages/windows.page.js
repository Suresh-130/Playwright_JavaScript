const { expect } = require("@playwright/test");

exports.WindowsPage = class WindowsPage {

    constructor(page) {
        this.page = page;
        this.clickOnTabs = page.locator("//a[@href='/windows']")
        this.clickOnHomePageButton = page.locator("//button[@id='home']")
        this.clickOnLogin = (newTab) => newTab.locator("//a[@href='/signin']")
        this.clickOnMultipleWindows = page.locator("//button[@id='multi']")

    }

    async singlePageNavigation() {
        await this.clickOnTabs.click();
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.clickOnHomePageButton.click(),
            //await this.page.waitForTimeout(10000),
        ]);
        await this.clickOnLogin(newPage).click();
        await this.page.waitForTimeout(5000);
      
    }

    // async multiplePageNavigations() {
    //     await this.clickOnTabs.click();
    //     const [newPages] = await Promise.all([
    //         this.page.waitForEvent('popup'), 
    //         //await this.page.waitForTimeout(10000),
    //     ]);       
    //     await this.page.waitForTimeout(5000);  
    // }

}