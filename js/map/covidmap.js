const setViewMap = () => {

    const formatNumber = (value) => {
        return value.toLocaleString("pt-BR");
    };
    $.get('https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalEstado')
        .done(dataUf => {

            map = L.map('map', { minZoom: 4, maxZoom: 11, scrollWheelZoom: false }).setView([-12.897489, -51.472334], 4);
            map.zoomControl.setPosition('topright');

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'COVID-19 no mapa do Brasil',
            }).addTo(map);

            L.control.scale().addTo(map);

            dataUf.map(info => {
                
                let latLngStates;
                for(state in ufLatLng) {
                    if(info.nome === state) {
                        latLngStates = ufLatLng[state];
                    }
                }

                let icon = L.icon({
                    iconUrl:
                    info.obitosAcumulado < 100
                    ? 'https://spcovid.github.io/images/markerLeve.png'
                    : info.obitosAcumulado > 900
                    ?  'https://spcovid.github.io/images/marker.png'
                    : 'https://spcovid.github.io/images/markerMed.png',
                    iconSize: [50, 50],
                });

                let marker = L.marker(latLngStates, { icon: icon }).addTo(map)
                    .bindPopup(
                    `<b style='font-weight: 900;'>Estado / ${info.nome}</b>
                        <p><b>Situação</b> ${info.obitosAcumulado < 100 &&
                            "<span style='color: #009b74; font-weight: bold;'>LEVE</span>" || info.obitosAcumulado > 100 &&
                            `<span style='${info.obitosAcumulado > 900 ? 'color: #ff6262;' : 'color: #F5A700;'} font-weight: bold;'>${info.obitosAcumulado > 900 ? 'CRÍTICA' : 'GRAVE'}</span>`}
                        </p>
                        <p>Confirmados: <b style='font-weight: 900;'>${formatNumber(Number(info.casosAcumulado))}</b></p>
                        <p>Mortos: <b style='font-weight: 900;'>${formatNumber(Number(info.obitosAcumulado))}</b></p>
                        <p>Incidência: <b style='font-weight: 900;'>${info.incidencia}%</b></p>
                        <p>Incidência de óbitos: <b style='font-weight: 900;'>${info.incidenciaObito}%</b></p>
                    `);
                marker.on('mouseover', function (ev) {
                    ev.target.openPopup();
                });
            });
        });
};

setViewMap();