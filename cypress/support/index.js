import './commands'
import "cypress-real-events/support";
require('cypress-xpath');


module.exports = (on, config) => {
    // inside config.browsers array each object has information like
    // {
    //   name: 'chrome',
    //   channel: 'canary',
    //   family: 'chromium',
    //   displayName: 'Canary',
    //   version: '80.0.3966.0',
    //   path:
    //    '/Applications/Canary.app/Contents/MacOS/Canary',
    //   majorVersion: 80
    // }
    return {
      browsers: config.browsers.filter((b) => b.family === 'chrome'),
    }
  }