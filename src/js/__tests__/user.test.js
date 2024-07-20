import { loadUser } from '../user';
import { httpGet } from '../http';
import PhoneValidator from '../user';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

const phonesList = [
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+86 000 000 0000', '+860000000000']
  ]

test.each(phonesList)('Phonenumber test %s', (value, result) => {
  const regex = new PhoneValidator()
  const regexResult = regex.phoneRegex(value)
  expect(regexResult).toBe(result)
})