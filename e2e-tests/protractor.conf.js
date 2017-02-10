//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  // enable this for proxy
  // webDriverProxy: 'http://localhost:3128',

  // this doesn't seem to work
  // proxy: {
  //   proxyType: 'manual',
  //   httpProxy: 'localhost:3128',
  //   sslProxy: 'localhost:3128'
  // },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
