// @ts-nocheck

import { useState, useRef, useEffect } from "react";
import logoWordmark from "@/assets/images/logo-wordmark.png";
import bestInShowLogo from "@/assets/images/bestinshow-tagline-logo.png";
import { Link } from "wouter";

const R = [["SVG Thrive","Accel","AB;National","MVP;Pilot;Comm","Ag-focused accelerator + investor with strong corporate partner network","commercialization help/first customers","Broad-acre crops;Livestock;Specialty cro","Precision agronomy/DSS;Sensors/IoT/weather;Automation/roboti"],["Creative Destruction Lab (CDL) Rockies","Accel","AB","MVP;Pilot","Science-based ventures seeking mentorship from founders and investors \u2014 partial ag focus","commercialization help/first customers","",""],["Bioenterprise Canada","Accel","AB;National","MVP;Pilot;Comm","National ag accelerator \u2014 Canada's Food & Agri-Tech Engine for triage + connections","commercialization help/first customers","",""],["Platform Calgary","Accel","AB","Idea;MVP;Pilot","Calgary's tech hub \u2014 general startup support, programming, co-working","commercialization help/first customers","",""],["Plug and Play Alberta","Accel","AB","MVP;Pilot;Comm","Corporate-startup matchmaking in food and sustainability verticals","channel/distribution partners","",""],["Innovate Calgary (University of Calgary)","Accel","AB","Idea;MVP","U of C researchers spinning out innovations \u2014 partial ag mentorship","commercialization help/first customers","",""],["Co.Labs","Accel","AB","Idea;MVP","General tech accelerator in Edmonton \u2014 not ag-specific","commercialization help/first customers","",""],["Catalyst Incubator","Accel","AB","Idea;MVP","General business incubation \u2014 not ag-specific","commercialization help/first customers","",""],["Alberta Next 20","Accel","AB","Scale","Scale-up program for Alberta's highest-growth companies","commercialization help/first customers","",""],["Alberta Innovates","Fund","AB","Idea;MVP;Pilot","Non-dilutive grants for AB innovators across TRL stages \u2014 partial ag focus","funding/non-dilutive capital","",""],["NRC IRAP","Fund","AB;National","MVP;Pilot","Federal non-dilutive funding + advisory for SMEs doing R&D","funding/non-dilutive capital","",""],["CAAIN (Canadian Agri-Food Automation and Intelligence N","Fund","AB;National","Pilot;Comm","Co-investment grants for ag automation projects with industry partners","funding/non-dilutive capital","Broad-acre crops;Livestock;Mixed/Other","Automation/robotics/UAV;Sensors/IoT/weather;Precision agrono"],["PrairiesCan","Fund","AB;SK;MB","MVP;Pilot;Comm","Federal econ dev agency for Prairies \u2014 innovation and community funding","funding/non-dilutive capital","",""],["Farm Credit Canada (FCC)","Fund","AB;National","Comm;Scale","Crown corp lender for ag businesses \u2014 loans, VC, knowledge resources","funding/non-dilutive capital","",""],["Protein Industries Canada","Fund","AB;SK;MB;National","Pilot;Comm;Scale","Co-investment for plant protein value chain \u2014 ingredients, processing, crops","funding/non-dilutive capital","Broad-acre crops","Traceability/supply chain/processing;Biologicals/genetics"],["Emissions Reduction Alberta (ERA)","Fund","AB","Pilot;Comm","Non-dilutive funding for GHG-reducing innovations \u2014 ag qualifies with emissions angle","funding/non-dilutive capital","Broad-acre crops;Livestock","Precision agronomy/DSS;Sensors/IoT/weather"],["ATB Financial","Fund","AB","Comm;Scale","AB crown corp bank with ag lending and startup banking","funding/non-dilutive capital","",""],["Natural Products Canada","Fund","AB;National","Pilot;Comm","Equity funding for natural product innovations (biologicals, plant-derived)","funding/non-dilutive capital","Mixed/Other","Biologicals/genetics"],["Tall Grass Ventures","Fund","AB;National","MVP;Pilot","Pre-Series A agrifood tech VC \u2014 $32M fund, 11+ portfolio companies, deep ag expertise","funding/non-dilutive capital","Broad-acre crops;Livestock;Specialty cro","Precision agronomy/DSS;Sensors/IoT/weather;Biologicals/genet"],["Verdex Capital / Carrot Ventures","Fund","AB;National","Idea;MVP","AgTech venture studio \u2014 sources IP, recruits CEOs, forms + funds new companies","funding/non-dilutive capital","Broad-acre crops;Mixed/Other","Precision agronomy/DSS;Biologicals/genetics"],["District Ventures Capital","Fund","AB;National","Comm;Scale","Food/bev brand VC \u2014 not farm tech, food CPG focus","funding/non-dilutive capital","",""],["Alberta Enterprise Corporation (AEC)","Fund","AB","MVP;Pilot","Provincial VC catalyst \u2014 invests in funds that finance AB tech companies incl agtech","funding/non-dilutive capital","",""],["Accelerate Fund IV","Fund","AB","MVP;Pilot","Angel co-investment fund for pre-Series A AB tech companies \u2014 up to $500K per deal","funding/non-dilutive capital","",""],["The51 Food and AgTech Fund","Fund","AB","MVP;Pilot","Women-led seed VC for ag biotech, farm innovation, automation, food innovation","funding/non-dilutive capital","Broad-acre crops;Livestock;Mixed/Other","Automation/robotics/UAV;Biologicals/genetics"],["Startup TNT","Fund","AB;SK;MB","MVP;Pilot","Angel investment summits \u2014 Agri-Food Summit stream, $150K-500K+ per winner","funding/non-dilutive capital","",""],["Olds College Smart Farm","Pilot","AB","MVP;Pilot","Leading smart farm for precision ag trials, sensor testing, applied research","pilot site/field validation","Broad-acre crops;Mixed/Other","Precision agronomy/DSS;Sensors/IoT/weather;Automation/roboti"],["Lakeland College Smart Farm","Pilot","AB","MVP;Pilot","Applied research and smart farm in NE Alberta \u2014 crop and livestock","pilot site/field validation","Broad-acre crops;Livestock","Sensors/IoT/weather;Farm ops/FMS/recordkeeping"],["FarmTech Conference","Event","AB","Pilot;Comm","Alberta's largest crop production conference \u2014 major farmer audience","events/exposure/networking","Broad-acre crops","Precision agronomy/DSS;Sensors/IoT/weather"],["Agri-Trade Equipment Expo","Event","AB","Comm;Scale","Western Canada's largest indoor ag equipment show \u2014 buyer-dense, demo-friendly","events/exposure/networking","Broad-acre crops;Livestock","Automation/robotics/UAV;Farm ops/FMS/recordkeeping"],["Alberta Beef Industry Conference","Event","AB","Pilot;Comm","Beef-sector focused \u2014 livestock tech and feed innovation exposure","events/exposure/networking","Livestock",""],["United Farmers of Alberta (UFA)","Org","AB","Pilot;Comm","Farmer co-op with trusted relationships \u2014 some innovation vetting/intro work","channel/distribution partners","Broad-acre crops;Livestock",""],["Alberta Federation of Agriculture","Org","AB","","Provincial farm advocacy \u2014 no innovation mandate but farmer network access","events/exposure/networking","Broad-acre crops;Livestock",""],["Calgary Economic Development","Org","AB","MVP;Pilot;Comm","Economic development support and connections for Calgary ventures","events/exposure/networking","",""],["Startup Calgary","Org","AB","Idea;MVP","General startup community support and resource navigation","events/exposure/networking","",""],["AdFarm","Org","AB","Comm;Scale","Ag marketing agency \u2014 receives ~20 entrepreneur inquiries/year, informal triage","channel/distribution partners","",""],["University of Alberta","Train","AB","Idea","Applied ag research \u2014 Faculty of ALES, Innovation Fund backs agtech spinouts","pilot site/field validation","",""],["University of Calgary","Train","AB","Idea","Applied research \u2014 not ag-focused but UCeed fund invests in spinouts","pilot site/field validation","",""],["University of Lethbridge","Train","AB","Idea","Applied research in southern Alberta \u2014 proximity to irrigated ag region","pilot site/field validation","",""],["Red Deer Polytechnic","Train","AB","Idea;MVP","Central Alberta polytechnic with applied research capacity","pilot site/field validation","",""],["RDAR (Results Driven Agriculture Research)","Fund","AB","Idea;MVP;Pilot","Alberta's primary ag research funder \u2014 $126M invested, 550+ projects, producer-led priorities","funding/non-dilutive capital","Broad-acre crops;Livestock","Precision agronomy/DSS;Sensors/IoT/weather;Biologicals/genet"],["Alberta Food Centre (FPDC Leduc)","Pilot","AB","MVP;Pilot;Comm","Largest food processing pilot facility in North America \u2014 $30M equipment, leasable processing suites","pilot site/field validation","Mixed/Other","Traceability/supply chain/processing"],["ARECA (Agriculture Research Extension Council of Albert","Org","AB","Idea;MVP","Umbrella for 12 applied research associations across AB \u2014 regional trial sites and producer extensio","pilot site/field validation","Broad-acre crops;Livestock","Precision agronomy/DSS"],["Farming Smarter","Pilot","AB","MVP;Pilot","Southern AB applied research \u2014 irrigation, precision ag, cover crops, potato agronomy. Annual confer","pilot site/field validation","Broad-acre crops","Precision agronomy/DSS;Sensors/IoT/weather"],["AAFC Lethbridge Research and Development Centre","Train","AB;National","Idea","One of AAFC's largest centres \u2014 beef cattle systems, crop breeding/pathology, dryland/irrigated prod","pilot site/field validation","Broad-acre crops;Livestock","Precision agronomy/DSS;Biologicals/genetics"],["AAFC Lacombe Research and Development Centre","Train","AB;National","Idea","Livestock and meat science, crop sciences \u2014 includes Beaverlodge Research Farm satellite","pilot site/field validation","Livestock","Traceability/supply chain/processing;Biologicals/genetics"],["Lethbridge Polytechnic (CARIE / IATC)","Pilot","AB","MVP;Pilot","Applied ag research \u2014 385-acre irrigation research farm, post-harvest tech centre, controlled enviro","pilot site/field validation","Broad-acre crops;Greenhouse/CEA","Precision agronomy/DSS;Sensors/IoT/weather;Automation/roboti"],["Alberta Canola","Org","AB","Idea","Canola producer commission \u2014 funds varietal and agronomic research, extension to 12K+ growers","events/exposure/networking","Broad-acre crops","Precision agronomy/DSS;Biologicals/genetics"],["Alberta Grains","Org","AB","Idea","Wheat and barley commission \u2014 funds breeding and agronomy research for 18K farmers","events/exposure/networking","Broad-acre crops","Precision agronomy/DSS;Biologicals/genetics"],["Alberta Pulse Growers","Org","AB","Idea","Pulse crop commission \u2014 pea, lentil, dry bean, faba bean research and market development","events/exposure/networking","Broad-acre crops;Specialty crops","Precision agronomy/DSS;Biologicals/genetics"],["CrossRoads Crop Conference","Event","AB","Pilot;Comm","Premier Western Canada crop conference \u2014 replaced FarmTech. Innovation + agronomy focus","events/exposure/networking","Broad-acre crops","Precision agronomy/DSS;Biologicals/genetics"],["Farming Smarter Conference & Trade Show","Event","AB","Pilot;Comm","Southern Alberta ag innovation conference \u2014 practical research focus, farmer audience","events/exposure/networking","Broad-acre crops","Precision agronomy/DSS;Sensors/IoT/weather"],["Ag Expo (Lethbridge)","Event","AB","Comm;Scale","Southern Alberta's major outdoor ag equipment and technology expo","events/exposure/networking","",""],["Sustainable CAP (Alberta)","Fund","AB","Idea;MVP;Pilot;Comm","5-year $3.5B federal-provincial framework \u2014 multiple program streams for ag innovation, environment,","funding/non-dilutive capital","",""],["Alberta Agriculture & Irrigation","Org","AB","Idea;MVP;Pilot;Comm","Provincial ministry \u2014 delivers multiple ag programs, grants, regulatory guidance, market access supp","regulatory/compliance guidance","",""],["Olds College Centre of Innovation (OCCI)","Pilot","AB","MVP;Pilot","Technology Access Centre for Livestock Production \u2014 agtech testing, validation, and industry partner","pilot site/field validation","Livestock","Sensors/IoT/weather;Automation/robotics/UAV"],["National Circle for Indigenous Agriculture and Food (NC","Org","AB;SK;MB;National","Idea;MVP;Pilot","Indigenous-led non-profit connecting Indigenous entrepreneurs and communities to ag industry \u2014 recon","commercialization help/first customers","Broad-acre crops;Livestock;Mixed/Other",""],["InnoTech Alberta","Pilot","AB","MVP;Pilot","Alberta Innovates subsidiary \u2014 320-acre research farm, controlled environment greenhouses, crop vari","pilot site/field validation","Broad-acre crops;Greenhouse/CEA","Precision agronomy/DSS;Biologicals/genetics"],["NAIT Centre for Culinary Innovation","Pilot","AB","MVP;Pilot","Food product development lab \u2014 bench-top R&D, shelf-life testing, formulation scale-up, plant-based ","pilot site/field validation","Mixed/Other","Traceability/supply chain/processing"],["Agri-Food Discovery Place (U of A)","Pilot","AB","Idea;MVP","World-class bio-industrial tech transfer facility \u2014 5,000 sq m, cellular agriculture institute, bio-","pilot site/field validation","Mixed/Other","Biologicals/genetics;Traceability/supply chain/processing"],["Edmonton Global","Org","AB","Comm;Scale","Edmonton region economic development \u2014 investment attraction, sector intelligence, connections to ag","events/exposure/networking","",""],["Advancing Women in Agriculture Conference","Event","AB;National","Comm","Annual conference for women in ag \u2014 networking, professional development, leadership","events/exposure/networking","",""],["Canadian Western Agribition","Event","AB;SK;MB;National","Comm;Scale","North America's largest livestock expo \u2014 major buyer audience, ag tech showcase, trade show floor","events/exposure/networking","Livestock;Broad-acre crops","Automation/robotics/UAV;Sensors/IoT/weather"],["Banff Venture Forum","Event","AB","MVP;Pilot;Comm","Western Canada's premier VC/startup event \u2014 multiple ag investors attend (Tall Grass, SVG Thrive, et","funding/non-dilutive capital","",""],["Prairie Certified Crop Adviser Board (Prairie CCA)","Train","AB;SK;MB","","1,400+ certified crop advisers across Prairies \u2014 the professional certification for agronomists advi","skills/training/credentials","Broad-acre crops","Precision agronomy/DSS"],["Alberta Institute of Agrologists (AIA)","Train","AB","","Provincial regulator for agrologists \u2014 P.Ag designation required to practice agrology in Alberta. An","skills/training/credentials","",""],["Saskatchewan Institute of Agrologists (SIA)","Train","SK","","Provincial regulator for agrologists in Saskatchewan \u2014 P.Ag/R.P.Ag designation","skills/training/credentials","",""],["Manitoba Institute of Agrologists (MIA)","Train","MB","","Provincial regulator for agrologists in Manitoba \u2014 recognizes CCA designation for CE credit","skills/training/credentials","",""],["Alberta Innovates \u2014 Ag & Food Innovation Program (ABIP)","Fund","AB","MVP;Pilot","Up to $500K/project (75% costs) for agri-food tech development TRL 3-7. Continuous intake. Data/digi","funding/non-dilutive capital","Broad-acre crops;Livestock;Greenhouse/CE","Precision agronomy/DSS;Farm ops/FMS/recordkeeping;Sensors/Io"],["Alberta Innovates \u2014 Tech2Farm","Fund","AB","Pilot;Comm","Up to $500K for AB SMEs (<100 employees) to validate/commercialize agtech through collaborative demo","pilot site/field validation","Broad-acre crops;Livestock;Greenhouse/CE","Precision agronomy/DSS;Sensors/IoT/weather;Automation/roboti"],["Alberta Innovates \u2014 Voucher Program","Fund","AB","MVP","Smaller grants for early-stage innovators to take first steps toward commercialization \u2014 including a","funding/non-dilutive capital","",""],["Alberta Innovates \u2014 Entrepreneurial Investments","Fund","AB","Comm;Scale","Helps AB companies reduce technical and business risk during product commercialization \u2014 larger scal","funding/non-dilutive capital","",""],["Sustainable CAP \u2014 Innovation Program","Fund","AB","MVP;Pilot;Comm","Projects focused on innovation resulting in significant company growth and sector impact. Part of $5","funding/non-dilutive capital","",""],["Sustainable CAP \u2014 Value-Added Program","Fund","AB","Comm;Scale","Grants up to $250K for food/bio-industrial processors to increase sales, expand production, develop ","funding/non-dilutive capital","Mixed/Other","Traceability/supply chain/processing"],["Sustainable CAP \u2014 On-Farm Value-Added Program","Fund","AB","Comm","Grants up to $250K for primary producers adding value to their ag products \u2014 grow sales, expand capa","funding/non-dilutive capital","Broad-acre crops;Livestock;Specialty cro","Traceability/supply chain/processing"],["Sustainable CAP \u2014 Water Program","Fund","AB","Comm;Scale","Grants for on-farm irrigation system purchases/upgrades (up to $17.5K) and water supply infrastructu","funding/non-dilutive capital","Broad-acre crops","Sensors/IoT/weather"],["Sustainable CAP \u2014 Environmental Stewardship and Climate","Fund","AB","Comm","Supports producers improving efficient use of ag inputs and conserving/enhancing environmental resil","funding/non-dilutive capital","",""],["Growing Greenhouses Program","Fund","AB","Pilot;Comm;Scale","$10M, 3-year program to stimulate controlled environment ag (CEA) growth \u2014 increase year-round fresh","funding/non-dilutive capital","Greenhouse/CEA","Sensors/IoT/weather;Automation/robotics/UAV"],["RDAR \u2014 Accelerating Agricultural Innovations 2.0 (AAI 2","Fund","AB","MVP;Pilot","Continuous intake funding for projects that demonstrate and accelerate farm-gate adoption of ag inno","funding/non-dilutive capital","Broad-acre crops;Livestock","Precision agronomy/DSS;Sensors/IoT/weather;Automation/roboti"],["RDAR \u2014 On-Farm Climate Action Fund (OFCAF)","Fund","AB","Comm","Up to $75K per producer for adopting beneficial management practices that reduce GHG emissions on-fa","funding/non-dilutive capital","Broad-acre crops;Livestock","Precision agronomy/DSS"],["Agriculture Funding Consortium (AFC)","Fund","AB","Idea;MVP","One-window coordinated funding for ag research \u2014 RDAR + Alberta Innovates + crop commissions pooled ","funding/non-dilutive capital","Broad-acre crops;Livestock","Precision agronomy/DSS;Biologicals/genetics"],["CAAIN \u2014 Project Co-Investment Program","Fund","AB;National","Pilot;Comm","Co-investment for collaborative projects in ag automation and intelligence. Requires 2+ industry par","funding/non-dilutive capital","Broad-acre crops;Livestock;Mixed/Other","Automation/robotics/UAV;Sensors/IoT/weather;Precision agrono"],["Agriculture Financial Services Corporation (AFSC)","Fund","AB","Comm;Scale","AB crown corp providing crop insurance, livestock price insurance, farm loans, commercial loans, and","funding/non-dilutive capital","Broad-acre crops;Livestock;Specialty cro",""],["AgSphere","Accel","AB;National","MVP;Pilot;Comm","$2.75M OCIF-backed agrifood innovation hub at Stampede Park \u2014 connects producers, startups, investor","commercialization help/first customers","Broad-acre crops;Livestock;Mixed/Other","Precision agronomy/DSS;Sensors/IoT/weather;Automation/roboti"],["BDC Capital \u2014 Industrial Innovation Venture Fund","Fund","AB;National","Pilot;Comm;Scale","$200M Fund II (2025) for early-stage companies in agtech, food-tech, advanced manufacturing. Series ","funding/non-dilutive capital","Broad-acre crops;Livestock;Mixed/Other","Automation/robotics/UAV;Sensors/IoT/weather;Precision agrono"],["New Harvest Canada (CAPE Project)","Org","AB;National","Idea;MVP","Cellular agriculture research org \u2014 Prairies Ecosystem (CAPE) project connecting bioprocessing and f","pilot site/field validation","Mixed/Other","Biologicals/genetics;Traceability/supply chain/processing"],["Deep Tech Canada","Org","AB;National","Idea;MVP;Pilot","Conference organizer and network for deep tech including agtech. Hosts AgTech 2026 conference. Trade","events/exposure/networking","",""],["AgTech 2026 Conference (Deep Tech Canada)","Event","AB","MVP;Pilot;Comm","Calgary agtech conference \u2014 'Challenge to Change' theme. Speakers from RDAR, Tall Grass, FCC, Albert","events/exposure/networking","Broad-acre crops;Livestock;Mixed/Other","Precision agronomy/DSS;Sensors/IoT/weather;Automation/roboti"],["Prairie Precision Sustainability Network (PPSN)","Org","AB;SK;MB","Idea;MVP;Pilot","U of C research network helping crop farmers find precise and profitable ways to improve productivit","pilot site/field validation","Broad-acre crops","Precision agronomy/DSS;Sensors/IoT/weather"],["Calgary Innovation Coalition","Org","AB","MVP;Pilot;Comm","Coalition connecting Calgary's innovation ecosystem players \u2014 agtech is a growing vertical. Conferen","events/exposure/networking","",""],["TELUS Agriculture (Decisive Farming)","Org","AB;National","Comm;Scale","Major ag data/agronomy platform \u2014 acquired Decisive Farming (AB success story). Precision agronomy, ","channel/distribution partners","Broad-acre crops","Precision agronomy/DSS;Farm ops/FMS/recordkeeping;Sensors/Io"],["CFIN (Canadian Food Innovation Network)","Accel","AB;National","MVP;Pilot;Comm","National food innovation network \u2014 Innovation Scouting Fund (active), Funding Finder tool, YODL comm","commercialization help/first customers","Mixed/Other","Traceability/supply chain/processing"],["AAFC \u2014 AgriInnovate Program","Fund","AB;National","Pilot;Comm;Scale","Repayable contributions for commercialization, demonstration, or adoption of commercial-ready innova","funding/non-dilutive capital","Broad-acre crops;Livestock;Mixed/Other",""],["AAFC \u2014 AgriScience Program (Projects)","Fund","AB;National","Idea;MVP","Federal pre-commercial R&D funding for ag and agri-food sector. Open intake. Under Sustainable CAP.","funding/non-dilutive capital","Broad-acre crops;Livestock;Mixed/Other","Precision agronomy/DSS;Biologicals/genetics"],["AAFC \u2014 Agricultural Clean Technology (R&I Stream)","Fund","AB;National","Idea;MVP;Pilot","Federal funding for pre-market clean ag tech innovation \u2014 research, development, demonstration, comm","funding/non-dilutive capital","Broad-acre crops;Livestock","Precision agronomy/DSS;Sensors/IoT/weather"],["AAFC \u2014 AgriMarketing Program","Fund","AB;National","Comm;Scale","Export market development and domestic market differentiation. Industry-led promotional activities. ","channel/distribution partners","",""],["AgPal \u2014 Federal Program Finder","Org","AB;SK;MB;National","Idea;MVP;Pilot;Comm;Scale","Federal/provincial/territorial program finder \u2014 filter by your situation to find all applicable ag p","funding/non-dilutive capital","",""],["AAFC \u2014 Indigenous Pathfinder Service","Org","AB;SK;MB;National","Idea;MVP;Pilot;Comm","Federal navigation service specifically for Indigenous producers and entrepreneurs \u2014 helps find info","commercialization help/first customers","",""],["Canadian Agricultural Loans Act (CALA)","Fund","AB;SK;MB;National","Comm;Scale","Federal loan guarantees for farmers to establish, improve, and develop farms. Up to $500K for land, ","funding/non-dilutive capital","Broad-acre crops;Livestock;Specialty cro",""],["Alberta Business Grants (Grant Gazette)","Org","AB","Idea;MVP;Pilot;Comm;Scale","Curated newsletter/directory of AB grant opportunities including agriculture section. Good for stayi","funding/non-dilutive capital","",""]];
const E = R.map(function(r){return {Name:r[0],Category:r[1],Region:r[2],Stage:r[3],Best:r[4],Trigger:r[5],PS:r[6]||"",TD:r[7]||""};});

