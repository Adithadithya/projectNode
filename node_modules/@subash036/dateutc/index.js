global.moment = require("moment");
module.exports = function(input) {
    var m = moment().utcOffset(0);
    m.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
    m.toISOString()
    m.format();
    return m;
};
//  = startDateUTC