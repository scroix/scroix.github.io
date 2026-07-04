---
title: "Hello, I'm Julien."
date: "1988-10-28"
aside: "The pictures say it better than I can. The code lives on [GitHub](https://github.com/scroix) and [GitLab](https://gitlab.com/scroix)."
portrait:
  img: "/img/julien.jpg"
  alt: "Julien sitting in front of Robert Delaunay's Rythme"
  caption: "me, upstaged by a delaunay"
shelf:
  - img: "/img/featherston.jpg"
    alt: "Featherston House"
    caption: "a house that reads the weather"
    anchor: "featherston"
  - img: "/img/beyond-perception.jpg"
    alt: "Beyond Perception exhibition"
    caption: "81 channels of museum sound"
    anchor: "mv"
  - img: "/img/childrens-gallery.jpg"
    alt: "Children's Gallery at Melbourne Museum"
    caption: "a gallery for small visitors"
    anchor: "mv"
  - img: "/img/ticker.gif"
    alt: "Ticker exhibit counting microbes"
    caption: "counting the microbiome"
    anchor: "ticker"
  - img: "/img/firestick.jpg"
    alt: "Fire-stick exhibit"
    caption: "fire you start by hand"
    anchor: "firestick"
  - img: "/img/minimega.jpg"
    alt: "Mini Mega Model Museum"
    caption: "a mini mega model museum"
    anchor: "mv"
projects:
  - id: "featherston"
    when: "2017 – 20"
    emoji: "🏡"
    name: "habitat abstraction layer"
    tagline: "A dynamic control system for Featherston House."
    body: >-
      Robin Boyd's award-winning house, taught to forecast the weather and prepare itself:
      adaptive comfort modelling [à la ASHRAE-55](https://comfort.cbe.berkeley.edu/), a dozen
      sensors, and a hand-rolled brain in Jython and Python. Featured in
      [ArchDaily](https://www.archdaily.com/912803/featherston-studio-two-feathers) and
      [The Design Files](https://thedesignfiles.net/2016/08/featherston-2016/).
    side:
      img: "/img/featherston-dashboard-thumb.jpg"
      alt: "Featherston climate dashboard"
      caption: "the house, taking its own temperature"
  - id: "pipes"
    when: "2019"
    emoji: "⚡"
    name: "the pipes"
    tagline: "A digital art installation for Cato Square."
    body: >-
      Twenty-eight 11-metre poles of high-resolution LED, with Ramus Lighting. I built the
      content creators' tools inside their Unity project.
      [Watch it run.](https://www.youtube.com/watch?v=eyr7atLp2Q8)
  - id: "ticker"
    when: "2019"
    emoji: "🐛"
    name: "ticker"
    tagline: "A capacitance-sensor giving scale to the microbiome."
    body: >-
      An Arduino compares the microbes in your gut with the universe's other big numbers.
      Touch opt-in; wonder mandatory.
    side:
      img: "/img/ticker.gif"
      alt: "Ticker exhibit counting"
      caption: "counting the microbiome"
  - id: "firestick"
    when: "2017"
    emoji: "🔥"
    name: "fire-stick"
    tagline: "A simulation of traditional Aboriginal burning technique."
    body: >-
      A rotary encoder, a humidity sensor and a NeoPixel flame: rub and blow, and the fire
      answers. Built with Michael Borthwick Consulting for an exhibition on Australia's
      First Peoples.
    side:
      img: "/img/firestick.jpg"
      alt: "Fire-stick exhibit"
      caption: "fire you start by hand"
work:
  - id: "mv"
    when: "2016 – 19"
    name: "museums victoria"
    url: "https://museumsvictoria.com.au/"
    tagline: "The largest museums organisation in Australasia; two million visitors a year."
    body: >-
      I helped replace the control system behind ~400 exhibits (some 2,000 networked
      audio-visual devices) with [Nodel](https://github.com/museumsvictoria/nodel/), now
      open-source and running in museums from Wellington to Vancouver. I also
      [led the move](https://github.com/scroix/mv-gallery-audio-max) to Max/MSP for gallery
      soundscapes, including an 81-channel spatial system fed live by the exhibits themselves.
    interlude:
      img: "/img/max-soundscape.gif"
      alt: "Max/MSP gallery audio patch"
      caption: "the patch that plays the galleries"
    list:
      - "recipes I'm fond of: [a VLC wrapper](https://github.com/museumsvictoria/nodel-recipes/tree/master/VLC%20media%20player), [a Windows controller](https://github.com/museumsvictoria/nodel-recipes/tree/master/Computer%20Controller/Windows%2010), [an exhibit template](https://github.com/museumsvictoria/nodel-recipes/tree/master/Exhibit)"
      - "exhibitions built along the way: Mini Mega Model Museum, Beyond Perception, the Children's Gallery"
    side:
      img: "/img/minimega.jpg"
      alt: "Mini Mega Model Museum"
      caption: "small things, writ large"
  - id: "rmit"
    when: "2017 – 18"
    name: "rmit university"
    url: "https://www.rmit.edu.au/"
    tagline: "Tutor & occasional guest lecturer."
    body: >-
      Helped design and teach *Programming Internet of Things* (Python, Raspberry Pi,
      Google Cloud), and taught first-years object-oriented Java, from variables up to
      polymorphism.
  - id: "fourward"
    when: "2014 – 15"
    name: "4ward productions"
    tagline: "Music festivals, from SketchUp to stage."
    body: >-
      Site design for the first Melbourne season of
      [Piknic Électronik](https://piknicelectronik.com/melbourne/), and a dozen crew
      coordinated for Melbourne Music Week's flagship venue.
      [Some footage survives.](https://youtu.be/ZfgX1Z9GTSE)
  - id: "abc"
    when: "2013 – 15"
    name: "abc"
    tagline: "Broadcast television, behind the camera."
    body: >-
      Camera operator on *Studio 3*; camera assistant on *Mad as Hell* and
      *Spicks and Specks*; CCU at the Australian Open, on loan to Seven.
    side:
      img: "/img/abc-studio.jpg"
      alt: "On the Studio 3 floor at the ABC"
      caption: "the studio 3 floor"
education:
  creds:
    - when: "2014 – 19"
      name: "Bachelor of Software Engineering, RMIT"
      note: "gpa 3.5"
    - when: "2015 – 18"
      name: "Diploma of Languages (French)"
      note: "cefr b1"
    - when: "2013"
      name: "Diploma of Audiovisual Technology"
      note: "gpa 3.6"
    - when: "2012"
      name: "Certificate IV, Audiovisual Technology"
      note: "gpa 3.1"
  souvenirs: >-
    Degree souvenirs: [a maze generator (and solver!)](https://gitlab.com/scroix/AlgorithmsA2),
    [a Connect 4 bot](https://gitlab.com/scroix/s3369242-ai1901-connectfour), and
    [three.js turtles calmly swimming in a pond](https://scroix.gitlab.io/tortue3d).
---

I'm a *software engineer* and *creative technologist*. Since 2016 I've worked in museums, installation and the built environment; in past lives, on music festivals and in broadcast television.