const PREBAKED_E = {

"Building a tractor-mounted camera for disease detection in canola. Working prototype, Lethbridge. Need field trials and funding.":
`STAGE: Pilot-ready

### 1. Farming Smarter
**Category:** Pilot Site
**Fit:** Southern AB applied research site near Lethbridge — irrigation and crop agronomy focus. They run field days and have grower relationships. Your canola camera needs real fields with real disease pressure.
**Do first:** Contact their research team and ask about their annual project intake. Propose a paired trial: your camera vs. scout-only on the same fields.
**Watch out:** They are not a smart farm — limited connectivity infrastructure. Plan for offline data capture.

### 2. RDAR — AAI 2.0
**Category:** Funding
**Fit:** Continuous intake. Funds projects that demonstrate and accelerate farm-gate adoption of ag innovations. A camera for canola disease detection is exactly their mandate.
**Do first:** Submit an expression of interest. Frame it around producer ROI: reduced fungicide cost, better timing, yield protection.
**Watch out:** Requires a producer collaborator. Find a grower partner before you apply.

### 3. Alberta Innovates — ABIP
**Category:** Funding
**Fit:** Up to $500K per project covering 75% of costs. TRL 3-7 agri-food tech. Continuous intake. Your working prototype puts you at TRL 5-6 — right in the sweet spot.
**Do first:** Call your sector lead at Alberta Innovates. They will tell you which stream fits and whether to apply to ABIP or Tech2Farm.
**Watch out:** 75% cost-share means you need 25% cash match. Budget for this.

### 4. Alberta Innovates — Tech2Farm
**Category:** Funding
**Fit:** Up to $500K for AB SMEs to validate agtech through collaborative demos. Designed specifically for your situation — working prototype needing field validation.
**Do first:** This is your primary alternative to ABIP. The AI sector lead can advise which is better for your stage.
**Watch out:** Requires fewer than 100 employees and an Alberta presence.

### 5. Olds College Smart Farm
**Category:** Pilot Site
**Fit:** Canada's leading smart farm with connected fields, sensor infrastructure, and precision ag trial experience. Strong brand credibility for your marketing after trials.
**Do first:** Reach out to their innovation team. They host external tech for validation regularly.
**Watch out:** No operational funding — you may need to bring your own project funding. RDAR or ABIP grants can cover this.

### 6. Alberta Canola
**Category:** Industry Org
**Fit:** 12,000+ canola grower members. They fund varietal and agronomic research. A disease detection camera directly serves their growers. Could be your first channel partner.
**Do first:** Present at their annual general meeting or ask for a meeting with their research committee. Position this as a grower tool, not a tech product.
**Watch out:** Commission timelines are slow — they fund on annual cycles.

## What you might not know
The strongest path here is a **stacked application**: get RDAR or ABIP to fund the trial, run it at Farming Smarter (close to you in Lethbridge), then use the results to approach Alberta Canola for grower adoption. This three-step sequence — funder + trial site + commission channel — is the proven path for crop tech in Alberta. Also, the Agriculture Funding Consortium pools RDAR, Alberta Innovates, and crop commission dollars in a single annual call (LOI deadline around March). If your timing works, one application could unlock multiple funders simultaneously.`,

"Food processor in Edmonton making pulse-based snacks. ~$200K revenue. Need help scaling.":
`STAGE: Commercialization/first customers

### 1. Alberta Food Centre (Leduc)
**Category:** Pilot Site
**Fit:** Largest food processing pilot facility in North America, 20 minutes from Edmonton. $30M in equipment, leasable processing suites, food scientists on staff. You can scale up formulations and test production runs without buying equipment.
**Do first:** Book a facility tour and bring your current product. Ask about their leasable suite availability and hourly rates for pilot runs.
**Watch out:** Popular facility — book early. Minimum run sizes may be larger than you expect.

### 2. SCAP — Value-Added Program
**Category:** Funding
**Fit:** Grants up to $250K for food processors to increase sales, expand production, develop markets. Stream A is under $50K (simpler), Stream B is $50-250K.
**Do first:** Check if intake is currently open — this program cycles. Call Alberta Agriculture to confirm status.
**Watch out:** Currently listed as closed. Get on the notification list for the next intake window.

### 3. CFIN (Canadian Food Innovation Network)
**Category:** Accelerator
**Fit:** National food innovation network with an active Innovation Scouting Fund. Free membership. They connect food innovators to tech solutions and have a Funding Finder tool that curates opportunities.
**Do first:** Sign up for free membership. Use their Funding Finder tool immediately — it may surface programs we have not listed here.
**Watch out:** Some programs are Ontario-only. Filter for national or Alberta-eligible ones.

### 4. AAFC — AgriInnovate
**Category:** Funding
**Fit:** Federal repayable contributions for commercial-ready food and ag tech. Open intake, national. Good for scaling proven products.
**Do first:** Review eligibility on the AAFC website. This is repayable (not a grant) — treat it like low-interest debt, not free money.
**Watch out:** Repayable means you pay it back. Only take this if your unit economics support it.

### 5. Protein Industries Canada
**Category:** Funding
**Fit:** Co-investment for the plant protein value chain. Pulse-based snacks are directly in their mandate. They fund ingredients, processing, and consumer products.
**Do first:** Check their current call for proposals. They require industry partnerships — find a complementary company (ingredient supplier, retailer) to apply with.
**Watch out:** Requires 2+ partners and cost-sharing. Not a solo application.

### 6. District Ventures Capital
**Category:** Funding
**Fit:** Calgary-based food and beverage brand VC. Not farm tech — they invest in consumer products, which is exactly what you are.
**Do first:** Check their portfolio to see if they have competing investments. Prepare a pitch deck with your $200K revenue story and unit economics.
**Watch out:** VC means equity — they will want a board seat and a growth plan.

## What you might not know
At $200K revenue you are past the "is this a real business" threshold but pre-scale. The Alberta Food Centre in Leduc should be your first call — they can help you figure out whether your current recipe and process can scale before you spend money on equipment. The sequence matters: validate at Leduc, then apply for SCAP Value-Added funding to buy your own equipment, then use Protein Industries Canada for market expansion. Do not skip straight to VC — District Ventures will give you a better valuation after you have a Leduc-validated scalable process and $500K+ in revenue.`,

"Drone company doing crop scouting. Pre-revenue, 3 people, Calgary. What's available?":
`STAGE: MVP/prototype

### 1. Platform Calgary
**Category:** Accelerator
**Fit:** Calgary's main tech hub. General startup support, programming, co-working space. Good for your first connections and business fundamentals.
**Do first:** Drop in to their next community event or book a mentorship session. Free access to a lot of resources.
**Watch out:** Not ag-specific. You will need to find your own ag industry connections separately.

### 2. AgSphere
**Category:** Accelerator
**Fit:** Brand new ($2.75M OCIF-backed) agrifood innovation hub right at Stampede Park in Calgary. EIT Food EU partnership. Specifically designed to connect startups like yours to producers and investors.
**Do first:** Contact Chris Paterson (Executive Director). This is the most relevant accelerator for a Calgary agtech startup right now.
**Watch out:** Launched December 2025 — still building their program. Get in early to shape it.

### 3. Alberta Innovates — Voucher Program
**Category:** Funding
**Fit:** Smaller grants for early-stage innovators to take first steps toward commercialization. At pre-revenue with 3 people, this is your right-sized first grant.
**Do first:** Apply for a voucher to fund a pilot with a producer. Frame it as validating your drone scouting against ground-truth data.
**Watch out:** Smaller amounts — use this strategically for one specific validation milestone.

### 4. Olds College Smart Farm
**Category:** Pilot Site
**Fit:** Connected smart farm with precision ag infrastructure. Ideal for testing drone-based crop scouting against their existing sensor data.
**Do first:** Propose a comparison trial: your drone imagery vs. their ground-based sensors on the same fields.
**Watch out:** No operational funding. Bring your own grant money (Voucher Program above) to fund the trial.

### 5. CAAIN — Co-Investment Program
**Category:** Funding
**Fit:** Funds ag automation and intelligence projects. Drone scouting is directly in scope. Up to 50% of project costs.
**Do first:** You need 2+ industry partners. Find a grower and an agronomist or crop input retailer to partner with.
**Watch out:** This is collaborative — CAAIN wants industry pull, not just tech push. Find partners who will actually use the output.

### 6. Startup TNT
**Category:** Funding
**Fit:** Angel investment summits with a dedicated Agri-Food Summit stream. $150K-500K+ per winner. Pre-revenue companies compete.
**Do first:** Apply for their next Agri-Food Summit. Even if you do not win, the pitch practice and investor exposure are valuable.
**Watch out:** Competitive. Have a sharp 3-minute pitch with clear unit economics projections.

## What you might not know
Your biggest risk at pre-revenue with 3 people is not money — it is **finding a grower who will let you fly over their fields repeatedly**. Start there. The Prairie CCA Board has 1,400 certified crop advisers who could introduce you to progressive growers. Also, TELUS Agriculture (Decisive Farming) already does satellite-based crop analytics at scale — understand their offering so you can position your drone scouting as complementary (higher resolution, on-demand) rather than competitive.`,

"Rancher near Red Deer wanting to try livestock monitoring tech. Programs to help?":
`STAGE: Idea/research

### 1. Olds College Centre of Innovation (OCCI)
**Category:** Pilot Site
**Fit:** Technology Access Centre specifically for Livestock Production. They test and validate agtech for livestock — sensors, automation, monitoring. 30 minutes from Red Deer.
**Do first:** Call OCCI and describe what you want to monitor (calving, feed intake, location, health). They can recommend specific technologies and may have demo units on-site.
**Watch out:** They are a testing facility, not a retailer. They help you evaluate, not buy.

### 2. RDAR — OFCAF
**Category:** Funding
**Fit:** Up to $75K per producer for adopting beneficial management practices that reduce GHG emissions. Livestock monitoring that optimizes feed or grazing can qualify under emissions reduction.
**Do first:** Check current intake status. Frame your monitoring as a tool for reducing methane through better feed management or optimized grazing rotation.
**Watch out:** Must demonstrate a GHG reduction angle. Pure production monitoring without an environmental benefit will not qualify.

### 3. RDAR — AAI 2.0
**Category:** Funding
**Fit:** Continuous intake. Designed to accelerate farm-gate adoption of innovations. A rancher adopting monitoring tech is a textbook use case.
**Do first:** Submit an expression of interest. You will need a tech provider as a partner — OCCI can help identify one.
**Watch out:** Requires a research/demonstration component. Frame it as a pilot with data collection, not just buying equipment.

### 4. Alberta Beef Industry Conference
**Category:** Event
**Fit:** Beef-sector focused with livestock tech and feed innovation exposure. Good place to see what monitoring tech is available and talk to other ranchers using it.
**Do first:** Attend the next conference. Walk the trade show floor with the specific question: what are ranchers my size using?
**Watch out:** Annual event — check the date. If it has passed, the Canadian Western Agribition in Regina is the next major livestock event.

### 5. UFA
**Category:** Industry Org
**Fit:** Farmer co-op with deep relationships in Alberta ranching. Their agronomists and farm supply people know what monitoring tech is gaining traction.
**Do first:** Talk to your local UFA store manager. Ask specifically about livestock monitoring systems they are seeing demand for.
**Watch out:** They are a retailer, not an advisor. Cross-reference their recommendations with OCCI's independent evaluation.

### 6. Lakeland College Smart Farm
**Category:** Pilot Site
**Fit:** Smart farm in NE Alberta with both crop and livestock operations. They run applied research on farm technology adoption.
**Do first:** If OCCI does not have what you need, Lakeland is your backup for livestock tech evaluation.
**Watch out:** Further from Red Deer than OCCI. Start with OCCI first.

## What you might not know
The most common mistake ranchers make with monitoring tech is buying hardware before defining what decision it needs to support. Start at OCCI — they will help you map your actual pain points (is it calving alerts? weight gain tracking? water monitoring?) to specific technologies. Also, AFSC (Agriculture Financial Services Corporation) offers farm loans that can cover equipment purchases if you find the right system. Stack RDAR funding for the pilot with an AFSC loan for the hardware.`,

"Soil sensor IP from university research. No company yet. Path to commercialize?":
`STAGE: Idea/research

### 1. Innovate Calgary
**Category:** Accelerator
**Fit:** University of Calgary's tech transfer office. If the IP is from U of C, this is your mandatory first stop — they handle licensing and can help form a company around the IP.
**Do first:** If U of C: meet with Innovate Calgary's commercialization team. If U of A: contact TEC Edmonton. If U of L: contact their research services office.
**Watch out:** University IP ownership is complicated. Clarify who owns what before you do anything else.

### 2. Verdex Capital / Carrot Ventures
**Category:** Funding
**Fit:** AgTech venture studio that specifically sources university IP, recruits CEOs, and forms companies. This is literally their business model.
**Do first:** Send them a one-page summary of the sensor, its unique advantage, and the market problem it solves. They will tell you quickly if it fits.
**Watch out:** Venture studio model means they take significant equity in exchange for company formation and CEO recruitment. Know what you are giving up.

### 3. NRC IRAP
**Category:** Funding
**Fit:** Federal non-dilutive funding and advisory for SMEs doing R&D. They fund the gap between university research and commercial product. Pre-company, they can still advise.
**Do first:** Contact your regional IRAP advisor. They do free consultations before you even have a company. Ask about the path from university IP to IRAP-funded development.
**Watch out:** You need a registered Canadian company to receive IRAP funding. Get the IP licensing sorted first.

### 4. CDL Rockies
**Category:** Accelerator
**Fit:** Creative Destruction Lab at University of Calgary — science-based ventures, mentorship from founders and investors. Partial ag focus but strong deep-tech credentials.
**Do first:** Apply to the next cohort. CDL is one of the most respected accelerators for science-based IP commercialization in Canada.
**Watch out:** Competitive and intense. 8-month program with regular "kill or continue" gates. Not for the faint-hearted.

### 5. Alberta Innovates — Voucher Program
**Category:** Funding
**Fit:** Small grants for early-stage innovators. Use this to fund the first step: building a prototype from the lab version of the sensor.
**Do first:** Once you have IP access clarified, apply for a voucher to fund prototype development.
**Watch out:** Small amounts. Use strategically for one specific milestone.

### 6. Tall Grass Ventures
**Category:** Funding
**Fit:** Pre-Series A agrifood VC with $32M fund and deep ag expertise. They invest early and understand the long timelines of ag hardware.
**Do first:** Not yet — you are too early. But put them on your list for after you have a prototype and one field trial under your belt.
**Watch out:** They want to see some traction. Come back after CDL or after a Voucher-funded prototype.

## What you might not know
The path from university IP to company has a specific sequence in Alberta: (1) clarify IP ownership with the tech transfer office, (2) negotiate a license or assignment, (3) incorporate, (4) apply for Voucher or IRAP to fund prototype, (5) get into CDL or AgSphere for mentorship and investor access, (6) raise pre-seed from Verdex, The51, or Accelerate Fund IV. Do not skip step 1 — founders who build on unlicensed university IP end up in legal fights that kill companies. Also, the Agriculture Funding Consortium annual call pools money from RDAR, Alberta Innovates, and crop commissions — if your sensor has a specific crop application, you could tap all three in one application.`,

"Agronomist building a DSS for irrigation in southern Alberta. Where to start?":
`STAGE: Idea/research

### 1. Farming Smarter
**Category:** Pilot Site
**Fit:** Southern Alberta applied research focused specifically on irrigation and precision ag. They have the fields, the grower relationships, and the irrigation infrastructure you need to validate a DSS.
**Do first:** Contact their team and propose testing your DSS on their research plots. They understand irrigation decision-making intimately.
**Watch out:** Annual project cycle — ask about their intake timeline.

### 2. Lethbridge Polytechnic (CARIE)
**Category:** Pilot Site
**Fit:** 385-acre irrigation research farm plus a controlled environment ag facility. Precision irrigation is their core competency. Applied ag research mandate means they want to work with industry.
**Do first:** Meet with CARIE researchers. They may have existing irrigation data sets you can use to train or validate your DSS before field trials.
**Watch out:** Academic timelines — plan for a growing season partnership, not a quick turnaround.

### 3. SCAP — Water Program
**Category:** Funding
**Fit:** Grants for irrigation system upgrades — up to $17.5K for systems and $40K for water supply infrastructure. Your DSS could be bundled with irrigation hardware upgrades.
**Do first:** Check if your DSS qualifies as an "irrigation system" component. Talk to Alberta Agriculture about eligibility.
**Watch out:** This funds hardware adoption, not software development. Better for your first customers than for building the product.

### 4. Alberta Innovates — Voucher Program
**Category:** Funding
**Fit:** Small early-stage grants. Use this to fund the first version of your DSS — data integration, algorithm development, basic interface.
**Do first:** Apply with a clear milestone: "Build MVP that integrates soil moisture, weather, and crop stage data for one irrigation district."
**Watch out:** Small amounts. Scope your milestone tightly.

### 5. Prairie Precision Sustainability Network
**Category:** Industry Org
**Fit:** University of Calgary research network with 100+ partner farmers across 3 Prairie provinces. They map marginal acres and study precision approaches to productivity. Your DSS aligns perfectly.
**Do first:** Contact the network lead. They could provide both research partnership and farmer access for field validation.
**Watch out:** Research-oriented — timelines may be longer than startup speed.

### 6. Prairie CCA Board
**Category:** Training
**Fit:** 1,400+ certified crop advisers across the Prairies. CCAs are the trusted advisors who recommend tools to growers. If CCAs do not recommend your DSS, growers will not adopt it.
**Do first:** Attend a CCA continuing education event in southern Alberta. Present your DSS concept and get feedback from advisers who manage irrigation for clients.
**Watch out:** CCAs are skeptical of tools that claim to replace their judgment. Position your DSS as a tool that makes their recommendations better, not one that makes them unnecessary.

## What you might not know
Southern Alberta irrigation is concentrated in 13 irrigation districts managing 1.6M+ acres. The districts themselves are potential customers and distribution partners — they want their members using water more efficiently. Also, your biggest competitor is not another DSS — it is the agronomist's gut feel plus a rain gauge. Your first version needs to beat that bar convincingly on even one metric (timing, quantity, or cost savings) before adding complexity. Start with one crop, one district, one season.`
};

