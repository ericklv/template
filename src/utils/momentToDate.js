import moment from "moment";

export const momentToDate = timesTamp => {
    return moment(timesTamp.toDate()).format("DD/MM/YYYY");
};