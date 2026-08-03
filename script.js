

const button = document.querySelector('button');
const overlay = document.getElementById('overlay');

const container = document.getElementById('container')
const closeButton = document.getElementById('close');

closeButton.addEventListener('click', ()=>{
    overlay.style.display = 'none';
    container.style.opacity = 1;
})
button.addEventListener('click',()=>{
    overlay.style.display = 'flex';
    container.style.opacity = 0.5
});


const myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

// let harryPotter = new Book("Harry Potter","JK Rowling",456,"Yes")
// myLibrary.push(harryPotter);

// let got = new Book("Game of Thrones","GRRM","1000","No")
// myLibrary.push(got)

// let mockingbird = new Book("to kill a mocking bird","harper Lee","200","Yes")
// myLibrary.push(mockingbird)
const cards = document.getElementById('bookcards')



function addBooktoLibrary(myLibrary){
    let title = document.forms[0].title.value;
    let author = document.forms[0].author.value;
    let pages = document.forms[0].pages.value;
    let read = document.forms[0].read.value;
    let newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook);
    

}

let removeBookButtons = [];
let toggleButtos = [];
function displayBooks(myLibrary){
    while(cards.firstChild){
        cards.removeChild(cards.firstChild);

    }
    for(let i in myLibrary){
        let bookCard = document.createElement('div')
        bookCard.className = 'bookCard';

         let cross = document.createElement('button')
        cross.className = 'removeBook';
        cross.textContent = 'X'
        bookCard.appendChild(cross);

         let h1 = document.createElement('h1')
         bookCard.appendChild(h1);
         h1.textContent = 'Book';

       
        let ul1 = document.createElement('ul');
        bookCard.appendChild(ul1)
        
        let ul2 = document.createElement('ul');
        bookCard.appendChild(ul2)

        

        let li1 = [];
        li1.length = 4;
        let li2 = [];
        li2.length = 4;
        for(let i = 0; i < 4 ; i++){
            li1[i] = document.createElement('li');
            li2[i] = document.createElement('li');
            ul1.appendChild(li1[i]);
            ul2.appendChild(li2[i]);

        }

        li1[0].textContent = 'Title';
        li2[0].textContent = myLibrary[i].title;


        li1[1].textContent = 'Author';
        li2[1].textContent = myLibrary[i].author;


        li1[2].textContent = 'Pages';
        li2[2].textContent = myLibrary[i].pages;


        li1[3].textContent = 'Read';
        li2[3].textContent = myLibrary[i].read;
        li2[3].className = 'readStatus'

        let toggle = document.createElement('button');
        toggle.textContent = 'Toggle read status';
        toggle.dataset.bookid = myLibrary[i].id;
        toggle.className = 'toggleButton'
        bookCard.appendChild(toggle)

        // 
        cross.dataset.bookid = myLibrary[i].id;
        bookCard.setAttribute('id',myLibrary[i].id);
        cards.appendChild(bookCard)
    }

    removeBookButtons = document.querySelectorAll('.removeBook')
    toggleButtos = document.querySelectorAll('.toggleButton');
   

}


let title = document.getElementById('title');

let submit = document.getElementById('submit');

submit.addEventListener('click',(event) =>{
    event.preventDefault();
    addBooktoLibrary(myLibrary);
    overlay.style.display = 'none';
    container.style.opacity = 1;

    document.forms[0].title.value = '';
    document.forms[0].author.value = '';
    document.forms[0].pages.value = '';
    document.forms[0].read.value = '';
    displayBooks(myLibrary);


for(let i = 0; i < myLibrary.length; i++){
    removeBookButtons[i].addEventListener('click', () =>{
        for(let j = 0; j < myLibrary.length; j++){
            // console.log(removeBookButtons[i].dataset.id)
            if(removeBookButtons[i].dataset.bookid == myLibrary[j].id){
                document.getElementById(removeBookButtons[i].dataset.bookid).remove();//finally fucking working update: not really fuck ts ; upate : works now i think
                
                myLibrary.splice(j,1);
            }
            
        }
        console.log(removeBookButtons)

    })
}

for(let i = 0; i < myLibrary.length; i++){
    toggleButtos[i].addEventListener('click', () =>{
        
        for(let j = 0; j < myLibrary.length; j++){
            // console.log(removeBookButtons[i].dataset.id)
            let bookCard = document.getElementById(myLibrary[j].id)
            let readstatus = bookCard.querySelector('.readStatus')
            if(toggleButtos[i].dataset.bookid == myLibrary[j].id){
                if(myLibrary[j].read == 'Yes'){
                    myLibrary[j].read = 'No';
                    readstatus.textContent = 'No'
                   
                }

                else if(myLibrary[j].read == 'No'){
                    myLibrary[j].read = 'Yes';
                    readstatus.textContent = 'Yes'
                }

                else
                    alert("Invalid Read Status")



            }
            
        }
        
    })
}


})



displayBooks(myLibrary)


// for(let i = 0; i < myLibrary.length; i++){
//     removeBookButtons[i].addEventListener('click', () =>{
//         for(let j = 0; j < myLibrary.length; j++){
//             // console.log(removeBookButtons[i].dataset.id)
//             if(removeBookButtons[i].dataset.bookid == myLibrary[j].id){
//                 document.getElementById(removeBookButtons[i].dataset.bookid).remove();//finally fucking working update: not really fuck ts
                
//                 myLibrary.splice(j,1);
//             }
            
//         }
//         console.log(removeBookButtons)

//     })
// }

// for(let i = 0; i < myLibrary.length; i++){
//     toggleButtos[i].addEventListener('click', () =>{
        
//         for(let j = 0; j < myLibrary.length; j++){
//             // console.log(removeBookButtons[i].dataset.id)
//             let bookCard = document.getElementById(myLibrary[j].id)
//             let readstatus = bookCard.querySelector('.readStatus')
//             if(toggleButtos[i].dataset.bookid == myLibrary[j].id){
//                 if(myLibrary[j].read == 'Yes'){
//                     myLibrary[j].read = 'No';
//                     readstatus.textContent = 'No'
                   
//                 }

//                 else if(myLibrary[j].read == 'No'){
//                     myLibrary[j].read = 'Yes';
//                     readstatus.textContent = 'Yes'
//                 }

//                 else
//                     alert("Invalid Read Status")



//             }
            
//         }
        
//     })
// }


