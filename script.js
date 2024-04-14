function insertPrompt(promptText) {
    var promptInput = document.getElementById('promptInput');
    var currentText = promptInput.value;
    var newText = currentText + (currentText.trim() ? '\n' : '') + promptText;
    promptInput.value = newText;
}
