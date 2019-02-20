import EditableText from "./EditableText.js";

export default class EditableHeading extends EditableText {
  static get observedAttributes() {
    return ['heading'];
  }

  //getter/setter for heading
  get heading() {
    if (this.hasAttribute('heading')) return this.getAttribute('heading');
    return 'h1';
  }

  set heading(val) {
    this.setAttribute('heading', val);
  }

  render() {
    this.innerHTML = `
      <button type="button" class="edit-button">Edit</button>
      <button type="button" class="save-button">Save</button>
      <${this.heading} class="text-element">My Title</${this.heading}>

      <wysiwyg-editor text-input="input"></wysiwyg-editor>
    `;
    // actions up
    this.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', this.toggleActive));
    this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
    this.addEventListener('delete', () => this.remove());
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }
}
