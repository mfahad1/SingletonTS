import { config } from './config';

export const performCalculation = () => {
 const date = new Date();
 const formattedDate = date.toLocaleString(config.language, { timeZone: config.timeZone });
 return formattedDate;
};