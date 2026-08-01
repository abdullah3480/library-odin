

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
}

let harryPotter = new Book("Harry Potter","JK Rowling",456,"Yes")
myLibrary.push(harryPotter);

let got = new Book("Game of Thrones","GRRM","1000","No")
myLibrary.push(got)

let mockingbird = new Book("kill a mocking bird","harper Lee","200","Yes")
myLibrary.push(mockingbird)
const cards = document.getElementById('bookcards')
const newdiv = document.createElement('div')

function displayBooks(myLibrary){
    for(let i in myLibrary){
        let bookCard = document.createElement('div')
        bookCard.className = 'bookCard';
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
        

        cards.appendChild(bookCard)
    }


}

displayBooks(myLibrary)
