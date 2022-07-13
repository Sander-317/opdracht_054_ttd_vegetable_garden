function getYieldForPlant(plant) {
  // console.log(plant, "get yield for plant");
  return plant.yield;
}

function getYieldForCrop(plant) {
  console.log(plant.crop, "get yield for crop");
  return getYieldForPlant(plant.crop) * plant.numCrops;
}

// crops.crops = the array

function getTotalYield(crops) {
  let total = 0;

  //   console.log(crops.crops, "the array of get total yield crops");
  crops.crops.forEach((plant) => {
    // console.log(plant, " get total yield");

    total = getYieldForCrop(plant) + total;
  });
  return total;
}

function getCostForCrop(plant) {
  // console.log(plant, "get cost for crop");
  // console.log(plant.crops.crop.cost);
  //   const cost = 1;
  return plant.crops.numCrops * plant.crops.crop.cost;
}

function getRevenueForCrop(crops) {
  console.log(crops.crops, "get revenue for crop");
  //   console.log(crops.crops.crop.price, "price");
  //   console.log(crops, "test");
  //   const salePrice = 2;

  return getYieldForCrop(crops.crops) * crops.crops.crop.price;
}

function getProfitForCrop(crop) {
  console.log(crop, "getProfitForCrop");
  return getRevenueForCrop(crop) - getCostForCrop(crop);
}

function getTotalProfit(crops) {
  console.log(crops);
  let total = 0;
  crops.crops.forEach((crop) => {
    console.log(crop, "get total profit");
    total = getProfitForCrop(crop) + total;
  });
  return total;
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
