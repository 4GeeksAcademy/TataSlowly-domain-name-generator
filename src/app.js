window.onload = function () {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon", "code", "lov"];
  const extensions = [".com", ".net", ".us", ".io", ".es"];

  const button = document.getElementById("generate");
  const list = document.getElementById("domainList");

  button.onclick = function () {
    list.innerHTML = ""; // Limpia la lista cada vez

    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let ext of extensions) {
            // Dominio normal
            const domain = p + a + n + ext;
            addToList(domain);

            // Domain hack
            const extNoDot = ext.replace(".", "");
            if (n.endsWith(extNoDot)) {
              let hackDomain = p + a + n.replace(extNoDot, "") + ext;
              addToList("💡 Hack: " + hackDomain);
            }
          }
        }
      }
    }
  };

  function addToList(text) {
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
  }
};
