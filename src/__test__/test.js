import { calculateTotal } from '../calculate.js';
import calculateCashback from '../cashback.js';
import { httpGet } from "../http";
import loadUser from '../loadUser'


test('basic test', ()=>{
    const result = 4
    expect(result).toBe(4)
});

test('calculateTotal', ()=>{
    const list = [
        {
            id: 456,
            name: 'Война и Мир',
            count: 3,
            price: 400
        },
        {
            id: 77,
            name: 'JS',
            count: 1,
            price: 1300
        }
    ]

    const result = calculateTotal(list)
    expect(result).toBe(2500)

});

test('calculate sum with discount', ()=>{
    const list = [
        {
            id: 456,
            name: 'Война и Мир',
            count: 3,
            price: 401
        },
        {
            id: 77,
            name: 'JS',
            count: 1,
            price: 1300
        }
    ]
    const result = calculateTotal(list, true)
    expect(result).toBeCloseTo(2230.173)


});

test('cashback at sum: 500', ()=>{
    const result = calculateCashback(500);
    expect(result).toBe(0)

});

const datalist = [
    ['gold', 100000, 5000],
    ['silver', 10000, 200],
    ['regular', 1000, 10],
    ['no', 500, 0]
]


test.each(datalist)('tesing cashback function with %s status and %i amount', (status, amount, expected)=>{
    const result = calculateCashback(amount);
    expect(result).toBe(expected)
});


jest.mock('../http')

beforeEach(()=>{
    jest.resetAllMocks();
});

test('should call User once', ()=>{
    httpGet.mockReturnValue(JSON.stringify({}));
    loadUser(1);
    expect(httpGet).toBeCalledWith('http://server:8080/users/1')

});