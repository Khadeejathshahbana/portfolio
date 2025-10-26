
  const scriptURL = "https://script.google.com/macros/s/AKfycbxMKFnh8uIk3UO8oGXI25Ky8Wemm-2Faf7uu_8jLLnR83w5_nos4wMcIczwaSeMu5cC/exec";

  const form = document.getElementById('contactForm');
  const responseMsg = document.getElementById('responseMsg');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const urlParams = new URLSearchParams();
    for (const pair of formData.entries()) urlParams.append(pair[0], pair[1]);

    fetch(scriptURL, {
      method: 'POST',
      body: urlParams,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
    })
      .then(res => res.text())
      .then(text => {
        responseMsg.textContent = "✅ Message sent successfully!";
        form.reset();
        console.log('Server response:', text);
      })
      .catch(err => {
        responseMsg.textContent = "❌ Error! Try again later.";
        console.error('Error!', err);
      });
  });

function animateBars() {
  bars.forEach(bar => {
    const rect = bar.el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // bar is visible → fill
      bar.el.style.transition = 'width 7s ease-in-out'; // slower animation
      bar.el.style.width = bar.width;
    } else {
      // bar is completely out → reset slowly
      bar.el.style.transition = 'width 2s ease-in-out'; // optional different speed
      bar.el.style.width = '0';
    }
  });
}


  