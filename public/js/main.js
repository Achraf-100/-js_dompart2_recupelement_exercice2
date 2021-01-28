let divCont = document.getElementById('content')
let h3 = divCont.firstElementChild
console.log(h3);



let titre3 = document.getElementById('titreNiv3')
console.log(titre3);



let titrePre3 = document.getElementById('textGeneral')
console.log(titrePre3);



let petitPara = document.getElementsByClassName('petitParagraphe')[0].nextElementSibling
console.log(petitPara);



let dad = document.getElementsByClassName('important')[0].parentElement
console.log(dad);



let daddy = document.getElementById('listElements').parentElement
let childContent = daddy.firstElementChild
console.log(childContent);



let last = document.getElementsByClassName('important')[3]
let neext = last.nextElementSibling
console.log(neext);



let daddyy = document.getElementById('textGeneral').nextElementSibling.nextElementSibling
console.log(daddyy);



// 9
let mySpan = document.getElementsByTagName("span")[1];
let spanParent = mySpan.parentElement;
let mySpanPrenom = spanParent.nextElementSibling;
console.log(mySpanPrenom);

//10
let nicolas = document.getElementsByTagName("b")[2];
let nicolas2 = nicolas.parentElement;
let nicolas3 = nicolas2.parentElement;
let nicolas4 = nicolas3.previousElementSibling;
let nicolas5 = nicolas4.firstElementChild;
let nicolas6 = nicolas5.firstElementChild;
console.log(nicolas6.innerText);
// méthode 2
console.log(document.getElementsByTagName('div')[1].getElementsByTagName('span')[1].firstElementChild.parentElement.parentElement.parentElement.getElementsByTagName('p')[0].firstElementChild.firstElementChild);


// 11 querySelector
let newMethode = document.querySelector('#textGeneral')

console.log(newMethode);


// 12
let newMethodeAll = document.querySelectorAll('li')
console.log(newMethode);
let listFinal = Array.from(newMethodeAll)
console.log(listFinal);

listFinal.forEach(el => {
    console.log(el);
});