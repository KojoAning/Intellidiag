
  function dragOverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  function dropHandler(event) {
    event.preventDefault();

    if (event.dataTransfer.items) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (event.dataTransfer.items[i].kind === 'file') {
          var file = event.dataTransfer.items[i].getAsFile();
          console.log('File:', file.name);
          // Handle the file here, you can upload it to a server or process it further
        }
      }
    } else {
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        console.log('File:', event.dataTransfer.files[i].name);
        // Handle the file here, you can upload it to a server or process it further
      }
    }
  }

  function downloadReport() {
    // Implement download report functionality here
    console.log('Download Report button clicked');
  }
