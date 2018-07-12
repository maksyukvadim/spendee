import moment from "moment";

export const checkDate = (date) => (date instanceof moment ? date : moment(date));