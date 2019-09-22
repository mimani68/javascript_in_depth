/**
 * 
 * # JOIN AND DESTRUCTURE Object #
 * 
 */
var obj1 = { port: 3000 };
var obj2 = { version: '1.0.0' };

var { port: newPort } = Object.assign(obj1, obj2, { port: null });

console.log(newPort);

console.log('finsih application');