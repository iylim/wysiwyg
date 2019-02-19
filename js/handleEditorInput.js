/**
 * update text and styles of sibling '.text-element'
 * @param {Event} event 
 */

export default function handleEditorInput(event) {
  const textElement = event.currentTarget.parentNode.querySelector('.text-element');
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