const PREBAKED_EC = {

"Where are the biggest gaps in Alberta's ag innovation ecosystem?":
`### Gap: The Pilot-to-First-Customer Valley of Death
**Missing:** Programs that help companies convert successful pilots into paying customers. Alberta has 9 pilot/testbed sites and 39 funding programs, but almost nothing that helps after a trial succeeds — no customer introduction programs, no procurement facilitation, no first-customer guarantees.
**Affected:** Every agtech company that runs a successful trial at Olds College or Farming Smarter then sits there with great data and no sales pipeline.
**Opportunity:** A structured "first 10 customers" program that pairs post-pilot companies with progressive growers willing to be early adopters. Include risk-sharing (partial refund if it fails) to lower grower resistance.
**Partners:** AgSphere (hub), RDAR (credibility from trials), Alberta Canola/Grains/Pulse (grower access), UFA (distribution channel).

### Gap: No Dedicated Livestock Tech Accelerator
**Missing:** Alberta has 6.5M head of cattle and no accelerator focused specifically on livestock technology. The existing accelerators (Platform Calgary, CDL, AgSphere) lean crop-tech and food processing. OCCI at Olds College does testing but not acceleration.
**Affected:** Livestock monitoring, feed optimization, animal health, and traceability startups — a massive market with no dedicated support infrastructure.
**Opportunity:** A livestock-specific accelerator with feedlot and ranch access built in. Southern Alberta between Lethbridge and Red Deer is the natural home.
**Partners:** OCCI (testing), Alberta Beef Producers (industry pull), RDAR (funding), Lakeland College (research), AAFC Lacombe (science).

### Gap: Commercialization Support for Southern Alberta
**Missing:** Almost all accelerators and innovation hubs are in Calgary or Edmonton. Southern Alberta — where most of the actual farming happens — has pilot sites and research stations but no commercialization infrastructure.
**Affected:** Entrepreneurs in Lethbridge, Medicine Hat, and rural southern Alberta who cannot regularly commute to Calgary for accelerator programming.
**Opportunity:** A satellite innovation hub in Lethbridge connected to AgSphere or Platform Calgary, co-located with Farming Smarter or Lethbridge Polytechnic.
**Partners:** Lethbridge Polytechnic (CARIE), Farming Smarter, Edmonton Global (model), City of Lethbridge economic development.

### Gap: Agronomist/CCA Channel Is Ignored
**Missing:** 1,400 certified crop advisers across the Prairies are the trusted recommenders who influence $billions in grower purchasing decisions. No program specifically helps agtech companies sell through this channel.
**Affected:** Every crop-tech company that builds a great product and then discovers that growers will not adopt anything their CCA has not vetted.
**Opportunity:** A CCA-agtech matchmaking program where startups present tools to advisers, get feedback, and build endorsed-tool relationships.
**Partners:** Prairie CCA Board (advisers), Alberta Canola/Grains (commissions), AgSphere or Bioenterprise (facilitation).

## Strategic recommendation
The single highest-impact investment Alberta could make is a **"Pilot to Pipeline" bridge program** — dedicated funding and facilitation that converts successful field trials into the first 10 paying customers. This gap is where most agtech companies die in Alberta, and no existing program addresses it. AgSphere is positioned to run this. The second priority is a **Southern Alberta satellite hub** so that the 60% of ag innovation that happens south of Red Deer stops being disconnected from the commercialization infrastructure in Calgary.`,

"Funding landscape livestock tech vs crop tech - where is the imbalance?":
`### Gap: Livestock Tech Is Structurally Underfunded
**Missing:** Of 39 funding programs in the database, the vast majority are crop-agnostic or lean toward crop technology. Only OCCI, AAFC Lacombe, and the Alberta Beef Conference are livestock-specific. Meanwhile, Alberta has 40% of Canada's beef cattle.
**Affected:** Startups building livestock monitoring, feed optimization, animal health diagnostics, methane reduction technology, and livestock traceability systems.
**Opportunity:** A livestock-tech-specific funding stream within RDAR or Alberta Innovates that ring-fences capital for animal agriculture innovation.
**Partners:** RDAR (largest funder), Alberta Beef Producers, OCCI (validation), AAFC Lacombe (research).

### Gap: Crop Commission Funding Creates a Moat
**Missing:** Fairness, essentially. Crop tech companies can access funding from Alberta Canola (12K growers), Alberta Grains (18K farmers), and Alberta Pulse Growers (5,400 growers) through the Agriculture Funding Consortium. Livestock tech has no equivalent commission-backed funding pool.
**Affected:** Livestock innovators face a structural disadvantage in grant applications because they lack commission co-funding.
**Opportunity:** Alberta Beef Producers or the cattle feeders association could create an innovation fund modeled on the crop commissions. Even $2-3M annually would transform the landscape.
**Partners:** Alberta Cattle Feeders Association, Alberta Beef Producers, RDAR (co-funding model).

### Gap: VC Interest Skews Crop and Food
**Missing:** Looking at the private capital side: Tall Grass Ventures, Protein Industries Canada, District Ventures, and The51 all lean toward crop-based, plant protein, or food processing investments. Livestock tech rarely fits these mandates.
**Affected:** Livestock tech founders seeking private capital must look outside Alberta — often to US investors who do not understand Canadian ag context.
**Opportunity:** BDC Capital's new $200M Industrial Innovation Fund is one of the few that could invest in livestock tech at scale. Position Alberta as the natural home for a livestock-focused VC thesis.
**Partners:** BDC Capital, Alberta Enterprise Corporation (fund-of-funds), Tall Grass Ventures (could expand mandate).

## Strategic recommendation
Alberta's livestock sector is approximately half the province's ag economy but receives a fraction of the innovation support. The fix requires two moves: (1) RDAR should create a dedicated **Livestock Innovation Stream** with ring-fenced funding and livestock-specific evaluation criteria — crop tech reviewers often undervalue livestock applications. (2) Alberta Enterprise Corporation should actively seek or catalyze a **livestock-tech-focused VC fund** to complement the crop-leaning private capital already in market. The cattle feeders association has both the industry pull and the financial capacity to anchor this.`,

"I run a pilot site. Which accelerators and funders should we partner with?":
`### Gap: Pilot Sites Operate in Isolation
**Missing:** Most pilot sites (Olds College Smart Farm, Farming Smarter, Lethbridge Polytechnic, OCCI, InnoTech Alberta) receive companies through ad hoc relationships, not structured pipelines from accelerators or funders. There is no formal handoff where an accelerator says "your next step is a trial at Farming Smarter" and facilitates the introduction.
**Affected:** Both the pilot sites (inconsistent deal flow) and the startups (do not know which site fits their tech).
**Opportunity:** Formalize referral agreements with 3-4 accelerators and 2-3 funders.

### Recommended Accelerator Partnerships

**AgSphere** — Highest priority. New hub at Stampede Park, $2.75M funded, explicitly designed to connect startups to the ecosystem. They need pilot sites as a key offering for their companies. Propose: every AgSphere cohort company gets a pilot site consultation within 30 days of joining.

**Bioenterprise Canada** — National ag accelerator that triages entrepreneurs. They receive companies from across Canada and need Alberta pilot infrastructure. Propose: Bioenterprise refers companies needing Alberta field validation directly to your site.

**SVG Thrive** — Ag-focused accelerator with corporate partners. Their portfolio companies need trial sites. Propose: preferred pilot site status for Thrive portfolio companies.

### Recommended Funder Partnerships

**Alberta Innovates — Tech2Farm** — This $500K program is specifically about validating agtech through collaborative demos. Your pilot site should be a named partner so applicants can reference you in their proposals.

**RDAR — AAI 2.0** — Continuous intake funding for farm-gate adoption. Every AAI project needs a demonstration site. Propose: co-develop a template where RDAR applicants can pre-book your facility as their trial location.

**CAAIN — Co-Investment** — Requires 2+ industry partners. Your pilot site can be a standing partner, making it easier for startups to meet the partnership requirement.

## Strategic recommendation
The highest-leverage move is to sign a **formal referral MOU with AgSphere and a co-application template with RDAR**. These two relationships alone would give you a steady pipeline of funded companies needing trials. Make it easy — create a one-page "Trial at [Your Site]" sheet that accelerators and funders can hand to their companies, with pricing, timeline, and what data you deliver. The sites that formalize these pipelines first will dominate the next 5 years of Alberta agtech validation.`,

"Stage transition gaps: weakest coverage for early-stage agtech?":
`### Gap: Idea to MVP — Weak But Present
**Missing:** This transition has some coverage but it is fragmented. University tech transfer offices, Alberta Innovates Voucher Program, and NRC IRAP all serve this stage. The gap is coordination — an entrepreneur at the idea stage often does not know which door to knock on first.
**Affected:** First-time founders and researchers who spend months figuring out the system.

### Gap: MVP to Pilot — The Bottleneck
**Missing:** This is the most critical and most underserved transition. You have a working prototype and you need a real farm to test it on. The database shows 9 pilot sites in Alberta, but access is not the problem — funding the trial is. Olds College Smart Farm has no operational funding. Most sites require the company to bring grant money.
**Affected:** Hardware and sensor companies that need outdoor growing seasons (you only get one per year) and cannot afford to self-fund trials.
**Opportunity:** A "trial voucher" program — small, fast grants ($10-25K) specifically to fund trials at recognized pilot sites. 2-week approval, not 3 months.

### Gap: Pilot to First Customers — THE Valley of Death
**Missing:** This is where Alberta loses companies. A successful pilot at Olds College does not automatically generate sales. There is no program that helps with customer acquisition, go-to-market strategy, or first-customer facilitation. The 39 funding programs overwhelmingly fund research, development, and trials — not sales.
**Affected:** Every company that has proven the tech works in a trial but cannot convert that into revenue.
**Opportunity:** A sales acceleration program. Not another accelerator — specifically customer introductions, sales coaching, and first-customer risk-sharing.

### Gap: First Customers to Scale — Actually Decent
**Missing:** This transition is the best served. FCC provides scaling capital, BDC Capital has $200M for Series A+, AAFC AgriInnovate funds commercialization, and multiple VC funds (Tall Grass, The51, Accelerate Fund) operate at this stage.
**Affected:** Relatively few companies — if you reach this stage, capital is available.

## Strategic recommendation
Fix the **Pilot-to-Customer gap** first — it is where the most companies die and where the fix is cheapest. A program that funds 20 companies per year at $50K each for go-to-market activities (trade show presence, sales materials, customer introductions, CCA engagement) would cost $1M annually and could be the single highest-ROI innovation investment in Alberta. AgSphere or Bioenterprise could administer it. RDAR and Alberta Innovates could fund it. The second priority is **trial vouchers** to eliminate the MVP-to-Pilot funding gap that costs companies an entire growing season when they cannot afford to self-fund.`,

"Designing a new commercialization program. What exists and what is missing?":
`### What Already Exists for Commercialization

The current landscape for commercialization-stage companies includes:

**Funding:** Alberta Innovates Entrepreneurial Investments (risk reduction for commercialization), AAFC AgriInnovate (repayable contributions for commercial-ready tech), BDC Capital $200M Fund II (Series A+ VC), Tall Grass Ventures ($32M pre-Series A), The51 Food & AgTech Fund (seed), Accelerate Fund IV (up to $500K angel co-invest), SCAP Value-Added Program (up to $250K for processors), SCAP On-Farm Value-Added (up to $250K for producers).

**Accelerators:** AgSphere (new, agfood hub), Bioenterprise Canada (national triage), SVG Thrive (ag-focused + investor), CFIN (food innovation network).

**Channel access:** UFA (farmer co-op), TELUS Agriculture (ag data platform), AdFarm (marketing agency).

### What Is Missing

**1. Sales execution support.** Every program above helps with product development, funding, or connections. None provides hands-on sales coaching, CRM setup, pipeline management, or customer acquisition strategy for ag markets.

**2. Trade show go-to-market systems.** Agriculture sells at trade shows. Agri-Trade Expo, CrossRoads, FarmTech, Beef Conference — these are where buying decisions happen. No program teaches agtech companies how to use these events as revenue systems rather than brand awareness exercises.

**3. CCA and agronomist channel development.** The 1,400 Prairie CCAs are the most trusted voice in grower purchasing decisions. No program facilitates the agtech-to-CCA relationship.

**4. Procurement facilitation.** No program acts as a bridge between agtech companies and large agricultural buyers (coops, input retailers, equipment dealers). There is no "meet the buyer" structured program specific to ag.

**5. International market access.** AAFC AgriMarketing exists but targets industry associations, not individual companies. A company at $500K revenue looking to sell into Montana or North Dakota has no structured support.

## Strategic recommendation
The biggest gap is not another funding program — Alberta has plenty of capital for commercialization-stage companies. What is missing is **execution support**. Build a program around three concrete deliverables: (1) a 90-day sales sprint for post-pilot companies including CRM setup, pipeline building, and first 5 customer meetings facilitated, (2) a trade show go-to-market playbook with funded booth presence at 2 major events per company, and (3) a CCA engagement program where agtech companies present to adviser groups and get endorsed-tool status. Budget this at $75-100K per company, 15-20 companies per year. This fills the gap that no existing program touches and directly addresses the commercialization shortfall that Bioenterprise identified in their 2024 roundtable.`,

"What partnerships create the strongest idea-to-Series-A pipeline?":
`### The Ideal Pipeline: 5 Handoffs

**Stage 1: Idea to Incorporated Company**
University tech transfer (Innovate Calgary, TEC Edmonton) OR venture studio (Verdex Capital) takes IP and forms a company. CDL Rockies provides the science-to-business mentorship layer.
*Handoff to Stage 2: Incorporated company with licensed IP and initial prototype plan.*

**Stage 2: Incorporated to Funded MVP**
Alberta Innovates Voucher Program or NRC IRAP funds the prototype build. AgSphere or Platform Calgary provides workspace and community.
*Handoff to Stage 3: Working prototype ready for field testing.*

**Stage 3: MVP to Validated Pilot**
RDAR AAI 2.0 or Alberta Innovates ABIP ($500K, 75% costs) funds the trial. Olds College Smart Farm, Farming Smarter, or OCCI provides the trial site. Agriculture Funding Consortium annual call can pool multiple funders.
*Handoff to Stage 4: Validated tech with field trial data.*

**Stage 4: Pilot to First Revenue**
THIS IS THE BROKEN LINK. No existing program specifically facilitates customer acquisition. The closest options are AgSphere for introductions and Bioenterprise for triage. Trade shows (Agri-Trade, CrossRoads) are the primary sales channel but no program teaches companies to use them.
*Handoff to Stage 5: $200K-500K revenue, product-market fit demonstrated.*

**Stage 5: Revenue to Series A**
Tall Grass Ventures ($32M, pre-Series A), BDC Capital ($200M, Series A+), The51 Food & AgTech, Accelerate Fund IV (angel co-invest up to $500K). Multiple capital options at this stage.

### The Three Partnerships That Would Fix the Pipeline

**Partnership 1: AgSphere + RDAR + Olds College Smart Farm**
A formal three-way agreement: AgSphere identifies and prepares companies, RDAR funds the trials, Olds College runs them. This creates a continuous pipeline from accelerator to validated pilot. Currently these three organizations operate independently.

**Partnership 2: Bioenterprise + Alberta Innovates + Prairie CCA Board**
Bioenterprise triages incoming entrepreneurs nationally. Alberta Innovates funds the viable ones. Prairie CCA Board provides the grower adoption channel. This pipeline covers triage, funding, and market access.

**Partnership 3: Tall Grass Ventures + AgSphere + Trade Shows**
Tall Grass identifies investment-ready companies in their pipeline. AgSphere helps them build go-to-market capability. Trade show presence (funded by SCAP Innovation or Alberta Innovates) provides the customer acquisition platform. This turns the Series A fundraising story from "we have a pilot" to "we have revenue."

## Strategic recommendation
The single most impactful action is to formalize **Partnership 1** (AgSphere + RDAR + a pilot site). This three-way handoff — accelerator to funder to trial site — is where the pipeline breaks today because each organization operates independently. A signed MOU with shared intake forms and quarterly pipeline reviews would immediately create the strongest idea-to-validation pathway in Canadian agtech. The broken Stage 4 (pilot to revenue) remains the critical gap that no partnership alone can fix — this requires a new program.`
};


