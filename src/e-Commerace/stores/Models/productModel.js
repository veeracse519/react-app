class ProductModel{
    productId;
    availableSizes;
    currencyFormat;
    currencyId;
    description;
    installmentsCount;
    isFreeShipping;
    price;
    printStyle;
    title;
    imageURL;
    id;
    constructor(productObj){
    this.id=productObj.id;
        this.availableSizes=productObj.availableSizes;
        this.currencyFormat=productObj.currencyFormat;
        this.currencyId=productObj.currencyId;
        this.description=productObj.description;
        this.installments=productObj.installments;
        this.isFreeShipping=productObj.isFreeShipping;
        this.price=productObj.price;
        this.printStyle=productObj.style;
        this.title=productObj.title;
        this.image=productObj.image;
    }
}
export default ProductModel