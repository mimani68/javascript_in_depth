/**
 * 
 * @returns void
 * @version 0.0.1
 * @author mahdi imani
 */
function App() {
    return this;
}

var versionLogic = {
    version: '1.0.1',
    setVersion: function(params) {
        this.version = params;
        return this;
    },
    getVersion: function() {
        return 'v' + this.version;
    },
    showAll: function() {
        console.log(JSON.stringify(this));
    },
};
var portLogic = {
    port: '3000',
    setPort: function(params) {
        this.port = params;
        return this;
    },
    getPort: function() {
        return this.port;
    }
};

var appFn = App.bind(Object.assign(versionLogic, portLogic));
appFn('Sophose').showAll();
appFn('Sophose').setVersion('1.0.2').showAll();
appFn('Sophose').setPort('3010').showAll();

var { port: newPort } = Object.assign(versionLogic, portLogic);
console.log(newPort);

console.log('finsih application');