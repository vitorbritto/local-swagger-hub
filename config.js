const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Web API - YOUR API NAME',
      version: '0.1.0',
      description: 'Description goes here.',
    },
    // Under securityDefinitions we declare which security schemes can be used.
    // These definitions do not affect to the operations, but can be applied
    // using the 'security' key at the global level or the operation level.
    // In this sample, we'll see how to apply the security definition globally,
    // and override it at the operation level.
    securityDefinitions: {
      password: {
        type: 'oauth2',
        tokenUrl: 'localhost:3000/auth/login',
        flow: 'password',
        scopes: {
          write: 'allows modifying resources',
          read: 'allows reading resources'
        }
      }
    },
    // Here we apply the security flow called 'password' globally to all the operations in the spec.
    // This security scheme is defined above in the 'securityDefinitions' section.
    // Global security can be overridden an operation level as seen in the example below
    security: {
      password: ['read', 'write']
    },
    // STAGE
    // host: virtserver.swaggerhub.com
    // basePath:

    // DEVELOPMENT
    host: 'localhost:3000',
    basePath: '/api/v1',

    produces: ['application/json'],
    schemes: ['http', 'https'],
  },
  apis: ['./docs/**/*.yaml'],
};

module.exports = swaggerJSDoc(options);
