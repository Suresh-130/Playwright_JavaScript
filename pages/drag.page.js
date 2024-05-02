const { expect } = require("@playwright/test");

exports.DragPage = class DragPage{

    constructor(page){
        this.page=page;
        this.clickOnAUI = page.locator("//a[text()='AUI - 1']")
        this.dragBox = page.locator("//div[@class='example-boundary']")
        this.holdOnBox = page.locator("//div[@id='sample-box']")
    }
    
    async dragOperations(){
        await this.clickOnAUI.click();
        await this.holdOnBox.hover();
        await this.page.waitForSelector("//div[@id='sample-box']", { state: 'visible' });

        const dragBound = this.holdOnBox.boundingBox();
        if(dragBound){
            //await this.page.mouse.move(23.6,50.1);
            await this.page.mouse.down();     
            await this.page.mouse.move(600,800);
            //await this.page.waitForTimeout(10000)
        }
    }
}