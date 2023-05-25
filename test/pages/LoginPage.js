class LoginPage {
  username = '[data-test="username"]';
  password = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  loginError = '[data-test="error"]';
  clearError = ".error-button";

  async doLogin(username, password) {
    await $(this.username).setValue(username);
    await $(this.password).setValue(password);
    await $(this.loginButton).click();
  }

  getLoginError() {
    return $(this.loginError);
  }

  clearLoginError() {
    $(this.clearError).click();
  }
}
module.exports = new LoginPage();
