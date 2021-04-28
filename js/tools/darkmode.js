const booleanDarkMode = localStorage.getItem('dark');
const modeDark = () => {
    localStorage.setItem('dark', 1);
    localStorage.setItem('renderChart', 1);
    colorChart = '#FFFFFF';
    $("#button_mode").attr("onclick", "modeDefault()");
    $("#button_mode").attr("title", "Modo claro");
    $('#button_mode').html('<i class="fas fa-sun"><i>');
    $('.nav__logo').html('<img src="./images/logo-appDark.png" height="80px" width="370px">');
    $('.nav__header nav').css('background-color', '#202020');
    $('.nav__header .menu li').css('color', 'rgb(240, 240, 240)');
    $('.content__main').css('background-color', '#181818');
    $('#content__body').css('background-color', '#181818');
    $('#state_search').css('background-color', '#1b7861');
    $('.card__sobre').css('background-color', '#1b7861');
    $(".api__search").css('background-color', '#202020');
    $('.api__search').css('color', 'rgb(240, 240, 240)');
    $('.chart__box_chart').css('background-color', '#202020');
    $('.chart__box_chart label').css('color', 'rgb(240, 240, 240)');
    $('.chart__box_chart p').css('color', 'rgb(240, 240, 240)');
    $('.card__covid_brasil').css('background-color', '#202020');
    $('.card__covid_brasil h1, h5').css('color', 'rgb(240, 240, 240)');
    $('.foooter').css('background-color', '#0d0d0d');
    $('.border_footer').css('background-color', '#202020');
    $('.card__covid').css('background-color', '#202020');
    $('.card__covid h1').css('color', 'rgb(240, 240, 240)');
    $('.card__covid p').css('color', 'rgb(240, 240, 240)');
    resetCharts('chart_confirmados', 'container__graph__confirmados');
    resetCharts('chart_mortes', 'container__graph__mortes');
    resetCharts('chart_brasil', 'container__graph__brasil');
    resetCharts('chart_regionUf', 'container__graph__sintese');
    renderCharts();
};

const modeDefault = () => {
    localStorage.setItem('dark', 0);
    localStorage.setItem('renderChart', 1);
    colorChart = '#202020';
    $("#button_mode").attr("onclick", "modeDark()");
    $("#button_mode").attr("title", "Modo escuro");
    $('#button_mode').html('<i class="fas fa-moon"><i>');
    $('.nav__logo').html('<img src="./images/logo-app.png" height="80px" width="370px">');
    $('.nav__header nav').css('background-color', 'rgba(255, 255, 255, 0.945)');
    $('.nav__header .menu li').css('color', '#000000');
    $('#content__body').css('background-color', '#FFFFFF');
    $('.content__main').css('background-color', '#f3faf8');
    $('#state_search').css('background-color', '#1abc9c');
    $('.card__sobre').css('background-color', '#1da584');
    $(".api__search").css('background-color', '#FFFFFF');
    $('.api__search').css('color', '#000000');
    $('.chart__box_chart').css('background-color', '#FFFFFF');
    $('.chart__box_chart label').css('color', '#172b3e');
    $('.chart__box_chart p').css('color', '#8498ae');
    $('.card__covid_brasil').css('background-color', '#FFFFFF');
    $('.card__covid_brasil h1, h5').css('color', '#000000');
    $('.foooter').css('background-color', '#0e2c47');
    $('.border_footer').css('background-color', '#0b243a');
    $('.card__covid').css('background-color', '#FFFFFF');
    $('.card__covid h1').css('color', '#000000');
    $('.card__covid p').css('color', '#000000');
    resetCharts('chart_confirmados', 'container__graph__confirmados');
    resetCharts('chart_mortes', 'container__graph__mortes');
    resetCharts('chart_brasil', 'container__graph__brasil');
    resetCharts('chart_regionUf', 'container__graph__sintese');
    renderCharts();
};

if (booleanDarkMode == 1) {
    $('.splash').css('background-color', '#181818');
    $('#button_mode').html('<i class="fas fa-sun"><i>');
    $("#button_mode").attr("onclick", "modeDefault()");
    modeDark();
};