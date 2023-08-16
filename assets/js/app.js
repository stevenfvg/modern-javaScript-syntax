/* function showMessageByDefault() {
  let message = 'Uncomment the JS files to test the examples.';
  return message;
}

console.warn(showMessageByDefault()); */

const darkSwitch = document.getElementById('flexSwitchCheckChecked');
window.addEventListener('load', () => {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener('change', () => resetTheme());
  }
});

/**
 * Summary: function that adds or removes the attribute 'data-bs-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-bs-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-bs-theme' attribute will not be set.
 * @return {void}
 */
const initTheme = () => {
  let darkThemeSelected =
    localStorage.getItem('darkSwitch') === null &&
    localStorage.getItem('darkSwitch') !== 'dark';
  darkSwitch.checked = darkThemeSelected;
  darkThemeSelected
    ? document.body.setAttribute('data-bs-theme', 'dark')
    : document.body.removeAttribute('data-bs-theme');
};

/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-bs-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}
 */
const resetTheme = () => {
  if (darkSwitch.checked) {
    document.body.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem('darkSwitch', 'dark');
  } else {
    document.body.removeAttribute('data-bs-theme');
    localStorage.removeItem('darkSwitch');
  }
};
