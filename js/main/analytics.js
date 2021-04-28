let setPagination,
    paginate,
    colorChart,
    Brasil = [],
    resetCharts,
    renderCharts,
    subPagination,
    resetAllCharts,
    dataObito = [],
    listDataRegion,
    dataSintese = [],
    dataConfirmed = [],
    indexPagination = 0,
    isStateAllSP = false,
    labelsSinteseUf = [],
    labelsCityObito = [],
    dataCovidCitysSP = [],
    labelsCityConfirmed = [],
    setEventClickListAllCitys,
    setEventClickListDefaultCitys;

const messageNotChart = `
<div class="message">
    <h1>Gráficos indisponíveis <i class="fas fa-frown-open"></i></h1>
    <p>Oops!..sinto muito mas os gráficos de estatistícas sobre as principais cidades regionais estão
        indisponíveis
        no momento, nós já estamos buscando resolver! <i class="far fa-smile-wink"></i> Agradeço sua
        compreensão.
    </p>
</div>`,
loadingCitys =
`<div class="loading">	
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
</div>`;

function dataCovid() {
    function formatNumber(value) {
        return value.toLocaleString("pt-BR");
    };

    renderCharts = function () {
        new Chart(document.getElementById("chart_confirmados"), {
            type: "bar",
            data: {
                datasets: [{
                    label: !isStateAllSP ? "Interior de SP" : "Estado de SP",
                    data: dataConfirmed.length ? dataConfirmed : [],
                    borderColor: "#0bbb8f",
                    borderWidth: "3",
                    hoverBorderColor: "#000",
                    backgroundColor: '#1da584',
                    hoverBackgroundColor: "#ffbb00",
                },],
                labels: labelsCityConfirmed,
            },
            options: {
                responsive: true, 
                legend: {
                    labels: {
                        fontColor: colorChart,
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: colorChart,
                            suggestedMin: 50,
                            suggestedMax: 100,
                        },
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: false,
                            min: 50,
                            max: 100,
                            fontColor: colorChart
                        }
                    }],
                },
                title: {
                    display: true,
                    text: 'Brasil',
                    fontColor: colorChart
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                hover: {
                    mode: 'index',
                    intersect: false
                }
            },
        });

        new Chart(document.getElementById("chart_mortes"), {
            type: "bar",
            data: {
                datasets: [{
                    label: !isStateAllSP ? "Interior de SP" : "Estado de SP",
                    data: dataObito.length ? dataObito : [],
                    borderColor: "#e75050",
                    borderWidth: "3",
                    hoverBorderColor: "#000",
                    backgroundColor: '#d63434',
                    hoverBackgroundColor: "#ff9100",
                }],
                labels: labelsCityObito,
            },
            options: {
                responsive: true, 
                legend: {
                    labels: {
                        fontColor: colorChart
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: colorChart,
                            suggestedMin: 50,
                            suggestedMax: 100,
                        },
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: false,
                            min: 50,
                            max: 100,
                            fontColor: colorChart
                        }
                    }],
                },
                title: {
                    display: true,
                    text: 'Brasil',
                    fontColor: colorChart
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                hover: {
                    mode: 'index',
                    intersect: false
                }
            },
        });
        new Chart(document.getElementById("chart_brasil"), {
            type: 'bar',
            data: {
                labels: ['Infectados', 'Óbitos'],
                datasets: [{
                    data: [
                        dataSintese.length ? dataSintese[2].casosAcumulado : [],
                        dataSintese.length ? dataSintese[2].obitosAcumulado : []
                    ],
                    label: "BR",
                    backgroundColor: "#9a36bb",
                    borderColor: "#b551d6",
                    fill: false
                }]
            },
            options: {
                responsive: true, 
                legend: {
                    labels: {
                        fontColor: colorChart
                    }
                },
                title: {
                    display: true,
                    text: 'Brasil',
                    fontColor: colorChart
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: colorChart,
                            suggestedMin: 50,
                            suggestedMax: 100,
                        },
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: false,
                            min: 50,
                            max: 100,
                            fontColor: colorChart
                        }
                    }],
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                hover: {
                    mode: 'index',
                    intersect: false
                }
            }
        });
        new Chart(document.getElementById("chart_regionUf"), {
            type: 'bar',
            data: {
                labels: ['Infectados', 'Óbitos'],
                datasets: [{
                    data: [
                        dataSintese[0] ? dataSintese[0].casosAcumulado : [],
                        dataSintese[0] ? dataSintese[0].obitosAcumulado : []
                    ],
                    label: "Centro-Oeste",
                    backgroundColor: "#cf5c189d",
                    borderColor: "#cf5b18",
                    fill: false
                }, {
                    data: [
                        dataSintese[1] ? dataSintese[0].casosAcumulado : [],
                        dataSintese[1] ? dataSintese[0].obitosAcumulado : [],
                    ],
                    label: "Sul",
                    backgroundColor: "#8e5ea28e",
                    borderColor: "#8e5ea2",
                    fill: false
                }, {
                    data: [
                        dataSintese[2] ? dataSintese[0].casosAcumulado : [],
                        dataSintese[2] ? dataSintese[0].obitosAcumulado : [],
                    ],
                    label: "Norte",
                    backgroundColor: "#ecdd0e9f",
                    borderColor: "#ecde0e",
                    fill: false
                }, {
                    data: [
                        dataSintese[4] ? dataSintese[0].casosAcumulado : [],
                        dataSintese[4] ? dataSintese[0].obitosAcumulado : [],
                    ],
                    label: "Nordeste",
                    backgroundColor: "#3cba9fd0",
                    borderColor: "#3cba9f",
                    fill: false
                }, {
                    data: [
                        dataSintese[5] ? dataSintese[0].casosAcumulado : [],
                        dataSintese[5] ? dataSintese[0].obitosAcumulado : [],
                    ],
                    label: "Sudeste",
                    backgroundColor: "#630eec91",
                    borderColor: "#630eec",
                    fill: false
                }]
            },
            options: {
                responsive: true, 
                legend: {
                    labels: {
                        fontColor: colorChart
                    }
                },
                title: {
                    display: true,
                    text: 'Estados',
                    fontColor: colorChart,
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: colorChart,
                            suggestedMin: 50,
                            suggestedMax: 100,
                        },
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: false,
                            min: 50,
                            max: 100,
                            fontColor: colorChart
                        }
                    }],
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                hover: {
                    mode: 'index',
                    intersect: false
                }
            }
        });
    }

    function clearListCitys() {
        labelsCityConfirmed = [];
        labelsCityObito = [];
        dataConfirmed = [];
        dataObito = [];
    }

    resetCharts = function(idGraph, idContainer){
        let ctxBar = document.getElementById(idGraph).getContext("2d");
        if(window.bar != undefined) 
        window.bar.destroy(); 
        window.bar = new Chart(ctxBar, {});
        $(`#${idContainer}`).html('');
        $(`#${idContainer}`).append(`<canvas id="${idGraph}" style="width: auto;max-width: 100%;max-height: auto;height: 400px;"><canvas>`);
    };

    resetAllCharts = function() {
        resetCharts('chart_confirmados', 'container__graph__confirmados');
        resetCharts('chart_mortes', 'container__graph__mortes');
        resetCharts('chart_brasil', 'container__graph__brasil');
        resetCharts('chart_regionUf', 'container__graph__sintese');
    }

    function pushInformationsCitys(card, info, isListInitial, isAllCitys) {
        $("#list_cards").append(card);
        labelsCityConfirmed.push(info.nome);
        labelsCityObito.push(info.nome);
        dataConfirmed.push(info.casosAcumulado);
        dataObito.push(info.obitosAcumulado);
        if(!isListInitial) {
            renderCharts();
        }
        $('#message_view').html(
            `<p style="color: #8498ae; font-family: CardTitle; font-weight: 500; text-align: center; line-height: 22px;">
                Mostrando de 1 até ${$('.card__covid').length} de ${dataCovidCitysSP.length} cidades do Estado de SP
            </p>`
        );
        if(isAllCitys) {
            $('html,body').scrollTop( ($(".container__pagination").offset().top) - 150);
        }
        if(isAllCitys && $(".card__covid").length == dataCovidCitysSP.length) {
            resetAllCharts();
            renderCharts();
            $('.all__pagination').html('<i class="fa fa-th"></i><b style="font-weight: bold;">&nbsp;Ver todas</b>');
        }
    }

    paginate = function(array, index, paginationAdd) {
        return array.slice(index, paginationAdd);
    }

    setEventClickListDefaultCitys = function() {
        indexPagination = 0;
        isStateAllSP = false;
        $("#list_cards").html(loadingCitys);
        $('.container__pagination').css('display', 'none');
        $('.container__pagination').html('');
        resetAllCharts();
        $('.loader__charts').css('display', 'flex');
        setTimeout(() => {
            $("#list_cards").html('');
            clearListCitys();
            listDataRegion(dataCovidCitysSP, true, false);
            $('#container__btn__all__citys').html(
                `<button class="button__all__citys" id="btn_all_citys" onclick="setEventClickListAllCitys()">
                    <i class="fas fa-flag-usa"></i>&nbsp;Visualizar Estado de São Paulo
                </button>`
            );
            $('.loader__charts').css('display', 'none');
        }, 1000);
    }

    setEventClickListAllCitys = function() {
        isStateAllSP = true;

        $("#list_cards").html(loadingCitys);
        resetAllCharts();
        
        $('.loader__charts').css('display', 'flex');
        setTimeout(() => {
            $("#list_cards").html('');
            dataAllCitys();
            $('.container__pagination').css('display', 'block');
            $('.container__pagination').append(
                `<button title="-12 cidades" class="btn__pagination anterior__pagination" onclick="subPagination()" disabled><i class="fa fa-minus"></i><b style="font-weight: bold;">&nbsp;12<b/></button>
                 <button title="+12 cidades" class="btn__pagination proximo__pagination" onclick="setPagination(false)"><i class="fa fa-plus"></i><b style="font-weight: bold;">&nbsp;12</b></button>
                 <button title="Todas as cidades" class="btn__pagination all__pagination" onclick="setPagination(true)"><i class="fa fa-th"></i><b style="font-weight: bold;">&nbsp;Ver todas</b></button>`
            );
            $('#container__btn__all__citys').html(
                `<button class="button__all__citys" id="btn_all_citys" onclick="setEventClickListDefaultCitys()">
                    <i class="fas fa-redo"></i>&nbsp;Resetar lista
                </button>`
            );
            $('.loader__charts').css('display', 'none');
        }, 1000);
    }

    setPagination = function(isListAllTable) {
        if(isListAllTable) {
            clearListCitys();
            isListAllCitys = true;
            $("#list_cards").html('');
        } else {
            isListAllCitys = false;
        }

        let newPagination = paginate(
            [...dataCovidCitysSP], 
            isListAllTable ? 0 : indexPagination, 
            isListAllTable ? dataCovidCitysSP.length : indexPagination+12 >= dataCovidCitysSP.length ? dataCovidCitysSP.length : indexPagination+12
        );
        
        if(isListAllTable) {
            indexPagination = dataCovidCitysSP.length;
        } else if(indexPagination+12 > dataCovidCitysSP.length) {
            indexPagination = dataCovidCitysSP.length;
        } else {
            indexPagination+=12;
        }

        if($(".card__covid").length != 21) {
            $('.anterior__pagination').html('<i class="fa fa-minus"></i><b style="font-weight: bold;">&nbsp;12<b/>')
        }

        if($(".card__covid").length+12 >= dataCovidCitysSP.length){
            indexPagination = dataCovidCitysSP.length;
            $(".all__pagination").prop("disabled", true);
            $(".proximo__pagination").prop("disabled", true);
        } else {
            $(".all__pagination").prop("disabled", false);
            $(".proximo__pagination").prop("disabled", false);
        }

        if($(".card__covid").length+12 >= 24) {
            $(".anterior__pagination").prop("disabled", false);
        } else {
            $(".anterior__pagination").prop("disabled", true);
        }

        listDataRegion(newPagination, false, isListAllTable);
        if(isListAllTable) {
            $(".all__pagination").prop("disabled", true);
            $(".proximo__pagination").prop("disabled", true);
            $(".anterior__pagination").prop("disabled", false);
            $(".all__pagination").html('<i class="fa fa-redo fa-spin"></i><b style="font-weight: bold;">&nbsp;Ver todas</b>')
        }
        $('html,body').animate({
            scrollTop: ($(".container__pagination").offset().top) - 150 
        -100}, 'fast');
    }

    subPagination = function() {
        if(indexPagination == 21) {
            indexPagination-= 9;
        } else {
            indexPagination-= 12;
        }
        clearListCitys();

        let cardsCovid = document.querySelectorAll('.card__covid'), indexMain = indexPagination == 33 ? 9 : 12;
        
        $(".card__covid").each(index => {
            if(index >= $(".card__covid").length - indexMain) {
                cardsCovid[index].parentNode.removeChild(cardsCovid[index]);
            }
        });
        
        resetAllCharts();
        let newArraySubPagination = [...dataCovidCitysSP].slice(0, (indexPagination));
        newArraySubPagination.forEach(info => {
            labelsCityConfirmed.push(info.nome);
            labelsCityObito.push(info.nome);
            dataConfirmed.push(info.casosAcumulado);
            dataObito.push(info.obitosAcumulado); 
        });
        renderCharts();

        if($(".card__covid").length == 21) {
            $('.anterior__pagination').html('<i class="fa fa-minus"></i><b style="font-weight: bold;">&nbsp;9<b/>')
        } else {
            $('.anterior__pagination').html('<i class="fa fa-minus"></i><b style="font-weight: bold;">&nbsp;12<b/>')
        }

        if($(".card__covid").length >= dataCovidCitysSP.length) {
            $(".all__pagination").prop("disabled", true);
            $(".proximo__pagination").prop("disabled", true);
        } else {
            $(".all__pagination").prop("disabled", false);
            $(".proximo__pagination").prop("disabled", false);
        }

        if($(".card__covid").length >= 24) {
            $(".anterior__pagination").prop("disabled", false);
        } else {
            $(".anterior__pagination").prop("disabled", true);
        }

        $('#message_view').html(
            `<p style="color: #8498ae; font-family: CardTitle; font-weight: 500; text-align: center; line-height: 22px;">
                Mostrando de 1 até ${$('.card__covid').length} de ${dataCovidCitysSP.length} cidades do Estado de SP
            </p>`
        );

        $('html,body').animate({
            scrollTop: ($(".container__pagination").offset().top) - 150 
        -100}, 'fast');
    };

    listDataRegion = function(covidData, isListInitial, isListAllTable) {
        renderCitys(covidData, isListInitial, (card, info) => {
            resetAllCharts();
            if(isListAllTable) {
                setTimeout(() => {
                    pushInformationsCitys(card, info, isListInitial, true);
                }, 6500);
            } else {
                pushInformationsCitys(card, info, isListInitial, false);
            }
            $('#message_view').html(
                `<p style="color: #8498ae; font-family: CardTitle; font-weight: 500; text-align: center; line-height: 22px;">
                    ${isListInitial 
                        ? 'Essas cidades são para a visualização padrão da página.' 
                        : `Mostrando de 1 até ${$('.card__covid').length} de ${dataCovidCitysSP.length} cidades do Estado de SP`
                    }
                </p>`
            );
        });

        if(isListInitial) {
            return new Promise((resolve, reject) => {
                if (dataConfirmed.length >= 3) {
                    $.get('https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalSinteseSep')
                        .done(sintese => {
                            sintese[1].map(ufSintese => {
                                ufSintese.regiao == 'Brasil' && Brasil.push(ufSintese);
                                ufSintese._id && labelsSinteseUf.push(ufSintese._id);
                                ufSintese && dataSintese.push(ufSintese);
                            });
                            $('#latest_update').html(`${sintese[0].dataFormat}/${new Date().getFullYear()}`);
                            resolve();
                        });
                } else {
                    $(".group__charts").remove();
                    $("#chart_not").addClass("little__data");
                    $("#chart_not").html(messageNotChart);
                }
            }).then(() => {
                $('.loader__charts').css('display', 'none');
                renderCharts();
            });
        }
    };

    const dataAllCitys = () => {
        $("#list_cards").html('');
        clearListCitys();
        let initialPagination = paginate([...dataCovidCitysSP], indexPagination, indexPagination+12);
        indexPagination+=12;
        listDataRegion(initialPagination, false, false);
    }

    function listDataTotal(res) {

        //Confirmados/BRASIL
        $("#acumulados_brasil").html(formatNumber(Number(res.confirmados.total)));
        $("#registros_brasil").html(formatNumber(Number(res.confirmados.novos)));
        $("#acompanhamento_brasil").html(
            formatNumber(Number(res.confirmados.acompanhamento))
        );
        $("#recuperados_brasil").html(
            formatNumber(Number(res.confirmados.recuperados))
        );
        $("#incidencia_brasil").html(`${res.confirmados.incidencia}%`);

        //Óbitos/BRASIL
        $("#acumulados_obitos").html(formatNumber(Number(res.obitos.total)));
        $("#registros_obitos").html(formatNumber(Number(res.obitos.novos)));
        $("#letalidade_obitos").html(`${res.obitos.letalidade}%`);
        $("#mortalidade_obitos").html(`${res.obitos.mortalidade}%`);
    };

    $.get("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalMunicipio")
        .done((Region) => {
            Region.map(info => {
                const estadoCodUF = info.cod.substr(0, 2); 
                if(estadoCodUF == 35) {
                    dataCovidCitysSP.push(info);
                }
            });
            listDataRegion(Region, true, false);
        })
        .fail(() => {
            console.log({ error: 'error request PortalMunicipio' });
        });

    $.get("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi")
        .done((Total) => {
            listDataTotal(Total);
        })
        .fail(() => {
            console.log({ error: 'error request PortalMunicipio' });
        });
};

dataCovid();