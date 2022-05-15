(function($) {
    /*pegaNivelAcesso()   pode ser usado para restringir acesso ao menu*/
    aberturaHP()
})(jQuery);

function aberturaHP() {
    $('#sidebar').height($(document).height()) // quando a pagina é carregada, aqui define o tamanho da altura do menu lateral
    $('#sidebar').toggleClass('active').click() //quando a pagina é carregada, este click esconde o menu lateral
    $('#sidebarCollapse').on('click', function() {
        FechaMenuLateral()
    })
    if ($('#sidebar').hasClass('invisivel')) {
        $('#sidebar').removeClass("invisivel")
    }
}

function FechaMenuLateral() {
    var largTela = $(document).width()
    var altTela = $(document).height()
    $(".conteudoHP").width(largTela)
    $('#sidebar').toggleClass('active') // esconde/mostra o menu lateral
    $('#sidebar').height(altTela) // tamanho da altura da barra lateral
    if ($('#sidebar').css('margin-left') == '0px') { // controla o tamanho da barra superior e da inferior do site e o sidebar
        //$('.conteudoHP').animate({ marginLeft: "0px" }, 50)
        $('.header').animate({ width: "100%" }, 50)  //quando fecha tem 0px
        $('.footer').animate({ width: "100%" }, 50)
        $('.footer').animate({ heigth: "100px" }, 400)
    } else {
        //$('.conteudoHP').animate({ marginLeft: "0px" }, 400)
        $('.header').animate({ width: "86%" }, 400) // quando abre
        $('.footer').animate({ width: "86%" }, 400)
        $('.footer').animate({ heigth: "100px" }, 400)
    }
}

window.addEventListener('resize', function () { //função será chamada toda vez em que a resolução da tela for alterada
    //var altura = window.innerHeight;
    var largura = window.innerWidth;
    if (largura > 960){
        $('.header').animate({ width: "100%" }, 50)
        $('.footer').animate({ width: "100%" }, 50)
    }
        
});


function pegaNivelAcesso() {
    $.post('./asp/pegaNivelAcesso.asp', {
        cache: false
    }, function(data, status) {
        if (status == "success") {
            if (data == "nao") {
                var nivelAcesso = "1" // nivel padrão
                controlaMostraMenuLateral(nivelAcesso)
            } else {
                var nivelAcesso = data
                controlaMostraMenuLateral(nivelAcesso)
            }
        } else {
            PNotify.error({
                title: 'Problema com Conexão ao BD!',
                text: 'Solicite análise da TI!'
            })
        }
    })
}

function controlaMostraMenuLateral(nivelAcesso) {
    // conforme o nível de acesso, mostra ou não o link no menu lateral
    //fazer post no BD para pegar a permissão de acesso (nivelAcesso): 
    // acesso 0 ---> tem acesso a tudo
    // acesso 1 ---> não tem acesso aos relatorios - valor padrão se não achar a matricula
    $('.mostraLink').each(function(i, obj) { // 'i' é a posição na matriz, 'obj' é o objeto DOM que você está iterando (também pode ser acessado através do wrapper jQuery --> "$(this)" ).
        if (obj.getAttribute('value') == "0") { // link 0 = "Home"
            switch (nivelAcesso) {
                case "0":
                    // "nivelAcesso 0" tem acesso ao menu "Home"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "1") { // Contratação
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu Contratação
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "2") { // Pesquisa
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu Pesquisa
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "3") { // Analíticos
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu Analíticos
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "4") { // Histórico
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu Histórico
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "5") { // Relatórios
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "Relatórios"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" -> remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 não tem acesso ao menu "Relatórios"
                    if (!$(this).hasClass('invisivel')) { // Se não existe a classe "invisivel" -> adiciona
                        $(this).addClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 não tem acesso ao menu "Relatórios"
                    if (!$(this).hasClass('invisivel')) { // Se não existe a classe "invisivel" -> adiciona
                        $(this).addClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 não tem acesso ao menu "Relatórios"
                    if (!$(this).hasClass('invisivel')) { // Se não existe a classe "invisivel" -> adiciona
                        $(this).addClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "6") { // Parâmetros
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "Parâmetros"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "7") { // Abaixo de Mil
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "abaixo de mil"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "8") { // Modelo de mensagens
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "modelo de mensagens"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "9") { // Modelos (modelo de mensagens)
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "modelo de mensagens"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "10") { //Campos (modelo de mensagens)
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "modelo de mensagens"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "11") { //Valor Venda
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "Valor Venda"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "12") { //Desatualizado
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "Desatualizado"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "13") { //Abaixo do Recuperável
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "Abaixo do Recuperável"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "14") { //Impedimentos
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "Impedimentos"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "15") { //Impedidos
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "Impedidos"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "16") { //Reincidentes
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "Reincidentes"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "17") { //Unidades Impedidas
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "Unidades Impedidas"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "18") { //Funções Impedidas
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "Funções Impedidas"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "19") { //Relatórios
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "Relatórios"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "20") { //Configurações
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "Configurações"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "21") { //Histórico
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu "Histórico"
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "22") { //Links Úteis
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu 
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "23") { // Tutorial
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu 
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "1":
                    // nivelAcesso 1 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "2":
                    // nivelAcesso 2 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                case "3":
                    // nivelAcesso 3 tem acesso
                    if ($(this).hasClass('invisivel')) { // Se existe a classe "invisivel" - remove
                        $(this).removeClass("invisivel")
                    }
                    break;
                default:
                    break;
            }
        }
    })
}

/*
Verificar se existe a classe:
if($('#header').hasClass('myClass')){
    // fazer algo caso tenha a classe
}

Verificar se não existe a classe:
if(!$('#header').hasClass('myClass')){
    // fazer algo caso tenha a classe
}



Adicionar Classe:
$( "p" ).addClass( "myClass" );

Remover classe:
$( "p" ).removeClass( "myClass" );

Remover e Adicionar Classe:
$( "p" ).removeClass( "myClass" ).addClass( "yourClass" );


*/