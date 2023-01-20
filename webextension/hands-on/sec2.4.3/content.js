const dialog = document.createElement("ul");
dialog.id = "dialog";
dialog.style.position = "fixed";
dialog.style.right = "0";
dialog.style.bottom = "0";
dialog.style.backgroundColor = "rgba(0,0,0,0.5)";
dialog.style.color = " white";
dialog.style.fontSize = "1rem";
dialog.style.padding = "0.5rem";
dialog.style.textShadow = "0 0 4rem black";
dialog.style.whiteSpace = "pre -wrap";
dialog.style.margin = "0";
document.body.appendChild(dialog);

chrome.runtime.sendMessage({ command: "visit-count" }, (resp) => {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError.message);
    return;
  }

  const li = document.createElement("li");
  li.textContent = `Visited count : ${resp.count}`;

  const ul = document.getElementById("dialog");
  ul.appendChild(li);
});
chrome.runtime.sendMessage({ command: "tabs-count" }, (resp) => {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError.message);
    return;
  }

  const li = document.createElement("li");
  li.textContent = `Tabs count : ${resp.count}`;
  const ul = document.getElementById("dialog");
  ul.appendChild(li);
});