const CM = {Fund:{b:"#e8f0fe",t:"#1a4b8c",l:"Funding"},Accel:{b:"#fff3e0",t:"#8c5a1a",l:"Accelerator"},Pilot:{b:"#e8f5e9",t:"#1a6b2a",l:"Pilot Site"},Event:{b:"#fce4ec",t:"#8c1a3a",l:"Event"},Org:{b:"#f3e5f5",t:"#6a1a8c",l:"Industry Org"},Train:{b:"#e0f7fa",t:"#1a6b7a",l:"Training"}};
const hs = {fontFamily:"'DM Sans',sans-serif"};
const SN = ["Idea","MVP","Pilot","1st Cust.","Scale-up"];
const SK = ["Idea","MVP","Pilot","Comm","Scale"];
const CK = ["Fund","Accel","Pilot","Event","Org","Train"];

function StageBar({current}) {
  var ci = SK.findIndex(function(s){return current && current.includes(s);});
  if (ci < 0) ci = 1;
  return (
    <div style={{display:"flex",margin:"12px 0",background:"#fff",borderRadius:"10px",padding:"10px 6px",border:"1px solid #e5e0d5"}}>
      {SN.map(function(s, i) {
        var a = i === ci, p = i < ci;
        return (
          <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:"100%",height:"4px",background:(p||a)?"#2d5016":"#e0e0e0"}}/>
            <div style={{width:a?16:p?8:6,height:a?16:p?8:6,borderRadius:"50%",background:a?"#c5a55a":p?"#2d5016":"#ccc",border:a?"3px solid #2d5016":"none",marginTop:"-10px",zIndex:1}}/>
            <span style={{fontSize:a?"0.58rem":"0.48rem",fontWeight:a?700:400,color:a?"#1a3a0a":"#999",marginTop:"2px",...hs,textAlign:"center"}}>{s}</span>
            {a && <span style={{fontSize:"0.42rem",color:"#c5a55a",fontWeight:700,...hs}}>YOU ARE HERE</span>}
          </div>
        );
      })}
    </div>
  );
}

