"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountry = exports.usernameExists = void 0;
const data_1 = require("./data");
function usernameExists(usernameToCheck) {
    return data_1.users.some((user) => {
        if (user.username) {
            return user.username.includes(usernameToCheck);
        }
    });
}
exports.usernameExists = usernameExists;
function getCountry(username) {
    return data_1.users.find((data) => data.username === username);
}
exports.getCountry = getCountry;
