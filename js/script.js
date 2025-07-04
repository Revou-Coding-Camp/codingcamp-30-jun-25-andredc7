document.addEventListener('DOMContentLoaded', () => {
    // Cek apakah nama sudah disimpan di localStorage
    let namePrompt = localStorage.getItem('userName');
  
    // Kalau belum ada, baru tampilkan prompt
    if (!namePrompt) {
      namePrompt = prompt("What's your name?") || 'Guest';
      localStorage.setItem('userName', namePrompt);
    }
  
    // Tampilkan nama ke halaman
    document.getElementById('userName').textContent = namePrompt;
  
    // Tangani form submit
    const form = document.getElementById('contactForm');
    form.onsubmit = function () {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('messageField').value.trim();
  
      if (!name || !email || !phone || !message) {
        alert('Please fill in all fields!');
        return false;
      }
  
      if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return false;
      }
  
      const resultBox = document.getElementById('formResult');
      resultBox.innerHTML = `
        <p>Thank you, <strong>${name}</strong>!</p>
        <p>We have received your message: <em>${message}</em></p>
        <p>We'll contact you at: <strong>${email}</strong> / ${phone}</p>
      `;
  
      form.reset();
      return false; // mencegah refresh
    };
  });
  