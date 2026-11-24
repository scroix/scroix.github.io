---
title: "Australian Stockman's Hall of Fame"
org: "Australian Stockman's Hall of Fame"
location: "Longreach, Queensland"
period: "2020 - 2021"
role: "Systems Integrator, Show Control Architect, and Support Lead"
summary: "Nodel show control, Kinect Welcome Wall digital kelpies, and remote-region systems integration for a $15M outback museum redevelopment."
featured: false
weight: 9
hero_image: "/media/ashof/ashof-welcome-wall-hero.jpg"
hero_alt: "Visitors walking past the wide Welcome Wall projection at the Australian Stockman's Hall of Fame"
hero_loop: "/media/ashof/ashof-kelpie-follow-loop.mp4"
stack:
  - "Nodel"
  - "Python"
  - "Azure Kinect"
  - "AV Systems Integration"
  - "Remote Telemetry"
collaborators:
  - "Art Processors creative, software, and site commissioning teams"
  - "Australian Stockman's Hall of Fame, Longreach"
  - "Photography: Steve Back (Art Processors)"
links:
  - label: "Australian Stockman's Hall of Fame project page (Art Processors)"
    url: "https://www.artprocessors.net/projects/australian-stockmans-hall-of-fame"
---

{{< loop src="/media/ashof/ashof-kelpie-follow-loop.mp4" poster="/media/ashof/ashof-welcome-wall-hero.jpg" caption="Kinect depth tracking on the Welcome Wall: animated kelpies spot a visitor and trot alongside them down the hall." >}}

The $15M redevelopment of the Australian Stockman's Hall of Fame in Longreach, central-west Queensland, was the project that first brought me to Art Processors as a contractor before I joined full time. I stepped into systems integration, architected the site's Nodel show-control fleet (`nodel-ashof`), built the Kinect tracking for the *Welcome Wall*, and led post-opening technical support.

## Building for a museum 1,200km from Brisbane

When a museum sits in outback Queensland, you design differently. You cannot pop over in an Uber to swap a flaky dongle or restart a hung PC. Every rack, media player, projector, and audio zone needed deterministic daily startup/shutdown sequences, clear health reporting, and remote recovery through Nodel so local staff could run the building from a single interface and our Melbourne team could diagnose faults remotely.

{{< figure src="/media/ashof/ashof-welcome-wall-hero.jpg" caption="The Welcome Wall in Longreach. Photo: Steve Back / Art Processors." >}}

At the entry, the *Welcome Wall* uses overhead Kinect sensors to track visitors walking down the ramp so animated working kelpies turn, trot over, and follow them along the projection wall.

{{< pair src1="/media/ashof/ashof-the-hugh-audio.jpg" cap1="The Hugh location-aware audio guide guiding visitors through the galleries. Photo: Steve Back / Art Processors." src2="/media/ashof/ashof-songlines.jpg" cap2="Songlines to Stockroutes exhibition space inside the redeveloped museum. Photo: Steve Back / Art Processors." >}}
