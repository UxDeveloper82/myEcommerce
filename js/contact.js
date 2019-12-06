class Message {
    constructor(name,email,message) {
        this.name = name;
        this.email = email; 
        this.message = message;
    }
}


class UI {
   static displayMessages() {

       const StoredMessages = [
           {
               name: 'Martin Fernandez',
               email: 'Admin@gmail.com',
               message: 'Need a quote for Application'
           },
           {
            name: 'Jerry Springer',
            email: 'Jerry@gmail.com',
            message: 'Need a quote for Application'
           }, 
           {
            name: 'Robert Falkon',
            email: 'Falkon@gmail.com',
            message: 'Need a quote for Application'
        }
       ];

       const myMessages = StoredMessages;
         
       myMessages.forEach((mymessage) => UI.addMessageToList(mymessage));
   }
 
    static addMessageToList(mymessage) {
        const list = document.querySelector('#message-list')
        const row = document.createElement('tr');
        row.innerHTML = `
           <td>${mymessage.name}</td>
           <td>${mymessage.email}</td> 
           <td>${mymessage.message}</td>
           <td><a href="#" class="btn btn-danger btn-sm 
           delete">X</a></td> 
        `;
        list.appendChild(row);
    }

  static clearFields() {
      document.querySelector('#name').value = '';
      document.querySelector('#email').value = '';
      document.querySelector('#message').value = '';
  }
}


// EVENt : display message

document.querySelector('#form-area').addEventListener('submit', (e) => {

     e.preventDefault();
     
     const name = document.querySelector('#name').value;
     const email = document.querySelector('#email').value;
     const message = document.querySelector('#message').value;

     const mymessage = new Message(name,email,message);
     console.log(mymessage);

     UI.clearFields();
     
});

document.addEventListener('DOMContentLoaded', UI.displayMessages);


