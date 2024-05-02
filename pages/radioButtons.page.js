const { expect } = require("@playwright/test");

exports.RadioButtonsPage = class RadioButtonsPage{

    constructor(page){
        this.page=page;
        this.clickOnToggle=page.locator("//a[@href='/radio']")
        this.selectOne=page.locator("//input[@id='yes']")
        this.selectedRadioButton=page.locator("//input[@id='notfoo']")
        this.disabledRadioButton=page.locator("//input[@id='maybe']")
        this.unclickTheCheckBox=page.locator("//label[text()=' Remember me ']");
    }

    async radioButtons(){
        await this.clickOnToggle.click();
        await this.selectOne.check();
        await expect(this.selectedRadioButton).toBeChecked();
        await expect(this.disabledRadioButton).toBeDisabled();
        //await this.selectOne.uncheck();
        await this.unclickTheCheckBox.uncheck();
        await this.page.waitForTimeout(3000)
    }

}