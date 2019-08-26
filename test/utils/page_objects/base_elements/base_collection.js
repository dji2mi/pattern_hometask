class Collection {
    constructor(selector) {
        this.Collection = element.all(by.xpath(selector));
    };
    getCount() {
        return this.Collection.count();
    };
    getText() {
        return this.Collection.getText();
    };
    async clickElementByText(textToClick) {
        const arrayOfElementTexts = await this.collection.getText();
        const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
        if (elementToClickIndex === -1) {
            throw new Error(`No element with [${textToClick}] text found!`);
        }
        return this.collection.get(elementToClickIndex).click();
    };

};
module.exports = Collection;