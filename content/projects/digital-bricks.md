---
title: "The Digital Bricks"
org: "University of Melbourne / Science Gallery"
location: "Melbourne Connect"
period: "2020 - 2021"
role: "Creative Technologist (via REELIZE.STUDIO)"
summary: "Playback architecture, real-time NDI pipeline, and ML prototyping for a 226-screen glass-brick media facade set into Melbourne Connect."
featured: false
weight: 5
hero_image: "/media/digital-bricks/digital-bricks-facade-wide.jpg"
hero_alt: "Street-level view of the 226 glass-brick screens embedded into the Science Gallery Melbourne facade"
hero_loop: "/media/digital-bricks/digital-bricks-touchdesigner-loop.mp4"
stack:
  - "TouchDesigner"
  - "Notch"
  - "NDI"
  - "Python"
  - "Docker"
  - "PyTorch / TF2"
  - "GPT-3"
collaborators:
  - "REELIZE.STUDIO (commissioned systems design and creative technology)"
  - "University of Melbourne and Science Gallery Melbourne"
  - "AKQA (Mental exhibition chatbot partner)"
links:
  - label: "MUNIT-runway Docker port (GitHub)"
    url: "https://github.com/scroix/MUNIT-runway"
  - label: "TecoGAN container setup (GitHub)"
    url: "https://github.com/scroix/TecoGAN"
---

{{< loop src="/media/digital-bricks/digital-bricks-touchdesigner-loop.mp4" poster="/media/digital-bricks/digital-bricks-facade-wide.jpg" caption="Real-time TouchDesigner pipeline driving individual glass-brick channels across the facade." >}}

The Digital Bricks is a permanent architectural media facade embedded directly into the brickwork of Melbourne Connect and Science Gallery Melbourne: 226 custom glass bricks, each housing its own display behind translucent glass. While working at REELIZE.STUDIO from March 2020 to March 2021, I designed the content delivery and scheduling architecture so artists and researchers could treat the facade as a single live canvas rather than 226 isolated signage players.

## 126 streams of HD video

The core engineering challenge was getting reliable, frame-accurate playback across 126 real-time HD streams without forcing every guest artist to learn proprietary media-server plumbing. I prototyped and benchmarked NDI routing from TouchDesigner and Notch, tested GPU-accelerated H.265 playback limits, and mapped out the CMS and show-scheduling layer linking artist submissions to the facade hardware.

{{< pair src1="/media/digital-bricks/digital-bricks-facade-closeup.jpg" cap1="Close-up of the illuminated glass bricks embedded into the Science Gallery Melbourne facade." src2="/media/digital-bricks/digital-bricks-cms-architecture.jpg" cap2="CMS, scheduling, and real-time playback architecture designed for the 226-brick facade." >}}

## Generative tooling and the Mental prototype

Alongside the playback system, I containerised early generative video models (MUNIT and TecoGAN in Docker with PyTorch and TensorFlow 2) so creative directors could experiment with image-to-image translation and super-resolution for low-resolution brick textures without wrestling with CUDA dependencies.

{{< figure src="/media/digital-bricks/mental-clusters-explainer.gif" caption="Prototype conversation-tree clustering feeding live Notch and TouchDesigner graphics for the unlaunched Mental facade piece." >}}

For Science Gallery's *Mental* exhibition, I also built an async Python prototype connecting AKQA's GPT-3 chatbot (*Penny*) to live conversation-tree clustering that drove real-time Notch and TouchDesigner visuals across the bricks. That specific piece did not launch on the final facade, though the async clustering and live rendering pipeline fed directly into our later prototyping practices.
