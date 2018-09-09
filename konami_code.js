const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

//function init() {
  // Write your JavaScript code inside the init() function
$( document ).ready(function() {
  const body = document.querySelector('body');
  let codeIdx = 0;
  body.addEventListener('keydown', function(event) {
    if (event.which == code[codeIdx]) {
      if (++codeIdx >= code.length) {
          alert('Congratulations!');
      }
      codeIdx = 0;
    }
  });
}
