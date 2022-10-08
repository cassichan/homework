// Write a function to convert USD to yen.
// 1 United States Dollar equals = 145.16 Japanese Yen

const convertUSDToYen = (USD) => {
  let yen = USD * 145.16;
  return `${USD} converts to ${yen} yen`;
};

console.log(convertUSDToYen(20));
