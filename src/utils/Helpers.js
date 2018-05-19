import moment from 'moment';

export const getPostedTime = timestamp => moment(timestamp).fromNow();

