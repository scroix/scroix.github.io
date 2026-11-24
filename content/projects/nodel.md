---
title: "Nodel"
org: "Museums Victoria & Open Source"
location: "Melbourne & Worldwide"
period: "2016 - present"
role: "Rollout Lead, Recipe Author, and Core Maintainer"
summary: "Open-source distributed museum control system rolled out across 427 exhibits at Museums Victoria and used by institutions reaching 10M+ visitors a year."
featured: true
weight: 3
hero_image: "/media/nodel/nodel-signal-propagation.jpg"
hero_alt: "Nodel signal propagation interface showing distributed node events and actions"
stack:
  - "Java"
  - "Jython / Python"
  - "HTML / JS"
  - "REST / JSON"
  - "OSC"
  - "TCP / UDP / RS232"
  - "GraalVM"
collaborators:
  - "Michael Borthwick and Museums Victoria Multimedia Engineering team (original creators)"
  - "Global open-source contributors across museums in Australia, New Zealand, North America, and Europe"
links:
  - label: "github.com/museumsvictoria/nodel (MPL-2.0)"
    url: "https://github.com/museumsvictoria/nodel"
  - label: "github.com/museumsvictoria/nodel-recipes (MIT)"
    url: "https://github.com/museumsvictoria/nodel-recipes"
  - label: "Hands on with Nodel workshop (Museums and the Web 2017)"
    url: "https://mw17.mwconf.org/proposal/hands-on-with-nodel-decentralised-and-open-source-multimedia-control-for-museums-and-galleries/index.html"
  - label: "nodel-skills agent tooling (GitHub)"
    url: "https://github.com/scroix/nodel-skills"
---

{{< figure src="/media/nodel/nodel-quick-start.gif" caption="Nodel's browser-based UI binding actions and events across decentralised gallery nodes." >}}

Nodel is an open-source distributed control system created at Museums Victoria for running digital exhibits reliably without proprietary AV control hardware or single points of failure. Every piece of equipment (a projector, a Windows exhibit PC, a BrightSign player, a lighting dimmer, a gallery master switch) runs as a small Python-scripted node inside a Java host and communicates over JSON/REST with zero-config multicast discovery.

When I joined Museums Victoria in 2016, I deferred my Software Engineering degree at RMIT for 18 months to lead the rollout of Nodel across all three public venues: Melbourne Museum, Scienceworks, and the Immigration Museum.

## 427 exhibits and 2,000 devices

Rolling a control system into live museums means working around opening hours, legacy hardware from the early 2000s, and exhibits that cannot go dark during school holidays. Over that rollout we brought 427 multimedia exhibits and roughly 2,000 networked AV devices across more than 50 galleries under Nodel.

{{< pair src1="/media/nodel/nodel-signal-propagation.jpg" cap1="Distributed signal propagation between a gallery schedule node and downstream exhibit devices." src2="/media/nodel/nodel-node-overview.jpg" cap2="Node console showing live actions, events, parameters, and status bindings." >}}

Alongside commissioning, I wrote reusable Python recipes that still ship in `nodel-recipes` (including a VLC player wrapper, a Windows 10 host controller, an OSC bridge, and the standard exhibit template), authored public documentation, and ran hands-on training for venue technicians so the team could maintain the fleet without calling a specialist contractor every time a lamp failed.

## Global adoption and ongoing work

In 2017 I co-facilitated the *Hands on with Nodel* workshop at Museums and the Web in Cleveland, Ohio, which led directly to consultancy work helping US institutions adopt the platform. Today Nodel runs galleries for institutions reaching over 10 million visitors a year worldwide, including Te Papa, Science World Vancouver, the Children's Museum of Indianapolis, ACMI, WA Museum, Arts Centre Melbourne, and Auckland War Memorial Museum.

I still use Nodel in production at Art Processors (including [Pentridge Prison Tours](/projects/pentridge/) and the [Australian Stockman's Hall of Fame](/projects/ashof/)) and maintain side modernisation projects around it: a refreshed web UI (`nodel-webui-v2`), GraalVM experiments, `homebrew-nodel`, and `nodel-skills` for inspecting live hosts from coding agents.
