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

$('#sidebar div ul li a').on('click', function(event) { // se clicar no menu lateral, clica no hamburguer
    event.preventDefault()
    $('#sidebarCollapse').click()
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

function carregaAgendamentos() {
    var Agendamentos = '<div class="ag_body">'
    Agendamentos += '<div class="ag_container">'
    Agendamentos += '<div class="ag_painel">'
    Agendamentos += '<div class="ag_logo">'
    Agendamentos += '<img class="ag_img" src="img/usuario.png" alt="">'
    Agendamentos += '</div>'
    Agendamentos += '<div>'
    Agendamentos += '<h1 class="ag_h1" >Entrar</h1>'
    Agendamentos += '</div>'
    Agendamentos += '<div class="input-lb">'
    Agendamentos += '<input type="text" name="usuario" id="usuario" placeholder="">'
    Agendamentos += '<label for="usuario"> Usuario</label>'
    Agendamentos += '</div>'
    Agendamentos += '<div class="input-lb">'
    Agendamentos += '<input type="password" name="senha" id="senha" placeholder="">'
    Agendamentos += '<label for="senha">Senha</label>'
    Agendamentos += '</div>'
    Agendamentos += '<div class="ag_container">'
    Agendamentos += '<button class="ag_button">Entrar</button>'
    Agendamentos += '</div>'
    Agendamentos += '<div class="ag_container">'
    Agendamentos += '<hr class="ag_hr">'
    Agendamentos += '</div>'
    Agendamentos += '<div class="ag_container">'
    Agendamentos += '<span class="ag_a" >cadastre-se</span>'
    Agendamentos += '</div>'
    Agendamentos += '</div>'
    Agendamentos += '</div>'
    Agendamentos += '</div>'
    $('.conteudo').html(Agendamentos) // insere na página
}

function carregaMidia() {
    // monta o html que vai pra página na variável "midia"
    var midia = '<div id="comp-j0xy9tgm" class="CorteCabelo"><h2 class="font_2" style="text-align:center; font-size:22px;"><span style="color:#FFCA26;">Mídia</span></h2></div>'
    midia += '<div id="comp-j0xy9tgn" class="_1Q9if" data-testid="richTextElement">'
    midia += '<p class="font_7" style="line-height:1.5em; text-align:center; font-size:17px;">'
    midia += '<span style="color:#DEDEDE;">O corte de cabelo realizado com a excelência dos mestres barbeiros. Escolha entre o clássico corte social ou um moderno&nbsp;corte com&nbsp;degradê. Sua imagem valorizada como deve ser!</span>'
    midia += '</p></div>'
    $('.conteudo').html(midia) // insere na página
}

function carregaQuemSomos() {
    // monta o html que vai pra página na variável "quemSomos"
    var quemSomos = '<div id="comp-j0xy9tgm" class="CorteCabelo"><h2 class="font_2" style="text-align:center; font-size:22px;"><span style="color:#FFCA26;">Quem Somos</span></h2></div>'
    quemSomos += '<div id="comp-j0xy9tgn" class="_1Q9if" data-testid="richTextElement">'
    quemSomos += '<p class="font_7" style="line-height:1.5em; text-align:center; font-size:17px;">'
    quemSomos += '<span style="color:#DEDEDE;">O corte de cabelo realizado com a excelência dos mestres barbeiros. Escolha entre o clássico corte social ou um moderno&nbsp;corte com&nbsp;degradê. Sua imagem valorizada como deve ser!</span>'
    quemSomos += '</p></div>'
    $('.conteudo').html(quemSomos) // insere na página
}

function carregaContato() {
    // monta o html que vai pra página na variável "contato"
    var contato = '<div id="comp-j0xy9tgm" class="CorteCabelo"><h2 class="font_2" style="text-align:center; font-size:22px;"><span style="color:#FFCA26;">Contato</span></h2></div>'
    contato += '<div id="comp-j0xy9tgn" class="_1Q9if" data-testid="richTextElement">'
    contato += '<p class="font_7" style="line-height:1.5em; text-align:center; font-size:17px;">'
    contato += '<span style="color:#DEDEDE;">O corte de cabelo realizado com a excelência dos mestres barbeiros. Escolha entre o clássico corte social ou um moderno&nbsp;corte com&nbsp;degradê. Sua imagem valorizada como deve ser!</span>'
    contato += '</p></div>'
    $('.conteudo').html(contato) // insere na página
}

$(document).on('click', '.ag_a', function(event){
    event.preventDefault()
    // monta o html que vai pra página na variável "cadastro" - cria tela Cadastro
    var cadastro = '<div class="cad_body">'
    cadastro += '<div class="cad_container">'
    cadastro += '<div class="cad_painel">'
    cadastro += '<div class="cad_logo">'
    cadastro += '<img src="img/usuario.png">'
    cadastro += '</div>'
    cadastro += '<div>'
    cadastro += '<h1 class="cad_h1">Cadastrar</h1>'
    cadastro += '</div>'
    cadastro += '<div class="cad_input-lb">'
    cadastro += '<input type="text" class="cad_cpf" id="cad_cpf">'
    cadastro += '<label for="cad_cpf">CPF</label>'
    cadastro += '</div>'
    cadastro += '<div class="cad_input-lb">'
    cadastro += '<input type="text" id="cad_nome">'
    cadastro += '<label for="cad_nome">Nome</label>'
    cadastro += '</div>'
    cadastro += '<div class="cad_input-lb">'
    cadastro += '<input type="text" id="cad_sobrenome">'
    cadastro += '<label for="cad_sobrenome">Sobrenome</label>'
    cadastro += '</div>'
    cadastro += '<div class="cad_input-lb">'
    cadastro += '<input type="password" id="cad_senha">'
    cadastro += '<label for="cad_senha">Senha</label>'
    cadastro += '</div>'
    cadastro += '<div class="cad_input-lb">'
    cadastro += '<input type="password" id="cad_confirmsenha">'
    cadastro += '<label for="cad_confirmsenha">Confirme a senha</label>'
    cadastro += '</div>'
    cadastro += '<div class="cad_container">'
    cadastro += '<button class="cad_btnConcluir">Concluir</button>'
    cadastro += '</div>'
    cadastro += '<div class="cad_container">'
    cadastro += '<hr class="cad_hr">'
    cadastro += '</div>'
    cadastro += '<div class="cad_container">'
    cadastro += '<button class="cad_btnLogin">Log in</button>' //CRIAR UMA CLASSE... de click... que direciona para função que carrega a tela login
    cadastro += '</div>'
    cadastro += '</div>'
    cadastro += '</div>'
    cadastro += '</div>'
    $('.conteudo').html(cadastro) // insere na página
})

$(document).on('click', '.cad_btnLogin', function(event){
    event.preventDefault()
    carregaAgendamentos()
})    
