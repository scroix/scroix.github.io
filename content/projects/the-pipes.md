---
title: "The Pipes"
org: "REELIZE.STUDIO / Ramus"
location: "Prahran Square, Melbourne"
period: "2019 - 2020"
role: "Creative Developer"
summary: "Unity content-authoring and motion-modulation tools for an outdoor public art forest of 28 eleven-metre high-resolution LED poles."
featured: false
weight: 13
hero_image: "/media/the-pipes/the-pipes-hero.jpg"
hero_alt: "Illuminated 11-metre LED poles of The Pipes rising against the dusk sky at Prahran Square"
stack:
  - "Unity"
  - "C#"
  - "UI / UX Tooling"
  - "Spatial Lighting"
collaborators:
  - "REELIZE.STUDIO (creative technology partner)"
  - "RAMUS (Bruce Ramus, artist and lighting design) and Material Thinking"
  - "City of Stonnington (Prahran Square / Cato Square)"
links:
  - label: "The Pipes at Prahran Square (YouTube)"
    url: "https://www.youtube.com/watch?v=eyr7atLp2Q8"
---

{{< figure src="/media/the-pipes/the-pipes-hero.jpg" caption="The Pipes at dusk in Prahran Square: 28 eleven-metre poles fitted with vertical high-resolution LED panels facing inward across the plaza." >}}

*The Pipes* is a permanent outdoor digital art installation at Prahran Square (the Cato Square redevelopment in the City of Stonnington, Melbourne), designed by Bruce Ramus and Material Thinking. Twenty-eight eleven-metre poles stand in four groves around the square, each carrying a vertical strip of high-resolution LEDs facing inward so the plaza reads as a slow-moving digital forest after dark.

Working with REELIZE.STUDIO between July 2019 and March 2020, I built Unity content-creator tools to help lighting and motion designers author and test behaviours across the poles before deploying content to the physical site.

## Authoring motion in 3D space

Animating across twenty-eight tall vertical columns arranged in scattered groves is awkward to judge on a flat 2D timeline. Inside Unity, I built custom C# authoring scripts and interactive UI controls (sliders, trigger gates, and parameter panels) for driving timed rotations, transforms, and vertical position modulation across grouped objects in 3D space.

{{< loop src="/media/the-pipes/the-pipes-unity-tools-loop.mp4" poster="/media/the-pipes/the-pipes-unity-tools-poster.jpg" caption="Unity C# prototype driving gate-triggered vertical modulation and timed rotations across grouped spatial emitters." >}}

Giving content creators direct sliders and reusable spatial triggers inside Unity let them iterate on pacing, overlap, and volumetric movement across the groves without rewriting shader or transform code for every sequence.
