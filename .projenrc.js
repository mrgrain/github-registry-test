const { typescript } = require('projen');
const project = new typescript.TypeScriptAppProject({
  defaultReleaseBranch: 'main',
  name: 'jsii3000-test',
  deps: [
    '@diranged/jsii3000-coremodule-example',
  ],
});
project.synth();