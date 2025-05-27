// lib/gasOptimizer.js
export const getOptimalClaimTime = async () => {
  const gasData = await fetchGasPrices();
  const historical = await fetchHistoricalGas();
  
  return {
    bestTime: calculateTimeSlot(gasData, historical),
    estimatedSavings: calculateSavings(gasData.fast, historical.low)
  };
};