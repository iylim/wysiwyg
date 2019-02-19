/**
 * toggles active class to editable-text
 * @param {Event} event 
 */
export default function toggleActive(event) {
  // get parent element
  const editableText = event.target.parentElement;
  // toggle class to active
  editableText.classList.toggle('active');
}