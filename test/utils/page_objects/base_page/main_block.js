const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");

class MainBlock {
    constructor() {
        this.navigationButtons = new Collection(".FlowSelector_flowSelectorFormGroup__11ubs .FlowSelector_flowSelectorLabel__1w35m");
        this.ctaButtons = new Collection("button.SeButton_btn__1f6LO.SeButton_primary__17Qhr");
        this.customInput = new Element(".CustomTextField_customInlineFormGroup__3G4va input.CustomTextField_seCustomInput__1xt_c");
        this.button = new Element("#app > div > div.App_selectorsApp__3OuCt > div.container.Page_page__3itOR > div.panelWrapper > div > div.col-xs-12.col-md-9 > div > div.RequirementsPanel_buttonsContainer__3bcge > a");
        };
};

module.exports = MainBlock;