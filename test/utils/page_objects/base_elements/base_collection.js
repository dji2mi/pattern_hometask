class Collection {
    constructor(selector) {
                this.collection = element.all(by.css(selector));
                    };
    getCount() {
        return this.collection.count();
    };
    getText() {
        return this.collection.getText();
    };
    async clickElementByText(textToClick) {
        const arrayOfElementTexts = await this.collection.getText();
        console.log(arrayOfElementTexts);
        const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
        if (elementToClickIndex === -1) {
            throw new Error(`No element with [${textToClick}] text found!`);
        }
        return this.collection.get(elementToClickIndex).click();
    };

};
module.exports = Collection;