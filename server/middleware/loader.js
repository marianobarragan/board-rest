module.exports = (app) => {

    require('./headers.js')(app);
    require('./morgan.js')(app);
}