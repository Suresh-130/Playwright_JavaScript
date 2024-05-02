const { expect } = require("@playwright/test");

exports.AlertsPage = class AlertsPage{

    constructor(page){
        this.page=page;
        this.clickOnDialogs=page.locator("//a[@href='/alert']")
        this.acceptTheAlerts=page.locator("//button[@id='accept']")
        this.acceptThePromptAlerts=page.locator("//button[@id='prompt']")

    }

    async aboutAlerts(){
        await this.clickOnDialogs.click();
        this.page.on('dialog',(dialog) =>{
            console.log("Message:",dialog.message())
            console.log("Type: ",dialog.type())    //Types -- Simple,Confirm,Prompt
            dialog.accept("Hello Suresh");      
            console.log("------------")
        })
        console.log("========")
        await this.acceptThePromptAlerts.click();
        await this.page.waitForTimeout(3000)
        await this.acceptTheAlerts.click();
    }

}