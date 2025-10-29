document.getElementById("addBtn").addEventListener("click", addSkill);

function addSkill() {
  const input = document.getElementById("skillInput");
  const skillName = input.value.trim();

  if (skillName === "") return; 

  const container = document.getElementById("skillContainer");

  const box = document.createElement("div");
  box.className = "skill-box";
  box.innerHTML = `${skillName} <span>✖</span>`;

  box.querySelector("span").addEventListener("click", () => {
    container.removeChild(box);
  });

  container.appendChild(box);

  input.value = "";
}
