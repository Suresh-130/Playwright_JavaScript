const { expect } = require("@playwright/test");

exports.DropDownsPage = class DropDownsPage{

    constructor(page){
        this.page=page;
        this.clickOnDropDown = page.locator("//a[text()='Drop-Down']")
        this.selectFruits = page.locator("//select[@id='fruits']")
        this.checkSelectedFruit = page.locator("(//div[@class='notification is-success']/p)[1]")
        this.selectHeros = page .locator("//select[@id='superheros']")
        this.selectLang=page.locator("//select[@id='lang']")
        this.selectLastElement=page.locator("//select[@id='lang']/option").all()
        this.selectCountry=page.locator("//select[@id='country']")
    }
    
    async dropDownOperations(){
        await this.clickOnDropDown.click();
        await this.selectFruits.selectOption("2");
        expect(await this.checkSelectedFruit.textContent()).toContain("You have selected Orange");
        await this.selectHeros.selectOption([{label:"Aquaman"},{value:"bt"},{index:8}])
        console.log(await this.selectLastElement.length)
        console.log(await this.selectLang.selectOption({index: 4}))
        await this.selectLang.selectOption({index: 2})
        await this.selectCountry.selectOption("India")
        //await expect(this.selectCountry.eval(ele=>ele.value)).toBe("India")
        await this.page.waitForTimeout(3000)
    }

}