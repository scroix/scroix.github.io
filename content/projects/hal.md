---
title: "HAL Systems"
org: "HAL Systems / Featherston House"
location: "Ivanhoe, Melbourne"
period: "2017 - 2022, 2026"
role: "Lead Software Engineer"
summary: "Weather-predictive adaptive climate control platform built for Robin Boyd's 1960s Featherston House and still running today."
featured: true
weight: 4
hero_image: "/media/hal/hal-featherston-hero.jpg"
hero_alt: "Interior of Robin Boyd's 1960s Featherston House in Ivanhoe, Melbourne"
stack:
  - "Python"
  - "Nodel"
  - "Raspberry Pi"
  - "Modbus (Advantech ADAM)"
  - "Flask"
  - "InfluxDB / FluxQL"
  - "Grafana"
  - "ASHRAE-55"
collaborators:
  - "Julian Featherston (Founder and hardware/building partner)"
  - "Vicky Featherston and Mary Featherston (Featherston House)"
links:
  - label: "Update for Mary Featherston's Iconic Featherston House (The Design Files, Jun 2018)"
    url: "https://thedesignfiles.net/2018/06/mary-featherstons-granny-flat"
  - label: "Featherston Studio / Two Feathers (ArchDaily, 2019)"
    url: "https://www.archdaily.com/912803/featherston-studio-two-feathers"
  - label: "HAL Systems raises $850,000 for AI climate control (SmartCompany)"
    url: "https://www.smartcompany.com.au/technology/emerging-technology/hal-systems-raises-850000-ai-climate-control-energy-savings/"
  - label: "A New Era For The Iconic Featherston House (The Design Files, Dec 2021)"
    url: "https://thedesignfiles.net/2021/12/homes-featherston-house-robin-boyd-ivanhoe"
---

{{< figure src="/media/hal/hal-featherston-hero.jpg" caption="Robin Boyd's 1960s Featherston House in Ivanhoe: open timber volume, single glazing, and high thermal mass." >}}

Featherston House, designed by Robin Boyd in the late 1960s for Grant and Mary Featherston, is an open-plan modernist house with a soaring ceiling, extensive glazing, and almost no conventional internal zoning. Standard air-conditioning thermostats fight a building like that all day. Working alongside Julian Featherston from 2017 to 2022, I designed and built HAL's original software platform to run the house passively first and mechanically only when needed.

## Adaptive comfort instead of fixed setpoints

Rather than holding an arbitrary 21 degrees year-round, HAL models occupant comfort against the ASHRAE-55 and EN-15251 adaptive standards, which shift the target comfort band based on prevailing outdoor temperatures.

{{< pair src1="/media/hal/hal-dashboard-ui.jpg" cap1="Operator interface showing live room temperatures, operable vents, blinds, and forecast state." src2="/media/hal/hal-comfort-model.gif" cap2="ASHRAE-55 adaptive comfort model shifting indoor targets with seasonal weather." >}}

Twelve-plus environmental sensors across the house and site feed live temperature, humidity, solar irradiance, wind speed, CO2, and soil moisture into Advantech ADAM-6017 and ADAM-6066 Modbus I/O modules and Raspberry Pi hosts running Flask and I2C drivers. Thirty-seven Nodel nodes coordinate the building's response: opening high louvres for night purging before a hot Melbourne day, dropping external blinds ahead of afternoon sun, and only calling CoolMasterNet HVAC units when passive cooling cannot hold the comfort band.

{{< pair src1="/media/hal/hal-system-schematic.jpg" cap1="Control architecture linking Modbus I/O, weather forecasts, Nodel nodes, and HVAC." src2="/media/hal/hal-grafana-prediction.jpg" cap2="InfluxDB and Grafana view comparing forecast thermal drift against observed room response." >}}

## Built to last

Every sensor stream logs into InfluxDB with FluxQL queries and Grafana dashboards so we could inspect how the house actually behaved across Melbourne heatwaves and winter cold snaps instead of guessing from simulations.

HAL later raised $850,000 in commercial funding to bring adaptive climate control into larger commercial buildings, and the original Featherston House installation is still running in 2026, when I jumped back in with Julian to maintain and extend the Ivanhoe system.
