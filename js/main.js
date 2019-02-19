import toggleActive from './toggleActive.js';

// select edit buttons
// add event listeners (click) to each button
document.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', toggleActive));

// listen for 'input' events from editor
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput))

// update text of sibling '.text-element'
function handleEditorInput(event) {
  if (event.target.type === 'text' || event.target.tagName === 'TEXTAREA') {
    const textElement = event.currentTarget.parentNode.querySelector('.text-element');
    const text = event.target.value;
    textElement.innerText= text;
  }
}