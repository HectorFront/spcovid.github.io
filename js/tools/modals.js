const modalProfile =
`<div class="modal__contact">
    <div class="close"><i style="color: white; cursor: pointer; padding: 10px;" onclick="noneContact()" class="fas fa-window-close"></i></div>
    <img style="border-radius: 100px; position: absolute; top: 15px; border: 3px solid #232d36;" src="./images/hector.jpg" width="49px" height="49px">    
    <section class="content_qr_code">
        <div class="qr_code_image">
            <a style="text-decoration: none;" href="https://api.whatsapp.com/send?phone=14991876429"><h3>+55&nbsp;14&nbsp;99187-6429</h3></a>
            <h6>H3CTOR S1LV4</h6>
            <img src="./images/qrcode_hector.png" width="auto" height="60%">
        </div>
    </section>
    <p>Escaneie o código QR acima para ter acesso à uma conversa no WhatsApp com o desenvolvedor&nbsp;<strong style="font-weight: bold;">Hector Silva</strong></p>
</div>`;

const modalNews =
`<div class="modal__news">
    <div class="close"><i style="color: white; cursor: pointer; float: right;" onclick="noneNews()" class="fas fa-window-close"></i></div>
    <h1>Novidades ✍️</h1>
    <p>28 de abril de 2021 12:15 - Versão 2.6.6</p>
    <img style="border-radius: 10px;" src="./images/logo-appDark.png" width="100%" height="auto" alt="Coronavírus"/>
    <br/>
    <img style="border-radius: 10px;" src="./images/image_news.png" width="100%" height="auto" alt="Novidades"/>
    <span>Nós passamos trabalhando funcionalidades que já existiam. Às vezes, as pequenas melhorias não recebem a atenção que merecem. Desta vez, nós tiramos um tempo para trabalhar no maior número possível destas pequenas mudanças, sendo elas a visualização dos dados das pequenas e grandes cidades.</span>
    <span class="line__news">🙂 O que foi atualizado?</span>
    <ul style="padding-bottom: 20px;">
        <li>✅ <b style="font-weight: bold;">Mostragem de dados antigos ao passar mouse no gráfico.</b> Corrigimos este bug que era bastante recorrente ao listar todas as cidades e também quando se alterava o modo de visualização para Modo escuro ou claro.</li>
        <li>✅ <b style="font-weight: bold;">Listagem de cidades.</b> Melhoramos nessa questão a flexibilidade e velocidade na visualização da listagem de todas as cidades do estado de SP.</li>
        <li>✅ <b style="font-weight: bold;">Casos confirmados e óbitos nos gráficos.</b> Antes os gráficos não listavam todas cidades do estado de SP, agora fizemos com que a mesma opção de listar todas elas, automaticamente fizesse a ação de atualizar nos gráficos também em tempo real.</li>
        <li>✅ <b style="font-weight: bold;">Ajustes de visualização para qualquer dispositivo.</b> Fizemos alguns ajustes para que você possa acessar essa página da web no seu dispositivo em qualquer lugar a qualquer momento.</li>
    </ul>
</div>`;

const showContact = () => {
    $('.modal').html(modalProfile);
    document.documentElement.style.overflowY = 'hidden';
};

const showNewsVersion = () => {
    if(localStorage.getItem('news') != 1) {
        $('.modal').html(modalNews);
        document.documentElement.style.overflowY = 'hidden';
    }
};

const setViewNews = () => {
    $('.modal').html(modalNews);
    document.documentElement.style.overflowY = 'hidden';
};

const noneContact = () => {
    document.documentElement.style.overflowY = 'scroll';
    $('.modal__contact').fadeOut('slow');
    setTimeout(()=>{
        $('.modal').html('');
    }, 600)
};

const noneNews = () => {
    document.documentElement.style.overflowY = 'scroll';
    $('.modal__news').fadeOut('slow');
    localStorage.setItem('news', 1);
    setTimeout(()=>{
        $('.modal').html('');
    }, 600)
};

showNewsVersion();