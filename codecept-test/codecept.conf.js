exports.config = {
  tests: './test/*-spec.js',
  output: '../output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000',
      show: true
    },
  //Other helpers
     SelectorHelper: {
      require: './selectorHelper.js',
    }
  },
  include: {
    I: '../steps_file.js', 
    EntitiesPage: './pages/entitites-page.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept-test'
}