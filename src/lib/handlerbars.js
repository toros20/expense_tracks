import {format} from "timeago.js";

const helpers = {
    ifvalue: function(conditional, options) {
        if (conditional == options.hash.equals) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    }
};

helpers.timeago = (timestamp) => {
    return format(timestamp);
};
 
module.exports = helpers;  
 
