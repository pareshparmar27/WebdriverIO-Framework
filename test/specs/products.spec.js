const LoginPage = require("../pages/LoginPage");
const ProductsPage = require("../pages/ProductsPage");
const DataUtils = require("../../utils/DataUtils");

beforeEach(async () => {
  await browser.url("/");
  await LoginPage.doLogin("standard_user", "secret_sauce");
  await expect(ProductsPage.getTitle()).toBeExisting();
});

describe("Products Test", () => {
  it("Verify that the products name is in ascending order", async () => {
    ProductsPage.filter("Name (A to Z)");
    await ProductsPage.getProductsName().then((names) => {
      expect(DataUtils.isAscending(names)).toBeTruthy;
    });
  });

  it("Verify that the products name is in descending order", async () => {
    ProductsPage.filter("Name (Z to A)");
    await ProductsPage.getProductsName().then((names) => {
      expect(DataUtils.isAscending(names)).toBeFalsy;
    });
  });

  it("Verify that the products price is in ascending order", async () => {
    ProductsPage.filter("Price (low to high)");
    await ProductsPage.getProductsPrice().then((prices) => {
      expect(DataUtils.isAscending(prices)).toBeTruthy;
    });
  });

  it("Verify that the products price is in descending order", async () => {
    ProductsPage.filter("Price (high to low)");
    await ProductsPage.getProductsPrice().then((prices) => {
      expect(DataUtils.isAscending(prices)).toBeFalsy;
    });
  });
});
