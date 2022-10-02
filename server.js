const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// run this because have active connection to the database when run sequalize.sync so want this before the server is on
// Also makes sure that database is same as what's in models etc basically syncs it up
// It does not change existing tables. So if add new columns - need to manually update it yourself. So if data don't want to lose by dropping it - need to manually update it
sequelize.sync().then(() => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})});
