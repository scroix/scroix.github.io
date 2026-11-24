---
title: "Maestro"
org: "Museums of History NSW"
location: "Museum of Sydney"
period: "2023"
role: "Technical Lead and Systems Developer"
summary: "Gesture-driven conducting room built with TouchDesigner, Kinect, Ableton Live, and 7800px curved projection for Sydney Opera House at 50."
featured: true
weight: 2
hero_image: "/media/maestro/maestro-conducting-hero.jpg"
hero_alt: "Visitors conducting responsive golden light ribbons across the curved Maestro projection wall"
hero_loop: "/media/maestro/maestro-conducting-loop.mp4"
stack:
  - "TouchDesigner"
  - "Python"
  - "Azure Kinect"
  - "Ableton Live"
  - "MadMapper"
  - "OSC"
collaborators:
  - "Art Processors design, sound, and creative production teams"
  - "Museums of History NSW (The People's House: Sydney Opera House at 50)"
  - "Photography: Declan May"
links:
  - label: "The People's House: Sydney Opera House at 50 (Art Processors)"
    url: "https://artprocessors.net/projects/peoples-house-sydney-opera-house-50"
---

{{< loop src="/media/maestro/maestro-conducting-loop.mp4" poster="/media/maestro/maestro-conducting-hero.jpg" caption="Visitors conducting layered orchestral stems and real-time particle ribbons across the curved wall." >}}

Maestro was the centrepiece interactive inside *The People's House: Sydney Opera House at 50* at the Museum of Sydney, which opened in June 2023. The brief sounded simple: let a room full of strangers conduct a piece of music together without tutorials, floor decals, or wearables, and make it feel rewarding whether one person walks in or twelve kids wave their arms at once.

I was hands-on technical lead for Maestro, building the sensor tracking, the audio bridge, and the multi-projector calibration pipeline on site.

## Two zones, one score

Gesture rooms fail quickly when every visitor has equal control over tempo and melody; the mix collapses into noise. To prevent that, we split the floor into two distinct tracking zones fed by overhead Azure Kinect sensors:

- **Front Maestro zones** give visitors closer to the wall direct control over melody, harmony, and rhythm stems.
- **Rear Impressionist zones** read broader body velocity to swell overall orchestral volume and visual intensity, so anyone lingering at the back still shapes the room.

Inside TouchDesigner, I wrote a custom `maestro_tdableton_bridge.tox` component that converts smoothed skeletal velocity, hand height, and dwell state into continuous OSC control streams for Ableton Live. Keeping musical quantisation inside Ableton meant rapid arm movements felt immediate while still landing on the beat.

{{< pair src1="/media/maestro/maestro-bts-julien-desk.jpg" cap1="Commissioning TouchDesigner and Ableton Live on site at the Museum of Sydney. Photo: Declan May." src2="/media/maestro/maestro-bts-projection-grid.jpg" cap2="7800x1920 curved projection warp and blend alignment in MadMapper. Photo: Declan May." >}}

## Warping 7800 pixels onto a curve

Visuals rendered live in TouchDesigner and ran through MadMapper across a curved 7800x1920 pixel canvas. Commissioning happened directly in front of the wall with a folding table, tweaking projector blend masks, Kinect occlusion margins, and Ableton limiter curves while museum staff walked through to stress-test multi-person edge cases.

The calibration photo above is my favourite record of that kind of work: half software engineering, half squinting at alignment grids at 10pm until the seam disappears.
