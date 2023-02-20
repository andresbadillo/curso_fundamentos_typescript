import { subDays, format } from 'date-fns';

const date = new Date(2012, 11, 12);
const rta = subDays(date, 10);
const str = format(rta, 'yyyy/MM/dd');
console.log(str);

