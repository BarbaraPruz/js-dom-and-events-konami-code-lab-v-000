const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let codeIdx = 0;
  document.querySelector('body').addEventListener('keydown', function(event) {
    const key = parseInt(event.detail || event.which);
    if (key == code[codeIdx]) {
      if (++codeIdx >= code.length) {
          alert('Congratulations!');
          codeIdx = 0;
      }
    }
    else {
      codeIdx = 0;
    }
  });
}
