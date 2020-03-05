    /*
      -> 2º exercício
     Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
     algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:
    
    */
    var btnElement = document.querySelector('button.botao');
    var squaresElement = document.getElementById('squares');

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
       }
       var newColor = getRandomColor(); // #E943F0

    btnElement.onclick = function(){
        var squares = document.createElement('div');
        squares.style.width = '100px';
        squares.style.height = '100px';
        squares.style.backgroundColor = 'red';

        squaresElement.onmouseover = function(){
            squares.style.backgroundColor = getRandomColor();
        }

        squaresElement.appendChild(squares);
    }


