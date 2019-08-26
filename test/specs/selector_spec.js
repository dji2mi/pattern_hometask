const expect = require("chai").expect;
const HomePage = require('../utils/page_objects/home_page/home_page');
const MainBlock = require('../utils/page_objects/base_page/main_block');
const PageFactory = require("../utils/page_objects/pageFactory");

describe("Ups Selector", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            return browser.manage().window().maximize();
            var homePage = new HomePage();
    });

    it('title should match', async function (){
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").MainBlock.navigationButtons.clickElementByText("Home, Home Office and Small Business");
        await PageFactory.getPage("Home").MainBlock.ctaButtons.clickElementByText("Configure by Load");
        var until = protractor.ExpectedConditions;
        await browser.wait(until.presenceOf($(".CustomTextField_customInlineFormGroup__3G4va input.CustomTextField_seCustomInput__1xt_c")), 5000, 'Element taking too long to appear in the DOM');
        await PageFactory.getPage("Home").MainBlock.customInput.sendKeys('600');
        await PageFactory.getPage("Home").MainBlock.button.click();
        
        let title = await browser.getTitle();
        expect(title).to.be.equal('APC UPS Selector/Calculator - Find the Correct Battery Backup');
    });
      
});