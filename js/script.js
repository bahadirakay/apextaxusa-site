document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      form.style.display = "none";
      const thankYou = document.getElementById("thank-you");
      thankYou.style.display = "block";

      // Countdown
      let seconds = 10;
      const countdownElement = document.getElementById("countdown");
      const interval = setInterval(() => {
        seconds--;
        countdownElement.textContent = seconds;
        if (seconds <= 0) {
          clearInterval(interval);
          window.location.href = "index.html";
        }
      }, 1000);
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  });
});
