---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: slider
    content:
      slides:
      - title: 👋 Welcome to the 3D Graphics Laboratory at the University of the Basque Country (EHU)
        content: 'A creative playground where students can explore, experiment, and build with 3D technologies.'
        align: center
        background:
          image:
            filename: headset.JPG
            filters:
              brightness: 0.7
          position: right
          color: '#666'
        link:
          icon: diagram-project
          icon_pack: fas
          text: Check our projects
          url: https://github.com/orgs/murgildu/repositories
      - title: What We Do ☕️
        content: |
          <b>3D Modeling & Animation</b> – Blender, sketchfab, other open-source tools, and artistic workflows <br>
          <b>Game Engines and game intelligence</b> – Godot, and interactive experiences <br>
          <b>3D Printing & Fabrication</b> – from digital models to physical objects <br>
          <b>Research & Learning</b> – workshops, tutorials, and collaborative projects
        align: left
        background:
          image:
            filename: dinosaur.JPG
            filters:
              brightness: 0.7
          position: center
          color: '#555'
        link:
          icon: book-open
          icon_pack: fas
          text: Check our tutorials
          url: https://murgildu.github.io/docusaurus/
      - title: Stay Connected
        content: |
          We’re just getting started! This site will grow with resources, guides, and showcases of student work.<br>
          Check out our discord channel.
        align: right
        background:
          image:
            filename: room.JPG
            filters:
              brightness: 0.5
          position: center
          color: '#333'
        link:
          icon: graduation-cap
          icon_pack: fas
          text: Join Us in discord
          url: https://discord.gg/wqEvEaegyv
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: ''
      is_fullscreen: true
      # Automatically transition through slides?
      loop: false
      # Duration of transition between slides (in ms)
      interval: 2000
---
