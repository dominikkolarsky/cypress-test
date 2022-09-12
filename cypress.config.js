const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1920,

  e2e: {
    baseUrl: "http://leinweber.codes/#/",
    video: false,
    screenshotOnRunFailure: true,
    experimentalSessionAndOrigin: false,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners her
      on("task", {
        setValue: (val) => {
          return (storedVal = val);
        },
        getValue: () => {
          return storedVal;
        },
      });
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
  },
});
