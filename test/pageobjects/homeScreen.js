
class HomeScreen {

    defaultBellIcon

    get emptyListIcon() {
        browser.setImplicitTimeout(3000)
       return $('//*[@text="Nothing here!"]')

    }

    get plusButton() {
        browser.setImplicitTimeout(3000)
        return $('android.widget.ImageButton')
    }

    clickPlusButton(){
        browser.setImplicitTimeout(3000)
        return $('android=new UiSelector().index(6)').click()
        browser.pause(30000)
    }

    get inputButtonsCount(){
        //browser.setImplicitTimeout(3000)
        const buttons = $$('android.widget.ImageButton')
        return buttons.length
    }

    get inputButtonsImageCount(){
        const photoImage= $$('android=new UiSelector().resourceIdMatches("it\.feio\.android\.omninotes\.alpha:id/fab")')
            return photoImage.length
    }

    clickChecklistTextButton(){
        return $('android=new UiSelector().textContains("Checklist")').click()
    }

    clickTextNoteTextButton(){
        return $('android=new UiSelector().textContains("Text note")').click()
    }
    /*get newSection(){
        return $$('android.widget.LinearLayout').length
    }


     */

    get titleText(){
        return $('android=new UiSelector().textContains("My first note")')
    }
    get contentText(){
        return $('android=new UiSelector().index(1)')

    }

}

    module.exports = new HomeScreen()
