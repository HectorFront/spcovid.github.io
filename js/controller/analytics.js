let colorChart;
let Brasil = [];
let isStateAllSP = false;
let labelsSinteseUf = [];
let labelsCityConfirmed = [];
let labelsCityObito = [];
let dataConfirmed = [];
let dataObito = [];
let dataSintese = [];
let messageNotChart = `
<div class="message">
    <h1>Gráficos indisponíveis <i class="fas fa-frown-open"></i></h1>
    <p>Oops!..sinto muito mas os gráficos de estatistícas sobre as principais cidades regionais estão
        indisponíveis
        no momento, nós já estamos buscando resolver! <i class="far fa-smile-wink"></i> Agradeço sua
        compreensão.
    </p>
</div>`;

function dataCovid() {
    function formatNumber(value) {
        return value.toLocaleString("pt-BR");
    };

    function renderCharts() {
        new Chart(document.getElementById("chart_confirmados"), {
            type: "line",
            data: {
                datasets: [{
                    label: !isStateAllSP ? "Interior de SP" : "Estado de SP",
                    data: dataConfirmed,
                    borderColor: "#0bbb8f",
                    borderWidth: "3",
                    hoverBorderColor: "#000",
                    backgroundColor: '#1da584',
                    hoverBackgroundColor: "#ffbb00",
                }, ],
                labels: labelsCityConfirmed,
            },
            options: {
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
            type: "line",
            data: {
                datasets: [{
                    label: !isStateAllSP ? "Interior de SP" : "Estado de SP",
                    data: dataObito ?? [],
                    borderColor: "#e75050",
                    borderWidth: "3",
                    hoverBorderColor: "#000",
                    backgroundColor: '#d63434',
                    hoverBackgroundColor: "#ff9100",
                }],
                labels: labelsCityObito,
            },
            options: {
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
                        dataSintese.length ? dataSintese[2]?.casosAcumulado : [],
                        dataSintese.length ? dataSintese[2]?.obitosAcumulado : []
                    ],
                    label: "BR",
                    backgroundColor: "#fc9a29cb",
                    borderColor: "#fc7d29",
                    fill: false
                }]
            },
            options: {
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
                        dataSintese[0]?.casosAcumulado,
                        dataSintese[0]?.obitosAcumulado
                    ],
                    label: "Centro-Oeste",
                    backgroundColor: "#cf5c189d",
                    borderColor: "#cf5b18",
                    fill: false
                }, {
                    data: [
                        dataSintese[1]?.casosAcumulado,
                        dataSintese[1]?.obitosAcumulado,
                    ],
                    label: "Sul",
                    backgroundColor: "#8e5ea28e",
                    borderColor: "#8e5ea2",
                    fill: false
                }, {
                    data: [
                        dataSintese[2]?.casosAcumulado,
                        dataSintese[2]?.obitosAcumulado,
                    ],
                    label: "Norte",
                    backgroundColor: "#ecdd0e9f",
                    borderColor: "#ecde0e",
                    fill: false
                }, {
                    data: [
                        dataSintese[4]?.casosAcumulado,
                        dataSintese[4]?.obitosAcumulado,
                    ],
                    label: "Nordeste",
                    backgroundColor: "#3cba9fd0",
                    borderColor: "#3cba9f",
                    fill: false
                }, {
                    data: [
                        dataSintese[5]?.casosAcumulado,
                        dataSintese[5]?.obitosAcumulado,
                    ],
                    label: "Sudeste",
                    backgroundColor: "#630eec91",
                    borderColor: "#630eec",
                    fill: false
                }]
            },
            options: {
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

    function listDataRegion(covidData, isListAllCitys) {
        renderCitys(covidData, isListAllCitys, (card, info) => {
            $("#list_cards").append(card);
            labelsCityConfirmed.push(info.nome);
            labelsCityObito.push(info.nome);
            dataConfirmed.push(info.casosAcumulado);
            dataObito.push(info.obitosAcumulado);
            $('#message_view').html(`<h1 style="color: #8498ae; line-height: 25px; font-family: CardTitle; font-weight: 500; text-align: center; margin: 0 20px 0 20px;">${!isListAllCitys ? 'Essas cidades são para a visualização padrão da página.' : 'Todas cidades do estado de SP foram listadas.'}</h1>`);
            if(isListAllCitys) {
                $('.loader__charts').css('display', 'block');
                setTimeout(() => {
                    document.querySelector('#btn_all_citys').addEventListener('click', () => {
                        $("#btn_all_citys").html(`<i class="fas fa-eye-slash"></i>&nbsp;Visualizar cidades anteriores&nbsp;<i class="fas fa-redo fa-spin"></i>&nbsp;`);
                        setTimeout(()=>{
                            window.location.reload();
                        }, 2000)
                    });
                    $('#btn_all_citys').removeAttr('disabled');
                    $('.loader__charts').css('display', 'none');
                }, 10000);
            }
        });

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
    };

    const dataAllCitys = () => {
        $("#btn_all_citys").prop("onclick", null).off("click");
        $('#btn_all_citys').attr('disabled', 'disabled');
        $("#btn_all_citys").html(`<i class="fas fa-eye-slash"></i>&nbsp;Recarregar para as cidades anteriores&nbsp;<i class="fas fa-retweet"></i>&nbsp;`);
        $("#list_cards").html('');
        $('#message_view').html(`<h1 style="color: #8498ae; line-height: 25px; font-family: CardTitle; font-weight: 500; text-align: center; margin: 0 20px 0 20px;">Isso pode demorar o tempo de tomar um cafézinho, aguarde... <i style="color: gray;" class="fas fa-redo fa-spin"></i></h1>`);
    
        $.get("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalMunicipio")
        .done((Region) => {
            Brasil = [];
            labelsSinteseUf = [];
            labelsCityConfirmed = [];
            labelsCityObito = [];
            dataConfirmed = [];
            dataObito = [];
            dataSintese = [];
            listDataRegion(Region, true);
        })
        .fail(() => {
            console.log({ error: 'error request PortalMunicipio' });
        });
    }    

    function listDataTotal(res){

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
            listDataRegion(Region, false);
            $('#btn_all_citys').on('click', () => dataAllCitys())
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
    setInterval(() => {
        const chartRender = localStorage.getItem('renderChart');
        if (chartRender == 1) {
            renderCharts();
            localStorage.setItem('renderChart', 0);
        }
    }, 1000);
};

dataCovid();