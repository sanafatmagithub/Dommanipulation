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
// var headerTitle =console.log(document.getElementById("header-title"));
// console.log(headerTitle);
// headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye';

 let items =document.getElementsByClassName("list-group-item");
 console.log(items);

 items[2].style.backgroundColor='green';
 for(let i=0; i<items.length;i++){
    items[i].style.fontWeight='bold';
 }
 
