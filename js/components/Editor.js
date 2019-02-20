export default class Editor extends HTMLElement {
  static get observedAttributes() {
    return ['text-input'];
  }

  //getter/setter for heading
  get textInput() {
    if (this.hasAttribute('text-input')) {
      return this.getAttribute('text-input');
    }
    return 'textarea';
  }

  set textInput(val) {
    this.setAttribute('text-input', val);
  }

  evaluateInput = () => {
    if (this.textInput === 'input') {
      return `<input value="My Title">`;
    } else {
      return `<textarea cols="40" rows="5">Go ahead, edit me however you want!</textarea>`;
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    ${this.evaluateInput()}

    <section class="styles">
      <div class="form-group">
        <label>              Font color:
            <input type="color" name="color"/>
        </label>
      </div>

      <div class="form-group">
        <label>
          Font size:
          <input type="number" name="font-size" data-unit="px" value="16" />
          px
        </label>
      </div>

      <div class="form-group">
        <label>
          Font family:
          <select name="font-family">
            <option value="sans-serif">sans-serif</option>
            <option value="serif">serif</option>
          </select>
        </label>
      </div>
    </section>
    `;
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }
}