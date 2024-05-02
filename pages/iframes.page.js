const { expect } = require("@playwright/test");

exports.IframesPage = class IframesPage{

    constructor(page){
        this.page=page;
        this.clickOnIframes=page.locator("//a[@href='/frame']")
        this.parentIframe=page.frameLocator("//iframe[@id='firstFr']")
        this.firstName=this.parentIframe.locator("//input[@name='fname']")
        this.lastName=this.parentIframe.locator("//input[@name='lname']")
        this.childFrame=this.parentIframe.frameLocator("//iframe[@src='innerFrame']")
        this.email=this.childFrame.locator("//input[@name='email']")

    }

    async aboutIframes(firstName,lastName,email){
        await this.clickOnIframes.click();
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.email.fill(email)
        await this.page.waitForTimeout(3000)
    }

}