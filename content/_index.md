---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: slider
    content:
      slides:
      - title: Godot VR & AR Workshop
        image:
          filename: godot-vr-ar-workshop.jpg
          alt: Godot VR and AR Workshop
        content: |
          Join us for a two-session workshop with <b>Bastiaan Olij</b>, Lead XR Developer of <b>Godot Engine</b>, Godot Foundation board member, and contributor to the OpenXR Working Group.<br><br>
          <b>Session 1:</b> Wednesday 6 May, 09:00–11:00 · Introduction to Godot, XR and VR<br>
          <b>Session 2:</b> Thursday 7 May, 09:00–11:00 · AR in Godot<br>
          <b>Location:</b> MURGILDU 3D lab. Lab E08 - Also available online<br><br>
          <a class="btn btn-light btn-lg m-1" href="https://youtube.com/live/RiXEcvSVeyI?feature=share" target="_blank" rel="noopener">Session 1 stream</a>
          <a class="btn btn-light btn-lg m-1" href="https://youtube.com/live/Abb5pyP1r3w?feature=share" target="_blank" rel="noopener">Session 2 stream</a>
          <a class="btn btn-light btn-lg m-1" href="https://docs.google.com/presentation/d/15NEqwhqVFMUNl5RsjStFp6kUbikYUdA2wMFCvDFjXgg" target="_blank" rel="noopener">Support slides</a>
        align: center
        background:
          color: '#222'
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
