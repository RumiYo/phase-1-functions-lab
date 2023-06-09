// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    if(pickup > 42){
        const blocks = pickup - 42;
        return blocks;
    }else{
        const blocks = 42 - pickup;
        return blocks;
    } 
}

function distanceFromHqInFeet(pickup){
    const distanceInFeet = distanceFromHqInBlocks(pickup) * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination){
    if(start > destination){
        const distanceTraveled = (start - destination) * 264;
        return distanceTraveled;
    }else{
        const distanceTraveled = (destination - start) * 264;
        return distanceTraveled;
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if( distance < 400){
        const farePrice = 0;
        return farePrice;
    }else if (distance < 2000){
        const farePrice = (distance  - 400) * 0.02;
        return farePrice;
    }else if (distance < 2500){
        const farePrice = 25;
        return farePrice;
    }else {
        const message = "cannot travel that far";
        return message;
    }
}