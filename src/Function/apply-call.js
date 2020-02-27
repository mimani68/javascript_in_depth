
function App(name) {
    console.log('Start application ' + name + ', version:' + this.version);
}

var injectableObject = {
    version: '1.0.0'
}

/**
 *
 * Instantiation Class
 *
 */
new App('Defender');

/**
 *
 * Inject class and call in same time
 *
 */
App.call(injectableObject, 'Antivirus');
App.apply(injectableObject, ['Antivirus']);

console.log('Finsih application');
