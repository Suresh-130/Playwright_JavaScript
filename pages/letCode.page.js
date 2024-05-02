const { expect } = require("@playwright/test");

exports.LetCodePage = class LetCodePage{

    constructor(page){
        this.page = page;
        this.clickOnWorkSpace = page.locator("//a[@id='testing']");
        
    }

    async gotoPage(){
        await this.page.goto('/');
    }

    async gotoWorkSpace(){
        await this.clickOnWorkSpace.click();
    }

}