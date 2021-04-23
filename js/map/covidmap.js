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

                let LatLngStates =
                    info.nome === 'SP' && ufLatLng.SP ||
                    info.nome === 'RJ' && ufLatLng.RJ ||
                    info.nome === 'CE' && ufLatLng.CE ||
                    info.nome === 'AM' && ufLatLng.AM ||
                    info.nome === 'PA' && ufLatLng.PA ||
                    info.nome === 'PE' && ufLatLng.PE ||
                    info.nome === 'MA' && ufLatLng.MA ||
                    info.nome === 'BA' && ufLatLng.BA ||
                    info.nome === 'ES' && ufLatLng.BA ||
                    info.nome === 'PB' && ufLatLng.PB ||
                    info.nome === 'MG' && ufLatLng.MG ||
                    info.nome === 'DF' && ufLatLng.DF ||
                    info.nome === 'RS' && ufLatLng.RS ||
                    info.nome === 'AP' && ufLatLng.AP ||
                    info.nome === 'AL' && ufLatLng.AL ||
                    info.nome === 'SC' && ufLatLng.SC ||
                    info.nome === 'SE' && ufLatLng.SE ||
                    info.nome === 'RN' && ufLatLng.RN ||
                    info.nome === 'AC' && ufLatLng.AC ||
                    info.nome === 'RO' && ufLatLng.RO ||
                    info.nome === 'PI' && ufLatLng.PI ||
                    info.nome === 'PR' && ufLatLng.PR ||
                    info.nome === 'TO' && ufLatLng.TO ||
                    info.nome === 'GO' && ufLatLng.GO ||
                    info.nome === 'RR' && ufLatLng.RR ||
                    info.nome === 'MT' && ufLatLng.MT ||
                    info.nome === 'MS' && ufLatLng.MS;

                let icon = L.icon({
                    iconUrl:
                    info.obitosAcumulado < 100
                    ? 'https://covidregional.github.io/images/markerLeve.png'
                    : info.obitosAcumulado > 900
                    ?  'https://covidregional.github.io/images/marker.png'
                    : 'https://covidregional.github.io/images/markerMed.png',
                    iconSize: [50, 50],
                });

                let marker = L.marker(LatLngStates, { icon: icon }).addTo(map)
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