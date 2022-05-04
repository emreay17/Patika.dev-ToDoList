let items = [];

let list = document.querySelector('#myList');


items.forEach(function (item) {
  CreateItem(item);

});

list.addEventListener('click', function (item) {

  if (item.target.tagName == 'LI') {
    item.target.classList.toggle('checked');
    ToogleDeleteButton();
  }

});

function ToogleDeleteButton() {

  let checkList = document.querySelectorAll('.checked');
  if (checkList.length > 0) {

    document.querySelector('#deleteAll').classList.remove('d-none');
  } else {
    document.querySelector('#deleteAll').classList.add('d-none');
  }

};

document.querySelector('#deleteAll').onclick = function () {

  let checked = document.querySelectorAll('.checked');

  checked.forEach(function (item) {

    item.style.display = 'none';

  });
}



document.querySelector('#btnCreate').onclick = function () {

  let item = document.querySelector('#txtItem').value;

  if (item === '') {
    alert('Please add to the list what you plan to do...');

    return;
  
  }
  CreateItem(item);
};



function CreateItem(item) {

  let li = document.createElement('li');
  let t = document.createTextNode(item);
  li.classList.add('list-group-item');
  li.appendChild(t);

  list.appendChild(li);

  let span = document.createElement('span');
  let text = document.createTextNode('X');
  span.classList.add('close');

  span.appendChild(text);
  li.appendChild(span);

  span.onclick = function () {
    let li = this.parentElement;
    li.style.display = 'none';
    li.classList.remove('checked');



  };
  document.querySelector('#txtItem').value = "";
}
