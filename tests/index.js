module.exports = {
    'Step one: navigate to LinkedIn': function(browser){
        browser
        .url('https://www.linkedin.com/')
        .pause(10000);
    },
    'Step two: Join In': function(browser){
        browser
        .useCss()
        .waitForElementPresent('.nav__button-tertiary', 10000)
        .useXpath()
        //*check that "Welcome" text is in the page*
        .assert.elementPresent('//h1[text(),"Welcome to your professional community"]')
        //*Clicks to the "Join now" button*
        .click('//a[contains(text(),"in now")]')
        .useCss() //Using Css selectors 
        //Clicks to Agree button
        .click('button[type=submit]')
        //.pause(2000)
        //*Checks that error message comes out
        .assert.elementPresent('.uno-alert')
        .waitForElementPresent('#first-name', 2000)
        //*Fills name input
        .setValue('#first-name', 'Mariana')
        .click('button[type=submit]')
        .assert.elementPresent(".uno-alert")
        .waitForElementPresent('#last-name', 2000)
        .setValue('#last-name', 'Sandoval')
        .click('button[type=submit]')
        .assert.elementPresent(".uno-alert")
        //*ends with the test
        .end();
    }
};