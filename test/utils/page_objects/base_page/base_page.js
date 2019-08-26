const Main_Block = require('./main_block.js');

class BasePage {
    constructor() {
        this.Main_Block = new Main_Block();
    };
    getCurrenUrl() {
        return browser.getCurrentUrl();
    };
    open(url) {
        return browser.get(url);
    };
};

module.exports = BasePage;
