const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");

class MainBlock {
    constructor() {
        this.navigationButtons = new Collection("//label[@class='FlowSelector_flowSelectorLabel__1w35m']");
        this.ctaButtons = new Collection("//button[@class='SeButton_btn__1f6LO SeButton_primary__17Qhr FlowSelector_btnFlowSelection__3UDnS']");
        };
};

module.exports = MainBlock;