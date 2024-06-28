const btn = document.querySelector("#thisisbutton");
const inpt = document.querySelector('input');
const ul = document.querySelector('ul');

btn.addEventListener('click', doSomething);

function doSomething() {
    let inputVal = inpt.value;
    inpt.value = '';

    let listItem = document.createElement('li'); 
    let spanItem = document.createElement('span');
    let buttonItem = document.createElement('button');

    listItem.appendChild(spanItem);
    listItem.appendChild(buttonItem);

    spanItem.textContent = inputVal;
    buttonItem.textContent = 'DELETE';

    ul.appendChild(listItem);

    buttonItem.addEventListener('click', function (e) {
        listItem.remove();
    })
}