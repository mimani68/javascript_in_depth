/**
 * 
 * @param {*} name 
 * @returns void
 * @version 0.0.1
 * @author mahdi imani
 */
function App(name) {
    console.log('[x] start app ' + name + ' version:' + this.version);
}

/**
 * 
 * Instantiation Class
 * 
 */
// App('sadra');
// new App('salim');

/**
 * 
 * Inject class and call in same time
 * 
 */
// App.call(new_object, 'antivirus');
// App.apply(new_object, ['antivirus']);

console.log('finsih application');
