console.clear();

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const numbers = [1, 2, 3, 4];

let result0 = false;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    result0 = true;
    break;
  }
}
console.log('result0', result0);

const result1 = numbers.some((item) => item % 2 === 0);
console.log('result1', result1);

const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: false,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];

const result2 = orders.some((order) => order.delivered);
console.log('result2', result2);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: 'Cita de trabajo',
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: 'Cita con mi jefe',
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: 'Cena',
  },
];

const newAppointment0 = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

const newAppointment1 = {
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 20, 30),
};

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping({ start: date.startDate, end: date.endDate }, { start: newDate.startDate, end: newDate.endDate });
  });
};

console.log('isOverlap', isOverlap(newAppointment0));
console.log('isOverlap', isOverlap(newAppointment1));
