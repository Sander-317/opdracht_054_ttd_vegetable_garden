function getYieldForPlant(plant) {
  console.log("get yield for plant : ", plant.yield);
  return plant.yield;
}

function getYieldForCrop(plant) {
  console.log("get yield for crop", plant.crop);
  return getYieldForPlant(plant.crop) * plant.numCrops;
}

// crops.crops = the array

function getTotalYield(crops) {
  let total = 0;
  crops.crops.forEach((crop) => {
    console.log("TOTAL YIELD ", crop);
    total = getYieldForCrop(crop) + total;
  });
  return total;
}
function getCostForCrop(crops) {
  console.log("get cost for crop", crops);
  const cost = 1;
  //   return crops.crops.numCrops * cost;
  return crops.crop.numCrops * cost;
}

function getRevenueForCrop(crops) {
  console.log("REVENUE CROP", crops);
  const salePrice = 2;
  return getYieldForCrop(crops) * salePrice;
}

function getProfitForCrop(crop) {
  console.log("PROFIT FOR CROP: ", crop);
  return getRevenueForCrop(crop) - getCostForCrop(crop);
}

function getTotalProfit(crops) {
  // console.log("get total profit",crops)
  let profit = 0;
  crops.crops.forEach((crop) => {
    console.log("crop in get total profit: ", crop);
    profit = getProfitForCrop(crop) + profit;
  });
  console.log("PROFIT is type of ", typeof profit, "Profit is", profit);
  return profit;
  // return parseInt(profit);
}

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
