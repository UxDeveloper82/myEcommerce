(function() {
        // Initialize Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyB5-OhGboWewa6_jhXKH1ijAANI_N2gs4g",
            authDomain: "ecommerce-8313f.firebaseapp.com",
            databaseURL: "https://ecommerce-8313f.firebaseio.com",
            projectId: "ecommerce-8313f",
            storageBucket: "ecommerce-8313f.appspot.com",
            messagingSenderId: "843589311751",
            appId: "1:843589311751:web:45680030dfdfa88f0db9a2"
        };
        firebase.initializeApp(firebaseConfig);
    
        // Get Elements
        const inputEmail = document.getElementById('inputEmail');
        const inputPassword = document.getElementById('inputPassword');
        const btnLogin = document.getElementById('btnLogin');

        btnLogin.addEventListener('click', e => {
            e.preventDefault();
        //get email and pass
        const email = inputEmail.value;
        const pass = inputPassword.value;
        const auth = firebase.auth();
        //sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        });

}());