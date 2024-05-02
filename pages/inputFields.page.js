const { expect } = require("@playwright/test");

exports.InputFieldsPage = class InputFieldsPage{

    constructor(page){
        this.page=page;
        this.clickOnEdit = page.locator("//a[text()='Edit']");
        this.fullNameField = page.locator("//input[@id='fullName']");
        this.appendText = page.locator("//input[@id='join']");
        this.checkValue = page.locator("//input[@id='getMe']");
        this.clearValue = page.locator("//input[@id='clearMe']")
        this.enabledBox = page.locator("//input[@id='noEdit']")
        this.nonEditable = page.locator("//input[@id='dontwrite']")
        
    }

    async inputFields(fullName,appendValue,checkValue){
        await this.clickOnEdit.click();
        await this.fullNameField.click();
        await this.fullNameField.fill(fullName);
        await this.appendText.type(appendValue);
        const value=await this.checkValue.inputValue();
        await expect(value).toContain(checkValue);
        await this.clearValue.clear();
        await expect(this.enabledBox).toBeDisabled();
        await expect(this.nonEditable).not.toBeEditable();
        //await this.page.waitForTimeout(3000)
    }
}