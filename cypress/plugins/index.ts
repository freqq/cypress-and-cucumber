import codeCoverageTask from "@cypress/code-coverage/task";
import browserify from "@cypress/browserify-preprocessor";
import "dotenv";

const cucumber = require("cypress-cucumber-preprocessor").default;
const resolve = require("resolve");

const plugins = (on, config) => {
  const cucumberOptions = {
    ...browserify.defaultOptions,
    typescript: resolve.sync("typescript", { baseDir: config.projectRoot }),
  };

  codeCoverageTask(on, config);
  on("file:preprocessor", cucumber(cucumberOptions));

  return config;
};

export default plugins;
