const MainBlock = require('./main_block.js');

class BasePage {
    constructor() {
        this.MainBlock = new MainBlock();
    };
    getCurrenUrl() {
        return browser.getCurrentUrl();
    };
    open(url) {
        return browser.get(url);
    };
};

module.exports = BasePage;
