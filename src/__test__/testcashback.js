import calculateCashback from "../cashback"

const datalist = [
    ['gold', 100000, 5000],
    ['silver', 10000, 200],
    ['regular', 1000, 10],
    ['no', 500, 0]
]
const handler = test.each(datalist);

handler('tesing cashback function with %s status and %i amount', (status, amount, expected)=>{
    const result = calculateCashback(amount);
    expected(result).toBe(expected)
});