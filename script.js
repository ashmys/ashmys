
const projects = [
  {
    title: "Your Godot Game",
    category: "godot",
    engine: "Godot",
    image: "assets/projects/project-1.jpg",
    description:
      "Describe your game, its mechanics, and what you programmed.",
    tags: ["Godot", "GDScript", "Gameplay"],
    demo: "",
    source: ""
  },

  {
    title: "Your Unity Game",
    category: "unity",
    engine: "Unity",
    image: "assets/projects/project-2.jpg",
    description:
      "Describe your Unity project and your technical contributions.",
    tags: ["Unity", "C#", "Game Systems"],
    demo: "",
    source: ""
  },

  {
    title: "Your Ren'Py Project",
    category: "other",
    engine: "Ren'Py",
    image: "assets/projects/project-3.jpg",
    description:
      "Describe your visual novel, dialogue systems, and scripting.",
    tags: ["Ren'Py", "Python", "Narrative"],
    demo: "",
    source: ""
  }
];

const grid = document.getElementById("project-grid");

function renderProjects(filter = "all") {

  const filtered = projects.filter(project =>
    filter === "all" || project.category === filter
  );

  grid.innerHTML = filtered.map(project => {

    const links = [];

    if (project.demo) {
      links.push(
        `<a href="${project.demo}" target="_blank"
        rel="noopener noreferrer">Play Demo ↗</a>`
      );
    }

    if (project.source) {
      links.push(
        `<a href="${project.source}" target="_blank"
        rel="noopener noreferrer">Source Code ↗</a>`
      );
    }

    return `
      <article class="project-card">

        <img
          class="project-image"
          src="${project.image}"
          alt="${project.title} gameplay screenshot"
          loading="lazy"
        >

        <div class="project-info">

          <span class="project-category">
            ${project.engine}
          </span>

          <h3>${project.title}</h3>

          <p>${project.description}</p>

          <div class="project-tags">
            ${project.tags.map(tag =>
              `<span>${tag}</span>`
            ).join("")}
          </div>

          <div class="project-links">
            ${links.join("")}
          </div>

        </div>
      </article>
    `;

  }).join("");

}

document.querySelectorAll(".filter").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelectorAll(".filter").forEach(item =>
      item.classList.remove("active")
    );

    button.classList.add("active");

    renderProjects(button.dataset.filter);

  });

});

document.getElementById("year").textContent =
  new Date().getFullYear();

renderProjects();
