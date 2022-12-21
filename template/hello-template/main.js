document.addEventListener("DOMContentLoaded", (event) => {
  let template = document.getElementById("my-paragraph");
  let templateContent = template.content;
  document.body.appendChild(templateContent);
});
