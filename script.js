let inputText = document.getElementById('inputText');
let addToDo = document.getElementById('addToDo');
let clearToDo = document.getElementById('clearToDo');

let toDoContainer = document.getElementById('toDoContainer');

addToDo.addEventListener('click',function(){
    //add'e tiklayinca asagiya yaziyor
    let text = document.createElement('li');
    text.classList.add('to-does');
    toDoContainer.appendChild(text);
    text.innerHTML=inputText.value;
    inputText.value = ' '; 

    //listeye bir kez tiklayinca ustu ciziliyor
    text.addEventListener('click',function(){
        text.style.textDecoration="line-through";
    })
    //listeye iki kez tiklayinca siliniyor
    text.addEventListener('dblclick',function(){
        toDoContainer.removeChild(text);
    })
     //clear'e tiklayinca tum yazilar delete
     clearToDo.addEventListener('click',function(){
        toDoContainer.innerHTML = ' ';
        //veya
        text.style.display='none';
        //veya
        text.remove();
     })
})







//.to-does