module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma")
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "../coverage/jenkins-test-app"),
      reports: ["html", "lcovonly", "text-summary"],
      fixWebpackSourcePaths: true
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome", "ChromeHeadless"],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadless: {
        base: "Chrome",
        flags: [
          "--headless",
          "--disable-gpu",
          "--no-sandbox",
          "--remote-debugging-port=9222"
        ],
        
      },
    }
  });
};





















































// // Karma configuration
// // Generated on Tue Sep 12 2023 23:15:19 GMT+0530 (India Standard Time)

// module.exports = function(config) {
//   config.set({

//     // base path that will be used to resolve all patterns (eg. files, exclude)
//     basePath: '',


//     // frameworks to use
//     // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
//     frameworks: ['jasmine'],


//     // list of files / patterns to load in the browser
//     files: [
//     ],


//     // list of files / patterns to exclude
//     exclude: [
//     ],


//     // preprocess matching files before serving them to the browser
//     // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
//     preprocessors: {
//     },


//     // test results reporter to use
//     // possible values: 'dots', 'progress'
//     // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
//     reporters: ['progress'],


//     // web server port
//     port: 9876,


//     // enable / disable colors in the output (reporters and logs)
//     colors: true,


//     // level of logging
//     // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//     logLevel: config.LOG_INFO,


//     // enable / disable watching file and executing tests whenever any file changes
//     autoWatch: false,


//     // start these browsers
//     // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
//     browsers: ['Chrome'],
    

//     // Continuous Integration mode
//     // if true, Karma captures browsers, runs the tests and exits
//     singleRun: true,

//     // Concurrency level
//     // how many browser instances should be started simultaneously
//     concurrency: Infinity
//   })
// }
