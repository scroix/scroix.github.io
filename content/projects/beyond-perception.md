---
title: "Beyond Perception"
org: "Museums Victoria / Scienceworks"
location: "Melbourne"
period: "2018"
role: "Lead Technician (Spatial Audio and Interactive Integration)"
summary: "81-channel Dante AoIP spatial soundscape, live OSC modulation from gallery interactives, and Museums Victoria's Max/MSP soundscape standard."
featured: false
weight: 11
hero_image: "/media/museums-victoria/mv-bp-ripples-hero.jpg"
hero_alt: "Visitor pressing their hands against the illuminated stretched fabric of Ripples in Spacetime inside Beyond Perception"
stack:
  - "Dante AoIP (81-ch)"
  - "Max/MSP & Max for Live"
  - "Ableton Live"
  - "Cinder / openFrameworks"
  - "OSC"
  - "Nodel"
collaborators:
  - "Arup (acoustic design and 81-channel speaker array)"
  - "Museums Victoria Multimedia Engineering, Audio, and Exhibition Design teams"
  - "Photography: Museums Victoria and Ben Healley"
links:
  - label: "Beyond Perception: Seeing the Unseen (Arup case study)"
    url: "https://www.arup.com/projects/beyond-perception-seeing-the-unseen"
  - label: "Exhibition walkthrough video (YouTube)"
    url: "https://www.youtube.com/watch?v=UIuquCXOj9s"
  - label: "spatial_audio_server (GitHub, Museums Victoria)"
    url: "https://github.com/museumsvictoria/spatial_audio_server"
  - label: "mv-gallery-audio-max template (GitHub)"
    url: "https://github.com/scroix/mv-gallery-audio-max"
  - label: "Nodel OSC bridge recipe (GitHub Gist)"
    url: "https://gist.github.com/scroix/22a33fb8ebb868429e64042d153e288e"
---

{{< figure src="/media/museums-victoria/mv-bp-ripples-hero.jpg" caption="Ripples in Spacetime: depth sensors read hand pressure on stretched projection fabric and stream OSC into the spatial soundscape." >}}

*Beyond Perception: Seeing the Unseen* is a permanent exhibition at Scienceworks aimed at teenagers and young adults, exploring invisible physical forces like sound waves, gravitational ripples, and turbulent fluids. I was lead technician on the exhibition through 2018, integrating its 81-channel Dante Audio-over-IP spatial soundscape alongside acoustic engineers from Arup and wiring the room's interactive exhibits directly into the audio engine.

## Making the room react to visitors

Instead of running a static background loop underneath noisy interactives, the gallery treats its 81 overhead and wall speakers as a single responsive acoustic field driven by `spatial_audio_server` over Dante. Individual exhibits push live OSC telemetry across the network so physical actions reshape what the room sounds like:

- **Ripples in Spacetime:** depth cameras detect touch and pressure on stretched projection fabric, streaming OSC into Ableton Live to modulate LFOs, panning, and channel volume.
- **Fluid Dynamics:** real-time fluid simulations send emitter levels over OSC into Live, routed through Dante so turbulent motion disperses dynamically across the ceiling array.
- **Energetic Vibrations:** an openFrameworks shader-based projection mapping tool listens in the opposite direction, reading OSC volume levels back from the nearby soundscape to drive live geometry.

{{< pair src1="/media/museums-victoria/mv-bp-fluid-dynamics.jpg" cap1="Fluid Dynamics projection modulating live spatial audio channels over OSC and Dante." src2="/media/museums-victoria/mv-bp-waves-ben-healley.jpg" cap2="Visitors exploring interactive wave visualisations in Beyond Perception. Photo: Ben Healley." >}}

We also built a four-station trigger-synchronised video experience inside the exhibition with automatic Max for Live vocal ducking so spoken narration stays clear whenever neighbouring stations fire.

## Standardising gallery audio on Max/MSP

Running an 81-channel spatial room surfaced a recurring museum problem: custom C++ audio code is fast, but sound designers cannot tweak a mix on the gallery floor without pulling a programmer off another project.

{{< pair src1="/media/museums-victoria/mv-bp-max-patch.jpg" cap1="Templated Max/MSP gallery soundscape patch wired directly to Nodel start/stop and metering over UDP." src2="/media/museums-victoria/mv-max-soundscape.gif" cap2="Live preset switching inside the reusable Max/MSP gallery audio template." framed2="true" >}}

Following *Beyond Perception*, I added OSC support to Nodel and led Museums Victoria's adoption of a templated Max/MSP soundscape architecture (`mv-gallery-audio-max`). Non-programming audio staff could load multi-channel beds, adjust levels, and swap presets directly in Max while Nodel handled show scheduling, health monitoring, and automatic recovery. That template went on to run subsequent exhibitions including *Love* (2018 - 2019) and *Becoming You* (2020) at the Immigration Museum.

{{< figure src="/media/museums-victoria/mv-bp-vla-wall.jpg" caption="Visitors in front of the radio-astronomy projection wall inside Beyond Perception at Scienceworks." >}}
