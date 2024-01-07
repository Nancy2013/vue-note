

const testRegex=/^(\d{8}|[a-zA-Z0-9]{10}|^\d{18})$/

const value='1234567891234567891';

console.log('value: ',value,' valid: ',testRegex.test(value));