function PathwayMap({recs}) {
  if (!recs || !recs.length) return null;
  return (
    <div style={{background:"#fff",border:"1px solid #e5e0d5",borderRadius:"8px",padding:"10px",margin:"10px 0",overflowX:"auto"}}>
      <div style={{fontSize:"0.58rem",fontWeight:700,color:"#c5a55a",textTransform:"uppercase",marginBottom:"6px",...hs}}>Recommended Pathway</div>
      <div style={{display:"flex",alignItems:"flex-start",minWidth:"fit-content"}}>
        {recs.map(function(r, i) {
          var cc = CM.Fund;
          CK.forEach(function(k){if(r.cat && r.cat.includes(CM[k].l)) cc = CM[k];});
          return (
            <div key={i} style={{display:"flex",alignItems:"center"}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"90px"}}>
                <div style={{width:"28px",height:"28px",borderRadius:"50%",background:cc.b,border:"2px solid "+cc.t,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:800,color:cc.t,...hs}}>{i+1}</div>
                <div style={{fontSize:"0.56rem",fontWeight:700,textAlign:"center",marginTop:"2px",lineHeight:"1.1",...hs}}>{r.name}</div>
                <span style={{fontSize:"0.44rem",background:cc.b,color:cc.t,padding:"0 4px",borderRadius:"4px",fontWeight:600,...hs}}>{r.cat}</span>
              </div>
              {i < recs.length - 1 && <svg width="16" height="10" style={{marginBottom:"14px",flexShrink:0}}><path d="M0 5h10M7 2l4 3-4 3" stroke="#2d5016" strokeWidth="1.5" fill="none"/></svg>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function parseRecs(text) {
  if (!text) return {stage:null,recs:[],body:text};
  var lines = text.split("\n");
  var stage = null;
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].indexOf("STAGE:") === 0) { stage = lines[i].replace("STAGE:","").trim(); break; }
  }
  var recs = [];
  var cn = null;
  for (var j = 0; j < lines.length; j++) {
    var ln = lines[j];
    var nm = ln.match(/###\s*\d+\.\s*(.+)/);
    if (nm) cn = nm[1].trim();
    var cm = ln.match(/\*\*Category:\*\*\s*(.+)/);
    if (cm && cn) { recs.push({name:cn,cat:cm[1].trim()}); cn = null; }
  }
  var body = lines.filter(function(l){return l.indexOf("STAGE:") !== 0;}).join("\n");
  return {stage:stage,recs:recs,body:body};
}

function EcoStats() {
  var byCat = {};
  CK.forEach(function(c){byCat[c] = E.filter(function(e){return e.Category===c;}).length;});
  var byStage = {Idea:0,MVP:0,Pilot:0,Comm:0,Scale:0};
  E.forEach(function(e){Object.keys(byStage).forEach(function(k){if(e.Stage.includes(k))byStage[k]++;});});
  var byRgn = {AB:0,SK:0,MB:0,National:0};
  E.forEach(function(e){Object.keys(byRgn).forEach(function(k){if(e.Region.includes(k))byRgn[k]++;});});
  return (
    <div style={{margin:"10px 0"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"5px",marginBottom:"8px"}}>
        {[{n:byCat.Fund,l:"Funding",c:"#1a4b8c",bg:"#ffffff"},{n:byCat.Pilot,l:"Pilot Sites",c:"#1a6b2a",bg:"#ffffff"},{n:byCat.Accel,l:"Accelerators",c:"#8c5a1a",bg:"#ffffff"}].map(function(d,i){
          return <div key={i} style={{background:d.bg,borderRadius:"8px",padding:"8px",textAlign:"center",border:"1px solid #d1d8e0"}}><div style={{fontSize:"1.3rem",fontWeight:800,color:d.c,...hs}}>{d.n}</div><div style={{fontSize:"0.5rem",color:d.c,...hs,fontWeight:600}}>{d.l}</div></div>;
        })}
      </div>
      <div style={{background:"#ffffff",border:"1px solid #d1d8e0",borderRadius:"8px",padding:"8px",marginBottom:"6px"}}>
        <div style={{fontSize:"0.58rem",fontWeight:700,color:"#1e3a5f",marginBottom:"4px",...hs}}>Coverage by Stage</div>
        {SN.map(function(s,i){var ct=byStage[SK[i]];var pct=Math.round(ct/E.length*100);
          return <div key={i} style={{display:"flex",alignItems:"center",gap:"4px",marginBottom:"2px"}}>
            <span style={{fontSize:"0.54rem",width:"55px",textAlign:"right",color:"#5a6577",...hs}}>{s}</span>
            <div style={{flex:1,height:"7px",background:"#e4e8ec",borderRadius:"3px",overflow:"hidden"}}><div style={{height:"100%",width:pct+"%",background:"linear-gradient(90deg,#2e86ab,#1e3a5f)",borderRadius:"3px"}}/></div>
            <span style={{fontSize:"0.52rem",color:"#1a1a1a",width:"18px",...hs,fontWeight:600}}>{ct}</span>
          </div>;
        })}
      </div>
      <div style={{background:"#ffffff",border:"1px solid #d1d8e0",borderRadius:"8px",padding:"8px"}}>
        <div style={{fontSize:"0.58rem",fontWeight:700,color:"#1e3a5f",marginBottom:"4px",...hs}}>Coverage by Region</div>
        {Object.entries(byRgn).map(function(pair){var k=pair[0],v=pair[1];var pct=Math.round(v/E.length*100);
          return <div key={k} style={{display:"flex",alignItems:"center",gap:"4px",marginBottom:"2px"}}>
            <span style={{fontSize:"0.54rem",width:"55px",textAlign:"right",color:"#5a6577",...hs}}>{k}</span>
            <div style={{flex:1,height:"7px",background:"#e4e8ec",borderRadius:"3px",overflow:"hidden"}}><div style={{height:"100%",width:pct+"%",background:k==="AB"?"#1e3a5f":k==="National"?"#2e86ab":"#5a6577",borderRadius:"3px"}}/></div>
            <span style={{fontSize:"0.52rem",color:"#1a1a1a",width:"18px",...hs,fontWeight:600}}>{v}</span>
          </div>;
        })}
      </div>
    </div>
  );
}

function SF({onClose}) {
  var [f,sF] = useState({n:"",bf:"",sn:"",se:""});
  var [done,sD] = useState(false);
  var [submitting,sSub] = useState(false);
  var [subName,sSubName] = useState("");
  function u(k,v){sF(function(p){var o={...p};o[k]=v;return o;});}
  function go(){
    if(!f.n||!f.bf||!f.sn||!f.se){alert("Please fill in all required fields.");return;}
    sSub(true);
    fetch("/api/submissions", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({programName: f.n, bestFor: f.bf, submitterName: f.sn, submitterEmail: f.se})
    }).then(function(res){ return res.json(); }).then(function(){
      sSubName(f.n);
      sD(true);
      sSub(false);
    }).catch(function(){
      alert("Something went wrong. Please try again.");
      sSub(false);
    });
  }
  if(done) return (
    <div style={{position:"fixed",inset:0,background:"#f7f5f0",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"24px"}}>
      <div style={{background:"#fff",borderRadius:"16px",padding:"32px 28px",maxWidth:"420px",width:"100%",textAlign:"center",border:"2px solid #c5a55a",boxShadow:"0 4px 24px rgba(0,0,0,0.08)"}}>
        <div style={{width:"56px",height:"56px",borderRadius:"50%",background:"#e8f5e9",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontSize:"1.6rem"}}>{"✓"}</div>
        <h3 style={{fontSize:"1.1rem",fontWeight:700,color:"#1a3a0a",margin:"0 0 8px",...hs}}>Submission Received</h3>
        <p style={{fontSize:"0.82rem",color:"#444",lineHeight:"1.5",margin:"0 0 6px",...hs}}>Thank you for submitting <strong>{subName}</strong>.</p>
        <p style={{fontSize:"0.76rem",color:"#666",lineHeight:"1.5",margin:"0 0 20px",...hs}}>Our team will review your entry and add it to the Navigator once verified. You'll receive a confirmation email at the address you provided.</p>
        <button data-testid="button-submission-done" onClick={onClose} style={{background:"#1a3a0a",color:"#fff",border:"none",borderRadius:"8px",padding:"10px 28px",...hs,fontWeight:600,cursor:"pointer",fontSize:"0.82rem"}}>Done</button>
      </div>
    </div>
  );
  var inpS = {width:"100%",padding:"7px",borderRadius:"5px",border:"1px solid #ccc",fontSize:"0.78rem",...hs,boxSizing:"border-box"};
  return (
    <div style={{position:"fixed",inset:0,background:"#f7f5f0",zIndex:1000,overflow:"auto",...hs}}>
      <div style={{background:"#1a3a0a",padding:"10px 16px",display:"flex",justifyContent:"space-between",borderBottom:"3px solid #c5a55a",position:"sticky",top:0,zIndex:10}}><span style={{color:"#fff",fontWeight:700}}>{"+ Submit Program"}</span><button onClick={onClose} style={{background:"#c5a55a",border:"none",borderRadius:"5px",padding:"4px 11px",fontWeight:700,cursor:"pointer",...hs}}>X</button></div>
      <div style={{maxWidth:"540px",margin:"0 auto",padding:"14px"}}>
        <label style={{display:"block",fontSize:"0.72rem",fontWeight:600,marginBottom:"2px"}}>Program Name *</label><input data-testid="input-program-name" value={f.n} onChange={function(e){u("n",e.target.value);}} style={inpS}/><br/>
        <label style={{display:"block",fontSize:"0.72rem",fontWeight:600,marginBottom:"2px",marginTop:"8px"}}>Best for (what does this program do?) *</label><textarea data-testid="input-best-for" value={f.bf} onChange={function(e){u("bf",e.target.value);}} rows={2} style={{...inpS,resize:"vertical"}}/><br/>
        <div style={{borderTop:"2px solid #c5a55a",margin:"12px 0 8px",paddingTop:"8px"}}><p style={{fontWeight:700,fontSize:"0.72rem",color:"#1a3a0a"}}>Your Contact Info</p></div>
        <label style={{display:"block",fontSize:"0.72rem",fontWeight:600,marginBottom:"2px"}}>Your Name *</label><input data-testid="input-submitter-name" value={f.sn} onChange={function(e){u("sn",e.target.value);}} style={inpS}/><br/>
        <label style={{display:"block",fontSize:"0.72rem",fontWeight:600,marginBottom:"2px",marginTop:"8px"}}>Your Email *</label><input data-testid="input-submitter-email" type="email" value={f.se} onChange={function(e){u("se",e.target.value);}} style={inpS}/><br/>
        <button data-testid="button-submit-program" onClick={go} disabled={submitting} style={{width:"100%",background:submitting?"#666":"#1a3a0a",color:"#fff",border:"none",borderRadius:"6px",padding:"11px",...hs,fontWeight:600,cursor:submitting?"default":"pointer",marginTop:"10px"}}>{submitting ? "Submitting..." : "Submit"}</button>
      </div>
    </div>
  );
}

function DB({onClose}) {
  var [fl,sFl] = useState("");
  var [cf,sCf] = useState("All");
  var [data,setData] = useState([]);
  var [loading,setLoading] = useState(true);
  var cats = ["All"].concat(CK);

  useEffect(function(){
    fetch("/api/programs")
      .then(function(r){return r.json();})
      .then(function(d){setData(d);setLoading(false);})
      .catch(function(){setLoading(false);});
  },[]);

  var ft = data.filter(function(e){
    var t = fl.toLowerCase();
    var desc = e.description || "";
    var prov = (e.province||[]).join(" ");
    var uc = (e.use_case||[]).join(" ");
    var matchText = !t || [e.name, desc, prov, uc].some(function(f){return (f||"").toLowerCase().includes(t);});
    return matchText && (cf === "All" || e.category === cf);
  });

  return (
    <div style={{position:"fixed",inset:0,background:"#f7f5f0",zIndex:1000,display:"flex",flexDirection:"column",...hs}}>
      <div style={{background:"#1a3a0a",padding:"9px 14px",display:"flex",justifyContent:"space-between",borderBottom:"3px solid #c5a55a",flexShrink:0}}>
        <span style={{color:"#fff",fontWeight:700}}>{loading ? "Loading..." : ft.length + "/" + data.length + " resources"}</span>
        <button onClick={onClose} style={{background:"#c5a55a",border:"none",borderRadius:"5px",padding:"4px 11px",fontWeight:700,cursor:"pointer",...hs}}>X Close</button>
      </div>
      <div style={{padding:"8px 10px",display:"flex",gap:"5px",flexWrap:"wrap",background:"#f7f5f0",borderBottom:"1px solid #e5e0d5",flexShrink:0}}>
        <input value={fl} onChange={function(e){sFl(e.target.value);}} placeholder="Search..." style={{flex:1,minWidth:"140px",padding:"6px 9px",borderRadius:"5px",border:"1px solid #ccc",fontSize:"0.76rem",...hs}}/>
        <select value={cf} onChange={function(e){sCf(e.target.value);}} style={{padding:"6px 9px",borderRadius:"5px",border:"1px solid #ccc",fontSize:"0.76rem",...hs,background:"#fff"}}>{cats.map(function(c){return <option key={c} value={c}>{c==="All"?"All Categories":(CM[c]||{}).l||c}</option>;})}</select>
      </div>
      <div style={{padding:"0 10px",background:"#2d5016",flexShrink:0}}>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.7rem",lineHeight:"1.3",tableLayout:"fixed"}}>
          <colgroup><col style={{width:"22%"}}/><col style={{width:"10%"}}/><col style={{width:"12%"}}/><col style={{width:"38%"}}/><col style={{width:"18%"}}/></colgroup>
          <thead><tr style={{background:"#2d5016",color:"#fff"}}>{["Name","Cat","Province","Description","Use Case"].map(function(h){return <th key={h} style={{padding:"5px",textAlign:"left",fontWeight:600}}>{h}</th>;})}</tr></thead>
        </table>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"0 10px"}}>
        {loading ? (
          <div style={{padding:"24px",textAlign:"center",color:"#666",...hs}}>Loading programs...</div>
        ) : (
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.7rem",lineHeight:"1.3",tableLayout:"fixed"}}>
            <colgroup><col style={{width:"22%"}}/><col style={{width:"10%"}}/><col style={{width:"12%"}}/><col style={{width:"38%"}}/><col style={{width:"18%"}}/></colgroup>
            <tbody>{ft.map(function(e,i){
              var cc=CM[e.category]||{b:"#eee",t:"#333",l:"?"};
              var prov=(e.province||[]).filter(function(p){return p!=="National";}).join(", ")||(e.national?"National":"—");
              return (
                <tr key={i} style={{borderBottom:"1px solid #eee",background:i%2===0?"#fff":"#fafaf7"}}>
                  <td style={{padding:"4px 5px",fontWeight:600,wordBreak:"break-word",overflowWrap:"break-word"}}>
                    {e.website ? <a href={e.website} target="_blank" rel="noopener noreferrer" style={{color:"#1a3a0a",textDecoration:"underline"}}>{e.name}</a> : e.name}
                    {e.status==="unverified" && <span style={{fontSize:"0.44rem",color:"#aaa",marginLeft:"3px"}}> ●</span>}
                  </td>
                  <td style={{padding:"4px"}}><span style={{background:cc.b,color:cc.t,padding:"1px 4px",borderRadius:"5px",fontSize:"0.56rem",fontWeight:600}}>{cc.l}</span></td>
                  <td style={{padding:"4px",fontSize:"0.62rem",wordBreak:"break-word"}}>{prov}</td>
                  <td style={{padding:"4px",color:"#444",wordBreak:"break-word",overflowWrap:"break-word"}}>{e.description||"—"}</td>
                  <td style={{padding:"4px",fontSize:"0.6rem",color:"#666",wordBreak:"break-word",overflowWrap:"break-word"}}>{(e.use_case||[]).join(", ")||"—"}</td>
                </tr>
              );
            })}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}


export default function Navigator() {
  var [mode, setMode] = useState(function(){ try { return localStorage.getItem("ag_nav_mode") || "e"; } catch(e) { return "e"; } });
  var [q, sQ] = useState("");
  var [ms, sMs] = useState([]);
  var [ld, sLd] = useState(false);
  var [sx, sSx] = useState(true);
  var [db, sDb] = useState(false);
  var [sb, sSb] = useState(false);
  var er = useRef(null);
  var eco = mode === "ec";

  var th = eco
    ? {bg:"#f0f2f5",hdr:"#1e3a5f",acc:"#2e86ab",ac2:"#1e3a5f",card:"#ffffff",tx:"#1a1a1a",tx2:"#5a6577",brd:"#d1d8e0"}
    : {bg:"#f7f5f0",hdr:"#1a3a0a",acc:"#c5a55a",ac2:"#2d5016",card:"#fff",tx:"#1a1a1a",tx2:"#666",brd:"#e5e0d5"};

  var exE = [
    "Building a tractor-mounted camera for disease detection in canola. Working prototype, Lethbridge. Need field trials and funding.",
    "Food processor in Edmonton making pulse-based snacks. ~$200K revenue. Need help scaling.",
    "Drone company doing crop scouting. Pre-revenue, 3 people, Calgary. What's available?",
    "Rancher near Red Deer wanting to try livestock monitoring tech. Programs to help?",
    "Soil sensor IP from university research. No company yet. Path to commercialize?",
    "Agronomist building a DSS for irrigation in southern Alberta. Where to start?"
  ];
  var exEc = [
    "Where are the biggest gaps in Alberta's ag innovation ecosystem?",
    "Funding landscape livestock tech vs crop tech - where is the imbalance?",
    "I run a pilot site. Which accelerators and funders should we partner with?",
    "Stage transition gaps: weakest coverage for early-stage agtech?",
    "Designing a new commercialization program. What exists and what is missing?",
    "What partnerships create the strongest idea-to-Series-A pipeline?"
  ];

  useEffect(function(){window.scrollTo(0, 0);},[]);
  useEffect(function(){
    if (ms.length > 2 && er.current) {
      er.current.scrollIntoView({behavior:"smooth"});
    } else if (ms.length > 0) {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  },[ms]);

  function reset(){sMs([]);sQ("");sSx(true);sLd(false);}
  function flip(){reset();setMode(function(m){return m==="e"?"ec":"e";});}

  function send(t) {
    if (!t.trim() || ld) return;
    var um = {role:"user",content:t};
    var nextMs = ms.concat([um]);
    sMs(nextMs);
    sSx(false);
    sLd(true);
    sQ("");
    fetch("/api/chat", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        message: t,
        mode: mode,
        history: ms.slice(-6)
      })
    })
      .then(function(r){return r.json();})
      .then(function(d){
        sMs(function(prev){return prev.concat([{role:"assistant",content:d.reply||"Sorry, no response generated."}]);});
        sLd(false);
      })
      .catch(function(){
        sMs(function(prev){return prev.concat([{role:"assistant",content:"Connection error. Please try again."}]);});
        sLd(false);
      });
  }

  function fmt(t) {
    return t.split("\n").map(function(ln, i) {
      if (ln.indexOf("STAGE:") === 0) return null;
      if (ln.indexOf("### ") === 0) return <h3 key={i} style={{fontSize:"0.86rem",fontWeight:700,color:eco?"#2d5016":"#1a3a0a",margin:"8px 0 3px"}}>{ln.slice(4)}</h3>;
      if (ln.indexOf("## ") === 0) return <h2 key={i} style={{fontSize:"0.92rem",fontWeight:700,color:eco?"#2d5016":"#1a3a0a",margin:"12px 0 4px",borderTop:"1px solid "+th.brd,paddingTop:"10px"}}>{ln.slice(3)}</h2>;
      if (!ln.trim()) return <br key={i}/>;
      return <p key={i} style={{margin:"2px 0",lineHeight:"1.5"}} dangerouslySetInnerHTML={{__html:ln.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}}/>;
    });
  }

  var examples = eco ? exEc : exE;

  return (
    <div style={{minHeight:"100vh",background:th.bg,fontFamily:"'Source Serif 4',Georgia,serif",display:"flex",flexDirection:"column",transition:"background .3s"}}>
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      {db && <DB onClose={function(){sDb(false);}}/>}
      {sb && <SF onClose={function(){sSb(false);}}/>}

      <header style={{background:th.hdr,padding:"9px 14px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"3px solid "+th.acc,flexWrap:"wrap",gap:"5px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <Link href="/">
            <div style={{cursor:"pointer", display:"flex", alignItems:"center"}}>
              <img src={logoWordmark} alt="Canadian Ag Innovation Navigator" style={{height:"38px",width:"auto",objectFit:"contain",display:"block",filter:"brightness(0) invert(1)"}} />
            </div>
          </Link>
        </div>
        <div style={{display:"flex",gap:"3px",flexWrap:"wrap"}}>
          <button onClick={flip} style={{background:th.acc,border:"none",borderRadius:"4px",padding:"3px 7px",fontSize:"0.6rem",color:eco?"#fff":"#1a3a0a",cursor:"pointer",...hs,fontWeight:700}}>{eco ? "Entrepreneur" : "Ecosystem"}</button>
          <button onClick={function(){sSb(true);}} style={{background:"transparent",border:"1px solid "+th.acc,borderRadius:"4px",padding:"3px 6px",fontSize:"0.6rem",color:th.acc,cursor:"pointer",...hs,fontWeight:600}}>+ Submit</button>
          <button onClick={function(){sDb(true);}} style={{background:"transparent",border:"1px solid "+th.acc,borderRadius:"4px",padding:"3px 6px",fontSize:"0.6rem",color:th.acc,cursor:"pointer",...hs,fontWeight:600}}>Browse All</button>
          {ms.length > 0 && <button onClick={reset} style={{background:"transparent",border:"1px solid "+th.acc,borderRadius:"4px",padding:"3px 6px",fontSize:"0.6rem",color:th.acc,cursor:"pointer",...hs,fontWeight:600}}>New</button>}
        </div>
      </header>

      <div style={{flex:1,overflowY:"auto",padding:"14px",maxWidth:"820px",width:"100%",margin:"0 auto",boxSizing:"border-box"}}>
        {sx && (
          <div>
            <div style={{textAlign:"center",marginBottom:"16px",padding:"8px 0"}}>
              <h2 style={{fontSize:"1.1rem",fontWeight:700,color:eco?"#2d5016":"#1a3a0a",margin:"0 0 4px"}}>{eco ? "Where are the gaps?" : "What do you need next?"}</h2>
              <p style={{color:th.tx2,fontSize:"0.76rem",...hs,maxWidth:"460px",margin:"0 auto",lineHeight:"1.4"}}>{eco ? "Analyze for gaps, overlaps, and partnership opportunities." : "Describe what you are building. Get a visual pathway with ranked recommendations."}</p>
            </div>
            {eco ? <EcoStats/> : (
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"5px",margin:"8px 0"}}>
                {[
                  {n:E.filter(function(e){return e.Category==="Fund";}).length,l:"Funding",c:"#1a4b8c",bg:"#e8f0fe"},
                  {n:E.filter(function(e){return e.Category==="Pilot";}).length,l:"Pilot Sites",c:"#1a6b2a",bg:"#e8f5e9"},
                  {n:E.filter(function(e){return e.Category==="Accel";}).length,l:"Accelerators",c:"#8c5a1a",bg:"#fff3e0"}
                ].map(function(d,i){
                  return <div key={i} style={{background:d.bg,borderRadius:"8px",padding:"7px",textAlign:"center"}}><div style={{fontSize:"1.2rem",fontWeight:800,color:d.c,...hs}}>{d.n}</div><div style={{fontSize:"0.5rem",color:d.c,...hs,fontWeight:600}}>{d.l}</div></div>;
                })}
              </div>
            )}
            <p style={{fontSize:"0.62rem",color:th.tx2,...hs,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:"6px",marginTop:"12px"}}>{eco ? "Ecosystem queries" : "Tap a scenario"}</p>
            <div style={{display:"grid",gap:"4px"}}>
              {examples.map(function(x,i){
                return <button key={i} onClick={function(){send(x);}} style={{background:th.card,border:"1px solid "+th.brd,borderRadius:"6px",padding:"7px 10px",fontSize:"0.74rem",...hs,color:th.tx,cursor:"pointer",textAlign:"left",lineHeight:"1.3"}}>{x}</button>;
              })}
            </div>
            {eco && (
              <div style={{marginTop:"12px",background:"#fff",border:"1px dashed #c5a55a",borderRadius:"6px",padding:"9px 12px",textAlign:"center"}}>
                <p style={{fontSize:"0.76rem",color:"#1a3a0a",fontWeight:600,margin:"0 0 3px",...hs}}>Know a program that should be listed?</p>
                <button onClick={function(){sSb(true);}} style={{background:"#1a3a0a",color:"#fff",border:"none",borderRadius:"5px",padding:"6px 16px",fontSize:"0.72rem",...hs,fontWeight:600,cursor:"pointer"}}>+ Submit a Program</button>
              </div>
            )}
          </div>
        )}

        {ms.map(function(m, i) {
          var isAI = m.role === "assistant";
          var parsed = (isAI && !eco) ? parseRecs(m.content) : {stage:null,recs:[],body:m.content};
          return (
            <div key={i} style={{marginBottom:"10px",display:"flex",flexDirection:"column",alignItems:m.role==="user"?"flex-end":"flex-start"}}>
              <div style={{fontSize:"0.54rem",...hs,fontWeight:600,color:m.role==="user"?th.ac2:th.acc,textTransform:"uppercase",marginBottom:"2px"}}>{m.role==="user" ? "You" : (eco ? "Analyst" : "Navigator")}</div>
              <div style={{background:m.role==="user"?th.ac2:th.card,color:m.role==="user"?"#f7f5f0":th.tx,borderRadius:m.role==="user"?"8px 8px 2px 8px":"8px 8px 8px 2px",padding:isAI?"12px 14px":"10px 12px",maxWidth:"95%",fontSize:"0.8rem",lineHeight:"1.5",fontFamily:m.role==="user"?"'DM Sans',sans-serif":"'Source Serif 4',serif",border:isAI?"1px solid "+th.brd:"none",width:isAI?"95%":"auto"}}>
                {isAI && !eco ? (
                  <div>
                    {parsed.stage && <StageBar current={parsed.stage}/>}
                    {parsed.recs.length > 0 && <PathwayMap recs={parsed.recs}/>}
                    {fmt(parsed.body)}
                  </div>
                ) : isAI ? fmt(m.content) : m.content}
              </div>
            </div>
          );
        })}

        {ld && (
          <div style={{display:"flex",alignItems:"center",gap:"6px",padding:"12px 0",color:th.tx2,...hs,fontSize:"0.78rem"}}>
            <span style={{display:"inline-block",width:"8px",height:"8px",borderRadius:"50%",background:th.ac2,animation:"pls 1s infinite"}}/>
            {eco ? "Analyzing ecosystem..." : `Searching ${data.length} programs...`}
            <style dangerouslySetInnerHTML={{__html:"@keyframes pls{0%,100%{opacity:.3}50%{opacity:1}}"}}/>
          </div>
        )}
        <div ref={er}/>
      </div>

      <div style={{borderTop:"1px solid "+th.brd,background:th.card,padding:"8px 14px",maxWidth:"820px",width:"100%",margin:"0 auto",boxSizing:"border-box"}}>
        <div style={{display:"flex",gap:"5px",alignItems:"flex-end",marginBottom:"16px"}}>
          <textarea value={q} onChange={function(e){sQ(e.target.value);}} onKeyDown={function(e){if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send(q);}}} placeholder={eco ? "Ask about gaps, partnerships..." : "Describe your situation..."} rows={2} style={{flex:1,padding:"8px 10px",borderRadius:"6px",border:"1px solid "+th.brd,fontSize:"0.78rem",...hs,resize:"none",outline:"none",lineHeight:"1.3",background:th.bg,color:th.tx}}/>
          <button onClick={function(){send(q);}} disabled={ld||!q.trim()} style={{background:(ld||!q.trim())?"#555":th.ac2,color:"#fff",border:"none",borderRadius:"6px",padding:"8px 14px",fontSize:"0.76rem",...hs,fontWeight:600,cursor:(ld||!q.trim())?"default":"pointer"}}>
            {ld ? "..." : "Ask"}
          </button>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",paddingBottom:"8px"}}>
          <p style={{fontSize:"0.54rem",color:th.tx2,...hs,margin:0,textAlign:"center"}}>Canadian Ag Innovation Navigator V0 - {data.length} entries - Bioenterprise 2024 + provincial + federal</p>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"}}>
            <span style={{fontSize:"0.5rem",color:"#8c8c8c",...hs,textTransform:"uppercase",letterSpacing:"0.2em",fontWeight:700}}>Powered by</span>
            <a href="https://bestinshow.ag" target="_blank" rel="noopener noreferrer" style={{display:"block", opacity:0.9, transition:"opacity 0.2s"}}>
              <img src={bestInShowLogo} alt="BestInShow" style={{height:"32px",objectFit:"contain"}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
