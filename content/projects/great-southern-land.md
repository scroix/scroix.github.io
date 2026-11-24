---
title: "Great Southern Land"
org: "National Museum of Australia"
location: "Canberra"
period: "2021 - 2022"
role: "Technical Lead"
summary: "Technical lead across six permanent gallery interactives, a 4-screen Unreal nDisplay mural, spatial audio, and digital object labels."
featured: false
weight: 6
hero_image: "/media/nma-gsl/gsl-platypus-hero.jpg"
hero_alt: "Visitor aiming their arm like a flashlight at the four-screen Platypus mural in Great Southern Land"
hero_loop: "/media/nma-gsl/gsl-interactives-loop.mp4"
stack:
  - "Unreal Engine"
  - "nDisplay"
  - "Azure Kinect"
  - "OSC"
  - "Contentstack"
  - "Spatial Audio"
collaborators:
  - "Jason Reiner (multi-zone spatial audio)"
  - "Edward Blake (Creative Direction and photography)"
  - "Art Processors software, design, and production teams"
  - "National Museum of Australia curatorial and exhibition teams"
---

{{< loop src="/media/nma-gsl/gsl-interactives-loop.mp4" poster="/media/nma-gsl/gsl-platypus-hero.jpg" caption="Gallery interactives running across the Great Southern Land permanent exhibition in Canberra." >}}

*Great Southern Land* was the National Museum of Australia's largest permanent gallery redevelopment since the museum opened in 2001. At Art Processors, I served as technical lead across six bespoke gallery interactives and stayed on through ongoing post-opening support.

## Platypus: your arm as a flashlight

One of the standout pieces in the gallery is *Platypus*, a four-screen vertical mural built in Unreal Engine and synchronised with nDisplay. Rather than asking visitors to touch a screen or read instructions, an Azure Kinect tracks the visitor's arm vector and streams it over OSC into Unreal so their hand acts as a virtual flashlight sweeping through an underwater nocturnal habitat.

{{< figure src="/media/nma-gsl/gsl-platypus-hero.jpg" caption="Platypus four-screen vertical mural driven by Unreal Engine, nDisplay, and Azure Kinect skeletal tracking. Photo: Edward Blake." >}}

Because nDisplay spans multiple vertical displays in a dark gallery, keeping tracking latency low and avoiding jitter when groups cluster in front of the glass took careful filtering of the Kinect skeleton stream and clear fallback behaviour when multiple visitors step into frame at once.

## Touchtables, spatial audio, and object labels

Beyond *Platypus*, the gallery brings together large multi-user touchtables (*Pathways*), Contentstack-backed Digital Object Labels (DOLs) that let curators update interpretation across the floor without touching show builds, and multi-zone spatial audio built in collaboration with Jason Reiner so neighbouring environmental soundscapes blend instead of bleeding across zones.

{{< pair src1="/media/nma-gsl/gsl-pathways-touchtable.jpg" cap1="Pathways multi-user interactive touchtable in Great Southern Land. Photo: Edward Blake." src2="/media/nma-gsl/gsl-dols.jpg" cap2="Contentstack-backed Digital Object Labels integrated into the display-case joinery. Photo: Edward Blake." >}}
