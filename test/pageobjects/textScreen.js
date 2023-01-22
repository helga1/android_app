class textScreen{
    get title(){
        return $('android=new UiSelector().textContains("Title")')
    }
    get content(){
        return $('android=new UiSelector().textContains("Content")')
    }
    get addreminder(){

    }
    clickBackButton(){
        $('~drawer open').click()
    }

}
module.exports = new textScreen()