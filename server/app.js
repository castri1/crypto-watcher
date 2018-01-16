const app = require('./config/express');
const config = require('./config/config');

const port = process.env.PORT || config.development.port;

app.listen(port, () => {
    console.log(`App listenting on port ${port}`);
});