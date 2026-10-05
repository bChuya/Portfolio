const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (form && formStatus) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();

    formStatus.textContent = name
      ? `Thanks, ${name}! Your message is ready to send.`
      : 'Thanks! Your message is ready to send.';

    form.reset();
  });
}
