"use strict";var setPagination=void 0,paginate=void 0,colorChart=void 0,Brasil=[],resetCharts=void 0,renderCharts=void 0,subPagination=void 0,resetAllCharts=void 0,dataObito=[],listDataRegion=void 0,dataSintese=[],dataConfirmed=[],indexPagination=0,isStateAllSP=!1,labelsSinteseUf=[],labelsCityObito=[],dataCovidCitysSP=[],labelsCityConfirmed=[],setEventClickListAllCitys=void 0,setEventClickListDefaultCitys=void 0,messageNotChart='\n<div class="message">\n    <h1>Gráficos indisponíveis <i class="fas fa-frown-open"></i></h1>\n    <p>Oops!..sinto muito mas os gráficos de estatistícas sobre as principais cidades regionais estão\n        indisponíveis\n        no momento, nós já estamos buscando resolver! <i class="far fa-smile-wink"></i> Agradeço sua\n        compreensão.\n    </p>\n</div>',loadingCitys='<div class="loading">\t\n    <div class="circle"></div>\n    <div class="circle"></div>\n    <div class="circle"></div>\n</div>';function dataCovid(){function a(t){return t.toLocaleString("pt-BR")}function i(){labelsCityConfirmed=[],labelsCityObito=[],dataConfirmed=[],dataObito=[]}function e(t,a,o,i){$("#list_cards").append(t),labelsCityConfirmed.push(a.nome),labelsCityObito.push(a.nome),dataConfirmed.push(a.casosAcumulado),dataObito.push(a.obitosAcumulado),o||renderCharts(),$("#message_view").html('<p style="color: #8498ae; font-family: CardTitle; font-weight: 500; text-align: center; line-height: 22px;">\n                Mostrando de 1 até '+$(".card__covid").length+" de "+dataCovidCitysSP.length+" cidades do Estado de SP\n            </p>"),i&&$("html,body").scrollTop($(".container__pagination").offset().top-150),i&&$(".card__covid").length==dataCovidCitysSP.length&&(resetAllCharts(),renderCharts(),$(".all__pagination").html('<i class="fa fa-th"></i><b style="font-weight: bold;">&nbsp;Ver todas</b>'))}renderCharts=function(){new Chart(document.getElementById("chart_confirmados"),{type:"bar",data:{datasets:[{label:isStateAllSP?"Estado de SP":"Interior de SP",data:dataConfirmed.length?dataConfirmed:[],borderColor:"#0bbb8f",borderWidth:"3",hoverBorderColor:"#000",backgroundColor:"#1da584",hoverBackgroundColor:"#ffbb00"}],labels:labelsCityConfirmed},options:{responsive:!0,legend:{labels:{fontColor:colorChart}},scales:{yAxes:[{ticks:{fontColor:colorChart,suggestedMin:50,suggestedMax:100}}],xAxes:[{ticks:{beginAtZero:!1,min:50,max:100,fontColor:colorChart}}]},title:{display:!0,text:"Brasil",fontColor:colorChart},tooltips:{mode:"index",intersect:!1},hover:{mode:"index",intersect:!1}}}),new Chart(document.getElementById("chart_mortes"),{type:"bar",data:{datasets:[{label:isStateAllSP?"Estado de SP":"Interior de SP",data:dataObito.length?dataObito:[],borderColor:"#e75050",borderWidth:"3",hoverBorderColor:"#000",backgroundColor:"#d63434",hoverBackgroundColor:"#ff9100"}],labels:labelsCityObito},options:{responsive:!0,legend:{labels:{fontColor:colorChart}},scales:{yAxes:[{ticks:{fontColor:colorChart,suggestedMin:50,suggestedMax:100}}],xAxes:[{ticks:{beginAtZero:!1,min:50,max:100,fontColor:colorChart}}]},title:{display:!0,text:"Brasil",fontColor:colorChart},tooltips:{mode:"index",intersect:!1},hover:{mode:"index",intersect:!1}}}),new Chart(document.getElementById("chart_brasil"),{type:"bar",data:{labels:["Infectados","Óbitos"],datasets:[{data:[dataSintese.length?dataSintese[2].casosAcumulado:[],dataSintese.length?dataSintese[2].obitosAcumulado:[]],label:"BR",backgroundColor:"#9a36bb",borderColor:"#b551d6",fill:!1}]},options:{responsive:!0,legend:{labels:{fontColor:colorChart}},title:{display:!0,text:"Brasil",fontColor:colorChart},scales:{yAxes:[{ticks:{fontColor:colorChart,suggestedMin:50,suggestedMax:100}}],xAxes:[{ticks:{beginAtZero:!1,min:50,max:100,fontColor:colorChart}}]},tooltips:{mode:"index",intersect:!1},hover:{mode:"index",intersect:!1}}}),new Chart(document.getElementById("chart_regionUf"),{type:"bar",data:{labels:["Infectados","Óbitos"],datasets:[{data:[dataSintese[0]?dataSintese[0].casosAcumulado:[],dataSintese[0]?dataSintese[0].obitosAcumulado:[]],label:"Centro-Oeste",backgroundColor:"#cf5c189d",borderColor:"#cf5b18",fill:!1},{data:[dataSintese[1]?dataSintese[0].casosAcumulado:[],dataSintese[1]?dataSintese[0].obitosAcumulado:[]],label:"Sul",backgroundColor:"#8e5ea28e",borderColor:"#8e5ea2",fill:!1},{data:[dataSintese[2]?dataSintese[0].casosAcumulado:[],dataSintese[2]?dataSintese[0].obitosAcumulado:[]],label:"Norte",backgroundColor:"#ecdd0e9f",borderColor:"#ecde0e",fill:!1},{data:[dataSintese[4]?dataSintese[0].casosAcumulado:[],dataSintese[4]?dataSintese[0].obitosAcumulado:[]],label:"Nordeste",backgroundColor:"#3cba9fd0",borderColor:"#3cba9f",fill:!1},{data:[dataSintese[5]?dataSintese[0].casosAcumulado:[],dataSintese[5]?dataSintese[0].obitosAcumulado:[]],label:"Sudeste",backgroundColor:"#630eec91",borderColor:"#630eec",fill:!1}]},options:{responsive:!0,legend:{labels:{fontColor:colorChart}},title:{display:!0,text:"Estados",fontColor:colorChart},scales:{yAxes:[{ticks:{fontColor:colorChart,suggestedMin:50,suggestedMax:100}}],xAxes:[{ticks:{beginAtZero:!1,min:50,max:100,fontColor:colorChart}}]},tooltips:{mode:"index",intersect:!1},hover:{mode:"index",intersect:!1}}})},resetCharts=function(t,a){var o=document.getElementById(t).getContext("2d");null!=window.bar&&window.bar.destroy(),window.bar=new Chart(o,{}),$("#"+a).html(""),$("#"+a).append('<canvas id="'+t+'" style="width: auto;max-width: 100%;max-height: auto;height: 400px;"><canvas>')},resetAllCharts=function(){resetCharts("chart_confirmados","container__graph__confirmados"),resetCharts("chart_mortes","container__graph__mortes"),resetCharts("chart_brasil","container__graph__brasil"),resetCharts("chart_regionUf","container__graph__sintese")},paginate=function(t,a,o){return t.slice(a,o)},setEventClickListDefaultCitys=function(){indexPagination=0,isStateAllSP=!1,$("#list_cards").html(loadingCitys),$(".container__pagination").css("display","none"),$(".container__pagination").html(""),resetAllCharts(),$(".loader__charts").css("display","flex"),setTimeout(function(){$("#list_cards").html(""),i(),listDataRegion(dataCovidCitysSP,!0,!1),$("#container__btn__all__citys").html('<button class="button__all__citys" id="btn_all_citys" onclick="setEventClickListAllCitys()">\n                    <i class="fas fa-flag-usa"></i>&nbsp;Visualizar Estado de São Paulo\n                </button>'),$(".loader__charts").css("display","none")},1e3)},setEventClickListAllCitys=function(){isStateAllSP=!0,$("#list_cards").html(loadingCitys),resetAllCharts(),$(".loader__charts").css("display","flex"),setTimeout(function(){$("#list_cards").html(""),t(),$(".container__pagination").css("display","block"),$(".container__pagination").append('<button title="-12 cidades" class="btn__pagination anterior__pagination" onclick="subPagination()" disabled><i class="fa fa-minus"></i><b style="font-weight: bold;">&nbsp;12<b/></button>\n                 <button title="+12 cidades" class="btn__pagination proximo__pagination" onclick="setPagination(false)"><i class="fa fa-plus"></i><b style="font-weight: bold;">&nbsp;12</b></button>\n                 <button title="Todas as cidades" class="btn__pagination all__pagination" onclick="setPagination(true)"><i class="fa fa-th"></i><b style="font-weight: bold;">&nbsp;Ver todas</b></button>'),$("#container__btn__all__citys").html('<button class="button__all__citys" id="btn_all_citys" onclick="setEventClickListDefaultCitys()">\n                    <i class="fas fa-redo"></i>&nbsp;Resetar lista\n                </button>'),$(".loader__charts").css("display","none")},1e3)},setPagination=function(t){t?(i(),isListAllCitys=!0,$("#list_cards").html("")):isListAllCitys=!1;var a=paginate([].concat(dataCovidCitysSP),t?0:indexPagination,t||indexPagination+12>=dataCovidCitysSP.length?dataCovidCitysSP.length:indexPagination+12);t||indexPagination+12>dataCovidCitysSP.length?indexPagination=dataCovidCitysSP.length:indexPagination+=12,21!=$(".card__covid").length&&$(".anterior__pagination").html('<i class="fa fa-minus"></i><b style="font-weight: bold;">&nbsp;12<b/>'),$(".card__covid").length+12>=dataCovidCitysSP.length?(indexPagination=dataCovidCitysSP.length,$(".all__pagination").prop("disabled",!0),$(".proximo__pagination").prop("disabled",!0)):($(".all__pagination").prop("disabled",!1),$(".proximo__pagination").prop("disabled",!1)),24<=$(".card__covid").length+12?$(".anterior__pagination").prop("disabled",!1):$(".anterior__pagination").prop("disabled",!0),listDataRegion(a,!1,t),t&&($(".all__pagination").prop("disabled",!0),$(".proximo__pagination").prop("disabled",!0),$(".anterior__pagination").prop("disabled",!1),$(".all__pagination").html('<i class="fa fa-redo fa-spin"></i><b style="font-weight: bold;">&nbsp;Ver todas</b>')),$("html,body").animate({scrollTop:$(".container__pagination").offset().top-150-100},"fast")},subPagination=function(){indexPagination-=21==indexPagination?9:12,i();var a=document.querySelectorAll(".card__covid"),o=33==indexPagination?9:12;$(".card__covid").each(function(t){t>=$(".card__covid").length-o&&a[t].parentNode.removeChild(a[t])}),resetAllCharts(),[].concat(dataCovidCitysSP).slice(0,indexPagination).forEach(function(t){labelsCityConfirmed.push(t.nome),labelsCityObito.push(t.nome),dataConfirmed.push(t.casosAcumulado),dataObito.push(t.obitosAcumulado)}),renderCharts(),21==$(".card__covid").length?$(".anterior__pagination").html('<i class="fa fa-minus"></i><b style="font-weight: bold;">&nbsp;9<b/>'):$(".anterior__pagination").html('<i class="fa fa-minus"></i><b style="font-weight: bold;">&nbsp;12<b/>'),$(".card__covid").length>=dataCovidCitysSP.length?($(".all__pagination").prop("disabled",!0),$(".proximo__pagination").prop("disabled",!0)):($(".all__pagination").prop("disabled",!1),$(".proximo__pagination").prop("disabled",!1)),24<=$(".card__covid").length?$(".anterior__pagination").prop("disabled",!1):$(".anterior__pagination").prop("disabled",!0),$("#message_view").html('<p style="color: #8498ae; font-family: CardTitle; font-weight: 500; text-align: center; line-height: 22px;">\n                Mostrando de 1 até '+$(".card__covid").length+" de "+dataCovidCitysSP.length+" cidades do Estado de SP\n            </p>"),$("html,body").animate({scrollTop:$(".container__pagination").offset().top-150-100},"fast")},listDataRegion=function(t,o,i){if(renderCitys(t,o,function(t,a){resetAllCharts(),i?setTimeout(function(){e(t,a,o,!0)},6500):e(t,a,o,!1),$("#message_view").html('<p style="color: #8498ae; font-family: CardTitle; font-weight: 500; text-align: center; line-height: 22px;">\n                    '+(o?"Essas cidades são para a visualização padrão da página.":"Mostrando de 1 até "+$(".card__covid").length+" de "+dataCovidCitysSP.length+" cidades do Estado de SP")+"\n                </p>")}),o)return new Promise(function(a,t){3<=dataConfirmed.length?$.get("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalSinteseSep").done(function(t){t[1].map(function(t){"Brasil"==t.regiao&&Brasil.push(t),t._id&&labelsSinteseUf.push(t._id),t&&dataSintese.push(t)}),$("#latest_update").html(t[0].dataFormat+"/"+(new Date).getFullYear()),a()}):($(".group__charts").remove(),$("#chart_not").addClass("little__data"),$("#chart_not").html(messageNotChart))}).then(function(){$(".loader__charts").css("display","none"),renderCharts()})};var t=function(){$("#list_cards").html(""),i();var t=paginate([].concat(dataCovidCitysSP),indexPagination,indexPagination+12);indexPagination+=12,listDataRegion(t,!1,!1)};$.get("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalMunicipio").done(function(t){t.map(function(t){35==t.cod.substr(0,2)&&dataCovidCitysSP.push(t)}),listDataRegion(t,!0,!1)}).fail(function(){console.log({error:"error request PortalMunicipio"})}),$.get("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi").done(function(t){t=t,$("#acumulados_brasil").html(a(Number(t.confirmados.total))),$("#registros_brasil").html(a(Number(t.confirmados.novos))),$("#acompanhamento_brasil").html(a(Number(t.confirmados.acompanhamento))),$("#recuperados_brasil").html(a(Number(t.confirmados.recuperados))),$("#incidencia_brasil").html(t.confirmados.incidencia+"%"),$("#acumulados_obitos").html(a(Number(t.obitos.total))),$("#registros_obitos").html(a(Number(t.obitos.novos))),$("#letalidade_obitos").html(t.obitos.letalidade+"%"),$("#mortalidade_obitos").html(t.obitos.mortalidade+"%")}).fail(function(){console.log({error:"error request PortalMunicipio"})})}dataCovid();