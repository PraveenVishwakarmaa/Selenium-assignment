const { Builder, Browser, By } = require("selenium-webdriver");
require("chromedriver");

// Describe block
describe("Invalid Test case", function () {
  it("With valid username and invalid password", async function () {
    // Lauching the browser
    const driver = await new Builder().forBrowser("chrome").build();

    // Maximise the window
    await driver.manage().window().maximize();

    try {
      // Open the web page
      await driver.get("https://sakshingp.github.io/assignment/login.html");

      // Navigating the Username field and login button
      const usernameField = await driver.findElement(By.id("username"));
      const loginButton = await driver.findElement(By.id("log-in"));

      // Entering the Username
      await usernameField.sendKeys("admin");

      // Clicking the login button
      await loginButton.click();

      // Locating and checking the alert is displaying or not
      let message = await driver.findElement(
        By.xpath("/html/body/div/div/div[3]")
      );
      if (message.isEnabled()) {
        console.log("Message is Visible now!");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("An Error occured:" + error);
    } finally {
      //   Closing the browser
      await driver.quit();
    }
  });
  it("With invalid username and valid password", async function () {
    // Lauching the browser
    const driver = await new Builder().forBrowser("chrome").build();

    // Maximise the window
    await driver.manage().window().maximize();

    try {
      // Open the web page
      await driver.get("https://sakshingp.github.io/assignment/login.html");

      // Navigating the Password field and login button
      const passwordField = await driver.findElement(By.id("password"));
      const loginButton = await driver.findElement(By.id("log-in"));

      // Entering the Password
      await passwordField.sendKeys("admin");

      // Clicking the login button
      await loginButton.click();

      // Locating and checking the alert is displaying or not
      let message = await driver.findElement(
        By.xpath("/html/body/div/div/div[3]")
      );
      if (message.isEnabled()) {
        console.log("Message is Visible now!");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("An Error occured:" + error);
    } finally {
      //   Closing the browser
      await driver.quit();
    }
  });
  it("With invalid username and invalid password", async function () {
    // Lauching the browser
    const driver = await new Builder().forBrowser("chrome").build();

    // Maximise the window
    await driver.manage().window().maximize();

    try {
      // Open the web page
      await driver.get("https://sakshingp.github.io/assignment/login.html");

      // Navigating login button
      const loginButton = await driver.findElement(By.id("log-in"));

      // Clicking the login button
      await loginButton.click();

      // Locating and checking the alert is displaying or not
      let message = await driver.findElement(
        By.xpath("/html/body/div/div/div[3]")
      );
      if (message.isEnabled()) {
        console.log("Message is Visible now!");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("An Error occured:" + error);
    } finally {
      //   Closing the browser
      await driver.quit();
    }
  });
});
