function garage(array) {
    let garageInfo = {};

   
    for (let info of array) {
        let [garageNum, carInfo] = info.split(' - ');
        if (!garageInfo.hasOwnProperty(garageNum)) {
            garageInfo[garageNum] = [];
        }
        garageInfo[garageNum].push(carInfo);
    }

    
    for (let garageNum in garageInfo) {
        console.log(`Garage № ${garageNum}`);
        for (let carInfo of garageInfo[garageNum]) {
            let attributes = carInfo.split(', ').map(attribute => attribute.replace(':', ' -')).join(', ');
            console.log(`--- ${attributes}`);
        }
    }
}