"use strict";var setViewMap=function(){function e(o){return o.toLocaleString("pt-BR")}$.get("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalEstado").done(function(o){map=L.map("map",{minZoom:4,maxZoom:11,scrollWheelZoom:!1}).setView([-12.897489,-51.472334],4),map.zoomControl.setPosition("topright"),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"COVID-19 no mapa do Brasil"}).addTo(map),L.control.scale().addTo(map),o.map(function(o){var n="SP"===o.nome&&ufLatLng.SP||"RJ"===o.nome&&ufLatLng.RJ||"CE"===o.nome&&ufLatLng.CE||"AM"===o.nome&&ufLatLng.AM||"PA"===o.nome&&ufLatLng.PA||"PE"===o.nome&&ufLatLng.PE||"MA"===o.nome&&ufLatLng.MA||"BA"===o.nome&&ufLatLng.BA||"ES"===o.nome&&ufLatLng.BA||"PB"===o.nome&&ufLatLng.PB||"MG"===o.nome&&ufLatLng.MG||"DF"===o.nome&&ufLatLng.DF||"RS"===o.nome&&ufLatLng.RS||"AP"===o.nome&&ufLatLng.AP||"AL"===o.nome&&ufLatLng.AL||"SC"===o.nome&&ufLatLng.SC||"SE"===o.nome&&ufLatLng.SE||"RN"===o.nome&&ufLatLng.RN||"AC"===o.nome&&ufLatLng.AC||"RO"===o.nome&&ufLatLng.RO||"PI"===o.nome&&ufLatLng.PI||"PR"===o.nome&&ufLatLng.PR||"TO"===o.nome&&ufLatLng.TO||"GO"===o.nome&&ufLatLng.GO||"RR"===o.nome&&ufLatLng.RR||"MT"===o.nome&&ufLatLng.MT||"MS"===o.nome&&ufLatLng.MS,t=L.icon({iconUrl:o.obitosAcumulado<100?"https://covidregional.github.io/images/markerLeve.png":900<o.obitosAcumulado?"https://covidregional.github.io/images/marker.png":"https://covidregional.github.io/images/markerMed.png",iconSize:[50,50]});L.marker(n,{icon:t}).addTo(map).bindPopup("<b style='font-weight: 900;'>Estado / "+o.nome+"</b>\n                        <p><b>Situação</b> "+(o.obitosAcumulado<100?"<span style='color: #009b74; font-weight: bold;'>LEVE</span>":100<o.obitosAcumulado&&"<span style='"+(900<o.obitosAcumulado?"color: #ff6262;":"color: #F5A700;")+" font-weight: bold;'>"+(900<o.obitosAcumulado?"CRÍTICA":"GRAVE")+"</span>")+"\n                        </p>\n                        <p>Confirmados: <b style='font-weight: 900;'>"+e(Number(o.casosAcumulado))+"</b></p>\n                        <p>Mortos: <b style='font-weight: 900;'>"+e(Number(o.obitosAcumulado))+"</b></p>\n                        <p>Incidência: <b style='font-weight: 900;'>"+o.incidencia+"%</b></p>\n                        <p>Incidência de óbitos: <b style='font-weight: 900;'>"+o.incidenciaObito+"%</b></p>\n                    ").on("mouseover",function(o){o.target.openPopup()})})})};setViewMap();