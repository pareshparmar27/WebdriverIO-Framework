const LoginPage = require("../pages/LoginPage");
const ProductsPage = require("../pages/ProductsPage");

beforeEach(async () => {
  await browser.url("/");
});

describe("Login Test", () => {
  it("Verify that the login is successfull with valid credentails", async () => {
    await LoginPage.doLogin("standard_user", "secret_sauce");

    await expect(ProductsPage.getTitle()).toHaveTextContaining("PRODUCTS");
  });

  it("Verify that the login is unsuccessfull with invalid credentails", async () => {
    await LoginPage.doLogin("general_user", "secret_sauce");

    await expect(LoginPage.getLoginError()).toHaveTextContaining(
      "Username and password do not match any user in this service"
    );
  });
});
