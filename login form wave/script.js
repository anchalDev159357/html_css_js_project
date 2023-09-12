const labels = document.querySelectorAll(".control-form label");

labels.forEach((label) => {
  const finalSpanElem = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="margin-right:5px;transition-delay:${
          idx * 50
        }ms">${letter}</span>`
    )
    .join(" ");
  label.innerHTML = finalSpanElem;
});
