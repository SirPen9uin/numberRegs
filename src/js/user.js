import { httpGet } from './http';

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

// eslint-disable-next-line no-unused-vars
export function saveUser(user) {
  throw new Error('Unimplemented');
}

export default class PhoneValidator {
  phoneRegex(value) {
    const result = value.replace(/[+() -]/g, '')
    return '+' + result.replace(/^[7-8](?=9)/g, '7')
  }
}