import handleEditorInput from './handleEditorInput.js';
import addParagraph from './addParagraph.js';

import Editor from './components/Editor.js';
import EditableText from './components/EditableText.js';

customElements.define('wysiwyg-editor', Editor);
customElements.define('wysiwyg-editable-text', EditableText);

// listen for 'input' events from editor
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput));

// listener for add new paragraph button
document.getElementById('add-button').addEventListener('click', addParagraph);