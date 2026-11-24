---
title: "Museums Victoria Exhibitions"
org: "Museums Victoria"
location: "Melbourne Museum & Scienceworks"
period: "2016 - 2019"
role: "Multimedia Engineer and Exhibition Technical Lead"
summary: "Hands-on engineering across Pauline Gandel Children's Gallery, Beyond Perception's 81-channel Dante soundscape, Mini Mega Model Museum, Gut Feelings, and First Peoples."
featured: false
weight: 10
award_short: "Melbourne Awards, VPDA & MAGNA Winner (2017)"
awards:
  - "2017 Melbourne Awards Winner (Pauline Gandel Children's Gallery)"
  - "2017 Victorian Premier's Design Awards Winner"
  - "2017 MAGNA Winner"
hero_image: "/media/museums-victoria/mv-childrens-gallery-hero.jpg"
hero_alt: "Pauline Gandel Children's Gallery at Melbourne Museum"
hero_loop: "/media/museums-victoria/mv-ticker-loop.mp4"
stack:
  - "Dante AoIP"
  - "Max/MSP"
  - "Cinder / openFrameworks"
  - "Unity"
  - "Arduino / Modbus"
  - "Basler USB3 / SICK IR"
  - "WebSockets"
collaborators:
  - "Museums Victoria Multimedia Engineering, Exhibition Design, and Curatorial teams"
  - "Arup (acoustic design on Beyond Perception)"
  - "Michael Borthwick Consulting (First Peoples Fire-stick)"
  - "Photography: John Gollings (Pauline Gandel Children's Gallery)"
links:
  - label: "Beyond Perception: Seeing the Unseen (Arup case study)"
    url: "https://www.arup.com/projects/beyond-perception-seeing-the-unseen"
---

{{< figure src="/media/museums-victoria/mv-childrens-gallery-hero.jpg" caption="Pauline Gandel Children's Gallery at Melbourne Museum. Photo: John Gollings." >}}

Across four years at Museums Victoria (2016 to 2019), alongside the [Nodel](/projects/nodel/) rollout, I built and maintained physical interactives, spatial audio environments, and custom hardware across permanent and touring exhibitions at Melbourne Museum and Scienceworks.

## Pauline Gandel Children's Gallery (2017)

The Children's Gallery won the 2017 Melbourne Awards, a Victorian Premier's Design Award, and a MAGNA. I engineered several of the floor's tactile exhibits: a capacitive drum machine built to survive thousands of toddlers a week, a three-projector mirrored disco room kept in tight frame sync, and a Unity pepper's-ghost colour book combining physical pages with layered digital projection.

## Beyond Perception: 81-channel Dante soundscape (2018)

For *Beyond Perception: Seeing the Unseen* at Scienceworks, working alongside acoustic engineers at Arup, I built the gallery's 81-channel Dante Audio-over-IP spatial soundscape. Live sensor inputs modulated the audio environment through Cinder and openFrameworks before we transitioned the reusable exhibition template onto Max/MSP so sound designers could author and retune multi-channel rooms directly.

{{< pair src1="/media/museums-victoria/mv-beyond-perception-soundscape.jpg" cap1="Beyond Perception gallery at Scienceworks with its 81-channel spatial speaker array." src2="/media/museums-victoria/mv-max-soundscape.gif" cap2="Max/MSP spatial soundscape authoring template built for gallery audio teams." >}}

## Mini Mega Model Museum (2019)

As technical lead for *Mini Mega Model Museum* at Melbourne Museum, I built two very different hands-on exhibits:

- **Giant Eye:** a Basler USB3 industrial microscope camera paired with a SICK infrared proximity sensor, Arduino hardware control, and a WebSockets display pipeline projecting live microscopic textures across a giant dome eye.
- **Security Desk:** a tactile 12-button Modbus control console coordinating four exhibit PCs and an overhead projector so visitors could switch surveillance feeds across miniature Melbourne dioramas.

{{< pair src1="/media/museums-victoria/mv-minimega-giant-eye.jpg" cap1="Giant Eye exhibit pairing a Basler USB3 microscope camera with SICK IR sensing." src2="/media/museums-victoria/mv-minimega-security-desk.jpg" cap2="Security Desk: 12-button Modbus hardware console driving four PCs and projection." >}}

## Gut Feelings and First Peoples

For *Gut Feelings*, I built *Ticker*, a capacitive-sensing heart-rate exhibit responding cleanly to bare hands on solid joinery. Earlier, on Melbourne Museum's permanent *First Peoples* gallery, I collaborated with Michael Borthwick Consulting on the *Fire-stick* interactive.

{{< loop src="/media/museums-victoria/mv-ticker-loop.mp4" poster="/media/museums-victoria/mv-firestick.jpg" caption="Ticker capacitive-sensing exhibit built for the Gut Feelings exhibition." >}}

{{< figure src="/media/museums-victoria/mv-firestick.jpg" caption="First Peoples Fire-stick exhibit, delivered with Michael Borthwick Consulting." >}}
