exports.getConfig = function () {
    return {
        coloredLogs: true,
        specs:['passing.feature'],
        logLevel: 'error',
        services: ['phantomjs'],
        reporters: ['spec'],
        framework: 'mocha',
        sync: false,
        screenshotPath: './screenshots',
        capabilities: [{
            browserName: 'phantomjs'
        }]
    }
}
