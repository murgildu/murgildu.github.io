# Editing the 2026–2027 proposals

The catalogue at `/proposals/` contains 17 new directions and three earlier proposal lines. Its editable content is in `content/proposals/_index.md`; the three original proposal pages and their URLs are preserved.

## Organisation

Ideas appear in three broad complexity bands, in the order written in the file:

1. **Build a focused prototype:** a bounded TFG with a concrete output.
2. **Develop and evaluate:** a TFG that combines modelling, interaction or software integration with evaluation.
3. **Explore a research question:** an advanced TFG prototype or a TFM with a comparative research question.

These are editorial suggestions, not academic requirements or confirmed assignments. TFG/TFM labels describe the proposed scope. Existing proposals are labelled separately so students can discuss follow-up work with the lab. Course practice can use a smaller part of a topic.

## Content mapping

| Original idea or lab line | Catalogue anchor | Suggested level |
| --- | --- | --- |
| Low-cost phone photogrammetry and optimisation | `phone-to-vr` | TFG |
| Faculty or hospital digital twin | `digital-twin` | TFG |
| Regular container packing in VR | `packing-boxes` | TFG |
| Sensory feedback without specialised hardware; VirCHEW inspiration | `sensory-feedback` | TFG |
| Anatomical mesh preparation from MedVision segmentations | `anatomical-models` | TFG |
| Godot / Unity / Unreal comparison for medical XR | `medical-engine-comparison` | TFG |
| VR sculpting; VR-Doh and RibbonSculpt inspirations | `virtual-sculpting` | TFG |
| Substitutional reality using real furniture; Monsteroom inspiration | `real-room-virtual-world` | TFG |
| VR annotation for MedVision datasets | `medical-annotation` | TFG |
| Blender MRI workflow adapted to Godot; Prism inspiration | `medical-image-viewer` | TFG |
| Simulated surgical practice | `surgical-practice` | TFG |
| Hand interaction for OpenNeuroXR-DVE + simplified grip; ForceGrip inspiration | `natural-hand-interaction` | TFG |
| Mixed reality rehabilitation poster inspiration | `rehabilitation-mr` | TFG |
| Existing student-made climbing games | `immersive-games` | TFG |
| Existing VR scenarios and haptic devices | `training-and-haptics` | TFG |
| Fatigue / EEG session visualisation | `fatigue-in-3d` | TFG / TFM |
| Gaze and hand-object interaction, including the repeated OpenNeuroXR-DVE idea; HOIGaze inspiration | `gaze-and-hands` | TFG / TFM |
| Gaussian splatting for medical or anatomical scenes | `gaussian-splatting` | TFG / TFM |
| Existing Godot reinforcement-learning agents | `learning-agents` | TFG / TFM |
| Irregular packing research | `irregular-packing` | TFM |

The source notes ended partway through the final TFM description. The published scope uses only its stated direction: define an irregular packing problem and compare selected heuristic or learning-based approaches. Confirm any additional intended requirements later.

Paper titles above are inspirations supplied in the planning notes, not claims about reproduced results. Public summaries focus on the student's project rather than publication details. The [Godot Gaussian Splatting repository](https://github.com/ReconWorldLab/godot-gaussian-splatting) is retained as an optional starting resource. No superiority or guaranteed performance claims are made.

Duplicate gaze proposals are combined. Grip realism is an extension of the hand-interaction prototype. Anatomy reconstructed from segmented medical images is kept distinct from phone photogrammetry. The tentative Miriam assignment and funding shorthand are not published as confirmed facts.

## Adding or changing an idea

Copy an entry under `ideas` and provide a unique, stable `id`, an existing `group`, `title`, `levels`, `topics`, `summary`, `profile` and `scope`. Keep the summary to about 20–30 words. `levels` and `topics` are lists and must match the filter values. The array order controls the order within each complexity band.

Use `existing` only for an earlier proposal's local URL. Optional `note` and `resource: {title, url}` fields appear inside the expandable scope. Keep IDs stable because the card titles link to `/proposals/#<id>` and can be shared.

Presentation lives in `layouts/proposals/list.html` and `assets/scss/proposals.scss`; filtering lives in `assets/js/proposals.js`. All ideas and their native expandable scopes remain accessible without JavaScript.

Build with the pinned `./scripts/hugo.sh` as described in `debugSite_howto.md`. Check both filters together, keyboard expansion, shared card links, and a narrow mobile viewport after structural changes.
