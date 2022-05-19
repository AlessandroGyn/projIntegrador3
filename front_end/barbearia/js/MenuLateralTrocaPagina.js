$('.trocaPag').on('click', function(event) {
    event.preventDefault()
    
    /*if ($('#sidebar').css('margin-left') == '0px') { // preciso arrumar... quando a janela é menor que 960px, o click em um menu deve fechar o menu lateral
        $('#sidebar').css('margin-left') = '-270px'
    }*/
    
    $('#sidebar div ul li a').removeClass('active') // remove active do menu lateral
    $('.menuLista li a').removeClass('active') // remove active do menu superior

    if (this.getAttribute('value') == "0") { // Home
        window.location.reload() // recarrega HP
    } else if (this.getAttribute('value') == "1") { // Serviços
        $('#sidebar div ul li a[value="1"]').addClass('active') // ativar tag a com value = 1 - menu lateral
        $('.menuLista li a[value="1"]').addClass('active') // ativar tag a com value = 1 - menu superior
        carregaServicos()
    } else if (this.getAttribute('value') == "2") { // Agendamentos
        $('#sidebar div ul li a[value="2"]').addClass('active') // ativar tag a com value = 2 - menu lateral
        $('.menuLista li a[value="2"]').addClass('active') // ativar tag a com value = 2 - menu superior
        carregaAgendamentos()
    } else if (this.getAttribute('value') == "3") { // Mídia
        $('#sidebar div ul li a[value="3"]').addClass('active') // ativar tag a com value = 3 - menu lateral
        $('.menuLista li a[value="3"]').addClass('active') // ativar tag a com value = 3 - menu superior
        carregaMidia()
    } else if (this.getAttribute('value') == "4") { // QuemSomos
        $('#sidebar div ul li a[value="4"]').addClass('active') // ativar tag a com value = 4 - menu lateral
        $('.menuLista li a[value="4"]').addClass('active') // ativar tag a com value = 4 - menu superior
        carregaQuemSomos()
    } else if (this.getAttribute('value') == "5") { // Contato
        $('#sidebar div ul li a[value="5"]').addClass('active') // ativar tag a com value = 5 - menu lateral
        $('.menuLista li a[value="5"]').addClass('active') // ativar tag a com value = 5 - menu superior
        carregaContato()
    }
})

function carregaServicos() {
    // monta o html que vai pra página na variável "servico"
    var servico = '<div id="comp-j0xy9tgm" class="CorteCabelo"><h2 class="font_2" style="text-align:center; font-size:22px;"><span style="color:#FFCA26;">Corte de Cabelo</span></h2></div>'
    servico += '<div id="comp-j0xy9tgn" class="_1Q9if" data-testid="richTextElement">'
    servico += '<p class="font_7" style="line-height:1.5em; text-align:center; font-size:17px;">'
    servico += '<span style="color:#DEDEDE;">O corte de cabelo realizado com a excelência dos mestres barbeiros. Escolha entre o clássico corte social ou um moderno&nbsp;corte com&nbsp;degradê. Sua imagem valorizada como deve ser!</span>'
    servico += '</p></div>'
    
    servico += '<div id="comp-j0xy9tgf" class="_1Q9if" data-testid="richTextElement"><h2 class="font_2" style="text-align:center; font-size:22px;"><span style="color:#FFCA26;">Barba</span></h2></div>'
    servico += '<div id="comp-j0xy9tgi" class="_1Q9if" data-testid="richTextElement">'
    servico += '<p class="font_7" style="line-height:1.5em; text-align:center; font-size:17px;">'
    servico += '<span style="color:#DEDEDE;">Barba feita como antigamente, com o uso de uma relaxante toalha quente e creme hidratante para amaciar os fios. Um tratamento adequado para homens de verdade!</span>'
    servico += '</p></div>'

    servico += '<div id="comp-j0xy9tfr" class="_1Q9if" data-testid="richTextElement"><h2 class="font_2" style="text-align:center; font-size:22px;"><span style="color:#FFCA26;">Pezinho do Cabelo</span></h2></div>'
    servico += '<div id="comp-j0xy9tfs1" class="_1Q9if" data-testid="richTextElement"><p class="font_7" style="line-height:1.5em; text-align:center; font-size:17px;"><span style="color:#DEDEDE;">Indicado para você que precisa fazer apenas a manutenção básica do contorno&nbsp; do cabelo e&nbsp;colocar a conversa em dia. Seu visual sempre impecável!</span></p></div>'
    
    servico += '<div id="comp-j0xy9tfm" class="_1Q9if" data-testid="richTextElement"><h2 class="font_2" style="text-align:center; font-size:22px;"><span style="color:#FFCA26;">Selagem</span></h2></div>'
    servico += '<div id="comp-j0xy9tfn" class="_1Q9if" data-testid="richTextElement"><p class="font_7" style="line-height:1.5em; text-align:center; font-size:17px;"><span style="color:#DEDEDE;">Tratamento capilar feito com produtos de alta qualidade. Alisa os cabelos e sela os fios, deixando o visual com um aspecto bastante natural.</span></p></div>'
    $('.conteudo').html(servico) // insere na página
}