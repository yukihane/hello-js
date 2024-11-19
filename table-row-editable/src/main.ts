document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button") as HTMLButtonElement;
  const template = document.getElementById("template") as HTMLTemplateElement;
  const table = document.getElementById("tbody") as HTMLTableElement;

  button.addEventListener("click", () => {
    const clone = template.content.cloneNode(true);
    table.insertBefore(clone, table.firstChild);
  });
});
