const searchCity = () => {
    $('#message_view').html('');

    let codUF = null;
    const inputCity = $("#api_search").val();
    const selectState = $('#state_search').val();
    const loadingCitys =
        `<div class="loading">	
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>`;

    const formatNumber = (value) => {
        return value.toLocaleString("pt-BR");
    };

    const removerAcentos = (newStringComAcento) => {
        var string = newStringComAcento;
        var mapaAcentosHex = {
            a: /[\xE0-\xE6]/g,
            e: /[\xE8-\xEB]/g,
            i: /[\xEC-\xEF]/g,
            o: /[\xF2-\xF6]/g,
            u: /[\xF9-\xFC]/g,
            c: /\xE7/g,
            n: /\xF1/g
        };

        for (var letra in mapaAcentosHex) {
            var expressaoRegular = mapaAcentosHex[letra];
            string = string.replace(expressaoRegular, letra);
        }
        return string;
    }

    $("#list_cards").html(loadingCitys);

    $.get(
        "https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalMunicipio"
    ).done((covidata) => {

        covidata.map((info) => {
            if (removerAcentos(info.nome.toLowerCase()) == removerAcentos(inputCity.toLowerCase().trim()) && info.cod.substr(0, 2) == selectState) {
                codUF = info.cod.substr(0, 2);
                let cardCity =
                    `<div ${localStorage.getItem('dark') == 1 ? 'style="background-color: #202020;"' : 'style="background-color: #FFFFFF"'} class="card__covid" id="city_${info.nome}">
                                <div class="card__title">
                                    <h1 ${localStorage.getItem('dark') == 1 ? 'style="color: rgb(240, 240, 240)"' : 'style="color: #000000"'}>${info.nome}&nbsp;<i style="color: #8498ae; font-size: 18px;" class="fas fa-map-marker-alt"></i></h1>
                                </div>
                                <div class="card__content">
                                    <div class="card_column__info">
                                        <h1 ${localStorage.getItem('dark') == 1 ? 'style="color: rgb(240, 240, 240)"' : 'style="color: #000000"'}>${formatNumber(Number(info.casosAcumulado))}</h1>
                                        <p ${localStorage.getItem('dark') == 1 ? 'style="color: rgb(240, 240, 240)"' : 'style="color: #000000"'}>Casos confirmados</p>
                                    </div>
                                    <div class="card_column__info">
                                        <h1 ${localStorage.getItem('dark') == 1 ? 'style="color: rgb(240, 240, 240)"' : 'style="color: #000000"'}>${formatNumber(Number(info.obitosAcumulado))}</h1>
                                        <p ${localStorage.getItem('dark') == 1 ? 'style="color: rgb(240, 240, 240)"' : 'style="color: #000000"'}>Óbitos</p>
                                    </div>
                                    <div class="card_column__info">
                                        <h1 ${localStorage.getItem('dark') == 1 ? 'style="color: rgb(240, 240, 240)"' : 'style="color: #000000"'} id="estadoCard"></h1>
                                        <p ${localStorage.getItem('dark') == 1 ? 'style="color: rgb(240, 240, 240)"' : 'style="color: #000000"'}>Estado</p>
                                    </div>
                                </div>
                            </div>`;

                $("#list_cards").html(cardCity);
            }
        });

        setTimeout(() => {
            if ($('#list_cards').html() === loadingCitys) {
                let nenhumResultadoCount = `<p class="nenhumResultado">Cidade não disponível no momento...</p>`;
                $('#list_cards').html(nenhumResultadoCount);
                setTimeout(() => {
                    $('.nenhumResultado').remove();
                    $(".loading").remove();
                    dataCovid();
                }, 10000)
            }
        }, 60000);

        uf.map(resp => resp.codigo_uf == codUF && $('#estadoCard').html(resp.nome));
        if (!inputCity) {
            $(".loading").remove();
            setTimeout(() => {
                $("#list_cards").html('');
                $.get("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalMunicipio")
                    .done((covidData) => {
                        renderCitys(covidData, false, (card, info) => {
                            $("#list_cards").append(card);
                            $('#message_view').html('<h1 style="color: #8498ae; line-height: 25px; font-family: CardTitle; font-weight: 500; text-align: center; margin: 0 20px 0 20px;">Essas cidades são para a visualização padrão da página</h1>');
                        });
                    }).fail(() => {
                        console.log('error in request');
                    });
            }, 2000);
        }
    });
};