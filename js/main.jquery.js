$(function () {

    var doc = CodeMirror.fromTextArea(document.getElementById("editor"), {
		mode: "markdown",
		styleActiveLine: true,
		lineNumbers: true,
		lineWrapping: true,
		theme: 'monokai',
		autofocus: true,
		autoCloseBrackets: true
	});

	//window.doc = doc;

});
