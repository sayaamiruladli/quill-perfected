var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean'],                                         // remove formatting button
  ['link', 'image', 'video'],
  ['showHtml']
];

var quill = new Quill('#editor', {
    theme: 'snow',
     modules: {
        imageDrop: true,
        imageResize: {
          displaySize: true
        },
        toolbar: toolbarOptions
    }
    
});

var txtArea = document.createElement('textarea');
txtArea.style.cssText = "width: 100%;margin: 0px;background: rgb(29, 29, 29);box-sizing: border-box;color: rgb(204, 204, 204);font-size: 15px;outline: none;padding: 20px;line-height: 24px;font-family: Consolas, Menlo, Monaco, &quot;Courier New&quot;, monospace;position: absolute;top: 0;bottom: 0;border: none;display:none"

var htmlEditor = quill.addContainer('ql-custom')
htmlEditor.appendChild(txtArea)

var myEditor = document.querySelector('#editor')
quill.on('text-change', (delta, oldDelta, source) => {
  var html = myEditor.children[0].innerHTML
  txtArea.value = html
})

var customButton = document.querySelector('.ql-showHtml');
customButton.addEventListener('click', function() {
  if (txtArea.style.display === '') {
    var html = txtArea.value
    self.quill.pasteHTML(html)
  }
  txtArea.style.display = txtArea.style.display === 'none' ? '' : 'none'
});




$('#form').submit(function(){
	$('#content').value = quill.root.innerHTML;
});

