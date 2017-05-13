'use strict';

const Flash = require('@helpers/flash');

const flash = new Flash();

module.exports = (req, res, next) => {
  if (!Array.isArray(req.session.flash)) req.session.flash = [];

  res.locals.flash = req.session.flash = flash.list();

  req.flash = {
    set: flash.set.bind(flash),
    create: flash.create.bind(flash)
  };

  next();
};