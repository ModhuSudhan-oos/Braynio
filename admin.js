// admin.js
const ADMIN_UID = "7oeFtWdz0VSSpW9z6UXtsT3Iniq1";

firebase.auth().onAuthStateChanged(user => {
  if (!user || user.uid !== ADMIN_UID) {
    window.location.href = "login.html";
  } else {
    loadDashboardData();
  }
});

async function loadDashboardData() {
  // Load subscribers
  const subscriberCount = await db.collection("subscribers").get()
    .then(snap => snap.size);
  document.getElementById('subscriberCount').textContent = subscriberCount;

  // Load contacts
  const contactsContainer = document.getElementById('contactsList');
  db.collection("contacts").orderBy("timestamp", "desc").get()
    .then(snap => {
      contactsContainer.innerHTML = snap.docs.map(doc => {
        const data = doc.data();
        return `
          <div class="contact-item">
            <p><strong>${data.email}</strong></p>
            <p>${data.message}</p>
            <small>${new Date(data.timestamp?.toDate()).toLocaleString()}</small>
          </div>
        `;
      }).join('');
    });
}
