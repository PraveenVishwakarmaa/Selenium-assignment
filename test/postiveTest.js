const { Builder, Browser, By, until } = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver");

// Describe block
describe("Valid Test case", async function () {
  it("With both valid credientials", async function () {
    // Launching the browser
    const driver = await new Builder().forBrowser("chrome").build();

    // Maximise the window
    await driver.manage().window().maximize();

    try {
      // Open the web page
      await driver.get("https://sakshingp.github.io/assignment/login.html");

      // Navigating the Username and Password field and login button
      const usernameField = await driver.findElement(By.id("username"));
      const passwordField = await driver.findElement(By.id("password"));
      const loginButton = await driver.findElement(By.id("log-in"));

      // Entering the Username and password
      await usernameField.sendKeys("admin");
      await passwordField.sendKeys("admin");

      // Clicking the login button
      await loginButton.click();

      // Wait for specific element on the home page to ensure successful login
      const specificElement = By.id("showExpensesChart");

      await driver.wait(until.elementLocated(specificElement), 10000);

      await driver.findElement(specificElement);

      const isPresent = await driver.findElement(specificElement).isDisplayed();

      assert.strictEqual(
        isPresent,
        true,
        "Element is not present on the page."
      );

      console.log("Element is present on the page.");
      
      // Check if the array is sorted in Ascending order
      const isSortedAsc = (array) => {
        for (let i = 1; i < array.length; i++) {
          if (array[i - 1] > array[i]) {
            return false;
          }
        }
        return true;
      };

      // Check if the array is sorted in Descending order
      const isSortedDes = (array) => {
        for (let i = 1; i < array.length; i++) {
          if (array[i - 1] < array[i]) {
            return false;
          }
        }
        return true;
      };

      // Extracting the value from the elements
      const extractingAmount = async () => {
        // Locating the all elements of amount table
        let elementLocator = By.css(".text-right span");
        let elements = await driver.findElements(elementLocator);

        let values = await Promise.all(
          elements.map(async (element) => await element.getText())
        );

        return await Promise.all(
          values.map(async (value) => parseFloat(value.replace(/[A-Z, ]/g, "")))
        );
      };

      // Locating the AMOUNT header and clicking
      let amountHeader = await driver.findElement(By.id("amount"));
      await amountHeader.click();

      // Extracting the amount
      let amountList = await extractingAmount();

      // Checking the value is sorted in Ascending Order
      if (isSortedAsc(amountList)) {
        console.log("Amount sorted in Ascending order");
        console.log(amountList);
      } else {
        throw new Error();
      }

      //  Clicking again in amount header
      await amountHeader.click();

      // Extracting the amount
      amountList = await extractingAmount();

      // Checking the value is sorted in Descending Order
      if (isSortedDes(amountList)) {
        console.log("Amount sorted in Descending order");
        console.log(amountList);
      } else {
        throw new Error();
      }

      console.log("Success");
    } catch (error) {
      console.log("An Error occured:" + error);
    } finally {
      //   Closing the browser
      await driver.quit();
    }
  });
});
