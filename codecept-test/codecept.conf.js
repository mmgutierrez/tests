exports.config = {
  tests: './test/*-spec.js',
  output: '../output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000',
      show: true
    }
  },
  include: {
    I: '../steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept-test'
}