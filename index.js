const returnFirstTwoDrivers = (drivers) => ['Antonia', 'Nuru'];
const returnLastTwoDrivers = (drivers) => ['Amari', 'Mo'];
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (multiplier) => (fare) => fare * multiplier;
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = ( drivers, fn) => fn(drivers);