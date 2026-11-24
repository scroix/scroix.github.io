---
title: "Mini Mega Model Museum"
org: "Museums Victoria"
location: "Melbourne Museum"
period: "2019"
role: "Technical Lead"
summary: "Exhibition technical lead for Melbourne Museum's scale-and-miniatures gallery, including the Giant Eye microscope projection and 12-button Modbus Security Desk."
featured: false
weight: 10
hero_image: "/media/museums-victoria/mv-mm-giant-eye-hero.jpg"
hero_alt: "Live magnified projection of a visitor's eye on the gallery wall beside the Giant Eye antique microscope"
stack:
  - "Python"
  - "Nodel"
  - "Modbus (ADAM-6066)"
  - "Arduino"
  - "Basler USB3 / SICK IR"
  - "OBS-Studio / WebSockets"
  - "VLC"
collaborators:
  - "Museums Victoria Exhibition Design, Curatorial, and Multimedia Engineering teams"
  - "Studio Mether (exhibition design)"
links:
  - label: "Mini Mega Model Museum (Melbourne Museum)"
    url: "https://museumsvictoria.com.au/melbournemuseum/whats-on/mini-mega-model-museum/"
---

{{< figure src="/media/museums-victoria/mv-mm-giant-eye-hero.jpg" caption="Giant Eye: peering into the antique microscope projects the visitor's magnified eye live across the gallery wall." >}}

*Mini Mega Model Museum* was Melbourne Museum's major 2019 exhibition built around scale: dollhouses, architectural models, miniature engineering prototypes, and microscopic specimens. I was technical lead across the gallery's multimedia systems, coordinating AV integration, documentation, and building two of its main hands-on interactives from scratch.

## Giant Eye

The idea was simple and slightly unsettling: let a visitor lean into an antique microscope and immediately see their own eye projected at wall scale behind them. Inside the microscope housing, I mounted a miniature 1/1.2" Basler `acA1920-40uc` USB3 industrial camera surrounded by a NeoPixel LED ring for clean iris illumination.

{{< pair src1="/media/museums-victoria/mv-mm-giant-eye-eyepiece.jpg" cap1="Inside the custom microscope eyepiece: Basler USB3 optics ringed by NeoPixel illumination." src2="/media/museums-victoria/mv-mm-giant-eye-iso.png" cap2="Isometric signal flow: SICK distance sensor, Arduino, WebSockets, OBS-Studio on an Intel NUC, and overhead Epson projector." framed2="true" >}}

A roof-mounted SICK mid-range infrared distance sensor wired to an Arduino detected when someone leaned over the eyepiece and fired scene transitions over WebSockets into `OBS-Studio` on an Intel NUC. Rather than running a brittle custom video app, using OBS as the live compositor meant staff could recalibrate crop, gain, and exposure on the floor in minutes.

## Security Desk

Across the room, *Security Desk* let visitors play night watchman over miniature museum objects using twelve physical arcade-style buttons lit behind a curved blue console.

{{< pair src1="/media/museums-victoria/mv-mm-security-desk.jpg" cap1="Security Desk: 12 physical trigger buttons, three LG console displays, and the synchronised overhead projection wall." src2="/media/museums-victoria/mv-mm-security-desk-iso.png" cap2="Isometric signal flow: twin ADAM-6066 Modbus relays feeding Nodel and custom VLC timecode sync across four Intel NUCs." framed2="true" >}}

Each button wired into two Advantech `ADAM-6066` Modbus I/O modules feeding Nodel. Pressing a button coordinated four Intel NUCs driving three 22-inch LG console monitors and a Panasonic overhead projector. Because the console monitors and main projection needed to stay frame-consistent across clips, I wrote a custom Python VLC wrapper (`complex_vlc_player.py`) that polled playback timecode and triggered synchronised transitions across all four machines through Nodel.

## Gallery-wide integration

Alongside the custom builds, I produced isometric signal-flow diagrams and gallery manuals for every interactive in the room, covering exhibits like *Pendle Hall* and the gallery's 16-speaker Max/MSP and Dante soundscape, so venue technicians could trace any cable or node fault straight from a single drawing.

{{< pair src1="/media/museums-victoria/mv-mm-gallery-wide.jpg" cap1="Wide view of Mini Mega Model Museum at Melbourne Museum." src2="/media/museums-victoria/mv-mm-pendle-hall.jpg" cap2="Pendle Hall illuminated dolls-house and interactive detail viewer." >}}
