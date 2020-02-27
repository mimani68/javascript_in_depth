
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

App.apply(Object.assign(versionLogic, portLogic)).setVersion('1.0.2').showAll()

console.log('finsih application');
