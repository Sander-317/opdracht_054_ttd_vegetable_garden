
function getYieldForPlant(plant){
   
    return plant.yield
    
}

function getYieldForCrop(plant){

   
    return getYieldForPlant(plant.crop) * plant.numCrops
     
}

// crops.crops = the array


function getTotalYield(crops){
    let total = 0
    crops.crops.forEach((crop)=>{ 
            total = getYieldForCrop(crop) + total
    })
    return total
}


module.exports = {getYieldForPlant, getYieldForCrop, getTotalYield}