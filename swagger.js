const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./config')

const app = express()

const swaggerOptions = {
  customSiteTitle: 'API Name - Web API',
  // customCss: '.topbar { display: none }',
};

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerOptions))

const server = app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${server.address().port}`)
})
