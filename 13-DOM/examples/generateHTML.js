const info = document.createElement('p');
// Add class to info
info.className = 'text-center';
// Adding content with HTML
info.innerHTML =
  '<i class="bi bi-terminal"></i> Open the console <strong>Ctrl+Shift+I</strong>';

// Add info inside the container.
const container = document.querySelector('.container');
container.appendChild(info);
