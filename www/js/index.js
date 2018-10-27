var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var nivel = document.getElementById('nivel');

        window.addEventListener("batterystatus", onBatteryStatus, false);

        function onBatteryStatus(status) {
            if(status.isPlugged) {
                nivel.innerText = "Nível: " + status.level + "% - Carregando: SIM";
            }else {
                nivel.innerText = "Nível: " + status.level + "% - Carregando: NÃO";
            }
        }
    }
};

app.initialize();