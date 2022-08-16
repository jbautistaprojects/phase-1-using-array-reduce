const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function reducer (array) {
return array.reduce(batteries);
}

                 
function batteries (batPartialSum, num) {
    return batPartialSum + num;
    
}
let totalBatteries = reducer(batteryBatches)
totalBatteries;
console.log(reducer(batteryBatches));
