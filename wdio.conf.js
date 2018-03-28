var baseConfig = require('./wdio.conf.base.js').getConfig()

baseConfig.framework = 'cucumber'
baseConfig.cucumberOpts = {
    timeout: 20000,
    require: ['steps/passing-steps.js', 'steps/hooks.js'],
    compiler: [
        'js:babel-register'
    ]
}

exports.config = baseConfig
