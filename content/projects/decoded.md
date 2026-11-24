---
title: "Decoded"
org: "National Museum of Australia & ASD"
location: "Canberra"
period: "2021 - 2022"
role: "Technical Lead"
summary: "75th-anniversary exhibition for the Australian Signals Directorate combining floor sensors, two-way mirrors, cipher columns, and multiplayer Unity."
featured: false
weight: 7
award_short: "2023 MUSE Creative Awards Winner"
awards:
  - "2023 MUSE Creative Awards Winner"
hero_image: "/media/decoded/decoded-pentagon-cipher-hero.jpg"
hero_alt: "Five Eyes pentagon pillars, floor intercept rings, and ceiling-height digital cipher column inside Decoded"
stack:
  - "Unity"
  - "Python"
  - "Floor Sensors"
  - "Image Recognition"
  - "Show Control"
collaborators:
  - "Jamie Houge (Technical lead partner across NMA05 / NMA07)"
  - "Art Processors creative, software, and installation teams"
  - "National Museum of Australia and Australian Signals Directorate"
links:
  - label: "Decoded project page (Art Processors)"
    url: "https://www.artprocessors.net/projects/national-museum-australia-decoded"
  - label: "Revealing secrets behind the ASD (Art Processors article)"
    url: "https://www.artprocessors.net/articles/revealing-secrets-behind-australian-signals-directorate"
  - label: "Exhibition film (Vimeo)"
    url: "https://vimeo.com/733812969"
  - label: "Multiplayer cyber mission walkthrough (Vimeo)"
    url: "https://vimeo.com/733813055"
  - label: "Case study video (YouTube)"
    url: "https://youtu.be/Da4jSMwXX90"
---

{{< figure src="/media/decoded/decoded-pentagon-cipher-hero.jpg" caption="Five Eyes pentagon pillars, illuminated floor rings, and the ceiling-height digital cipher column." >}}

*Decoded: 75 Years of the Australian Signals Directorate* opened at the National Museum of Australia in 2022 and won a 2023 MUSE Creative Award. Working alongside Jamie Houge as technical lead across the NMA05 and NMA07 streams, I helped turn signals intelligence history into a room of physical puzzles rather than walls of dense text.

## Physical triggers and hidden artifacts

The gallery centres on five pentagon-arranged pillars representing the Five Eyes alliance and a ceiling-height animated cipher wheel. Instead of open vitrines, key historical objects sit behind two-way mirrors: when visitors step onto floor intercept sensors in the right spots, internal lighting fades up to reveal the artifact hidden inside the column.

{{< pair src1="/media/decoded/decoded-cipher-closeup.jpg" cap1="Close-up of the illuminated cipher column pulsing live intercepts through the room." src2="/media/decoded/decoded-silhouettes.jpg" cap2="Projected silhouettes and layered spatial media inside the exhibition." >}}

## Codewords and a 5-player cyber mission

Visitors also carry a mobile image-recognition codeword layer through the space, scanning physical clues to unlock encrypted messages. At the end of the gallery, a 3-to-5 player Unity game drops groups into a timed cyber-defence mission where each station holds different intelligence and players have to talk across the room to stop an attack before the clock runs out.

Much of the technical job was making sure physical sensors, lighting cues, projections, mobile triggers, and multi-station Unity networking stayed rock solid through thousands of school-group sessions without requiring floor staff to reboot machines mid-day.
