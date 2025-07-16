// auth.js
const ADMIN_UID = "7oeFtWdz0VSSpW9z6UXtsT3Iniq1";

// Handle login
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "index.html")
    .catch(error => alert(error.message));
});

// Handle signup
document.getElementById('signupForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => window.location.href = "index.html")
    .catch(error => alert(error.message));
});

// Handle logout
document.getElementById('logoutBtn')?.addEventListener('click', () => {
  firebase.auth().signOut().then(() => window.location.href = "index.html");
});

// Update UI based on auth state
firebase.auth().onAuthStateChanged(user => {
  const authLinks = document.getElementById('authLinks');
  if (user) {
    authLinks.innerHTML = user.uid === ADMIN_UID 
      ? `<a href="dashboard.html">Dashboard</a><button id="logoutBtn">Logout</button>`
      : `<button id="logoutBtn">Logout</button>`;
  } else {
    authLinks.innerHTML = `<a href="login.html">Login</a><a href="signup.html" class="btn">Sign Up</a>`;
  }
});
