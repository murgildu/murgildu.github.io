---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing
summary: MURGILDU 3D Laboratory is the 3D graphics laboratory at the University of the Basque Country (EHU), focused on 3D graphics, XR, VR, AR, game engines, 3D printing, and digital fabrication.
seo:
  title: MURGILDU 3D Graphics Laboratory at EHU

sections:
  - block: hero
    id: welcome
    content:
      text: |
        Explore 3D graphics, VR and AR, game development, and digital fabrication at the **University of the Basque Country (EHU)** through student projects and hands-on learning.
      cta:
        label: Explore student projects
        url: '#selected-projects'
      cta_alt:
        label: Join the lab
        url: '#join-lab'
      cta_note:
        label: Open to students from all disciplines and experience levels.
    design:
      spacing:
        padding: ['24px', '0', '20px', '0']

  - block: slider
    content:
      slides:
      - title: Inside the lab
        image:
          filename: headset.JPG
          alt: Headset in the 3D Graphics Laboratory
        content: 'Experiment with VR and AR, build interactive experiences, and bring 3D models into the physical world.'
        align: center
        background:
          color: '#666'
        link:
          icon: diagram-project
          icon_pack: fas
          text: Explore student projects
          url: /projects/
      - title: What We Do ☕️
        image:
          filename: dinosaur.JPG
          alt: 3D printed dinosaur
        content: |
          <b>3D Modeling & Animation</b> – Blender, sketchfab, other open-source tools, and artistic workflows <br>
          <b>Game Engines and game intelligence</b> – Godot, and interactive experiences <br>
          <b>3D Printing & Fabrication</b> – from digital models to physical objects <br>
          <b>Research & Learning</b> – workshops, tutorials, and collaborative projects
        align: center
        background:
          color: '#555'
        link:
          icon: book-open
          icon_pack: fas
          text: Check our tutorials
          url: https://murgildu.github.io/docusaurus/
      - title: Godot VR & AR Workshop recordings
        image:
          filename: godot-vr-ar-workshop.jpg
          alt: Godot VR and AR Workshop with Bastiaan Olij
        content: |
          Revisit the two-session workshop with <b>Bastiaan Olij</b> on building VR and AR experiences in <b>Godot Engine</b>.<br><br>
          Held on <b>6–7 May 2026</b> in Lab E08 and online.<br>
          <b>Session 1:</b> Introduction to Godot, XR and VR<br>
          <b>Session 2:</b> AR in Godot<br><br>
          <a class="btn btn-light btn-lg m-1" href="https://youtube.com/live/RiXEcvSVeyI?feature=share" target="_blank" rel="noopener">Watch session 1</a>
          <a class="btn btn-light btn-lg m-1" href="https://youtube.com/live/Abb5pyP1r3w?feature=share" target="_blank" rel="noopener">Watch session 2</a>
          <a class="btn btn-light btn-lg m-1" href="https://docs.google.com/presentation/d/15NEqwhqVFMUNl5RsjStFp6kUbikYUdA2wMFCvDFjXgg" target="_blank" rel="noopener">Workshop slides</a>
        align: center
        background:
          color: '#222'
      - title: Stay Connected
        image:
          filename: room.JPG
          alt: MURGILDU 3D lab room
        content: |
          Share ideas, ask questions, and find collaborators for your next project.<br>
          Join the conversation in our Discord community.
        align: center
        background:
          color: '#333'
        link:
          icon: graduation-cap
          icon_pack: fas
          text: Join our Discord
          url: https://discord.gg/wqEvEaegyv
    design:
      # Let slides fit their content and use the page's scrollbar.
      slide_height: ''
      is_fullscreen: false
      # Automatically transition through slides?
      loop: false
      # Duration of transition between slides (in ms)
      interval: 2000

  - block: collection
    id: selected-projects
    content:
      title: Selected student projects
      page_type: projects
      count: 3
      order: desc
      filters:
        featured_only: true
      archive:
        enable: true
        text: View all projects
        link: /projects/
    design:
      view: compact
      columns: '2'
      spacing:
        padding: ['40px', '0', '40px', '0']

  - block: markdown
    id: join-lab
    content:
      title: Join the lab
      text: |
        Bring an idea or explore our [current project proposals](/proposals/). You can also get started with our [tutorials](https://murgildu.github.io/docusaurus/) and [meet the team](/people/).

        Find us in **Lab E08 at EHU’s Faculty of Informatics in Donostia-San Sebastián**. [Contact us](/contact/) to arrange a visit or discuss a collaboration.

        {{% cta cta_link="https://discord.gg/wqEvEaegyv" cta_text="Join our Discord community" cta_new_tab="true" %}}
    design:
      columns: '1'
      spacing:
        padding: ['40px', '0', '40px', '0']
---
