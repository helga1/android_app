
/*describe('Sample', ()=>{
    it('Sample Test', async()=>{
        await driver.pause(5000)
    })
})
 */
const variable = require ('/Users/olgab/WebstormProjects/android_app/variables.js')
const homeScreen = require ('/Users/olgab/WebstormProjects/android_app/test/pageobjects/homeScreen.js')
const text= require ('../pageobjects/textScreen')


describe ('Empty home page tests', ()=>{
    it('Bell icon is displayed on Home screen', async ()=>{
        await expect(homeScreen.emptyListIcon).toBeDisplayed()
    })
    it('Verify that clicking plus button results 3 icons', async()=>{
        await homeScreen.clickPlusButton()
        expect(await homeScreen.inputButtonsImageCount).toBe(3)
    })
    it.only('Verify user can create checklist', async()=>{
        await homeScreen.clickTextNoteTextButton()
        await text.title.setValue(variable.title)
        await text.content.setValue(variable.content)
        await text.clickBackButton()
        expect (await homeScreen.titleText.getText()).toBe(variable.title)
        expect (await  homeScreen.contentText.getText()).toBe(variable.content)



    } )


})


