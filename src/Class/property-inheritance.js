/**
 * 
 * @param {*} name 
 * @returns void
 * @version 0.0.1
 * @author mahdi imani
 */
function App(name) {
    console.log('start app ' + name);
}

App.prototype.showNotification = function() {
    console.log('Hello New User');
}

var app = new App('AntiVirus');
app.showNotification();