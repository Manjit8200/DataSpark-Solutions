const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('quoteForm');
const result = document.getElementById('formResult');
const prepared = document.getElementById('preparedMessage');
const copyBtn = document.getElementById('copyMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const message =
`Hi DataSpark Solutions,

Name: ${data.get('name')}
Contact: ${data.get('contact')}
Service: ${data.get('service')}
Budget: ${data.get('budget') || 'Not specified'}
Timing: ${data.get('timing')}

Project / Issue:
${data.get('details')}

Please send me a quote or let me know what information you need next.`;

  prepared.value = message;
  result.hidden = false;
  result.scrollIntoView({behavior:'smooth', block:'nearest'});
});

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(prepared.value);
    copyBtn.textContent = 'Copied!';
    setTimeout(() => copyBtn.textContent = 'Copy Message', 1500);
  } catch {
    prepared.select();
    document.execCommand('copy');
  }
});
