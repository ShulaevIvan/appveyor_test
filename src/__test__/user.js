jest.mock('../http')

beforeEach(()=>{
    jest.resetAllMocks();
});

test('should call User once', ()=>{
    httpGet.mockReturnValue(JSON.stringify({}));
    loadUser(1);
    expect(httpGet).toBeCalledWith('http://server:8080/users/1')

});