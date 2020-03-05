    /*
    
    -> 1º Exercício
     Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado vermelho com 100px de altura e largura.
     Sempre que o botão for clicado um novo quadrado deve aparecer na tela.
    
    */
    var btnElement = document.querySelector('button.botao');
    var squaresElement = document.getElementById('squares');

    btnElement.onclick = function(){
        var squares = document.createElement('div');
        squares.style.width = '100px';
        squares.style.height = '100px';
        squares.style.backgroundColor = 'red';

        squaresElement.appendChild(squares);
    }