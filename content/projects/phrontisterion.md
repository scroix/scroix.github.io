---
title: "Phrontisterion"
org: "Museum of Old and New Art (Mona)"
location: "Hobart, Tasmania"
period: "2023 - 2026"
role: "Technical Lead (Technology Stream) and ML Lead"
summary: "Technology architecture, computer vision book tracking, and tactile rare-book interactives for Mona's $100M underground library wing."
featured: true
weight: 1
hero_image: "/media/mona/mona-livebays-hero.jpg"
hero_alt: "Live Bays illuminated bookshelves inside Mona's Phrontisterion library"
hero_loop: "/media/mona/mona-livebays-loop.mp4"
stack:
  - "Python"
  - "PyTorch"
  - "YOLOv8m"
  - "CoreML"
  - "Blender"
  - "pydantic-ai"
  - "LiDAR"
  - "Projection Mapping"
collaborators:
  - "Andy Perkins (ML pipeline architecture and primary pipeline engineering)"
  - "Edward Blake (Creative Director, co-author of Museum iD article)"
  - "Art Processors iOS and systems teams (capture, AR, and visionOS apps)"
  - "Fender Katsalidas (Architecture) and Mona Curatorial / Library teams"
  - "Photography: Jesse Hunniford / Mona / Art Processors"
links:
  - label: "Phrontisterion: Rethinking the Library (Museum iD, Oct 2026)"
    url: "https://museum-id.com/phrontisterion-rethinking-the-library/"
  - label: "Inside Mona's new $100m library (The Guardian, Jun 2026)"
    url: "https://www.theguardian.com/artanddesign/2026/jun/22/phrontisteriona-mona-hobart-david-walsh-library-book-collection-shakespeare-bowie"
  - label: "ABC News opening coverage (Jun 2026)"
    url: "https://www.abc.net.au/news/2026-06-21/mona-library-phrontisterion-david-walsh-opening/106824466"
  - label: "New library opens at Hobart's Mona (ArchitectureAU, Jun 2026)"
    url: "https://architectureau.com/articles/new-library-opens-at-hobarts-mona/"
  - label: "A library without Dewey (Art Processors)"
    url: "https://artprocessors.net/library-without-dewey"
---

{{< loop src="/media/mona/mona-livebays-loop.mp4" poster="/media/mona/mona-livebays-hero.jpg" caption="Live Bays: touching a book on the 15-metre wall illuminates its neighbours and surfaces context directly on the timber shelves. Video courtesy Mona / Art Processors." >}}

Phrontisterion is Mona's $100M library wing in Hobart, holding David Walsh's collection of roughly 30,000 books in an underground room without Dewey numbers or standard shelves. I was technical lead for the technology stream at Art Processors, working alongside architects Fender Katsalidas, the builder, and Mona's library staff from early design through to opening on 22 June 2026, and I still lead support for the space.

Because books in Phrontisterion are meant to be picked up, moved, and discovered through odd thematic links rather than strict taxonomy, the library needed a way to know which book is sitting where without sticking RFID tags into rare editions. Andy Perkins and I led the machine learning work to scale shelf-camera book identification from an initial 100-book prototype up to 25,000 books. Andy built most of the production pipeline; I set technical direction and trained the models.

## Synthetic shelves and computer vision

Photographing 25,000 books under every angle and gallery lighting condition by hand was never going to finish on schedule. Instead, we built a synthetic data pipeline in Blender from roughly 300 physical book scans, generating 200,000 training images with varied perspective, shadow, wear, and shelf packing.

{{< loop src="/media/mona/mona-blender-synthetic-loop.mp4" poster="/media/mona/mona-blender-twin-vs-real.jpg" caption="Procedural Blender bay generation used to produce 200,000 synthetic book-spine training frames." >}}

Custom CNN spine classifiers trained on that synthetic set hit 94% average accuracy across six real-world test sets. For localisation, a fine-tuned YOLOv8m detector finds book spines at 99.0% precision and 98.8% recall. We exported the models to CoreML so Art Processors' iOS engineers could run them directly on iOS capture apps, AR tools, Mac host machines, and a visionOS demo.

{{< pair src1="/media/mona/mona-cv-spine-detection.jpg" cap1="Fine-tuned YOLOv8m spine detection running on live shelf imagery." src2="/media/mona/mona-blender-twin-vs-real.jpg" cap2="Synthetic Blender shelf twin compared against a real physical bay." >}}

In 2026 I also rebuilt the LLM layer behind Catsys, the internal cataloguing assistant, moving it onto `pydantic-ai` with Gemini 3 Flash, structured `pydantic-evals` checks, and Gemini grounded search so librarians could validate bibliographic data without chasing silent hallucinations.

## Live Bays and The Dial

In the main room, Live Bays turns a 15-metre wall holding more than 2,500 books into a quiet interactive surface. LiDAR, overhead cameras, and calibrated projection mapping respond when a visitor reaches for a spine, highlighting related titles across the bay without putting a glass screen in front of the books.

{{< loop src="/media/mona/mona-dial-loop.mp4" poster="/media/mona/mona-dial.jpg" caption="The Dial: turning the brass wheel scrubs 1:1 scans of Shakespeare's First Folio and 60+ rare books." >}}

Beside the physical rare-book vitrines sits The Dial, a custom table housing 1:1 digital editions of more than 60 rare books and atlases, including Shakespeare's First Folio directly next to the original volume. Rather than a capacitive touchscreen swipe, visitors turn a weighted wheel wired to a 250,000-step rotary encoder. At that resolution, turning pages has physical inertia and micro-scrubbing feels closer to paper than a tablet.

{{< pair src1="/media/mona/mona-dial.jpg" cap1="The Dial in situ next to the rare-book collection. Photo: Jesse Hunniford / Mona / Art Processors." src2="/media/mona/mona-architecture-stairs.jpg" cap2="Underground library volume designed with Fender Katsalidas. Photo: Jesse Hunniford / Mona / Art Processors." >}}

After opening, Creative Director Edward Blake and I wrote up the design and technical lessons from the build for [Museum iD](https://museum-id.com/phrontisterion-rethinking-the-library/), covering why the room avoids search bars and how the computer vision stays invisible to visitors.
