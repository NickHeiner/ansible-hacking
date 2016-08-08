const koa = require('koa'),
    bunyanFormat = require('bunyan-format'),
    logger = require('bunyan').createLogger({
        name: require('./package').name,
        stream: bunyanFormat()
    }),
    app = koa();

app.use(function *(){
  this.body = `
    <html>
        <head>
            <title>Sample Nodejs App</title>
            <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/foundation/6.2.3/foundation.css" />
        </head>
        <body>
            <h1>Sample NodeJS App</h1>
        </body>
    </html>
  `;
});

const port = 3000;
app.listen(port, () => logger.info({port}, 'Server listening'));
