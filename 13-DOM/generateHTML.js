const info = document.createElement('p');
// Add class to info
info.className = 'text-center';
// Adding content with HTML
info.innerHTML =
  '<i class="bi bi-info-circle me-1"></i>Open the browser console to review the guide examples.';

// Add info inside the container.
const container = document.querySelector('.container');
container.appendChild(info);
