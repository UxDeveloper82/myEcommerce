class Message {
    constructor(name,email,message) {
        this.name = name;
        this.email = email; 
        this.message = message;
    }
}


class UI {





}


// EVENt : display message

document.querySelector('#form-area').addEventListener('submit', (e) => {

     e.preventDefault();
     
     const name = document.querySelector('#name').value;
     const email = document.querySelector('#email').value;
     const message = document.querySelector('#message').value;
     console.log(name);
}) 

