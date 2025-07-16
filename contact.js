// contact.js
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMessage').value;
  
  db.collection("contacts").add({
    email: email,
    message: message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    alert("Message sent successfully!");
    document.getElementById('contactForm').reset();
  })
  .catch(error => alert("Error sending message: " + error));
});
