//TODO implement require-directory instead of this
module.exports = (app) => {
    require('./headers.js')(app);
    require('./morgan.js')(app);
}