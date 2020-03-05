/*
    -> 4º Exercício
    Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:
        ```javascript
        <input type="text" name="nome">
        <button onClick="adicionar()">Adicionar</button>
        ```
    Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
    nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
    demais itens anteriores. 

    Além disso, o conteúdo do input deve ser apagado após o clique.
*/
var nomes = ["Diego", "Gabriel", "Lucas"];
var listaElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function addItem(text){
    var liElement = document.createElement('li');
    var textElement = document.createTextNode(text);

    liElement.appendChild(textElement);
    listaElement.appendChild(liElement);
}

function adicionar(){
    addItem(inputElement.value);
    inputElement.value = ""; //limpa campo
}

for(nome of nomes){
    addItem(nome)
}
