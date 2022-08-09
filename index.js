// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    let newArray = [];
    newArray.push(array[0]);
    newArray.push(array[1]);
    return newArray;
}

const returnLastTwoDrivers = function(array) {
    let newArray = [];
    newArray.push(array.slice(-2));
    return newArray[0];
}

let selectingDrivers = [];
selectingDrivers.push(returnFirstTwoDrivers);
selectingDrivers.push(returnLastTwoDrivers);

function createFareMultiplier(int) {
    return function(fare) { return int * fare };
}


const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier * 2;
}

const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3;
}

function selectDifferentDrivers(drivers, aFunction) {
    return aFunction(drivers);
}