
function getYieldForPlant(plant) {
    // console.log("get yield for plant : ", plant)
    return plant.yield
}
    
function getYieldForCrop(plant){
    console.log("get yield for crop",plant)
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
function getCostForCrop(crops){
    // console.log(crops)
    const cost = 1
    return crops.crops.numCrops * cost
}

function getRevenueForCrop(crops){
    // console.log(crops)
    const salePrice = 2
    return  getYieldForCrop(crops.crops) * salePrice
}

function getProfitForCrop(crop){
    return (getRevenueForCrop(crop) - getCostForCrop(crop))
}
 
function getTotalProfit(crops){
    let profit = 0
    crops.crops.forEach((crop) => {
        // console.log("crop in get total profit: ",crop)
        profit = getProfitForCrop(crop) + profit 
    })
    return profit
}



module.exports = {getYieldForPlant, getYieldForCrop, getTotalYield, getCostForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit}