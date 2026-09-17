# 🎨 [EHU 3D Graphics Lab](https://github.com/murgildu/murgildu.github.io) (murgildu)

[![Screenshot](assets/media/icon.png)](https://murgildu.github.io/)

Welcome to the **3D Graphics Laboratory** at the University of the Basque Country (EHU)
A creative playground where students can explore, experiment, and build with **3D technologies**.

[Get Started](https://murgildu.github.io/about/)
[Discord](https://discord.gg/wqEvEaegyv)

---

## 🚀 What We Do
- **3D Modeling & Animation** – Blender, open-source tools, and artistic workflows
- **Game Engines and game intelligence** – Unity, Godot, and interactive experiences
- **3D Printing & Fabrication** – from digital models to physical objects
- **Research & Learning** – workshops, tutorials, and collaborative projects

Explore our [student projects](https://murgildu.github.io/projects/)
and their [source repositories](https://github.com/murgildu).

---

## 🌍 Join the Lab
This lab is open to **students of all backgrounds** whether you’re into programming, design, art, or just curious about 3D!

- 📚 Learn by doing
- 🛠️ Share your projects
- 🤝 Collaborate with peers

---

## 📢 Stay Connected
We’re just getting started! This site will grow with resources, guides, and showcases of student work.

👉 Follow updates here and on our GitHub repository.
👉 Contribute ideas, projects, or tutorials to help the lab thrive!
👉 Join our [Discord channel](https://discord.gg/wqEvEaegyv)

---

## Local development

Follow the [setup and build guide](debugSite_howto.md) to install the pinned
Hugo Extended release, preview changes, and verify a production build.
After setup, start the site with `./scripts/hugo.sh server --disableFastRender`.

## Publishing and editing

The site is deployed to **GitHub Pages** by
[publish.yaml](.github/workflows/publish.yaml) when changes reach `main`.
Edit the Markdown/YAML files in `content/`, preview locally, and verify a
production build before pushing. Site configuration lives in `config/_default/`;
theme overrides live in `layouts/` and `assets/`.

There is no browser-based CMS or Netlify deployment. The inherited Decap login,
Netlify output files, and unused BibTeX import workflow have been removed.
The publications section remains a draft placeholder; enabling publications
and their import workflow would be a separate setup task.

This site uses the Hugo Blox Research Group starter. Its upstream metadata in
`theme.toml` and [MIT license](LICENSE.md) retain the original attribution.

---

Made with 💡 by the **EHU 3D Graphics Lab** team.
