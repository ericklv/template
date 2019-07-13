import {isEmpty, sortBy} from "lodash";

export default array => {
    let returnArray = [];

    if (!isEmpty(array)) {
        returnArray = sortBy(array, arr => arr.name.toLowerCase());
    }

    return returnArray;
};