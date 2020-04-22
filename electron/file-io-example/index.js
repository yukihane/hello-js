const fs = require("fs");
const { BrowserWindow, dialog } = require("electron").remote;

//html内の要素取得とリスナーの設定
document.querySelector("#openFile").addEventListener("click", () => {
  openFile();
});

document.querySelector("#saveFile").addEventListener("click", () => {
  saveFile();
});

const preview = document.getElementById("preview");

//openFileボタンが押されたとき（ファイル名取得まで）
function openFile() {
  const win = BrowserWindow.getFocusedWindow();
  dialog
    .showOpenDialog(win, {
      properties: ["openFile"],
      filters: [
        {
          name: "Document",
          extensions: ["csv", "txt"],
        },
      ],
    })
    .then(({ filePaths: fileNames }) => {
      if (fileNames) {
        // alert(fileNames[0]);
        readFile(fileNames[0]); //複数選択の可能性もあるので配列となる。
      }
    });
}

//指定したファイルを読み込む
function readFile(path) {
  fs.readFile(path, (error, data) => {
    if (error != null) {
      alert("file open error.");
      return;
    }
    preview.value = data.toString();
  });
}

//saveFileボタンが押されたとき
function saveFile() {
  const win = BrowserWindow.getFocusedWindow();
  dialog
    .showSaveDialog(win, {
      properties: ["openFile"],
      filters: [
        {
          name: "Documents",
          extensions: ["csv", "txt"],
        },
      ],
    })
    .then(({ filePath: fileName }) => {
      if (fileName) {
        const data = preview.value;
        console.log(data);
        writeFile(fileName, data);
      }
    });
}

//fileを保存（Pathと内容を指定）
function writeFile(path, data) {
  fs.writeFile(path, data, (error) => {
    if (error != null) {
      alert("save error.");
      return;
    }
  });
}
