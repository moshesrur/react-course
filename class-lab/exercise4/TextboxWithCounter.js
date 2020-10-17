class TextboxWithCounter {
  constructor(el) {
    el.innerHTML = `
    <p class="counter">0</p>
    <textarea></textarea>`
    this.counter = el.querySelector('.counter');
    this.textarea = el.querySelector('textarea');
    this.textarea.addEventListener('input',
        this.updateCounter);
  }

  updateCounter = () => {
    const len = this.textarea.value.length;
    this.counter.textContent = len;
  }
}

// Create 2 text boxes with counter
for (let i = 0; i < 2; i++) {
  const e1 = document.createElement('div');
  document.body.appendChild(e1);
  new TextboxWithCounter(e1);
}
