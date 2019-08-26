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
        await PageFactory.getPage("Home").MainBlock.ctaButtons.clickElementByText("By Load");
        await browser.element(By.xpath("//input[contains(@class, 'CustomTextField_seCustomInput')]")).sendKeys('600');
        await browser.element(By.xpath("//a[contains(@class, 'SeButton_primary') and child::span[text()='Continue']]")).click();
        
        let title = await browser.getTitle();
        expect(title).to.be.equal('APC UPS Selector/Calculator - Find the Correct Battery Backup');
    });
      
});