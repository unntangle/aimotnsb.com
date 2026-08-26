/* ------------------------------------------------------------------
   Central content layer for aimoindia.com
   Editing copy, contacts, events or people? Do it here, not in JSX.
------------------------------------------------------------------- */

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const img = {
  heroConference: U("1540575467063-178a50c2df87"),
  heroFactory: U("1567789884554-0b844b597180"),
  heroPolicy: U("1600880292203-757bb62b4baf"),
  boardroom: U("1517048676732-d65bc937f952"),
  speaker: U("1531482615713-2afd69097998"),
  handshake: U("1552664730-d307ca884978"),
  engineers: U("1581091226825-a6a2a5aee158"),
  factoryFloor: U("1565793298595-6a879b1d9492"),
  precision: U("1581092160562-40aa08e78837"),
  womanEngineer: U("1573164713988-8665fc963095"),
  lectureHall: U("1524178232363-1fb2b075b655"),
  notes: U("1454165804606-c3d57bc86b40"),
  dataScreen: U("1516321318423-f06f85e504b3"),
  officeTeam: U("1556761175-b413da4baf72"),
  networking: U("1519389950473-47ba0277781c"),
  awards: U("1567427017947-545c5f8d16ad"),
  pressRoom: U("1560179707-f14e90ef3623"),
  mumbai: U("1529253355930-ddbe423a2ac7"),
  india: U("1587474260584-136574528ed5"),
  warehouse: U("1553413077-190dd305871c"),
  textile: U("1558618666-fcd25c85cd64"),
  pharma: U("1584308666744-24d5c474f2ae"),
  agri: U("1500382017468-9049fed747ef"),
  startup: U("1522071820081-009f0129c71c"),
  ports: U("1494412574643-ff11b0a5c1c3"),
  conferenceHall: U("1497366754035-f200968a6e72"),
  auditorium: U("1519167758481-83f550bb49b3"),
  summitCrowd: U("1511578314322-379afb476865"),

  /* ---- Local photographs of the actual AIMO premises ---- */
  aimoHall: "/assets/slider1.jpeg",
  aimoBoardRoom: "/assets/slider2.jpeg",
  aimoTrainingRoom: "/assets/slider3.jpeg",

  /* ---- Local photographs from AIMO events ---- */
  aimoEvent1: "/assets/gal1.jpeg",
  aimoEvent2: "/assets/gal2.jpeg",
  aimoEvent3: "/assets/gal3.jpeg",
  aimoEvent4: "/assets/gal4.jpeg",

  /* ---- Home page hero banners ----
     Swapping a slide's photo is a one-line change: edit the file the
     key points to here, or point a slide at a different key below. */
  hero1: "/assets/hero/hero1.jpg",
  hero2: "/assets/hero/hero2.jpg",
  hero3: "/assets/hero/hero3.jpg",
  hero4: "/assets/hero/hero4.jpg",
  hero5: "/assets/hero/hero5.jpg",
  hero6: "/assets/hero/hero6.jpg",
  hero7: "/assets/hero/hero7.jpg",
};

export const site = {
  name: "All India Manufacturers' Organisation (TNSB)",
  short: "AIMO TNSB",
  tagline: "Prosperity through Industry",
  founded: 1941,
  founder: "Bharat Ratna Sir M. Visvesvaraya",
  description:
    "AIMO TNSB is the Tamil Nadu State Board of the All India Manufacturers' Organisation, a national body of Micro, Small and Medium Enterprises founded by Bharat Ratna Sir M. Visvesvaraya in 1941.",
  url: "https://www.aimotnsb.com",
};

export const contact = {
  attn: "The Executive Director",
  org: "All India Manufacturers' Organisation (Tamil Nadu State Board)",
  addressLines: [
    "Round Table House, 2nd Floor",
    "80/69, Nungambakkam High Road",
    "Chennai – 600 034",
  ],
  address:
    "Round Table House, 2nd Floor, 80/69 Nungambakkam High Road, Chennai – 600 034",
  phones: ["+91 44 2822 8282", "+91 44 2822 8383"],
  /** Second number above is the TeleFax line. */
  phoneLabels: ["Tel", "TeleFax"],
  emails: ["aimo@aimotnsb.com"],
  hours: "Monday – Saturday · 10:00 AM – 6:00 PM IST",
  mapQuery:
    "All India Manufacturers Organisation, Round Table House, 69 Nungambakkam High Road, Chennai 600034",
};

