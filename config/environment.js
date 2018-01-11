'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ember-changeset-test',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.API_HOST = '';
  }

  if (environment === 'local') {
    ENV.DISABLE_MOCK = true;
    ENV.API_HOST = 'http://localhost:9999';
    ENV.USE_PROXY = true;

    ENV.contentSecurityPolicy = {
      'connect-src': ["'self'", 'http://localhost:4200']
    };
  }

  return ENV;
};
