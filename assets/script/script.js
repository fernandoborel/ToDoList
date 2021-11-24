var enterButtton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    // botão remover a lista
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete");
    }
}

enterButtton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

// apertar o enter e ir
function addListAfterKeypress() {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

// mudar tema
function mudaTema() {
    document.body.classList.toggle("light");
}
