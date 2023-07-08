// console.dir(document)
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
 //console.log(document.all);
 // const a=document.getElementsByTagName("header-title"); // a.textContent="hello";
// console.log(document.forms[0]);
// console.log(document.links);
//console.log(document.images);
// GETELEMENTBYID
// var headerTitle =console.log(document.getElementById("header-title"));
// console.log(headerTitle);
// headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye';
//console.log (headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>;
//header.style.borderBottom='solid 3px #000';

//  GETELEMENTBYCLASSNAME//
//  let items =document.getElementsByClassName("list-group-item");
//  console.log(items);
//  console.log(items[1]);
// items[1].textContent='hello2'
//  items[2].style.backgroundColor='green';
//  for(let i=0; i<items.length;i++){
//     items[i].style.fontWeight='bold';
//  }

//GETELEMENTBYTAGNAME//
// let li =document.getElementsByTagName("li");
//  console.log(li);
//  console.log(li[1]);
//  //li[1].textContent='hello2'
//  li[4].style.backgroundColor='green';
//  for(let i=0; i<li.length;i++){
//     li[i].style.fontWeight='bold';
//  }

//QUERYSELECTOR//
// let header =document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';
// let input = document.querySelector('input');
// input.value='Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// let item = document.querySelector('.list-group-item');
// item.style.color='red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

//   let secondItem = document.querySelector('.list-group-item:nth-child(2)');
//   secondItem.style.backgroundColor = 'green';

//   let thirdItem= document.querySelector('.list-group-item:nth-child(3)');
//   thirdItem.style.visibility = "hidden";


// QUERYSELECTORALL //
// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';
//    let sItem = document.querySelectorAll('li')[1];
//    sItem.style.color= 'green';

//  let odd = document.querySelectorAll('li:nth-child(odd)');
//  let even = document.querySelectorAll('li:nth-child(even)');
//    for(let i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
//    even[i].style.backgroundColor = '#ccc' ;
//  }


let itemList= document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

//FirstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';

//lastChild
// console.log(itemList.lastChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';

//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement
//create a div
let newDiv = document.createElement('div');

//Add class
newDiv.className= 'hello';

//Add id
newDiv.id = 'hello1';

//Add attr
newDiv.setAttribute('title','Hello Div');

//create text node
let newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);


let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv,h1);

// let newheading = document.createElement('h2');
// let newheadingText = document.createTextNode('Hello World');
// newheading.appendChild(newheadingText);
// document.getElementsByClassName('list-group-item').appendChild(newheading);
//let listgroupitem = document.getElementsById('22');
//let ul =document.querySelector('ul li');
//console.log(newheading);
//listgroupitem.insertBefore(newheading,listgroupitem.childNodes[0]);

     const itemsList = document.getElementById('items');
    // Create a new li element
    const newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    newItem.textContent = 'Hello world';

    // Find the first li element in the list
    const firstItem = itemsList.querySelector('li');

    // Insert the new li element before the first li element
    itemsList.insertBefore(newItem, firstItem);






 
 