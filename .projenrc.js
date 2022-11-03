const { typescript, javascript } = require('projen');
const project = new typescript.TypeScriptAppProject({
  defaultReleaseBranch: 'main',
  name: 'jsii3000-test',
  packageManager: javascript.NodePackageManager.NPM,
  deps: [
    '@diranged/jsii3000-coremodule-example',
  ],
  buildWorkflowTriggers: {
    pullRequest: {},
    workflowDispatch: {},
    push: {},
  },
});
project.synth();