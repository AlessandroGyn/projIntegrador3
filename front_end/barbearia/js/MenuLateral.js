(function($) {
    /*pegaNivelAcesso()   pode ser usado para restringir acesso ao menu*/
    aberturaHP()
    var alturaConteudo = window.innerHeight - 184;
    $('.conteudo').css("height", alturaConteudo)
    $('.logo_inicial').css("height", alturaConteudo)
    $('.logo_conteudo').css("height", alturaConteudo)
})(jQuery);

function aberturaHP() {
    $('#sidebar').height($(document).height()) // quando a pagina é carregada, aqui define o tamanho da altura do menu lateral
    $('#sidebar').toggleClass('active').click() //quando a pagina é carregada, este click esconde o menu lateral
    $('#sidebarCollapse').on('click', function() { // clica no hamburger e fecha o menu lateral
        FechaMenuLateral()
    })
    if ($('#sidebar').hasClass('invisivel')) {
        $('#sidebar').removeClass("invisivel")
    }
}

function FechaMenuLateral() { // controla o tamanho da barra superior e da inferior do site e o sidebar
    var largTela = $(document).width()
    var altTela = $(document).height()
    $(".conteudoHP").width(largTela)
    $('#sidebar').toggleClass('active') // esconde/mostra o menu lateral
    $('#sidebar').height(altTela) // tamanho da altura da barra lateral
    if ($('#sidebar').css('margin-left') == '0px') { // mostra sidebar 
        $('.conteudoHP').animate({ marginLeft: "0px" }, 50)
        $('.header').animate({ width: "100%" }, 50)  //quando fecha tem 0px
        $('.footer').animate({ width: "100%" }, 50)
        $('.footer').animate({ heigth: "100px" }, 50)
    } else { // não mostra sidebar - a marginLeft é -270px
        $('.conteudoHP').animate({ marginLeft: "270px" }, 50)
        $('.header').animate({ width: "86%" }, 50) // quando abre
        $('.footer').animate({ width: "86%" }, 50)
        $('.footer').animate({ heigth: "100px" }, 50)
    }
}

window.addEventListener('resize', function () { // Quando o tamanho da tela for alterado
    //var altura = window.innerHeight;
    var largura = window.innerWidth;
    if (largura > 960){
        $('.header').animate({ width: "100%" }, 50)
        $('.footer').animate({ width: "100%" }, 50)
        $('.custom_hamburger').animate({ display: "none" }, 50)
        $('.conteudoHP').animate({ marginLeft: "0px" }, 50)
    } else{
        if ($('#sidebar').css('margin-left') == '0px') {
            $('.conteudoHP').animate({ marginLeft: "270px" }, 50)
        } else{
            $('.conteudoHP').animate({ marginLeft: "0px" }, 50)
        }
    }
        
});

/*
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
*/

/*
function controlaMostraMenuLateral(nivelAcesso) {
    // conforme o nível de acesso, mostra ou não o link no menu lateral/superior
    //fazer post no BD para pegar a permissão de acesso (nivelAcesso):
    // acesso 0 ---> tem acesso a tudo - Administrador do Sistema e Gerente
    // acesso 1 ---> não tem acesso ao menu Administração - valor padrão
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
                default:
                    break;
            }
        } else if (this.getAttribute('value') == "1") { // Serviços
            switch (nivelAcesso) {
                case "0":
                    // nivelAcesso 0 tem acesso ao menu Serviços
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
                default:
                    break;
            }
        }
    })
}
*/


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