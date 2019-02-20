export default class EditableText extends HTMLElement {
  // getter/setter active
  get active() {
    return this.hasAttribute('active');
  }

  set active(val) {
    if (val) {
      this.setAttribute('active', '');
    } else {
      this.removeAttribute('active');
    }
  }

  connectedCallback() {
    this.render();
  }

  toggleActive = event => {
    // toggle active atrribute
    if (!this.active) {
      this.saveData();
    }

    this.active = !this.active;
  }

  saveData = event => {
    const data = {};
    console.log(event);
  }

  handleInput = event => {
    const textElement = this.querySelector('.text-element');
    //update text
    if (event.target.type === 'text' || event.target.tagName === 'TEXTAREA') {
      const text = event.target.value;
      textElement.innerText= text;
    } else {
      //handle styles
      const {value, name: styleName} = event.target;
      const unit = event.target.dataset.unit || '';
      textElement.style[styleName] = `${value}${unit}`;
    }
  }


  render() {
    this.innerHTML = `
      <button type="button" class="edit-button">Edit</button>
      <button type="button" class="save-button">Save</button>
      <p class="text-element">Go ahead, edit me however you want!</p>

      <wysiwyg-editor text-input="textarea"></wysiwyg-editor>
    `;
    // actions up
    this.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', this.toggleActive));
    this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
    this.addEventListener('delete', () => this.remove());
  }
}