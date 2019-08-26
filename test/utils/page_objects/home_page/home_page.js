const BasePage = require('../base_page/base_page');
const Collection = require("../base_elements/base_collection");


class HomePage extends BasePage {
    constructor() {
        super();
        this.flows = new Collection(".FlowSelector_flowSelectorFormGroup__11ubs");
    };
    open () {
        return super.open('https://www.apc.com/shop/us/en/tools/ups_selector/')
    };
};

module.exports = HomePage;