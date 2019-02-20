export default class EditableText extends HTMLElement {
  constructor() {
    super();
    this.toggleActive = this.toggleActive.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  toggleActive() {
    // toggle class to active
    this.classList.toggle('active');
  }

  handleInput(event) {
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

      <wysiwyg-editor></wysiwyg-editor>
    `;
    // actions up
    this.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', this.toggleActive));
    this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
  }
}