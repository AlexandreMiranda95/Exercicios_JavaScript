/*
    -> 3º exercício
    A partir do seguinte vetor:
        ```javascript
            var nomes = ["Diego", "Gabriel", "Lucas"];
        ```
    Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
    - Diego  
    - Gabriel  
    - Lucas  
*/

var nomes = ["Diego", "Gabriel", "Lucas"];
var listaElement = document.querySelector('ul');

for(nome of nomes){
    var liElement = document.createElement('li');
    var textElement = document.createTextNode(nome);
    liElement.appendChild(textElement);
    listaElement.appendChild(liElement);
}