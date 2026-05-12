export const interCityRoutes = [
  { 
    region: "Riyadh Routes", 
    routes: ["Riyadh → Jeddah", "Riyadh → Makkah", "Riyadh → Madinah", "Riyadh → Dammam", "Riyadh → Khobar", "Riyadh → Jubail", "Riyadh → Taif", "Riyadh → Abha", "Riyadh → Jizan", "Riyadh → Tabuk", "Riyadh → Hail", "Riyadh → Qassim", "Riyadh → Buraydah", "Riyadh → Yanbu", "Riyadh → AlUla"] 
  },
  { 
    region: "Jeddah Routes", 
    routes: ["Jeddah → Makkah", "Jeddah → Madinah", "Jeddah → Riyadh", "Jeddah → Taif", "Jeddah → Yanbu", "Jeddah → Tabuk", "Jeddah → Abha", "Jeddah → Jizan", "Jeddah → Dammam", "Jeddah → Khobar", "Jeddah → AlUla"] 
  },
  { 
    region: "Makkah Routes", 
    routes: ["Makkah → Madinah", "Makkah → Jeddah", "Makkah → Taif", "Makkah → Riyadh", "Makkah → Yanbu", "Makkah → Tabuk", "Makkah → Abha", "Makkah → Jizan", "Makkah → Dammam"] 
  },
  { 
    region: "Madinah Routes", 
    routes: ["Madinah → Makkah", "Madinah → Jeddah", "Madinah → Riyadh", "Madinah → Yanbu", "Madinah → Tabuk", "Madinah → AlUla", "Madinah → Hail", "Madinah → Qassim"] 
  },
  { 
    region: "Eastern Region Routes", 
    routes: ["Dammam → Riyadh", "Dammam → Jeddah", "Dammam → Makkah", "Dammam → Madinah", "Dammam → Khobar", "Dammam → Jubail", "Dammam → Hofuf", "Khobar → Riyadh", "Khobar → Dammam", "Khobar → Jeddah", "Khobar → Makkah"] 
  },
  { 
    region: "Southern Routes", 
    routes: ["Abha → Jizan", "Abha → Najran", "Abha → Riyadh", "Abha → Jeddah", "Abha → Makkah", "Jizan → Abha", "Jizan → Riyadh", "Jizan → Jeddah"] 
  },
  { 
    region: "Northern Routes", 
    routes: ["Tabuk → Madinah", "Tabuk → Jeddah", "Tabuk → Riyadh", "Tabuk → AlUla", "Tabuk → Hail", "Hail → Riyadh", "Hail → Madinah", "Hail → Tabuk"] 
  }
];

export const hajjUmrahRoutes = [
  {
    region: "🕋 Routes to Makkah",
    routes: ["Jeddah → Makkah", "Taif → Makkah", "Madinah → Makkah", "Riyadh → Makkah", "Dammam → Makkah", "Khobar → Makkah", "Abha → Makkah", "Tabuk → Makkah", "Yanbu → Makkah"]
  },
  {
    region: "🕌 Routes to Madinah",
    routes: ["Jeddah → Madinah", "Makkah → Madinah", "Taif → Madinah", "Riyadh → Madinah", "Dammam → Madinah", "Khobar → Madinah", "Yanbu → Madinah", "Tabuk → Madinah"]
  }
];

export const internationalRoutes = [
  { 
    region: "🇦🇪 Saudi → UAE Routes", 
    routes: ["Riyadh → Dubai", "Riyadh → Abu Dhabi", "Dammam → Dubai", "Khobar → Dubai", "Hofuf → Dubai"] 
  },
  { 
    region: "🇧🇭 Saudi → Bahrain Routes", 
    routes: ["Dammam → Manama", "Khobar → Manama", "Jubail → Manama", "Riyadh → Manama"] 
  },
  { 
    region: "🇶🇦 Saudi → Qatar Routes", 
    routes: ["Riyadh → Doha", "Dammam → Doha", "Khobar → Doha", "Hofuf → Doha"] 
  },
  { 
    region: "🇰🇼 Saudi → Kuwait Routes", 
    routes: ["Riyadh → Kuwait City", "Dammam → Kuwait City", "Khobar → Kuwait City", "Hafar Al-Batin → Kuwait City", "Khafji → Kuwait City"] 
  }
];

export const airportRoutes = [
  {
    region: "Riyadh King Khalid Airport (RUH)",
    routes: ["RUH → Riyadh Center", "RUH → Diplomatic Quarter", "RUH → Diriyah", "RUH → King Abdullah Financial District"]
  },
  {
    region: "Jeddah King Abdulaziz Airport (JED)",
    routes: ["JED → Jeddah Waterfront", "JED → Al-Balad", "JED → Makkah", "JED → KAUST"]
  },
  {
    region: "Dammam King Fahd Airport (DMM)",
    routes: ["DMM → Dammam Center", "DMM → Khobar", "DMM → Jubail", "DMM → Dhahran"]
  }
];

export const routeCategories = [
  { name: "Intercity Routes", description: "Premium long-distance transfers between major Saudi cities.", data: interCityRoutes },
  { name: "Airport Transfers", description: "First-class chauffeur transfers from major Saudi airports.", data: airportRoutes },
  { name: "Umrah Travel Routes", description: "Spiritual pilgrimage transfers specifically tailored for Makkah and Madinah.", data: hajjUmrahRoutes },
  { name: "International GCC Routes", description: "Luxury cross-border travel from Saudi Arabia to neighboring GCC countries.", data: internationalRoutes }
];

export function slugify(text: string) {
  return text.toLowerCase().replace(/ → /g, '-to-').replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export function parseSlug(slug: string) {
  if (!slug) return null;
  const parts = slug.split('-to-');
  if (parts.length !== 2) return null;
  const from = parts[0].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const to = parts[1].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return { from, to, string: `${from} → ${to}` };
}
