document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button") as HTMLButtonElement;
  const template = document.getElementById("template") as HTMLTemplateElement;
  const tbody = document.getElementById("tbody") as HTMLTableSectionElement;
  let count = 0;

  button.addEventListener("click", () => {
    const clone = template.content.cloneNode(true) as DocumentFragment;
    const tr = clone.querySelector("tr") as HTMLTableRowElement;
    tr.classList.add(`row-${count++}`);
    tbody.insertBefore(clone, tbody.firstChild);
  });

  tbody.addEventListener("click", (event) => {
    const tr = (event.target as HTMLElement).closest("tr");
    if (tr && !tr.classList.contains("editing")) {
      const clone = template.content.cloneNode(true) as DocumentFragment;
      const editableTr = clone.querySelector("tr") as HTMLTableRowElement;
      editableTr.classList.add("editing");
      const cells = tr.querySelectorAll("td");
      const inputs = editableTr.querySelectorAll("input");

      cells.forEach((cell, index) => {
        (inputs[index] as HTMLInputElement).value =
          cell.textContent?.trim() || "";
      });

      tbody.replaceChild(editableTr, tr);
    }
  });
});
