/**
 * Add new paragraph
 * @param {Event} event 
 */
export default function addParagraph(event) {
  // create element (section w/ class 'editable text')
  const newEditableText = document.createElement('wysiwyg-editable-text');
  document.querySelector('main').insertBefore(newEditableText, event.target);
}
