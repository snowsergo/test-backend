const NotFoundError = require('../errors/not-found-error');

const  lines  = require('../constants/lines.js');
const  calls  = require('../constants/calls.js');
const  bills  = require('../constants/bills.js')

// выдача всех lines
module.exports.getLines = (req, res, next) => {
      if (!lines) {
        throw new NotFoundError("no lines");
      } else {
        res.send({ data: lines });
      }
};

// выдача всех calls
module.exports.getCalls = (req, res, next) => {
      if (!calls) {
        throw new NotFoundError("no calls");
      } else {
        res.send({ data: calls });
      }
};

// выдача всех bills
module.exports.getBills = (req, res, next) => {
      if (!calls) {
        throw new NotFoundError("no bills");
      } else {
        res.send({ data: bills });
      }
};




