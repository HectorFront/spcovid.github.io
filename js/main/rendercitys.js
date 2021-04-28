const renderCitys = (covidDataRegionCitys, isListInitial, callback) => {

    const formatNumber = (value) => {
        return value.toLocaleString("pt-BR");
    };

    covidDataRegionCitys.map(info => {
        let card = "";
        let cityName = info.nome;
        let estadoCodUF = info.cod.substr(0, 2);

        if (!isListInitial && estadoCodUF == 35) {
                card += `
                    <div ${localStorage.getItem('dark') == 1 ? 'style="background-color: #202020;"' : 'style="background-color: #FFFFFF"'} class="card__covid" id="city_${info.cod}">
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
                                <h1 ${localStorage.getItem('dark') == 1 ? 'style="color: rgb(240, 240, 240)"' : 'style="color: #000000"'}>São Paulo</h1>
                                <p ${localStorage.getItem('dark') == 1 ? 'style="color: rgb(240, 240, 240)"' : 'style="color: #000000"'}>Estado</p>
                            </div>
                        </div>
                    </div>`;
                
                callback(card, info);
        } else {
            if (cityName === "Garça" && estadoCodUF == 35 ||
                cityName === "Marília" && estadoCodUF == 35 ||
                cityName === "São Carlos" && estadoCodUF == 35 ||
                cityName === "Hortolândia" && estadoCodUF == 35 ||
                cityName === "Bauru" && estadoCodUF == 35 ||
                cityName === "Fernão" && estadoCodUF == 35 ||
                cityName === "Vera Cruz" && estadoCodUF == 35 ||
                cityName === "São Paulo" && estadoCodUF == 35 ||
                cityName === "Pompéia" && estadoCodUF == 35 ||
                cityName === "Duartina" && estadoCodUF == 35 ||
                cityName === "Campinas" && estadoCodUF == 35 ||
                cityName === "Jaú" && estadoCodUF == 35 ||
                cityName === "Piratininga" && estadoCodUF == 35 ||
                cityName === "Pirajuí" && estadoCodUF == 35 ||
                cityName === "Gália" && estadoCodUF == 35 ||
                cityName === "Álvaro de Carvalho" && estadoCodUF == 35) {

                card += `
                <div ${localStorage.getItem('dark') == 1 ? 'style="background-color: #202020;"' : 'style="background-color: #FFFFFF"'} class="card__covid" id="city_${info.cod}">
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
                            <h1 ${localStorage.getItem('dark') == 1 ? 'style="color: rgb(240, 240, 240)"' : 'style="color: #000000"'}>São Paulo</h1>
                            <p ${localStorage.getItem('dark') == 1 ? 'style="color: rgb(240, 240, 240)"' : 'style="color: #000000"'}>Estado</p>
                        </div>
                    </div>
                </div>`;

                callback(card, info);
            }
        }
    });
};
