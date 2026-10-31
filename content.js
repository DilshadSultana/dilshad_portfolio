/*
  YOUR EDITABLE PORTFOLIO CONTENT
  --------------------------------
  Option A (no code): open editor.html, edit the fields and download content.js.
  Option B: edit the values directly here, between the quotation marks.
  Publication statuses are intentionally cautious: no under-review work is described as published.
*/
window.PORTFOLIO_DATA = {
  "name": "Dilshad Sultana",
  "heroImage": "assets/dilshad-portrait.webp",
  "heroRoleLabel": "Energy Science & Engineering · KUET · Bangladesh",
  "initials": "DS",
  "role": "Energy Science & Engineering Graduate",
  "eyebrow": "Research · Energy systems · Sustainability",
  "headline": "Researching better energy futures.",
  "heroDescription": "An engineering foundation, a research mindset, and a direction toward renewable integration.",
  "location": "Bangladesh",
  "email": "dilshadsultana6660@gmail.com",
  "linkedIn": "",
  "github": "",
  "cvUrl": "",
  "previousPortfolio": "https://sites.google.com/stud.kuet.ac.bd/dilshadacademicportfolio/home",
  "availability": "Open to funded MSc research opportunities · 2027",
  "aboutLead": "An engineering foundation, a research mindset, and a direction toward renewable integration.",
  "about": [
    "I completed my B.Sc. in Energy Science and Engineering at Khulna University of Engineering & Technology (KUET) in August 2026. My undergraduate work combined experimental energy research, building simulation, modelling and project-based engineering.",
    "My next academic goal is to deepen my expertise in power systems, smart grids and renewable energy integration. I am interested in graduate research that connects rigorous analysis with practical energy-sector challenges."
  ],
  "stats": [
    {"value":"2026","label":"KUET graduate"},
    {"value":"07","label":"Research & technical projects"},
    {"value":"03","label":"University merit scholarships"}
  ],
  "education": {
    "degree":"B.Sc. (Engineering) in Energy Science and Engineering",
    "school":"Khulna University of Engineering & Technology (KUET)",
    "period":"2022 – August 2026",
    "cgpa":"3.27 / 4.00",
    "recentGpa":"3.53 / 4.00 (last two years, 80 credits)",
    "courses":["Power System Engineering","Power Electronics","Energy Storage Systems","Solar Photovoltaic Systems","Energy Audit & Management","HVAC&R System Design","Power Plant Engineering","Electrical Machines","Energy Engineering Simulation","Thermodynamics & Heat Transfer"]
  },
  "interests": [
    {"name":"Power systems & smart grids","detail":"Grid operation, flexibility, microgrids and the integration of variable renewable resources."},
    {"name":"Renewable energy integration","detail":"Solar PV, hybrid renewable systems and pathways toward reliable, low-carbon power."},
    {"name":"Building energy performance","detail":"Simulation-based assessment of glazing, cooling demand and building-envelope performance."},
    {"name":"Energy modelling & sustainability","detail":"Computational analysis, engineering simulation and experimental evaluation of energy technologies."}
  ],
  "projects": [
    {
      "id":"aerogel-glazing", "number":"01", "title":"Aerogel-integrated glazing for lower building cooling demand", "kind":"Research", "topic":"Building energy", "year":"2026", "featured":true,
      "summary":"Compared single, double and aerogel-integrated glazing in a simulated multi-storey commercial office building in Dhaka.",
      "approach":"Developed comparative DesignBuilder/EnergyPlus cases and examined cooling electricity, solar gains and glazing thermal characteristics.",
      "outcome":"The aerogel-integrated case showed approximately 4.0% lower annual cooling electricity than single glazing in the analysed model.",
      "metric":"4.0%", "metricLabel":"modelled cooling electricity reduction", "tools":["DesignBuilder","EnergyPlus","Building energy modelling","Python"], "visual":"glazing", "link":""
    },
    {
      "id":"biodiesel", "number":"02", "title":"Biodiesel from blended jojoba and sesbania oils", "kind":"Thesis", "topic":"Experimental research", "year":"2026", "featured":true,
      "summary":"Undergraduate thesis investigating non-edible oils and their blends as feedstocks for biodiesel production and characterization.",
      "approach":"Conducted extraction, esterification, transesterification and fuel-property characterization with comparisons to biodiesel standards.",
      "outcome":"Evaluated how feedstock composition influenced selected fuel properties; completed and defended undergraduate thesis.",
      "metric":"B.Sc.", "metricLabel":"completed undergraduate thesis", "tools":["Laboratory experimentation","Fuel characterization","ASTM / EN standards","Data analysis"], "visual":"molecule", "link":""
    },
    {
      "id":"solar-power-bank", "number":"03", "title":"Portable solar-powered power bank", "kind":"Project", "topic":"Solar energy", "year":"Undergraduate project", "featured":true,
      "summary":"Designed and constructed a portable charging prototype using a small photovoltaic panel and rechargeable battery storage.",
      "approach":"Integrated a 0.75 W solar panel with a 7000 mAh storage unit for a compact energy application.",
      "outcome":"Demonstrated a hands-on application of solar harvesting and battery-based portable power.",
      "metric":"0.75 W", "metricLabel":"prototype PV panel", "tools":["Solar photovoltaics","Battery storage","Circuit prototyping"], "visual":"solar", "link":""
    },
    {
      "id":"orc", "number":"04", "title":"Recuperative Organic Rankine Cycle analysis", "kind":"Simulation", "topic":"Thermal systems", "year":"Academic project", "featured":false,
      "summary":"Energetic and exergetic evaluation of a recuperative Organic Rankine Cycle.",
      "approach":"Modelled and cross-checked thermodynamic performance using Engineering Equation Solver and Python.",
      "outcome":"Examined system performance through energy and exergy calculations.", "metric":"EES + Python", "metricLabel":"simulation tools", "tools":["EES","Python","Thermodynamics","Exergy analysis"], "visual":"cycle", "link":""
    },
    {
      "id":"pctrans", "number":"05", "title":"PCTRAN nuclear power plant transient analysis", "kind":"Simulation", "topic":"Power generation", "year":"Academic project", "featured":false,
      "summary":"Comparative analysis of break sizes between hot and cold legs under loss of AC power scenarios.",
      "approach":"Used PCTRAN to examine modelled plant behaviour under specified transient conditions.",
      "outcome":"Practised simulation-based evaluation of complex power-plant responses.", "metric":"PCTRAN", "metricLabel":"simulation environment", "tools":["PCTRAN","Transient analysis","Nuclear power engineering"], "visual":"cycle", "link":""
    },
    {
      "id":"fire-alarm", "number":"06", "title":"Heat- and smoke-sensor fire alarm prototype", "kind":"Project", "topic":"Electronics", "year":"Academic project", "featured":false,
      "summary":"Modelled a fire-alert circuit with heat and smoke detection and an LCD display.",
      "approach":"Designed and simulated the sensor-integrated circuit in Tinkercad.",
      "outcome":"Combined sensor interfacing, basic logic and visual alert output.", "metric":"Sensors", "metricLabel":"heat and smoke detection", "tools":["Tinkercad","Arduino","Electronics"], "visual":"circuit", "link":""
    },
    {
      "id":"pv-simulink", "number":"07", "title":"Solar cell and photovoltaic panel simulation", "kind":"Simulation", "topic":"Solar energy", "year":"Academic project", "featured":false,
      "summary":"Simulated solar-cell and panel behaviour through a MATLAB/Simulink model.",
      "approach":"Used block-based simulation to explore photovoltaic system characteristics.",
      "outcome":"Developed foundational modelling experience in solar energy applications.", "metric":"Simulink", "metricLabel":"modelling environment", "tools":["MATLAB","Simulink","Solar photovoltaics"], "visual":"solar", "link":""
    }
  ],
  "publications": [
    {"type":"Conference manuscript", "status":"Submitted · under review", "title":"Production and Characterization of Biodiesel from Blended Simmondsia chinensis and Sesbania cannabina Oils", "note":"Conference submission; not yet accepted or published.", "year":"2026", "link":""},
    {"type":"Conference manuscript", "status":"Submitted · under review", "title":"Construction and Performance Evaluation of Solar-Powered Portable Power", "note":"Conference submission; not yet accepted or published.", "year":"2026", "link":""},
    {"type":"Conference abstract", "status":"Abstract submitted", "title":"Comparative Energy Assessment of Single, Double and Aerogel-Integrated Glazing for a Commercial Office Building in Dhaka Using DesignBuilder", "note":"Abstract submitted for conference consideration; not yet accepted.", "year":"2027", "link":""},
    {"type":"Journal research", "status":"Manuscripts in preparation", "title":"Two journal manuscripts currently in preparation", "note":"Titles and target journals are not publicly listed at this stage.", "year":"Ongoing", "link":""}
  ],
  "experience": [
    {"year":"2025 – 2026","role":"Treasurer","place":"Energy & Automation Club, KUET","description":"Supported club activities and participated in sponsorship outreach for Energy Fest 1.0."},
    {"year":"2024","role":"Industrial attachment · 7 days","place":"Khulna 225 MW Combined Cycle Power Plant · NWPGCL","description":"Industrial exposure to plant operations, power generation equipment and associated engineering systems."},
    {"year":"2023 – 2024","role":"Assistant Cultural Secretary","place":"Greater Cumilla Association of KUET","description":"Contributed cultural posters representing Cumilla's heritage for university admission-related activities."},
    {"year":"2020 – Present","role":"Practical business experience","place":"Family electronic-components business","description":"Exposure to electronic components, customer interactions and day-to-day business operations."}
  ],
  "training": [
    {"name":"Data Analysis with Python and MATLAB", "source":"EDGE Training Program · ICT Division, Government of Bangladesh", "year":"2024", "detail":"80-hour training"},
    {"name":"Occupational Safety, Health and Environment Management", "source":"Department of Energy Science and Engineering · KUET", "year":"2024", "detail":"Training"},
    {"name":"Environment Policy, Green Education, Leadership & Communication", "source":"Shishu Ullash Organization / International Global Youth Platform", "year":"2025", "detail":"Training"},
    {"name":"Industrial visits", "source":"Atomic Energy Research Establishment; HAMKO and Abdullah Battery Company Limited", "year":"Academic", "detail":"Site visits"}
  ],
  "skills": [
    {"group":"Simulation & energy systems", "items":["DesignBuilder","EnergyPlus","PCTRAN","ANSYS Workbench","EES","ASPEN HYSYS","MATLAB / Simulink"]},
    {"group":"Programming & analysis", "items":["Python","Google Colab","MATLAB","Microsoft Excel","Scientific visualization","Thermodynamic modelling"]},
    {"group":"Design & prototyping", "items":["SolidWorks","CAD","Arduino","Tinkercad","LOGO! Soft Comfort","Revit"]},
    {"group":"Research & communication", "items":["Technical writing","Research figures","Microsoft Office","LaTeX","Canva","draw.io"]}
  ],
  "recognition": [
    {"title":"University Merit Scholarship","detail":"Awarded three times at KUET","year":"2022–2023"},
    {"title":"Technical Scholarship","detail":"Awarded for academic merit at college","year":"Pre-university"},
    {"title":"Debate & public speaking","detail":"Chittagong Divisional Debate Festival · NDF BD","year":"2016"},
    {"title":"Campus volunteering","detail":"Energy department admission-stall posters and street-painting activities","year":"Student activities"}
  ]
};
