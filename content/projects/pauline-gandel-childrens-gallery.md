---
title: "Pauline Gandel Children's Gallery"
org: "Museums Victoria"
location: "Melbourne Museum"
period: "2017"
role: "Lead Technician and Interactive Developer"
summary: "Triple award-winning permanent children's gallery: capacitive drum machine, three-projector mirrored disco sync, Unity colour-book, and Nodel show control."
featured: false
weight: 12
award_short: "2017 Melbourne Awards, VPDA & MAGNA Winner"
awards:
  - "2017 Melbourne Awards Winner (Contribution to Community)"
  - "2017 Victorian Premier's Design Awards Winner (Communication Design)"
  - "2017 MAGNA Winner (Large Museums, Permanent Exhibitions)"
hero_image: "/media/museums-victoria/mv-childrens-gallery-hero.jpg"
hero_alt: "Children dancing across the illuminated three-projector mirrored disco floor in the Pauline Gandel Children's Gallery"
stack:
  - "Python"
  - "Nodel"
  - "Adafruit MPR121"
  - "Unity"
  - "Projection Sync"
  - "Contact-Closure Control"
collaborators:
  - "Museums Victoria Multimedia Engineering, Exhibition Design, and Early Childhood teams"
  - "Photography: John Gollings"
links:
  - label: "Pauline Gandel Children's Gallery walkthrough (YouTube)"
    url: "https://www.youtube.com/watch?v=x_WbUBVbPpo"
---

{{< figure src="/media/museums-victoria/mv-childrens-gallery-hero.jpg" caption="The mirrored Camouflage Disco floor in full swing at Melbourne Museum. Photo: John Gollings." >}}

The Pauline Gandel Children's Gallery is a permanent $1M+ space at Melbourne Museum built for children aged zero to five. It opened to strong public response and won three major awards in 2017: a Melbourne Award, a Victorian Premier's Design Award for Communication Design, and a Museums and Galleries National Award (MAGNA) for Permanent Exhibitions.

I worked across the full build from assembly and AV integration through to Nodel show control and several custom interactive exhibits. Designing technology for under-fives is a ruthless reliability test: there are no written instructions, buttons get hammered by five kids at once, and anything fragile breaks in the first week.

## Three-projector mirrored disco

The room's centrepiece is a circular mirrored dance floor where floor projections and theatrical lighting shift through repeating visual themes. I integrated the three-projector floor blend and contact-closure lighting/video synchronisation so projection transitions and lighting cues lock together cleanly across the angled mirror walls without visible drift.

{{< figure src="/media/museums-victoria/mv-cg-disco-commissioning.jpg" compact="true" caption="Commissioning inside the three-projector mirrored disco during calibration before opening." >}}

## Tactile interactives built for toddlers

Alongside the disco and site-wide Nodel control, I built and integrated two very different hands-on exhibits:

- **Capacitive drum machine:** built with Python and an Adafruit `MPR121` capacitive touch controller embedded directly into solid timber joinery, giving young visitors zero-latency percussion without moving switches or fragile membranes.
- **Pepper's-ghost colour-book:** added robust multi-touch support for a Unity exhibit combining physical storybook pages with layered optical projection so multiple children could interact together without locking up the input state.

Wiring every exhibit in the gallery into Nodel from day one meant floor staff could bring the entire space up or down on a single schedule and spot projector lamp or player faults before the morning school groups arrived.
