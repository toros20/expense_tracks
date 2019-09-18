import {format} from "timeago.js";
import bcrypt from "bcryptjs";

const helpers = {

    //create helper {{ifvalue}} for 
    ifvalue: function(conditional, options) {
        if (conditional == options.hash.equals) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    }

};
//create helper timego
helpers.timeago = (timestamp) => {
    return format(timestamp);
};

//create helper encryptPassword
helpers.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    return hash;
};

helpers.matchPassword = async (password,savePassword) => {
    try {
        return await bcrypt.compare(password,savePassword);
    } catch (error) {
        console.log(error);
    }
    
};

 
module.exports = helpers;  
 
