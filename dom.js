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

  let secondItem = document.querySelector('.list-group-item:nth-child(2)');
  secondItem.style.backgroundColor = 'green';

  let thirdItem= document.querySelector('.list-group-item:nth-child(3)');
  thirdItem.style.visibility = "hidden";


// QUERYSELECTORALL //
// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';
   let sItem = document.querySelectorAll('li')[1];
   sItem.style.color= 'green';

 let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');
   for(let i=0; i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
//    even[i].style.backgroundColor = '#ccc' ;
 }

 
 