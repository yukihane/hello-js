document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button") as HTMLButtonElement;
  const template = document.getElementById("template") as HTMLTemplateElement;
  const table = document.getElementById("tbody") as HTMLTableElement;
  var count = 0;

  button.addEventListener("click", () => {
    const clone = template.content.cloneNode(true) as DocumentFragment;
    const tr = clone.querySelector("tr") as HTMLTableRowElement;
    tr.classList.add(`row-${count++}`);
    table.insertBefore(clone, table.firstChild);
  });
});