export const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "X", href: "https://x.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
] as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Know AIMO",
    href: "/about",
    children: [
      { label: "Know AIMO TNSB", href: "/about" },
      { label: "Members", href: "/about/office-bearers" },
    ],
  },
  { label: "Membership", href: "/membership" },
  {
    label: "Events & Awards",
    href: "/events",
    children: [
      { label: "Upcoming Event", href: "/events" },
      { label: "Past Events", href: "/events/past" },
      { label: "Photo Gallery", href: "/gallery" },
      { label: "Awards", href: "/awards" },
    ],
  },
  {
    label: "Resources",
    href: "/resources/book-hall",
    children: [
      { label: "Book Hall & Board Room", href: "/resources/book-hall" },
      {
        label: "Internship Testimonials",
        href: "/resources/internship-testimonials",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/* ----------------------------- Hero slides ----------------------------- */

export const heroSlides = [
  {
    eyebrow: "Upcoming · 25–26 September 2026",
    title: "AIMO TNSB TECHKNOW 2026",
    body: "Two days on the questions that will decide the next decade of Indian manufacturing: export competitiveness, credit beyond collateral, energy costs and the skills pipeline. Ministers, bankers, buyers and 900 promoters at the Vivekananda Auditorium, Anna University, Chennai.",
    image: img.hero1,
    cta: { label: "View Event Details", href: "/events" },
    alt: "Delegates at an AIMO national convention",
  },
  {
    eyebrow: "Why Become an AIMO Member?",
    title: "A Smaller Enterprise Gets a Louder Voice",
    body: "One promoter with a grievance is noise. Two hundred units with the same objection and the numbers to back it is a sector position, and that is what changes a rule. Policy representation, credit clinics, research and recognition, since 1941.",
    image: img.hero2,
    cta: { label: "Why Join AIMO TNSB", href: "/membership" },
    cta2: { label: "Become a Member", href: "/membership/apply" },
    alt: "AIMO TNSB members networking at a chapter meeting",
  },
  {
    eyebrow: "Book Hall & Board Room",
    title: "Your Next Meeting, at the AIMO TNSB Premises",
    body: "Suitable to host seminars, workshops, meetings, mini-conferences and training programmes.",
    image: img.hero3,
    cta: { label: "Check Availability", href: "/resources/book-hall" },
    cta2: { label: "See the Spaces", href: "/resources/book-hall#spaces" },
    alt: "The AIMO TNSB conference hall set up for a session",
  },
  {
    eyebrow: "Founded 1941 · Bharat Ratna Sir M. Visvesvaraya",
    title: "Eight Decades of Prosperity through Industry",
    body: "AIMO was founded by the engineer who built the Krishna Raja Sagara dam and served as Diwan of Mysore. The conviction he started with, that industry is how a country lifts itself, is still the one the organisation works to.",
    image: img.hero4,
    cta: { label: "Know AIMO", href: "/about" },
    cta2: { label: "Our Founder", href: "/about#our-founder" },
    alt: "Portrait setting recalling AIMO's founding in 1941",
  },
  {
    eyebrow: "Government Relations",
    title: "A Seat at Over 150 Policy Tables",
    body: "Recognised by the Government of India as an apex industry body, AIMO holds representation on more than 150 National and State level government and quasi-government bodies, from excise advisory committees to labour and consumer protection councils.",
    image: img.hero5,
    cta: { label: "How We Represent You", href: "/about" },
    cta2: { label: "Read Our Submissions", href: "/press" },
    alt: "AIMO office bearers at a policy consultation",
  },
  {
    eyebrow: "Sir Visvesvaraya Industrial Award",
    title: "Recognition That Industry Actually Respects",
    body: "Presented each year to an enterprise for outstanding performance, and handed over by Governors of Tamil Nadu and Union Ministers. Past recipients include the TVS Group, Ashok Leyland, MRF, BHEL, Hyundai Motors India and Indian Overseas Bank.",
    image: img.hero6,
    cta: { label: "View the Awards", href: "/awards" },
    cta2: { label: "Photo Gallery", href: "/gallery" },
    alt: "Presentation of the Sir Visvesvaraya Industrial Award",
  },
  {
    eyebrow: "Tamil Nadu State Board",
    title: "Close to the Shop Floor, Across the State",
    body: "From Ambattur and Hosur to Coimbatore, Tiruppur, Salem, Madurai and Trichy. Monthly members' meets, scheme clinics with TIIC, SIDBI and the banks, and liaison with the District Industries Centres.",
    image: img.hero7,
    cta: { label: "Tamil Nadu State Board", href: "/about/tamil-nadu-state-board" },
    cta2: { label: "Meet the Members", href: "/about/office-bearers" },
    alt: "Manufacturing cluster in Tamil Nadu",
  },
];

/* --------------------------- The three pillars -------------------------- */

export const pillars = [
  {
    icon: "graduation",
    title: "Educate",
    subtitle: "The Stakeholders",
    body: "Workshops, clinics and sector briefings that translate new technology, compliance and finance into language a promoter can act on this quarter.",
    href: "/events",
  },
  {
    icon: "chart",
    title: "Evaluate",
    subtitle: "The Global Situation",
    body: "Original research, member surveys and trade data, so that when AIMO TNSB speaks to government, it speaks with evidence rather than anecdote.",
    href: "/about",
  },
  {
    icon: "sparkles",
    title: "Evolve",
    subtitle: "The Next Generation",
    body: "Mentorship for second-generation promoters and new-age entrepreneurs who are rebuilding family enterprises around digital and green manufacturing.",
    href: "/about",
  },
];

/* -------------------------------- Stats -------------------------------- */

export const stats = [
  { value: "51 Mn", label: "MSME units across India" },
  { value: "117 Mn", label: "People employed, 40% of the workforce" },
  { value: "37%", label: "Share of national GDP" },
  { value: "43%", label: "Of India's total exports" },
];

/* ------------------------------- Founder -------------------------------- */

export const founder = {
  name: "Sir Mokshagundam Visvesvaraya",
  known: "Sir MV",
  born: "15 September 1861",
  died: "12 April 1962",
  bio: [
    "Sir Mokshagundam Visvesvaraya, popularly known as Sir MV (15 September 1861 – 12 April 1962), was an Indian engineer, scholar, statesman, and the 19th Diwan of Mysore, who served from 1912 to 1918. He received India's highest honour, the Bharat Ratna, in 1955.",
    "He was knighted as a Knight Commander of the British Indian Empire (KCIE) by King George V for his contributions to the public good. 15 September is celebrated as Engineer's Day in India in his memory. He is held in high regard as a pre-eminent Engineer of India. He was chief engineer responsible for the construction of the Krishna Raja Sagara dam, and chief engineer of the flood protection system for the city of Hyderabad.",
  ],
  honours: [
    "Appointed a Companion of the Order of the Indian Empire (CIE) in 1911.",
    "Awarded honorary membership of the London Institution of Civil Engineers.",
    "Awarded a fellowship of the Indian Institute of Science.",
    "Awarded several honorary doctoral degrees including D.Sc., LL.D. and D.Litt. from eight universities in India.",
    "President of the 1923 session of the Indian Science Congress.",
    "Conferred the Bharat Ratna, India's highest civilian honour, in 1955.",
  ],
  namedInHisHonour: [
    {
      name: "Visvesvaraya Technological University, Belagavi",
      note: "Most engineering colleges in Karnataka are affiliated to it.",
    },
    {
      name: "University Visvesvaraya College of Engineering, Bangalore",
      note: "Among the oldest engineering institutions in the state.",
    },
    {
      name: "Sir M. Visvesvaraya Institute of Technology, Bangalore",
      note: "Named for him in recognition of his work in engineering education.",
    },
    {
      name: "Visvesvaraya National Institute of Technology, Nagpur",
      note: "An institute of national importance carrying his name.",
    },
    {
      name: "College of Engineering, Pune",
      note: "His alma mater, which has erected a statue in his honour.",
    },
    {
      name: "Visvesvaraya Industrial and Technological Museum, Bangalore",
      note: "Named in his honour and dedicated to science and industry.",
    },
  ],
  works: [
    {
      year: "1917",
      title: "Speeches",
      publisher: "Bangalore: Govt. Press",
      oclc: "6258388",
    },
    {
      year: "1920",
      title: "Reconstructing India",
      publisher: "P. S. King & Son, Ltd",
      oclc: "2430680",
    },
    {
      year: "1932",
      title: "Unemployment in India; its causes and cure",
      publisher: "Bangalore: The Bangalore Press",
      oclc: "14348788",
    },
    {
      year: "1936",
      title: "Planned Economy for India",
      publisher: "Bangalore: Bangalore Press",
      oclc: "19373044",
    },
    {
      year: "1951",
      title: "Memories of My Working Life",
      publisher: "Bangalore",
      oclc: "6459729",
    },
    {
      year: "1959",
      title: "A Brief Memoir of My Complete Working Life",
      publisher: "Government Press, Bangalore",
      oclc: "",
    },
  ],
};

/* --------------------- About page section navigation --------------------- */

export const aboutSections = [
  { id: "overview", label: "About AIMO" },
  { id: "our-founder", label: "Our Founder" },
  { id: "industry-representation", label: "Industry Representation" },
];

/* ------------------------- About AIMO (TNSB) copy ----------------------- */

/** Body copy for the About page overview, as published by the Tamil Nadu
    State Board. The opening paragraph lives in the JSX because it carries
    inline emphasis; everything below is plain text and belongs here. */
export const aboutOverview = {
  bodiesLead:
    "The Tamil Nadu State Board continues to be represented on a number of Government and Quasi Government bodies, viz.",
  structure: {
    title: "Structure",
    body: "Members of AIMO are drawn from Small, Medium and Large scale industries from all over the country with diverse interests such as engineering, chemicals, pharmaceuticals, food processing and services. With headquarters in Mumbai, AIMO has State and Regional level boards elected annually, supported by Secretariats at headquarters and at the State Boards. The Tamil Nadu State Board operates from Chennai.",
  },
  operation: {
    title: "Operation",
    body: "Over 20 Councils and Committees, with experienced senior executives of member companies, study and analyse various legislative and other matters of concern to industry and provide expert guidance to the National Working Committee of AIMO. Periodic workshops and training programmes are organised to help members keep abreast of developments in industry. Particular stress is laid on the significant role of small industry in national development, and AIMO has been focusing attention on several areas to avoid sickness in industry.",
  },
  cooperation:
    "AIMO has been instrumental in creating an environment for co-operation between Government and Industry, in promoting and co-ordinating industrial and economic growth, and has worked for servicing trade and industry and the community. In order to effectively represent industry, AIMO actively participates in over 150 National and State level Government and quasi Government bodies.",
};

/** The Tamil Nadu State Board's own record, as set out on the About page. */
export const tnsbProfile = {
  name: "Tamil Nadu State Board (TNSB)",
  intro:
    "TNSB has been in the forefront of the Organisation\u2019s growth. Apart from acting as industry-representative, TNSB has established a continuing interaction with major institutions such as Anna University.",
  trust:
    "Through its Industrial Research & Development Trust, TNSB has instituted a number of awards and endowments at the University. The Trust has extended financial assistance through interest-free loans to students undergoing engineering education.",
  exhibition:
    "The Trust pioneered the concept of the Ideal Home Exhibition as marketing support for manufacturers of domestic goods and services. This exhibition is now organised in different mofussil centres.",
  incubation:
    "More recently, AIMO TNSB has taken the initiative of starting a programme to incubate Rural Innovations, so that the enormous knowledge held in rural India can be incubated and converted into commercial reality.",
  milestonesLead:
    "The Tamil Nadu State Board and its I R & D Trust have had a significant role in major industrial expositions.",
  milestones: [
    {
      year: "1991",
      title: "INDEXPO \u201991",
      body: "Held in June 1991 along with the Directorate of Industries and Commerce and the Tamil Small & Tiny Industries Association. A landmark in creating awareness of the industrial potential of the State.",
    },
    {
      year: "1993",
      title: "Entrepreneur Festival",
      body: "Held in 1993 and again in 1994 to provide complete guidance to prospective entrepreneurs.",
    },
    {
      year: "1994",
      title: "TECH-200",
      body: "AIMO (TNSB) had a major role in this industrial exposition, conducted in April 1994 to commemorate the bi-centenary of the College of Engineering, Guindy, Chennai.",
    },
    {
      year: "2001",
      title: "FOODTECH 2001",
      body: "A food processing exhibition and seminar conducted in June 2001.",
    },
  ],
};

/* ------------------------ Industry representation ----------------------- */

export const industryRepresentation = {
  intro:
    "The Government of India has identified the following key sectors to develop products in India. We at AIMO TNSB understand the nuances and magnitude of scale in implementing the scheme. AIMO TNSB will actively work with the Central and State Governments to ensure the vision for Make in India is successful.",
  sectors: [
    "Automobile",
    "Automobile Components",
    "Aviation",
    "Biotechnology",
    "Chemicals",
    "Construction",
    "Defence Manufacturing",
    "Electrical Machinery",
    "Electronic Systems",
    "Food Processing",
    "IT and BPM",
    "Leather",
    "Media and Entertainment",
    "Mining",
    "Oil and Gas",
    "Pharmaceuticals",
    "Renewable Energy",
    "Space",
    "Textiles and Garments",
    "Power",
    "Tourism and Hospitality",
    "Wellness",
  ],
};

/* -------------------------- Government relations ------------------------ */

export const governmentRelations = {
  intro:
    "AIMO has been instrumental in creating an environment for co-operation between Government and Industry, in promoting and co-ordinating industrial and economic growth, and has worked for servicing trade and industry and the community. In order to effectively represent industry, AIMO actively participates in over 150 National and State level Government and quasi Government bodies.",
  count: "150+",
  /** Bodies on which the Tamil Nadu State Board is represented, as listed
      on the AIMO (TNSB) About page. */
  bodies: [
    "Central Excise Regional Advisory Committee, Chennai II and III",
    "State Labour Advisory Committee",
    "Minimum Wages Advisory Committee",
    "Good Industrial Relations Advisory Committee",
    "Regional Workers Education Advisory Committee",
    "Anna University Planning & Monitoring Board",
    "EPF Advisory Committee",
    "ESI Regional Council",
    "ESI Medical Council",
    "State Employees Welfare Association",
    "Labour Welfare Board",
    "Service Tax Regional Advisory Committee",
  ],
};

/* ----------------------------- Past presidents -------------------------- */

export const pastPresidents = [
  { name: "Dr. M. Visvesvaraya", year: "1941" },
  { name: "Shri Murarji J. Vaidya", year: "1954" },
  { name: "Shri S. N. Haji", year: "1956" },
  { name: "Shri N. D. Sahukar", year: "1958" },
  { name: "Shri G. V. Puranik", year: "1960" },
  { name: "Shri Prabhu V. Mehta", year: "1962" },
  { name: "Shri Hansraj Gupta", year: "1964" },
  { name: "Shri B. D. Somani", year: "1966" },
  { name: "Shri Y. A. Fazalbhoy", year: "1968" },
  { name: "Dr. Pranlal J. Patel", year: "1969" },
  { name: "Shri S. M. Dahanukar", year: "1970" },
  { name: "Shri K. N. Modi", year: "1971" },
  { name: "Dr. B. V. Bhoota", year: "1972" },
  { name: "Shri Ram Agrawal", year: "1973" },
  { name: "Dr. S. K. Somaiya", year: "1974" },
  { name: "Shri Bipinbhai V. Mehta", year: "1975" },
  { name: "Shri S. P. Mandelia", year: "1976" },
  { name: "Shri M. R. Shroff", year: "1977" },
  { name: "Shri K. G. Khosla", year: "1978" },
  { name: "Shri K. V. Srinivasan", year: "1979" },
  { name: "Shri N. M. Desai", year: "1980" },
  { name: "Dr. I. P. Poddar", year: "1981" },
  { name: "Shri Sumant J. Patel", year: "1982" },
  { name: "Shri M. K. Mohta", year: "1983" },
  { name: "Shri Suresh Mehta", year: "1984" },
  { name: "Shri P. Maruthai Pillai", year: "1985" },
  { name: "Shri K. K. Khandelwal", year: "1986" },
  { name: "Shri Yograj Chauhan", year: "1987" },
  { name: "Shri R. M. Dujodwala", year: "1988" },
  { name: "Shri Kamal M. Morarka", year: "1989" },
  { name: "Shri Vijay G. Kalantri", year: "1991" },
  { name: "Shri V. Mohan Rao", year: "1994" },
  { name: "Shri K. Dujodwala", year: "1995" },
  { name: "Shri P. S. Kalani", year: "2000" },
  { name: "Shri Babulal Todi", year: "2002" },
  { name: "Shri A. K. Sen", year: "2006" },
  { name: "Shri N. Tarachand Dugar", year: "2012" },
  { name: "Shri K. E. Raghunathan", year: "2016" },
];

/* --------------------------- National GC members ------------------------ */

export const gcMembers = {
  intro:
    "The National Governing Council comprises leaders of trade and industry, a mix of youthful energy and experienced leadership. The NGC meets on a regular basis across the country to decide the framework and plan of action for the Leadership Team at AIMO India.",
  members: [
    { name: "Sushil Vyas", designation: "President", mobile: "9320707999", email: "vyassushil46@gmail.com" },
    { name: "Harish Metha", designation: "Senior Vice President", mobile: "9444440428", email: "metha.group@gmail.com" },
    { name: "Shrikant Dalmia", designation: "Treasurer", mobile: "9820004802", email: "dalmiashrikant@gmail.com" },
    { name: "Kenny Ramanand", designation: "Secretary", mobile: "8884446243", email: "kenny.Ramanand@gmail.com" },
    { name: "V. K. Singh", designation: "ZVP North", mobile: "9810156751", email: "vksinghags@gmail.com" },
    { name: "B. P. Bakshi", designation: "ZVP East", mobile: "7002181916", email: "bp.bakshi@rediffmail.com" },
    { name: "R. Radhakrishnan", designation: "ZVP South", mobile: "9840944318", email: "rr@triadss.com" },
    { name: "Ashok Kadakia", designation: "ZVP West", mobile: "9821017277", email: "ashokkadakia@gmail.com" },
    { name: "Girdhari Lal Pareek", designation: "Joint Secretary", mobile: "9435035865", email: "glp3332006@gmail.com" },
    { name: "Arvind Tibrewala", designation: "Joint Secretary", mobile: "9821214000", email: "arvindtibrewala@gmail.com" },
    { name: "K. E. Raghunathan", designation: "Past President", mobile: "9840947485", email: "ragu@solkar.in" },
    { name: "Tarachand Dugar", designation: "Past President", mobile: "9383009900", email: "dugarnt@dugar.in" },
    { name: "Praveen Aggarwal", designation: "State Board Chairman (Maharashtra)", mobile: "9320068653", email: "pmumbai17@gmail.com" },
    { name: "S. A. Sampathraman", designation: "State Board Chairman (Karnataka)", mobile: "9845537851", email: "sr@dpkgroup.in" },
    { name: "M. P. Agarwal", designation: "State Board Chairman (Assam)", mobile: "9435036598", email: "paliwalamp@gmail.com" },
    { name: "Ramesh Dugar", designation: "State Board Chairman (Tamil Nadu)", mobile: "9841023535", email: "ramesh@dugar.in" },
    { name: "Hamvir Singh", designation: "State Board Chairman (Delhi / Haryana)", mobile: "9999600280", email: "krshsingh56@gmail.com" },
    { name: "Rajiv Ranjan", designation: "DSB Nominee", mobile: "9873105778", email: "rajiv55@icloud.com" },
    { name: "Shyam Sunder Kapoor", designation: "DSB Nominee", mobile: "8527696060", email: "aakash.polytec@gmail.com" },
    { name: "Anil Kumar Choudhary", designation: "DSB Nominee", mobile: "9811305900", email: "anilchoudhary62@gmail.com" },
    { name: "Jitendra Pal Shah", designation: "DSB Nominee", mobile: "9811010999", email: "nutechthermopack33@gmail.com" },
    { name: "Jas Kiran", designation: "DSB Nominee", mobile: "9910317245", email: "jaskiranaadya@gmail.com" },
    { name: "Anant Kumar Jha", designation: "DSB Nominee", mobile: "9810080801", email: "csakjha@hotmail.com" },
    { name: "Shree Niwas Rana", designation: "DSB Nominee", mobile: "9810612318", email: "manojkumark024@gmail.com" },
    { name: "Rajpal Singh", designation: "DSB Nominee", mobile: "9810375137", email: "sonuranapradhan@gmail.com" },
    { name: "Rajiv Chugh", designation: "DSB Nominee", mobile: "9999083764", email: "dayaramchairman85@gmail.com" },
    { name: "Daya Ram Singh", designation: "DSB Nominee", mobile: "9953561360", email: "pradeepsarpanch29@gmail.com" },
    { name: "Pradeep Singh", designation: "DSB Nominee", mobile: "9910044429", email: "paliwalamp@gmail.com" },
    { name: "Virender Singh Yadav", designation: "DSB Nominee", mobile: "9311182543", email: "vsyadav0008@gmail.com" },
    { name: "Naveen Man", designation: "DSB Nominee", mobile: "9971939774", email: "rajiv55@icloud.com" },
    { name: "Krishnakant Bansal", designation: "DSB Nominee", mobile: "9810108736", email: "maannaveen@yahoo.com" },
    { name: "Kawaljeet Panoo", designation: "DSB Nominee", mobile: "9818830073", email: "k3016kumar@gmail.com" },
    { name: "Mayur Agarwal", designation: "Assam Nominee", mobile: "9990256722", email: "contact@mayuragr.com" },
    { name: "Dr. Prasad Rao Pasam", designation: "Karnataka Nominee", mobile: "9845266900", email: "PRASAD.pasam@gmail.com" },
    { name: "K. R. Mohan", designation: "Karnataka Nominee", mobile: "9844152676", email: "krmohanblr@gmail.com" },
    { name: "K. C. Jaganath Reddy", designation: "Karnataka Nominee", mobile: "9844006641", email: "kcjreddy9@gmail.com" },
    { name: "S. Karthikeyan", designation: "Karnataka Nominee", mobile: "9738510690", email: "karthik@myanmol.com" },
    { name: "Ram Kumar Seshu", designation: "Karnataka Nominee", mobile: "9845500096", email: "ramseshu@borntowin.co.in" },
    { name: "Sudhakar Pai", designation: "Karnataka Nominee", mobile: "9341370333", email: "spai@manipal.com" },
    { name: "S. Babu", designation: "Karnataka Nominee", mobile: "9845334343", email: "sleeves4343@gmail.com" },
    { name: "K. V. Sekhar Raju", designation: "Karnataka Nominee", mobile: "9845153438", email: "kvsekharraju@yahoo.co.in" },
    { name: "Bopanna", designation: "Karnataka Nominee", mobile: "9845522923", email: "bopannakk@sunpasolutions.com" },
    { name: "Dr. Vinod Surana", designation: "Tamil Nadu Nominee", mobile: "9884491000", email: "vs@lawindia.com" },
    { name: "P. Kannan", designation: "Tamil Nadu Nominee", mobile: "9841819589", email: "kannan@amrutanjan.com" },
    { name: "Sudhakar Mukundan", designation: "Tamil Nadu Nominee", mobile: "9600019366", email: "mukundan.sudhakar@gmail.com" },
    { name: "Vijay Kalantri", designation: "Maharashtra Nominee", mobile: "9821012500", email: "vijaykalantri@balaji.co.in" },
    { name: "Suresh Deora", designation: "Maharashtra Nominee", mobile: "9821885928", email: "suresh@bombayampoules.com" },
    { name: "Kashi Deora", designation: "Maharashtra Nominee", mobile: "9821097661", email: "ksdeora@indvestgroup.com" },
    { name: "Shreekant Adhiya", designation: "Maharashtra Nominee", mobile: "9323281946", email: "Shreekant.adhiya@gmail.com" },
    { name: "Shailesh Dalmia", designation: "Maharashtra Nominee", mobile: "9820087142", email: "dalmiashailesh@yahoo.com" },
    { name: "Ramkishor Darak", designation: "Maharashtra Nominee", mobile: "9820136361", email: "rkdarak@gmail.com" },
    { name: "Trimbak Tiwari", designation: "Maharashtra Nominee", mobile: "9819679888", email: "trimbaktiwari@gmail.com" },
    { name: "Anil P. Agarwal", designation: "Maharashtra Nominee", mobile: "9987742941", email: "anil@himalayaterpene.com" },
    { name: "Rajesh A. Jain", designation: "Maharashtra Nominee", mobile: "9821086673", email: "rajeshjain@hotmail.com" },
    { name: "Anil R. Agarwal", designation: "Maharashtra Nominee", mobile: "9820216375", email: "collinsacs@gmail.com" },
    { name: "Udesh Agrawal", designation: "Maharashtra Nominee", mobile: "9820633694", email: "udagrawal55@gmail.com" },
  ],
};

/* --------------------- Immediate past national team --------------------- */

export const immediatePastTeam = [
  {
    role: "President",
    name: "K. E. Raghunathan",
    org: "Managing Director, Solkar Solar Industry Ltd., Chennai",
    mobile: "+91 98409 47485",
    email: "ragu@solkar.in",
  },
  {
    role: "Senior National Vice President",
    name: "Dr. Harish Mehta",
    org: "Chairman, Indian Red Cross Society, Tamil Nadu",
    mobile: "+91 94444 40428",
    email: "svp@aimoindia.com",
  },
  {
    role: "National Vice President",
    name: "Ashok Kadakia",
    org: "Director, Ashok Chemicals Ltd, Mumbai",
    mobile: "+91 98210 17277",
    email: "ashokkadakia@gmail.com",
  },
  {
    role: "National General Secretary",
    name: "Kenny Ramanand",
    org: "Director, Springboard Public Relations, Bangalore",
    mobile: "+91 88844 46243",
    email: "gs@aimoindia.com",
  },
  {
    role: "National Treasurer",
    name: "R. R. Radhakrishnan",
    org: "",
    mobile: "+91 98409 44318",
    email: "treasurer@aimoindia.com",
  },
  {
    role: "Zonal Vice President, East",
    name: "B. P. Bakshi",
    org: "Director, Barak Valley Cement Ltd, Assam",
    mobile: "+91 94353 35346",
    email: "bp.bakshi@rediffmail.com",
  },
  {
    role: "Zonal Vice President, West",
    name: "Shrikant Dalmia",
    org: "",
    mobile: "+91 98200 04802",
    email: "dalmiashrikant@gmail.com",
  },
  {
    role: "Zonal Vice President, South",
    name: "K. C. Jagannath Reddy",
    org: "",
    mobile: "+91 98440 06641",
    email: "kcjreddy9@gmail.com",
  },
  {
    role: "Zonal Vice President, North",
    name: "M. L. Sharma",
    org: "",
    mobile: "+91 98688 28358",
    email: "mlsharma46@yahoo.co.in",
  },
  {
    role: "National Secretary",
    name: "Arvind Tibrewala",
    org: "",
    mobile: "+91 98212 14000",
    email: "arvindtibrewala@gmail.com",
  },
  {
    role: "National Secretary",
    name: "Sushil Vyas",
    org: "",
    mobile: "+91 98207 07999",
    email: "vyassushil46@gmail.com",
  },
];

/* ---------------------------- Featured event ---------------------------- */

export const featuredEvent = {
  eyebrow: "Upcoming Event",
  title: "AIMO TNSB TECHKNOW 2026",
  date: "2026-09-25T09:30:00+05:30",
  dateLabel: "25–26 September 2026",
  dayBadge: { day: "25", month: "Sep" },
  venue: "Vivekananda Auditorium, Anna University, Chennai",
  /** External registration form for the conference track. */
  registerUrl:
    "https://techknow2026.in/index.php?route=register/form&track=Conference",
  /** Spaces and the ampersand are percent-encoded so the href resolves
      correctly; `brochureFilename` is what the browser saves it as. */
  brochure:
    "/assets/TECHKNOW%20BROCHURE%20SEPTEMBER%2025th%20%26%2026th%202026.pdf",
  brochureFilename: "AIMO-TNSB-TECHKNOW-2026-Brochure.pdf",
  body: "Two days on the themes that will decide the next decade of Indian manufacturing: export competitiveness after the new trade agreements, credit access beyond collateral, energy costs, and the skills pipeline. Ministers, bankers, buyers and 900 promoters at Anna University, Chennai.",
  image: img.aimoEvent4,
  highlights: [
    "12 sector round-tables with policy-makers",
    "Curated buyer–supplier matchmaking desk",
    "Bank and NBFC credit clinic for members",
  ],
};

/* --------------------- Sponsorship categories --------------------------- */

export const sponsorTiers = [
  {
    name: "Diamond Sponsor",
    amount: "₹ 5,00,000/-",
    passes: "50 complimentary delegate passes",
    stalls: "Stall 8x8 · 5 nos",
    branding: "Branding",
    accent: "#1751b5",
    tint: "#eef4fd",
  },
  {
    name: "Platinum Sponsor",
    amount: "₹ 4,00,000/-",
    passes: "40 complimentary delegate passes",
    stalls: "Stall 8x8 · 4 nos",
    branding: "Branding",
    accent: "#8f9aa5",
    tint: "#f3f5f7",
  },
  {
    name: "Gold Sponsor",
    amount: "₹ 3,00,000/-",
    passes: "30 complimentary delegate passes",
    stalls: "Stall 8x8 · 3 nos",
    branding: "Branding",
    accent: "#d0a020",
    tint: "#fdf8ea",
  },
  {
    name: "Silver Sponsor",
    amount: "₹ 2,00,000/-",
    passes: "20 complimentary delegate passes",
    stalls: "Stall 8x8 · 2 nos",
    branding: "Branding",
    accent: "#dd6a2b",
    tint: "#fdf2ec",
  },
  {
    name: "Bronze Sponsor",
    amount: "₹ 1,00,000/-",
    passes: "10 complimentary delegate passes",
    stalls: "Stall 8x8 · 1 no",
    branding: "Branding",
    accent: "#5f6b78",
    tint: "#f2f4f6",
  },
];

/* ---------------------------- Leadership team --------------------------- */
export const leaders = [
  {
    name: "Shri Rajiv Ranjan",
    role: "National President",
    city: "New Delhi",
    email: "president@aimoindia.com",
    phone: "+91 98731 05778",
  },
  {
    name: "Shri Sudhir Jha",
    role: "National Convenor",
    city: "New Delhi",
    email: "aimoindia@aimoindia.com",
    phone: "+91 88009 04780",
  },
  {
    name: "Shri Veerendra Kumar Singh",
    role: "National Vice President",
    city: "Uttar Pradesh",
    email: "aimoindia@aimoindia.com",
    phone: "+91 98101 56751",
  },
  {
    name: "Shri R. Radhakrishnan",
    role: "National General Secretary",
    city: "Chennai",
    email: "gs@aimoindia.com",
    phone: "+91 98409 44318",
  },
];

/* ------------------------------ Events grid ----------------------------- */

export const eventGallery = [
  {
    title: "MSME Policy Conclave",
    meta: "New Delhi · Feb 2026",
    image: img.boardroom,
  },
  {
    title: "Export Readiness Workshop",
    meta: "Coimbatore · Jan 2026",
    image: img.warehouse,
  },
  {
    title: "Young Entrepreneurs Forum",
    meta: "Bengaluru · Dec 2025",
    image: img.networking,
  },
  {
    title: "AIMO TNSB Excellence Awards Night",
    meta: "Mumbai · Nov 2025",
    image: img.awards,
  },
];

/* --------------------------- Membership tiers --------------------------- */

export const membershipTiers = [
  {
    name: "Associate",
    price: "₹ 6,000",
    cadence: "per year",
    for: "Micro units, proprietorships and start-ups",
    featured: false,
    features: [
      "State Board membership & voting rights",
      "Access to all AIMO webinars",
      "Monthly policy digest",
      "Listing in the member directory",
      "Credit & compliance helpdesk",
    ],
  },
  {
    name: "Corporate",
    price: "₹ 18,000",
    cadence: "per year",
    for: "Small and medium manufacturers and service MSMEs",
    featured: true,
    features: [
      "Everything in Associate",
      "Delegate passes to national conventions",
      "Sector round-table participation",
      "Buyer–supplier matchmaking access",
      "Eligibility for AIMO TNSB Awards",
      "Named representation in submissions",
    ],
  },
  {
    name: "Patron",
    price: "₹ 60,000",
    cadence: "per year",
    for: "Large enterprises and industry groups",
    featured: false,
    features: [
      "Everything in Corporate",
      "Seat on a national sub-committee",
      "Co-branding on AIMO research",
      "Priority speaking opportunities",
      "Direct access to the Secretariat",
    ],
  },
];

export const membershipLead = "Become a Member now and reap the benefits of AIMO TNSB.";

export const memberBenefits = [
  {
    icon: "cpu",
    title: "Exposure to New Tech Trends",
    body: "We believe that the MSME sector needs to be exposed to new technologies and digital trends which will impact their business.",
    detail:
      "The sector cannot afford to meet automation, AI and digital compliance for the first time when a customer demands it. AIMO TNSB brings the trends to you early.",
  },
  {
    icon: "landmark",
    title: "A Voice in Public Policy",
    body: "With greater power comes greater responsibility. AIMO TNSB will make mature and serious representations and try to impact public policy in a manner that has a positive impact for the industry and our country.",
    detail:
      "Submissions go to ministries and regulators inside the consultation window, and we name the members whose experience shaped them.",
  },
  {
    icon: "book",
    title: "Knowledge and Learning",
    body: "We believe that continuous improvement of professional skills ensures greater productivity and greater profits for the entrepreneur. AIMO TNSB will provide you numerous platforms for valuable exchange of ideas.",
    detail:
      "Workshops, clinics and sector briefings run right through the year, built around what members ask for rather than what is easy to programme.",
  },
  {
    icon: "users",
    title: "Building Business Networks",
    body: "Through interactions with other AIMO TNSB members you will be able to build a strong network that fuels professional growth as well as explore new business possibilities.",
    detail:
      "Thousands of promoters across every state. Some become mentors, some become customers, some become the partner you needed for a tender.",
  },
  {
    icon: "chart",
    title: "Access to New Research and Data",
    body: "AIMO TNSB is committed to getting fresh data that is relevant to the members. We partner educational and management institutes to develop studies for specific sectors.",
    detail:
      "Sector studies members can actually use in a board meeting, rather than headline numbers with nothing behind them.",
  },
  {
    icon: "award",
    title: "Rewards and Recognition",
    body: "We at AIMO TNSB reward our performing and active members with industry recognition as well as media exposure.",
    detail:
      "Through the AIMO TNSB Awards and our press platform, active members get visibility beyond their own customer list.",
  },
];

export const enrolSteps = [
  {
    step: "01",
    title: "Download the membership form",
    body: "Fill in the online membership form and the printed AIMO TNSB application downloads automatically as soon as you submit it.",
  },
  {
    step: "02",
    title: "Fill in personal details",
    body: "Your own details and those of the enterprise, exactly as registered.",
  },
  {
    step: "03",
    title: "Choose chapter or State Board",
    body: "Select the State Board or regional chapter closest to your unit.",
  },
  {
    step: "04",
    title: "Choose membership category",
    body: "Associate, Corporate or Patron, based on the scale of your enterprise.",
  },
  {
    step: "05",
    title: "Pay using RTGS or online payment gateway",
    body: "Settle the subscription by RTGS or through the online gateway.",
  },
  {
    step: "06",
    title: "Approval and docket",
    body: "Your State Board and the National Governing Council approve the application, and your membership number and docket follow.",
  },
];

export const enrolConfirmation =
  "You will receive an online confirmation of receipt by email. Your membership will need to be approved by both the State Board and the National Governing Council, after which you will receive your membership number and membership docket.";

/** Printed application form served from /public. The stored filename contains
    spaces, so `href` is percent-encoded; `filename` is what the browser saves it
    as. Replacing the form is a two-line change: drop the new file into
    /public/assets and update both fields. */
export const membershipFormFile = {
  href: "/assets/Membership%20App.%20form.doc",
  filename: "AIMO-TNSB-Membership-Application-Form.doc",
};

/* ------------------------------ State boards ---------------------------- */

export const stateBoardsIntro = [
  "AIMO has created boards at State level to be closer to the industry in that region and to facilitate industry based on the regional or State environment.",
  "Over 20 Councils and Committees on different subject matters, comprising experienced senior executives pooled from member companies, study and analyse various legislative and other matters of concern to industry, and provide expert guidance and advice to the National Working Committee of AIMO for taking up the matter with the different stake holders.",
  "Periodic workshops and training programmes are organised to help members keep abreast of developments in industry. Plans are also afoot for starting skilling and finishing school programmes as per industry needs in academic institutions, to help the industry get skilled, employable manpower.",
];

export const stateBoards: {
  state: string;
  /** Optional dedicated page for the board; falls back to the contact form. */
  href?: string;
  officers: { role: string; name: string; phone: string }[];
}[] = [
  {
    state: "Assam",
    officers: [
      { role: "Chairman", name: "Shri Mahabir Agarwal", phone: "+91 94350 36598" },
      { role: "General Secretary", name: "Shri Girdhari Lal Pareek", phone: "+91 94350 35865" },
    ],
  },
  {
    state: "Delhi",
    officers: [
      { role: "Chairman", name: "Shri Pawanpreet Singh", phone: "+91 70655 50644" },
      { role: "General Secretary", name: "Shri Gogi Kapoor", phone: "+91 98103 36464" },
    ],
  },
  {
    state: "Gujarat",
    officers: [
      { role: "Chairman", name: "Shri Manish Chhaganalal Thakkar", phone: "+91 98700 50011" },
    ],
  },
  {
    state: "Karnataka",
    officers: [
      { role: "Chairman", name: "Shri Sampathraman", phone: "+91 98455 36598" },
      { role: "General Secretary", name: "Shri Prasad Pasam", phone: "+91 98452 66900" },
    ],
  },
  {
    state: "Maharashtra",
    officers: [
      { role: "Chairman", name: "Shri Nirav Shah", phone: "+91 97683 99999" },
      { role: "General Secretary", name: "Shri Roshan Thakkar", phone: "+91 98333 30553" },
    ],
  },
  {
    state: "Punjab",
    officers: [
      { role: "Chairman", name: "Shri Sunir Sharma", phone: "+91 98140 09009" },
    ],
  },
  {
    state: "Tamil Nadu",
    href: "/about/tamil-nadu-state-board",
    officers: [
      { role: "Chairman", name: "Shri Ramesh Dugar", phone: "+91 98410 23535" },
      { role: "General Secretary", name: "Shri Sudhakar Mukund", phone: "+91 96000 19366" },
    ],
  },
  {
    state: "Telangana",
    officers: [
      { role: "Chairman", name: "Shri Mandava Venkata Raghunath", phone: "+91 70532 77777" },
      { role: "General Secretary", name: "Shri Rajesh", phone: "+91 92461 92244" },
    ],
  },
];

/* ------------------------------ Past events ----------------------------- */

/** Event posters/flyers shown on the Past Events page. Add new files to
    /public and list them here. The grid and lightbox pick them up. */
export const pastEventPosters = [
  {
    src: "/past-event.png",
    title: "About Engineer's Day",
    meta: "15 September",
  },
];

/* -------------------------------- Awards -------------------------------- */

export const visvesvarayaAward = {
  title: "Sir Visvesvaraya Industrial Award",
  /** Pulled-out opening statement. */
  lead: "AIMO was founded by Bharat Ratna Sir M. Visvesvaraya over 75 years ago. The Organisation has established itself as a body committed to industrial progress with the motto \u201cProsperity through Industry\u201d, and over the past few decades it has been consistently supportive of several initiatives of the Government of India and the Government of Tamil Nadu aimed at accelerating industrial growth and quality education for all engineering colleges aspiring to improve the quality and brand name in the State.",
  intro: [
    "It has been recognised by Government as an apex Organisation of industry and given representation on most of the policy making bodies of the Central and State Governments. The Headquarters of AIMO is based at Mumbai. We represent Tamil Nadu State.",
    "It is significant to mention that India\u2019s first ever World Trade Centre, Mumbai, which is named after Dr. M. Visvesvaraya as the M. Visvesvaraya Industrial Research & Development Centre (MVIRDC in short), is the outcome of the initiative taken by AIMO.",
    "Every year we identify an industry registered in Tamil Nadu or Pondicherry based on its excellence in performance, and offer the Sir Visvesvaraya Industrial Award to that industry.",
  ],
  recipients: [
    "TVS Group",
    "Chemicals & Plastics India Ltd.",
    "Ashok Leyland Ltd.",
    "MRF Ltd.",
    "S I Viscose Ltd",
    "Madras Refineries Ltd \u2013 Public Sector",
    "Sundaram Fasteners Ltd",
    "Bharat Heavy Electricals Ltd \u2013 Public Sector",
    "Lakshmi Machine Works Ltd",
    "Neyvelli Lignite Corpn. Ltd \u2013 Public Sector",
    "Tamil Nadu Petroproducts Ltd.",
    "Hindustan Teleprinters Ltd \u2013 Public Sector",
    "Chemfab Alkalies Ltd",
    "Madras Cements Ltd",
    "India Pistons Ltd.",
    "Orchid Chemicals and Pharmaceuticals Ltd.",
    "Shasun Chemicals and Drugs Ltd.",
    "MAARS India Ltd.",
    "Sri Krishna Sweets Pvt. Ltd.",
    "E.I.D. Parry (India) Ltd.",
    "Bannari Amman Sugars Ltd",
    "Indian Bank",
    "M.M. Exports",
    "City Union Bank (Banking)",
    "Hyundai Motors India Ltd (Automobile)",
    "Marg Group (Infrastructure)",
    "Grundfos India Ltd (Manufacturing)",
    "DP World Chennai",
    "LifeCell International Pvt. Ltd.",
    "Indian Overseas Bank",
  ],
  /** Award presentation ceremonies, oldest first. */
  ceremonies: [
    {
      year: "1989",
      recipients: "Sundaram Fasteners",
      presenter:
        "Presented by His Excellency Dr. Bhishma Narain Singh, Governor of Tamil Nadu",
    },
    {
      year: "1991",
      recipients: "Tamilnadu Petro Products & Hindustan Teleprinters Ltd.",
      presenter:
        "Presented by His Excellency Dr. Chenna Reddy, Governor of Tamil Nadu",
    },
    {
      year: "1992",
      recipients: "Chemplast",
      presenter:
        "Presented by Shri P. A. Sangma, Honourable Minister for Labour, Government of India",
    },
    {
      year: "1997",
      recipients: "MRF Ltd.",
      presenter:
        "Presented by His Excellency Dr. P. C. Alexander, Governor of Tamil Nadu",
    },
    {
      year: "2002",
      recipients: "Sri Krishna Sweets",
      presenter:
        "Presented by His Excellency Shri P. S. Ramamohan Rao, Governor of Tamil Nadu",
    },
    {
      year: "2005",
      recipients:
        "E.I.D. Parry (India) Ltd., Bannari Amman Sugars Ltd., M.M. Exports and Indian Bank",
      presenter:
        "Presented by Shri P. Chidambaram, Honourable Finance Minister, Government of India, at GRT Grand Hotel, Chennai",
    },
    {
      year: "2010",
      recipients:
        "City Union Bank Ltd., Marg Group, Grundfos Pumps India Pvt. Ltd and Hyundai Motors India P Ltd.",
      presenter:
        "Presented by His Excellency Shri Surjit Singh Barnala, Governor of Tamil Nadu, at Raj Bhavan, Chennai",
    },
    {
      year: "2012",
      recipients:
        "DP World Chennai, Indian Overseas Bank, and LifeCell International Pvt. Ltd.",
      presenter:
        "Presented by the Honourable Speaker, Tamil Nadu Legislative Assembly, Thiru D. Jayakumar, at Hotel Savera, Mylapore, Chennai",
    },
  ],
};

export const awardCategories = [
  { title: "Manufacturer of the Year", body: "The unit that best combined growth, quality and employment creation over the assessment year." },
  { title: "Export Excellence", body: "For members who opened new geographies or grew export revenue against a difficult market." },
  { title: "Green Manufacturing", body: "Measurable reduction in energy, water or waste intensity without loss of output." },
  { title: "Digital Transformation", body: "Meaningful adoption of automation, ERP or data-led decision-making on the shop floor." },
  { title: "Woman Entrepreneur", body: "Recognising women promoters building and scaling manufacturing enterprises." },
  { title: "Young Entrepreneur", body: "Under-40 promoters who have taken a family unit or a start-up to a new level." },
];

/* --------------------------- Press / In the media ------------------------ */

/** Coverage of AIMO in the media. Screenshots live in /public. */
export const mediaCoverage: {
  outlet: string;
  date?: string;
  headline?: string;
  url: string;
  image: string;
}[] = [
  {
    outlet: "Reuters",
    date: "7 April 2020",
    headline:
      "India's small businesses struggle to pay wages amid coronavirus lockdown",
    url: "https://www.reuters.com/article/us-health-coronavirus-india-business/indias-small-businesses-struggle-to-pay-wages-amid-coronavirus-lockdown-idUSKBN21P1UY",
    image: "/pr-1.png",
  },
  {
    outlet: "Nasdaq",
    date: "7 April 2020",
    headline:
      "India's small businesses struggle to pay wages amid coronavirus lockdown",
    url: "https://www.nasdaq.com/articles/indias-small-businesses-struggle-to-pay-wages-amid-coronavirus-lockdown-2020-04-07",
    image: "/pr-2.png",
  },
  {
    outlet: "The Times of India",
    date: "9 April 2020",
    headline:
      "To help small firms, India may unveil second coronavirus stimulus worth Rs 1 lakh crore",
    url: "https://timesofindia.indiatimes.com/business/india-business/to-help-small-firms-india-may-unveil-second-coronavirus-stimulus-worth-rs-1-lakh-crore/articleshow/75057356.cms",
    image: "/pr-3.png",
  },
  {
    outlet: "Outlook India",
    headline:
      "Lockdown: Migrant workers from North East feeling insecure to return to workplace, says AIMO",
    url: "https://www.outlookindia.com/newsscroll/lockdown-migrant-workers-from-north-east-feeling-insecure-to-return-to-workplace-says-aimo/1796880",
    image: "/pr-4.png",
  },
  {
    outlet: "The Hindu BusinessLine",
    headline:
      "All India Manufacturers' Organisation urges govt to provide support package to MSMEs",
    url: "https://www.thehindubusinessline.com/economy/all-india-manufacturers-organisation-urges-govt-to-provide-support-package-to-msmes/article31163828.ece",
    image: "/pr-5.png",
  },
  {
    outlet: "Eastern Eye",
    date: "8 April 2020",
    headline:
      "India's small businesses struggle to pay wages amid coronavirus lockdown",
    url: "https://www.easterneye.biz/indias-small-businesses-struggle-to-pay-wages-amid-coronavirus-lockdown/",
    image: "/pr-6.png",
  },
  {
    outlet: "Deccan Herald",
    headline: "MSMEs seek deferment of electricity, water bills for 3 months",
    url: "https://www.deccanherald.com/business/business-news/msmes-seek-deferment-of-electricity-water-bills-for-3-months-818244.html",
    image: "/pr-7.png",
  },
  {
    outlet: "The Shillong Times",
    date: "10 April 2020",
    headline: "Migrant workers from NE feeling insecure to return to workplace",
    url: "http://theshillongtimes.com/2020/04/10/migrant-workers-from-ne-feeling-insecure-to-return-to-workplace/",
    image: "/pr-8.png",
  },
  {
    outlet: "Nagaland Post",
    headline: "Migrant workers from NE feeling insecure to return to workplace",
    url: "http://www.nagalandpost.com/-migrant-workers-from-ne-feeling-insecure-to-return-to-workplace/214337.html",
    image: "/pr-9.png",
  },
  {
    outlet: "Business Today",
    headline:
      "Govt may announce 2nd coronavirus stimulus worth Rs 1 lakh crore for small, medium businesses",
    url: "https://www.businesstoday.in/current/economy-politics/govt-may-announce-2nd-coronavirus-stimulus-worth-rs-1-lakh-crore-for-small-medium-businesses/story/400536.html",
    image: "/pr-10.png",
  },
  {
    outlet: "YourStory",
    url: "https://yourstory.com/smbstory/msmes-coronavirus-lockdown-india-covid-19",
    image: "/pr-11.png",
  },
];

/* --------------------------- Press / news items -------------------------- */

export const news = [
  {
    title: "AIMO urges rationalised GST slabs for capital goods used by micro units",
    excerpt:
      "In a pre-budget submission, the organisation argued that inverted duty structures continue to trap working capital in exactly the enterprises least able to absorb it.",
    date: "12 Jun 2026",
    category: "Policy",
    author: "AIMO Secretariat",
    image: img.notes,
    slug: "gst-capital-goods-submission",
  },
  {
    title: "Credit clinics reach 4,200 promoters across eleven state boards",
    excerpt:
      "The joint programme with public sector banks has moved from awareness to sanction, with a measurable rise in collateral-free lending among participants.",
    date: "28 May 2026",
    category: "Members",
    author: "AIMO Secretariat",
    image: img.handshake,
    slug: "credit-clinics-2026",
  },
  {
    title: "Why the services MSME is India's quietest growth engine",
    excerpt:
      "Services now contribute 58% of GDP against 33% in the 1950s. AIMO's latest note examines what that shift means for a country still organised around factory-era policy.",
    date: "07 May 2026",
    category: "Research",
    author: "AIMO Research Desk",
    image: img.dataScreen,
    slug: "services-msme-growth-engine",
  },
];

/* ----------------------------- Focus sectors ---------------------------- */

export const sectors = [
  "Engineering & Machine Tools",
  "Chemicals & Petrochemicals",
  "Pharmaceuticals",
  "Food Processing",
  "Textiles & Apparel",
  "Auto Components",
  "Electronics & Electricals",
  "Services MSMEs",
];

/* ------------------------------- Gallery -------------------------------- */

/** Photo gallery, grouped by event and then by session. Drop new files into
    /public/assets/gallery/<FOLDER> and list them here; the grid and lightbox
    pick them up. Folder names contain spaces, so paths are encoded. */
const G = (folder: string, file: string) =>
  `/assets/gallery/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

const seq = (folder: string, count: number, extra: string[] = []) => [
  ...Array.from({ length: count }, (_, i) => ({ src: G(folder, `${i + 1}.jpg`) })),
  ...extra.map((f) => ({ src: G(folder, f) })),
];

export const galleryEvents = [
  {
    id: "techknow-2022",
    title: "TECHKNOW 2022",
    meta: "22–23 April 2022 · Anna University, Chennai",
    blurb:
      "Two days of inauguration, technical sessions and valedictory, held at Anna University with the support of AIC–AU and SIDBI.",
    albums: [
      {
        title: "Day 1 — Inauguration",
        photos: seq("DAY 1 INAUGURATION", 8, ["day1 1.jpg"]),
      },
      { title: "Day 1 — Seminar", photos: seq("DAY 1 SEMINAR", 8) },
      { title: "Day 2 — Seminar", photos: seq("DAY 2 SEMINAR", 8) },
      { title: "Day 2 — Valedictory", photos: seq("DAY 2 VALEDICTORY", 8) },
    ],
  },
];

/* ------------------------------ Testimonials ---------------------------- */

export const testimonials = [
  {
    quote:
      "We had been told for years that collateral-free credit existed. It took one AIMO clinic and a follow-up call from the Secretariat for it to actually reach our balance sheet.",
    name: "Managing Director",
    org: "Auto component unit, Pune",
  },
  {
    quote:
      "As a second-generation promoter I did not want to run my father's factory the way he had to. The mentorship network here gave me people who had already made that transition.",
    name: "Director",
    org: "Precision engineering, Coimbatore",
  },
  {
    quote:
      "AIMO put our objection on inverted duty into a written submission with data behind it. That is a very different thing from a complaint.",
    name: "Proprietor",
    org: "Chemical processing, Vadodara",
  },
];

/* ------------------------ Tamil Nadu State Board ------------------------ */

export const tnBoard = {
  name: "AIMO Tamil Nadu State Board",
  city: "Chennai",
  intro:
    "The Tamil Nadu State Board is among the most active chapters in the AIMO network, serving members across Chennai, Coimbatore, Tiruppur, Hosur, Salem, Madurai and Trichy.",
  clusters: [
    { name: "Chennai & Ambattur", note: "Auto components, electricals, light engineering" },
    { name: "Coimbatore", note: "Pumps, motors, foundries, machine tools" },
    { name: "Tiruppur", note: "Knitwear, garments, textile processing" },
    { name: "Hosur", note: "Auto ancillaries, electronics, precision components" },
    { name: "Salem & Erode", note: "Steel, power looms, agro processing" },
    { name: "Madurai & Trichy", note: "Fabrication, rubber, food processing" },
  ],
  activities: [
    "Monthly members' meet with a guest speaker from industry or administration",
    "Scheme clinics with TIIC, SIDBI and public sector banks",
    "Liaison with the Department of Industries and the District Industries Centres",
    "Skill development tie-ups with polytechnics and engineering colleges",
    "Buyer–supplier meets with large OEMs operating in the state",
    "Representation on GST, power tariff and labour compliance matters",
  ],
};

/* --------------------- Office bearers & committee ----------------------- */

/** Office bearers of the Tamil Nadu State Board. */
export const stateOfficeBearers = [
  {
    role: "Chairman",
    name: "Dr. A. Ayyakkannu",
    note: "Leading the organisation with strategic vision and guidance.",
  },
  {
    role: "Vice Chairman",
    name: "Mr. S. Srinivasan",
    note: "Supporting the Chairman in organisational leadership.",
  },
  {
    role: "Vice Chairman",
    name: "Mr. Sudhakar Mukundan",
    note: "Assisting in organisational development and initiatives.",
  },
  {
    role: "Hony. Secretary",
    name: "Mr. Sureshkumar Radhakrishnan",
    note: "Managing day-to-day operations and administration.",
  },
  {
    role: "Treasurer",
    name: "Mr. P. Kannan",
    note: "Overseeing financial management and accountability.",
  },
];

/** Committee members of the Tamil Nadu State Board, in published order. */
export const committeeMembers = [
  "Dr. A. Ayyakkannu",
  "Mr. S. Srinivasan",
  "Mr. Sudhakar Mukundan",
  "Mr. Sureshkumar Radhakrishnan",
  "Mr. P. Kannan",
  "Mr. T. Ramesh Dugar",
  "Mr. R. Radhakrishnan",
  "Dr. M.S. Srinivasan",
  "Dr. Harish L Metha",
  "Mr. K.E. Raghunathan",
  "Mr. U.P. Prakasham",
  "Mr. S. Krishnamurthy",
  "Dr. K.S. Giridharan",
  "Mr. Mohammed Jameel Arafath",
  "Mr. Mohankumar V",
  "Mr. Monish Raaju S",
  "Mr. Pankaj Jacob",
  "Mr. R Rajamani",
  "Mr. R Ranjith",
  "Mr. M Sellamuthu",
  "Mr. S Selvamani",
  "Mr. M Sureshkumar",
  "Mr. Vignesh Murali",
  "Mr. Raammohan Kolandaivelu",
  "Dr. G. Kolanthaivelu",
  "Mr. K.S. Chandru",
  "Mr. S. Prakash",
  "Mr. L. Dhileepkumar",
];

export const committees = [
  {
    name: "Policy & Representation",
    brief: "Prepares submissions to state and central departments and tracks consultation windows.",
    seats: 7,
  },
  {
    name: "Membership & Chapters",
    brief: "Enrolment, renewals, and support to district chapters across Tamil Nadu.",
    seats: 6,
  },
  {
    name: "Events & Awards",
    brief: "Plans the annual calendar, the awards cycle and the state convention.",
    seats: 8,
  },
  {
    name: "Finance & Audit",
    brief: "Budget, accounts, subscriptions and the annual audited statement.",
    seats: 5,
  },
  {
    name: "Skills & Internship",
    brief: "College tie-ups, the internship programme and shop-floor training placements.",
    seats: 6,
  },
  {
    name: "Publications",
    brief: "Editorial direction for the magazine, the policy digest and member communications.",
    seats: 5,
  },
];

/* ------------------------- Hall & board room ---------------------------- */

export const venues = [
  {
    name: "Sir Visvesvaraya Hall",
    capacity: "50 seated, theatre style",
    area: "1,000 sq ft",
    image: img.aimoHall,
    rates: "Members ₹ 500 / hour · Non-members ₹ 400 / hour (minimum rent per hour)",
    features: [
      "Suitable for seminars, workshops, meetings, conferences and training programmes",
      "Audio facility included",
      "Projector included",
      "Air-conditioned",
      "Wi-Fi",
      "Whiteboard, markers and extension power cords",
      "External food catering allowed",
    ],
  },
  {
    name: "Board Room",
    capacity: "12 seated, round table",
    area: "250 sq ft",
    image: img.aimoBoardRoom,
    rates: "Members ₹ 357 / hour · Non-members ₹ 400 / hour (minimum rent per hour)",
    features: [
      "Suited to board and business meetings, domestic enquiries, interviews and union meetings",
      "Audio facility can be hired at extra cost",
      "Projector can be hired at extra cost",
      "Air-conditioned",
      "Wi-Fi",
      "Whiteboard, markers and extension power cords",
      "External food catering allowed",
    ],
  },
];

/** Venue detail exactly as supplied in the AIMO hall booking sheet. */
export const hallBooking = {
  lead: "Looking for a state-of-the-art venue in Chennai? Here at AIMO, we have it for you.",
  spaces: [
    {
      name: "Sir Visvesvaraya Hall",
      note: "Suitable to host seminars, workshops, meetings, conferences and training programmes.",
    },
    {
      name: "Board Room",
      note: "Programmes such as board and business meetings, domestic enquiries, interviews and union meetings can be conducted here.",
    },
  ],
  highlights: [
    "Conveniently located in the heart of Chennai at Nungambakkam",
    "Easily accessible",
    "Cosy environment for relaxed learning and discussion",
    "Comfortable cushioned chairs for prolonged seating",
    "Great eateries nearby, including Karachi Bakery & Cafe, Apoorva's Sangeetha and Vasantha Bhavan",
  ],
  /** Facility comparison. `hall` = Sir Visvesvaraya Hall, `board` = Board Room. */
  facilities: [
    { label: "Area", hall: "1,000 sq ft", board: "250 sq ft" },
    { label: "Seating capacity", hall: "50", board: "12" },
    { label: "Seating style", hall: "Theatre", board: "Round table" },
    { label: "Air conditioning", hall: "Yes", board: "Yes" },
    { label: "Audio facility", hall: "Yes", board: "At extra cost" },
    { label: "Projector", hall: "Yes", board: "At extra cost" },
    { label: "Wi-Fi", hall: "Yes", board: "Yes" },
    {
      label: "Whiteboard, markers and extension power cords",
      hall: "Yes",
      board: "Yes",
    },
    { label: "External food catering", hall: "Allowed", board: "Allowed" },
  ],
  ratesNote: "Minimum rent per hour",
  rates: [
    {
      space: "Sir Visvesvaraya Hall",
      members: "₹ 500 / hour",
      nonMembers: "₹ 400 / hour",
    },
    {
      space: "Board Room",
      members: "₹ 357 / hour",
      nonMembers: "₹ 400 / hour",
    },
  ],
  bookingContact: {
    attn: "The Manager",
    org: "All India Manufacturers' Organisation (TNSB), IR & D Trust",
    addressLines: [
      "Round Table House, 2nd Floor",
      "80/69, Nungambakkam High Road",
      "Chennai – 600 034",
    ],
    phones: ["2822 8383", "90921 40000"],
    email: "aimo@aimotnsb.com",
    mapQuery: "Round Table House, Nungambakkam High Road, Chennai 600034",
  },
};

/* ------------------------------ Magazine -------------------------------- */

export const magazine = {
  name: "AIMO TNSB Industry Review",
  cadence: "Quarterly",
  intro:
    "A quarterly journal written largely by members, for members: case notes from the shop floor, scheme explainers, and the arguments AIMO TNSB is currently making in public.",
  sections: [
    "Cover story on a policy question facing the sector",
    "Member profile: one enterprise, examined properly",
    "Scheme desk: what changed, who qualifies, how to apply",
    "Technology note on automation, energy or quality systems",
    "Chapter round-up from the State Boards",
  ],
  issues: [
    {
      title: "Energy costs and the small unit",
      issue: "Vol. 12 · Issue 2 · Apr–Jun 2026",
      blurb:
        "Power tariffs have overtaken credit as the constraint members name first. We look at what open access, rooftop solar and load management actually deliver at MSME scale.",
      image: img.precision,
    },
    {
      title: "After the trade agreements",
      issue: "Vol. 12 · Issue 1 · Jan–Mar 2026",
      blurb:
        "New market access is not the same as new orders. Members who made the transition describe the compliance, certification and working-capital reality.",
      image: img.ports,
    },
    {
      title: "The succession issue",
      issue: "Vol. 11 · Issue 4 · Oct–Dec 2025",
      blurb:
        "A generation of promoters is handing over. What the successful handovers had in common, and what the failed ones did not plan for.",
      image: img.officeTeam,
    },
  ],
};

/* --------------------------- Internship --------------------------------- */

export const internship = {
  intro:
    "AIMO TNSB places engineering, management and polytechnic students into member enterprises for structured internships: real shop-floor and back-office work, supervised, with a written assessment at the end.",
  duration: "4 to 12 weeks · Summer and winter cycles",
  tracks: [
    {
      title: "Production & Operations",
      body: "Line balancing, quality systems, maintenance planning and lean practice inside a working unit.",
      suits: "Mechanical, production and industrial engineering students",
    },
    {
      title: "Quality & Compliance",
      body: "ISO documentation, inspection protocols, vendor audits and regulatory filings.",
      suits: "Engineering and applied science students",
    },
    {
      title: "Supply Chain & Exports",
      body: "Procurement, inventory, logistics documentation and export paperwork end to end.",
      suits: "Management and commerce students",
    },
    {
      title: "Digital & Data",
      body: "ERP rollout support, dashboard building, and automating a process that is currently manual.",
      suits: "Computer science, IT and analytics students",
    },
  ],
  studentSteps: [
    "Apply with your CV, college and preferred track",
    "AIMO TNSB matches you to a member enterprise near you",
    "Interview with the host unit",
    "Complete the internship with a named supervisor",
    "Receive a joint certificate from AIMO TNSB and the host",
  ],
  hostSteps: [
    "Tell us the track, duration and number of interns",
    "Nominate a supervisor within your unit",
    "We shortlist and send candidates for your interview",
    "Confirm the stipend and start date",
    "Submit a short assessment at the end",
  ],
};

/* --------------------- Internship testimonials -------------------------- */

/** Written by interns at the end of their placement, in their own words.
    Portraits live in /public/assets/Interns. To add a new testimonial,
    drop the photo in that folder and append an entry here. */
export type InternTestimonial = {
  name: string;
  affiliation: string;
  photo: string;
  /** One entry per paragraph. */
  quote: string[];
};

export const internshipTestimonials: InternTestimonial[] = [
  {
    name: "Priyadharshini V",
    affiliation: "AIMO-TNSB",
    photo: "/assets/Interns/priya.png",
    quote: [
      "I had a great experience and accomplished a lot during my internship at AIMO (TNSB). It gave me a conducive work environment where I could pick up a lot of fresh knowledge about businesses and organisations. I learned more during this time than I ever imagined. The vast array of options our nation offers to diplomats, grads, and working professionals was exciting. I gained knowledge of graphic designing and a variety of other crucial abilities that are needed in the modern professional world. One of the best parts of our entire internship was developing AIMO Times. I gathered much knowledge in the classroom, but a hands-on approach has been invaluable. It has served as a beneficial ending to my formal education.",
    ],
  },
  {
    name: "Sathya Baamaa",
    affiliation: "AIMO-TNSB",
    photo: "/assets/Interns/sathyabaama.png",
    quote: [
      "This internship provided me with a wonderful opportunity to learn about the real life work experience. I realized how different the work environment is from the professional environment. I had hands-on experience on how to cold call other companies and how to interact with them. The development of the first edition of AIMO Times and participating in the Conclave event conducted about the skill development initiatives of India was very memorable. I also gained knowledge on effectively interacting with my peers and handling conflicts. It has helped me unleash my creativity by designing and video editing. This has helped me grow as an individual and see where my unseen potential lies.",
    ],
  },
  {
    name: "Keerthy M",
    affiliation: "AIMO-TNSB",
    photo: "/assets/Interns/keerthi.png",
    quote: [
      "This internship provided me with ample opportunities to learn how to blend in with my peers and work seamlessly, enabling me to increase my ability to adapt to different situations which need my cooperation to complete the assigned tasks. Working here has inculcated habits like talking to various individuals with different personalities increasing my awareness of face to face human interactions. Participating in the Conclave event about skill development initiatives of India and creation of AIMO Times truly expanded my skill set. It has also helped me seek various opinions and suggestions regarding my tasks helping me complete my task to the best of my ability with efficiency.",
    ],
  },
  {
    name: "Madhumitha U",
    affiliation: "AIMO-TNSB",
    photo: "/assets/Interns/madhumitha.png",
    quote: [
      "This internship has helped me gain practical knowledge on aspects like coordinating with others, discussing potential ideas with my peers. The conducive environment stimulated my desire to work and learn by giving my 100% to every task that is assigned to me. I had the exclusive opportunity to interact with this company and various other individuals enriching my knowledge and skills at the same time. Interacting with others has helped see things from different perspectives and in exploring various possibilities of different aspects in a task.",
    ],
  },
  {
    name: "Haripriya S",
    affiliation: "AIMO-TNSB",
    photo: "/assets/Interns/haripriya.png",
    quote: [
      "The internship here has been a pleasant learning experience. I had the opportunity to enhance my communication skills. The environment is conducive helping me to work to my full ability with little to no distractions. I had the chance to work with more peers, improving my social interactions with others. I am having a near work experience along with enriching my knowledge in various aspects. This internship helped my growth in understanding requirements of a particular job assigned to me and helpful in improvising my approach to complete a task. The creation of AIMO Times was one of the highlights of our whole internship experience.",
    ],
  },
  {
    name: "Kaviya P",
    affiliation: "III B.COM · Guru Shree Shantivijai Jain College for Women",
    photo: "/assets/Interns/kaviya.jpg",
    quote: [
      "My experience @aimo TNSB as an intern:",
      "My internship at aimo was one of the finest experience in my life. Myself and my fellow academic interns were with large hopes when we got selected. With that hopes we stepped into the world of industry. Apart from studying industries we were awestruck by their activities about various genres they are working on like programmes through charities, Training and placement, workshops for students and budding entrepreneurs through which we met our hopes in reality.",
      "As a team of 7 we jointly for first time launched a Youtube channel for the 80 years old AIMO TNSB and cultivated Teamwork, leadership qualities and organising events.",
      "We are amazed by the way they focus on future pillars of India to take over the industry sectors by providing various knowledge about schemes and training and development programmes.",
    ],
  },
  {
    name: "Sangeetha S",
    affiliation: "III B.COM · Guru Shree Shantivijai Jain College for Women",
    photo: "/assets/Interns/sangeetha.jpg",
    quote: [
      "In Internship my experience is, though it's a one of the eldest Chamber of commerce, I thought its only for business people, and not for job seekers like me. However, thru this intern even we have conducted job awareness programme, later I came to know that they are catering with GOI Enterprises like Logistic skill sector council, - LogSkill Solutions, etc. And AIMO TNSB also have tie up with Anna University and conducting mega event called TECHKNOW, to identify and act as a ignitor of hidden talented engineers and award them with business/job opportunities, which means AIMO TNSB also for students and educational institutions. Thank you giving me this wonderful opportunity.",
    ],
  },
  {
    name: "Sridevi S",
    affiliation: "III B.COM · Guru Shree Shantivijai Jain College for Women",
    photo: "/assets/Interns/sridevi.jpg",
    quote: [
      "First of all thank you for giving me this wonderful opportunity. In Internship we understood and learned many new things, to mention few: there are so many schemes available for Entrepreneurs, which is not known or not reached to them. Though there are few amendments which are against Entrepreneurs, most of them are for them. And business supports for business persons right from the platform vendors to Medium Enterprises, (which is bigger industry under msme category.) Through this journey I learned many things.",
    ],
  },
  {
    name: "Priyanka K",
    affiliation: "III B.COM · Guru Shree Shantivijai Jain College for Women",
    photo: "/assets/Interns/priyanka.jpg",
    quote: [
      "During this internship period, i have gained work experience related to industries. We undergone a six-week of internship at AIMO-TNSB. Every week we were conducted webinars through online to create awareness among students. I also gained a better understanding about industries and new references for my future. Thank you for giving me the wonderful opportunity to explore myself.",
    ],
  },
  {
    name: "Bagya Lakshmi C N",
    affiliation: "III B.COM · Guru Shree Shantivijai Jain College for Women",
    photo: "/assets/Interns/bagya.jpg",
    quote: [
      "During my internship I was fascinated by the world of industry and the way its components have been changing to suit the current needs. I was highly motivated and interested into offering services to the manufacturers/entrepreneurs by creating value for them. As fresh students we got to have exposure in the digital platform. To conduct webinars, aimo gave us freehand to conduct awareness programme among various issues.",
    ],
  },
  {
    name: "Keerthana",
    affiliation: "III B.COM · Guru Shree Shantivijai Jain College for Women",
    photo: "/assets/Interns/noname.jpg",
    quote: [
      "Educate the existing entrepreneur about various schemes from state and central govts, helping start ups, incubations, students to be a successful entrepreneurs. Job assistance for the students etc. To represent small, tiny sectors and their wants and needs, to state and central govt.",
      "Thru AIMO TNSB Internship, we had chance to witness the opportunity to become \u201ca future Entrepreneur\u201d. The schemes and various funding available from various government institution to help innovative ideas, and supports from the Government both state and central etc. And we don't need to roam around to get all these details just to become a \u201cMember of AIMO TNSB\u201d, they will take care, even if not a member they are ready to help, as a Non-Profit, service Oriented Organisation. For the first time, treated like a fully grown and responsible adult.",
    ],
  },
  {
    name: "Jeevitha",
    affiliation: "III B.COM · Guru Shree Shantivijai Jain College for Women",
    photo: "/assets/Interns/jeevitha.jpg",
    quote: [
      "My internship as a student has been the most rewarding and motivational. Throughout my internship experience, I was able to develop and foster a truly positive and compassionate learning environment. I am confident in progress, growth and development. I would not have the knowledge or skills I have today if it were not for my internship experience and I am looking forward to where my career in education takes me in the future.",
    ],
  },
];
