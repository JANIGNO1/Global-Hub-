// script.js
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Get Firebase auth object from index.html
const auth = window.firebaseAuth;

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', async function(e){
    e.preventDefault(); // Prevent default form submit

    // Get user input
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate input
    if(email === "" || password === ""){
        alert("Please fill in all fields.");
        return;
    }

    try {
        // Firebase login
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert(`Welcome, ${userCredential.user.email}!`);
        window.location.href = "home.html"; // Redirect to Home Page
    } catch (error) {
        alert(error.message); // Show error (invalid login)
    }
});