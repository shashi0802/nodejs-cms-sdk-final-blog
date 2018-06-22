module.exports = function (app) {

  app.use('/', require('../middlewares'));
  app.use('/', require('./home'));
  app.use('/faq', require('./faq'));
  app.use('/blog', require('./blog'));
  app.use('/listblog', require('./listblog'));
  app.use('/registration', require('./registration'));
};