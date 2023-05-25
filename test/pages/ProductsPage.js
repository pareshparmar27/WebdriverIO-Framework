class ProductsPage {
  title = ".title";
  menuIcon = "#react-burger-menu-btn";
  productSortContainer = '[data-test="product_sort_container"]';
  productNameList = ".inventory_item_name";
  productPriceList = ".inventory_item_price";
  menuIcon = "#react-burger-menu-btn";

  getTitle() {
    return $(this.title);
  }

  filter(text) {
    $(this.productSortContainer).selectByVisibleText(text);
  }

  async getProductsName() {
    var names = new Array();
    await $$(this.productNameList).forEach((product) => {
      names.push(product.getText());
    });
    return names;
  }

  async getProductsPrice() {
    var prices = new Array();
    await $$(this.productPriceList).forEach((product) => {
      product.getText().then((text) => {
        prices.push(Number(text.replace(/[^\w\s]/gi, "")));
      });
    });
    return prices;
  }
}
module.exports = new ProductsPage();
