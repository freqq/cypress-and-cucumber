import codeCoverageTask from "@cypress/code-coverage/task";
import "dotenv";

const plugins = (on, config) => {
  codeCoverageTask(on, config);

  return config;
};

export default plugins;
