export default function txtcookie(fileInput) {
    if (fileInput) {
      const file = fileInput.files[0];
      const textType = /text.*/;
      if (file.type.match(textType)) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const text = reader.result;
          document.cookie = "text=" + text;
        };
        reader.readAsText(file);
      } else {
        alert("txt 파일이 아닙니다!!");
      }
    }
  }dd
  