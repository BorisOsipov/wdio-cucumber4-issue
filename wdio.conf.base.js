exports.getConfig = function () {
    return {
        coloredLogs: true,
        specs:['passing.feature'],
        logLevel: 'error',
        services: ['phantomjs'],
        reporters: ['dot'],
        framework: 'mocha',
        sync: false,
        screenshotPath: './screenshots',
        capabilities: [{
            browserName: 'phantomjs'
        }]
    }
}
