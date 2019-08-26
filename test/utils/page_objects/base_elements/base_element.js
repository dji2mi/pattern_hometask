class Element {
    constructor(selector) {
        this.eLement = element(by.css(selector));
    };
    click () {
        return this.element.click();
    };
    getText () {
        return this.element.getText();
    };
};

module.exports = Element;