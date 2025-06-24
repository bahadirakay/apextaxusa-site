document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Formu otomatik olarak göndermesin

  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.style.display = "none";
      document.getElementById("thank-you").style.display = "block";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 10000); // 10 saniye sonra yönlendirme
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  });
});
