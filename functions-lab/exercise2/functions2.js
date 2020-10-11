var b1 = document.querySelector('#btn1');
var b2 = document.querySelector('#btn2');
var panel = document.querySelector('p');

// b1.addEventListener('click', writeText('Yo'));
// b2.addEventListener('click', writeText('Nice To Meet You'));

b1.addEventListener('click', writeCaption1);
b2.addEventListener('click', writeCaption2);

function writeCaption1() {
  writeText('Yo');
}

function writeCaption2() {
  writeText('Nice To Meet You');
}

function writeText(text) {
  /* Write Code Here To Make The Program Work */
  panel.innerHTML = text;
}

