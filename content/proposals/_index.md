---
title: Project ideas for 2026–2027
summary: Explore TFG, TFM and practice ideas in medical XR, 3D creation, games, interaction, AI and space optimisation at MURGILDU.

# Levels are suggested scopes, not confirmed availability or student assignments.
topics:
  - id: medical
    title: Medical XR
  - id: creation
    title: 3D creation
  - id: interaction
    title: Interaction & experience
  - id: games
    title: Games & AI
  - id: optimisation
    title: Space optimisation

groups:
  - id: foundations
    number: '01'
    title: Build a focused prototype
    description: A clear starting point with a tangible result. Good for a first substantial project in 3D or VR.
  - id: applied
    number: '02'
    title: Develop and evaluate
    description: Combine several skills, build an interactive system and explore how well it works.
  - id: research
    number: '03'
    title: Explore a research question
    description: Compare approaches and investigate open questions. A focused TFG can grow into a deeper TFM.

ideas:
  - id: phone-to-vr
    group: foundations
    title: From phone photos to VR
    levels: [TFG]
    topics: [creation]
    summary: Turn a real object into a 3D asset using phone photos, then prepare it for smooth viewing in VR.
    profile: 3D modelling · creative technology
    scope: Capture an object, reconstruct it, simplify the model and test it in a small VR scene.

  - id: digital-twin
    group: foundations
    title: A digital twin of a real space
    levels: [TFG]
    topics: [creation, medical]
    summary: Recreate a classroom, laboratory or simulated operating room as a virtual space that people can explore.
    profile: Environment design · 3D modelling
    scope: Model one room and add navigation and a simple learning or workflow activity.

  - id: packing-boxes
    group: foundations
    title: Make the most of a container
    levels: [TFG]
    topics: [optimisation, interaction]
    summary: Build a VR packing puzzle where users arrange rectangular objects and compare how efficiently they use space.
    profile: Algorithms · interactive programming
    scope: Implement a simple packing method and let users inspect, move and compare arrangements in VR.

  - id: sensory-feedback
    group: foundations
    title: Make virtual objects feel more tangible
    levels: [TFG]
    topics: [interaction, medical]
    summary: Explore how sound, visual cues and ordinary controller vibration can strengthen the feeling of touching a virtual object.
    profile: Experience design · creative coding
    scope: Build a small interaction demo, such as touching an anatomical model, and compare a few feedback combinations.

  - id: anatomical-models
    group: applied
    title: Anatomical models ready for VR
    levels: [TFG]
    topics: [medical, creation]
    summary: Turn structures extracted from medical images into clear, lightweight 3D models for immersive teaching.
    profile: 3D modelling · medical visualisation
    scope: Clean up and simplify a small set of models from the MedVision workflow, then check visual quality and VR performance.

  - id: medical-engine-comparison
    group: applied
    title: Which engine fits medical XR?
    levels: [TFG]
    topics: [medical]
    summary: Build the same small medical viewing experience in different game engines and compare the results.
    profile: Software engineering · benchmarking
    scope: Use a common scene to compare Godot, Unity and Unreal for image quality, interaction, performance and development effort.

  - id: virtual-sculpting
    group: applied
    title: Sculpt in virtual clay
    levels: [TFG]
    topics: [creation, interaction]
    summary: Create a simple VR sculpting tool where students shape a 3D object using their hands or controllers.
    profile: Creative tools · graphics programming
    scope: Start with a few shaping actions and let users save their creations. Focus on an intuitive modelling experience.

  - id: real-room-virtual-world
    group: applied
    title: Turn a real room into a virtual world
    levels: [TFG]
    topics: [interaction, creation]
    summary: Give real furniture a new virtual role, turning a familiar room into an immersive experience that fits its physical layout.
    profile: Spatial design · immersive experiences
    scope: Map a small room and align a few virtual objects with its real furniture, then evaluate the experience.

  - id: medical-annotation
    group: applied
    title: Mark and label anatomy in 3D
    levels: [TFG]
    topics: [medical, interaction]
    summary: Let users point to and label regions directly on a 3D anatomical model in VR, instead of working on a flat screen.
    profile: Interface design · data tools
    scope: Build selection and labelling tools and export the annotations for the MedVision workflow.

  - id: medical-image-viewer
    group: applied
    title: Explore medical scans in XR
    levels: [TFG]
    topics: [medical]
    summary: Bring medical images and reconstructed structures into one immersive viewer to make their spatial relationships easier to explore.
    profile: Visual computing · application development
    scope: Adapt the existing Blender MRI viewing workflow into a Godot prototype with simple controls for exploring scans and 3D structures.

  - id: surgical-practice
    group: applied
    title: A virtual practice room for medicine
    levels: [TFG]
    topics: [medical, interaction]
    summary: Create a simulated training space where medical students can explore anatomy and rehearse a simple interaction task.
    profile: VR development · educational experiences
    scope: Build one guided practice activity around a reconstructed anatomical model, with clear instructions and feedback.

  - id: natural-hand-interaction
    group: applied
    title: Natural hand interaction in medical VR
    levels: [TFG]
    topics: [medical, interaction]
    summary: Make virtual anatomical structures easier to pick up, move and position using hand tracking, without specialised haptic gloves.
    profile: Interaction programming · simulation
    scope: Prototype grabbing and manipulation in Godot/OpenXR for the OpenNeuroXR-DVE line, then explore simple ways to make grip behaviour more convincing.

  - id: rehabilitation-mr
    group: applied
    title: Mixed reality for movement practice
    levels: [TFG]
    topics: [medical, interaction]
    summary: Design a rehabilitation-inspired prototype that adds virtual guides or goals to a real movement activity.
    profile: Human-computer interaction · health technology
    scope: Create one guided movement task and evaluate the clarity and usability of its feedback in a simulated setting.

  - id: immersive-games
    group: applied
    title: Games made by students, for students
    levels: [TFG]
    topics: [games, interaction]
    summary: Build a small immersive game, such as VR climbing, where students can create challenges and play each other's designs.
    profile: Game design · VR programming
    scope: Start with one playable climbing activity and a simple way to create routes. Competitions or multiplayer can be later extensions.
    existing: /proposals/26-12-19-vrcliming/

  - id: training-and-haptics
    group: applied
    title: VR training with haptic feedback
    levels: [TFG]
    topics: [interaction]
    summary: Develop a learning or training scene and explore how haptic devices affect the experience of interacting with it.
    profile: Hardware interaction · experience evaluation
    scope: Choose one training scenario and compare interaction with and without the available haptic feedback.
    existing: /proposals/26-02-19/

  - id: fatigue-in-3d
    group: research
    title: See fatigue and brain activity in 3D
    levels: [TFG, TFM]
    topics: [medical]
    summary: Visualise recorded fatigue or brain-activity data around an avatar or a sports scene to help users explore a session over time.
    profile: Data visualisation · human factors
    scope: 'TFG: create a viewer for recorded data. TFM: compare visual representations and study how people interpret them.'

  - id: gaze-and-hands
    group: research
    title: Where do we look when we reach?
    levels: [TFG, TFM]
    topics: [medical, interaction]
    summary: Explore how gaze and hand movement work together while people manipulate virtual objects, with possible applications in attention and medical training.
    profile: Human-computer interaction · data analysis
    scope: 'TFG: record and visualise eye-hand coordination during a simple task. TFM: investigate gaze estimation or attention measures.'
    note: The scope depends on access to eye-tracking hardware or suitable recorded data.

  - id: gaussian-splatting
    group: research
    title: A different way to reconstruct 3D scenes
    levels: [TFG, TFM]
    topics: [creation, medical]
    summary: Explore Gaussian splatting as an alternative to conventional 3D models for viewing reconstructed spaces or anatomical teaching scenes in VR.
    profile: Computer graphics · reconstruction
    scope: 'TFG: build and test a small viewer. TFM: compare reconstruction approaches, visual quality and VR performance for a defined medical teaching use case.'
    resource:
      title: Godot Gaussian Splatting project
      url: https://github.com/ReconWorldLab/godot-gaussian-splatting

  - id: learning-agents
    group: research
    title: Virtual agents that learn by doing
    levels: [TFG, TFM]
    topics: [games]
    summary: Create a game-like environment where an agent learns to navigate or complete a task, then explore how its behaviour changes with training.
    profile: AI · game environments
    scope: 'TFG: connect a small Godot environment to a learning framework. TFM: compare learning methods and how well they transfer to new situations.'
    existing: /proposals/22-10-22-rl-intelligence/

  - id: irregular-packing
    group: research
    title: Packing beyond boxes
    levels: [TFM]
    topics: [optimisation]
    summary: Investigate how to arrange irregularly shaped objects efficiently, and use a 3D environment to inspect and compare solutions.
    profile: Optimisation · machine learning
    scope: Define a manageable packing problem, compare selected heuristic or learning-based methods, and analyse space usage and computational cost.
---
