export const athleteData = {
  personal: {
    fullName: "Theadora Adeline Valerina",
    shortName: "Velin",
    nickname: "Meme",
    birthYear: 2012,
    ageCategory: "KU-14 / KU-15 Putri",
    height: "167 cm",
    position: "Guard / Forward (G/F)",
    school: "SMP Kristen Kalam Kudus Malang",
    clubs: [
      { name: "Ilufa Dragons Basketball Academy", role: "Tournament & 3x3 Squad" },
      { name: "Hustle Basketball Team", role: "Summer League & Scrimmage Squad" },
      { name: "SMP Kristen Kalam Kudus Malang", role: "Junior DBL & School Team" }
    ],
    jerseys: [
      { label: "Junior DBL (SMP KK)", number: "02", color: "from-blue-600 to-indigo-900" },
      { label: "Club (Dragons & Hustle)", number: "28", color: "from-amber-500 to-yellow-600" }
    ],
    tagline: "Student-athlete, Guard & Forward representing SMP Kristen Kalam Kudus Malang, Ilufa Dragons, and Hustle.",
    bio: "Theadora Adeline Valerina (known on court as Velin or Meme) is a junior basketball athlete from Malang, East Java. Standing 167 cm and playing both Guard and Forward, she brings perimeter shooting, transition speed, and relentless energy to every match. Her career includes winning 1st Place (Juara 1) at the 2026 Nusantara Basketball League in Blitar, 3rd Place at the 2026 LBE Summer League in Yogyakarta, 3rd Place at the 2025 Cleo Nextgen Cup in Surabaya, and representing SMP Kristen Kalam Kudus in Junior DBL East Java."
  },

  logos: {
    kalamKudus: "/Logo-KK-PNG.png",
    dragons: "/Ilufa Dragon.png",
  },

  media: {
    formalPortrait: "/formal picture.jpeg",
    charisPortrait: "/Velin (Sparring Charis).JPG",
    lbeAction: "/LANCAR SUMMER LEAGUE 2026-76 (2).jpg",
    jrDblAction: "/JR DBL.jpeg",
    jrDblCharis: "/JR DBL VS CHARIS.jpeg",
    jrDblCharis2: "/JR DBL VS CHARIS 2.jpeg",
    portfolioPdf: "/Velin Portofolio 2026.pdf",
    portfolioPdf2026: "/Velin Portofolio 2026.pdf",
    portfolioPdf2425: "/Portofolio Velin 24-25.pdf",
    medals: {
      lbe2026: "/Medal and Certificate LBE (lancar basketball event).png",
      rookie2025: "/Medal and Certificate Rookie 2025 KU 15.png",
      rookie2024: "/Medal and Certificate Rookie 2024.png",
      h7Tournament2025: "/Certificate H7 Tournaament 2025.png",
      tridharma2025: "/Certificate Tridharma Madiun Winter Cup 2025.png",
      tuneUp3x3: "/Tune Up Game Ceritificate.jpeg",
    }
  },

  stats: [
    { label: "Height", value: "167", unit: "cm", icon: "ruler" },
    { label: "Born", value: "2012", unit: "KU-15", icon: "calendar" },
    { label: "Position", value: "G / F", unit: "Swingman", icon: "target" },
    { label: "Jerseys", value: "#2 / #28", unit: "DBL & Club", icon: "shirt" },
    { label: "Career Podiums", value: "7+", unit: "Trophies", icon: "trophy" },
    { label: "Home City", value: "Malang", unit: "East Java", icon: "map-pin" }
  ],

  trophies: [
    // 2026 Accolades
    {
      id: "nbl-2026",
      year: "2026",
      title: "JUARA 1 (CHAMPION)",
      tournament: "Nusantara Basketball League 2026",
      location: "Blitar, East Java",
      date: "23 - 31 Mei 2026",
      team: "Ilufa Dragons Basketball Club",
      category: "KU-15 Putri",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/40",
      description: "Championship victory run defeating Juniors, Perbaspa, Nextgen, and Jethree in the grand final to take the gold medal and championship trophy.",
      medal: "Gold Medal & Trophy",
      highlight: "🏆 1st Place Champion"
    },
    {
      id: "lbe-2026",
      year: "2026",
      title: "JUARA 3 (3RD PLACE)",
      tournament: "Lancar Basketball Event (LBE) Summer League 2026",
      location: "Lancar Arena, Yogyakarta",
      date: "14 Juni - 5 Juli 2026",
      team: "Hustle Basketball Team",
      category: "KU-15 Putri",
      badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/40",
      description: "Captured third place and bronze medal across national youth clubs from Garut, Jogjakarta, and Bogor.",
      medal: "Bronze Medal & Certificate",
      highlight: "🥉 National Bronze Podium",
      image: "/Medal and Certificate LBE (lancar basketball event).png"
    },
    {
      id: "tuneup-2026",
      year: "2026",
      title: "STANDING ACHIEVEMENT",
      tournament: "3x3 Basketball Tune Up Games (Dies Natalis UB)",
      location: "GOR Pertamina Universitas Brawijaya, Malang",
      date: "1 - 3 Mei 2026",
      team: "Ilufa Dragons Squad",
      category: "KU-14 Girls",
      badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
      description: "Official Certificate of Sport presented by FISIP Universitas Brawijaya Malang for outstanding 3x3 play.",
      medal: "Official Certificate of Sport",
      highlight: "🎖️ 3x3 Brawijaya Honors",
      image: "/Tune Up Game Ceritificate.jpeg"
    },
    {
      id: "dbl-2026",
      year: "2026",
      title: "JUNIOR DBL STARTER",
      tournament: "Junior DBL East Java Series 2026",
      location: "GOR Ken Arok, Malang",
      date: "August 2026",
      team: "SMP Kristen Kalam Kudus Malang",
      category: "SMP Girls Division",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/40",
      description: "Starting guard wearing Jersey #02 representing Kalam Kudus on the premier middle-school stage in East Java.",
      medal: "Official DBL Player Card #02",
      highlight: "🏀 Junior DBL East Java",
      image: "/JR DBL.jpeg"
    },

    // 2025 Accolades
    {
      id: "cleo-2025",
      year: "2025",
      title: "JUARA 3 (3RD PLACE)",
      tournament: "Cleo Nextgen Student League Cup 2025",
      location: "Ciputra World Surabaya",
      date: "20 - 24 Desember 2025",
      team: "Ilufa Dragons Malang",
      category: "KU-13 Putri",
      badgeColor: "bg-rose-500/20 text-rose-400 border-rose-500/40",
      description: "Podium finish in Surabaya competing against premier academies including Line Spartan, Blitz Jakarta, Merpati Bali, and Cougar Jakarta.",
      medal: "Bronze Trophy & Certificate",
      highlight: "🥉 Inter-Club Surabaya"
    },
    {
      id: "h7-2025",
      year: "2025",
      title: "JUARA 3 (3RD PLACE)",
      tournament: "H7 Basketball Tournament (Hindra Jaya)",
      location: "Malang, East Java",
      date: "15 - 21 Desember 2025",
      team: "Ilufa Dragons",
      category: "KU-14 Putri",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/40",
      description: "Third place victory competing against Mahameru Surabaya, H7 Malang, and Sabertooth Surabaya.",
      medal: "Trophy, Medals & Certificate",
      highlight: "🥉 Regional Tournament",
      image: "/Certificate H7 Tournaament 2025.png"
    },
    {
      id: "perbasi-2025",
      year: "2025",
      title: "JUARA 3 (3RD PLACE)",
      tournament: "Perbasi Cup Kota Malang 2025",
      location: "Malang, East Java",
      date: "Oktober 2025",
      team: "Ilufa Dragons",
      category: "KU-14 Putri",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
      description: "Official Perbasi championship podium finish with trophy and medals after victories over Human and Greyhound.",
      medal: "Perbasi Cup Trophy & Medal",
      highlight: "🥉 Perbasi Cup Podium"
    },
    {
      id: "rookie-2025",
      year: "2025",
      title: "JUARA 3 (3RD PLACE)",
      tournament: "Rookie Fun Basketball KU-15 Putri",
      location: "Unggul Sports Center Malang",
      date: "2 - 4 Mei 2025",
      team: "Ilufa Dragons",
      category: "KU-15 Putri",
      badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
      description: "Earned 3rd place trophy and certificate against strong regional clubs at Unggul Sports Center.",
      medal: "Trophy & Certificate",
      highlight: "🥉 Rookie KU-15 Podium",
      image: "/Medal and Certificate Rookie 2025 KU 15.png"
    },
    {
      id: "tridharma-2025",
      year: "2025",
      title: "JUARA 4 (FINALIST)",
      tournament: "Tridharma Winter Cup Madiun 2025",
      location: "Madiun, East Java",
      date: "28 Nov - 7 Des 2025",
      team: "Ilufa Dragons",
      category: "KU-13 Putri",
      badgeColor: "bg-slate-500/20 text-slate-300 border-slate-500/40",
      description: "Semi-finalist and 4th place award against Indocourt Kediri and Sahabat Ponorogo.",
      medal: "Sertifikat Penghargaan",
      highlight: "🏅 Madiun Finalist",
      image: "/Certificate Tridharma Madiun Winter Cup 2025.png"
    },

    // 2024 Accolades
    {
      id: "rookie-2024",
      year: "2024",
      title: "RUNNER UP (JUARA 2)",
      tournament: "Rookie Fun Basketball KU-15",
      location: "Unggul Sports Center Malang",
      date: "18 - 22 Desember 2024",
      team: "Ilufa Dragons",
      category: "KU-15 Putri",
      badgeColor: "bg-slate-400/20 text-slate-200 border-slate-400/40",
      description: "Silver medal and runner-up trophy run defeating IM (Indonesia Muda) and Garuda to reach the grand final.",
      medal: "Silver Trophy & Medal",
      highlight: "🥈 Runner Up Winner",
      image: "/Medal and Certificate Rookie 2024.png"
    }
  ],

  videos: [
    {
      id: "vid-1",
      title: "Free Throw Shooting",
      tournament: "Kalam Kudus vs BS (Piala Wali Kota)",
      venue: "Indoor Stadium",
      src: "/HIGHLIGHT VELIN (KK VS BS).mp4",
      category: "Free Throws",
      duration: "0:25",
      badge: "Free Throws",
      description: "Velin at the free throw line during the Kalam Kudus vs BS match, sinking her foul shots with steady shooting form."
    },
    {
      id: "vid-2",
      title: "Coast-to-Coast Fastbreak + And-1",
      tournament: "Kalam Kudus vs BS",
      venue: "Indoor Stadium",
      src: "/HIGHLIGHT VELIN 2 (KK VS BS).mp4",
      category: "Drives",
      duration: "0:15",
      badge: "Transition & Finish",
      description: "Electric burst in transition, attacking the basket through heavy contact to draw the foul, followed by a confident free throw."
    },
    {
      id: "vid-3",
      title: "Corner 3-Point Shot",
      tournament: "3x3 Tune Up Games",
      venue: "GOR Pertamina UB",
      src: "/Tune Up Velin 3po.mp4",
      category: "3-Pointers",
      duration: "0:03",
      badge: "3x3 Game Shot",
      description: "Catch and shoot from behind the arc at GOR Pertamina UB, scoring pure points for the Dragons."
    },
    {
      id: "vid-4",
      title: "Mid-Range Pull-Up",
      tournament: "3x3 Tune Up Games",
      venue: "GOR Pertamina UB",
      src: "/Tune Up Velin Poinr.mp4",
      category: "Mid-Range",
      duration: "0:07",
      badge: "Shot Creation",
      description: "Smooth pull-up jumper elevating over the outstretched arms of the defender."
    },
    {
      id: "vid-5",
      title: "Drive & Dish Playmaking Assist",
      tournament: "Team Scrimmage",
      venue: "Training Court",
      src: "/04 Meme Assist.mp4",
      category: "Assists",
      duration: "0:08",
      badge: "Court Vision",
      description: "Draws two defenders on the drive, delivering a crisp kick-out pass right into her teammate's shooting pocket."
    },
    {
      id: "vid-6",
      title: "Attack to the Rim",
      tournament: "Team Scrimmage",
      venue: "Training Court",
      src: "/07 Meme.mp4",
      category: "Drives",
      duration: "0:05",
      badge: "First Step",
      description: "Aggressive first step off the catch, knifing through the lane to draw defensive contact at the hoop."
    }
  ],

  matches: [
    // 2026 Season Matches
    {
      id: "m-dbl-2",
      year: "2026",
      date: "26 Agustus 2026",
      event: "Junior DBL East Java 2026",
      team: "SMP Kalam Kudus (Velin #02)",
      opponent: "SMP Charis National Academy",
      venue: "GOR Ken Arok Malang",
      badge: "Junior DBL Game 2"
    },
    {
      id: "m-dbl-1",
      year: "2026",
      date: "19 Agustus 2026",
      event: "Junior DBL East Java 2026",
      team: "SMP Kalam Kudus (Velin #02)",
      opponent: "SMPN 3 Malang",
      venue: "GOR Ken Arok Malang",
      badge: "Junior DBL Opener"
    },
    {
      id: "m-charis-prep",
      year: "2026",
      date: "Agustus 2026",
      event: "School Prep Sparring",
      team: "SMP Kalam Kudus (Velin #28)",
      opponent: "SMP Charis Academy",
      venue: "Charis Academy Gymnasium",
      badge: "Prep Match"
    },
    {
      id: "m-piala-walikota",
      year: "2026",
      date: "Agustus 2026",
      event: "Piala Wali Kota Malang",
      team: "SMP Kalam Kudus (Velin #02)",
      opponent: "BS (Bina Santosa / BSS)",
      venue: "Indoor Stadium Malang",
      badge: "Piala Wali Kota"
    },
    {
      id: "m-lbe-4",
      year: "2026",
      date: "23 Juni 2026",
      event: "LBE Summer League 2026",
      team: "Hustle (Velin #28)",
      opponent: "SSS Jogjakarta",
      venue: "Lancar Arena Yogyakarta",
      badge: "🥉 JUARA 3 DECIDER"
    },
    {
      id: "m-lbe-3",
      year: "2026",
      date: "22 Juni 2026",
      event: "LBE Summer League 2026",
      team: "Hustle (Velin #28)",
      opponent: "Galaxy Stars Bogor",
      venue: "Lancar Arena Yogyakarta",
      badge: "Summer League Match 3"
    },
    {
      id: "m-lbe-2",
      year: "2026",
      date: "20 Juni 2026",
      event: "LBE Summer League 2026",
      team: "Hustle (Velin #28)",
      opponent: "Rising Star Jogjakarta",
      venue: "Lancar Arena Yogyakarta",
      badge: "Summer League Match 2"
    },
    {
      id: "m-lbe-1",
      year: "2026",
      date: "19 Juni 2026",
      event: "LBE Summer League 2026",
      team: "Hustle (Velin #28)",
      opponent: "Favorita Garut (GFOR3)",
      venue: "Lancar Arena Yogyakarta",
      badge: "Summer League Opener"
    },
    {
      id: "m-scrim-fighter",
      year: "2026",
      date: "10 Juni 2026",
      event: "KU-15 Scrimmage Game",
      team: "Hustle (36)",
      opponent: "Fighter (24)",
      venue: "Unggul Sports Center Malang",
      badge: "VICTORY (36-24)"
    },
    {
      id: "m-scrim-greyhound",
      year: "2026",
      date: "10 Juni 2026",
      event: "KU-15 Scrimmage Game",
      team: "Hustle (Velin #28)",
      opponent: "Greyhound Basketball",
      venue: "Unggul Sports Center Malang",
      badge: "Club Scrimmage"
    },
    {
      id: "m-nbl-4",
      year: "2026",
      date: "31 Mei 2026",
      event: "Nusantara Basketball League 2026",
      team: "Ilufa Dragons Squad",
      opponent: "Jethree (Grand Final)",
      venue: "Blitar, East Java",
      badge: "🏆 JUARA 1 FINAL"
    },
    {
      id: "m-nbl-3",
      year: "2026",
      date: "30 Mei 2026",
      event: "Nusantara Basketball League 2026",
      team: "Ilufa Dragons Squad",
      opponent: "Nextgen",
      venue: "Blitar, East Java",
      badge: "Semi-Final"
    },
    {
      id: "m-nbl-2",
      year: "2026",
      date: "24 Mei 2026",
      event: "Nusantara Basketball League 2026",
      team: "Ilufa Dragons Squad",
      opponent: "Perbaspa",
      venue: "Blitar, East Java",
      badge: "Stage 2"
    },
    {
      id: "m-nbl-1",
      year: "2026",
      date: "23 Mei 2026",
      event: "Nusantara Basketball League 2026",
      team: "Ilufa Dragons Squad",
      opponent: "Juniors",
      venue: "Blitar, East Java",
      badge: "Stage 1"
    },
    {
      id: "m-sparr-kk1",
      year: "2026",
      date: "Mei 2026",
      event: "School Friendly Sparring",
      team: "SMP Kalam Kudus (40)",
      opponent: "SMPN 1 Malang (25)",
      venue: "Alamo / KK Court",
      badge: "VICTORY (40-25)"
    },
    {
      id: "m-sparr-kk4",
      year: "2026",
      date: "Mei 2026",
      event: "School Friendly Sparring",
      team: "SMP Kalam Kudus (37)",
      opponent: "SMPN 4 Malang (18)",
      venue: "Alamo Court",
      badge: "VICTORY (37-18)"
    },
    {
      id: "m-tuneup-2",
      year: "2026",
      date: "1 Mei 2026",
      event: "3x3 Tune Up Games UB",
      team: "Dragons (Velin #28)",
      opponent: "Fighter",
      venue: "GOR Pertamina UB Malang",
      badge: "3x3 Match 2"
    },
    {
      id: "m-tuneup-1",
      year: "2026",
      date: "1 Mei 2026",
      event: "3x3 Tune Up Games UB",
      team: "Dragons (Velin #28)",
      opponent: "Metal Scuba",
      venue: "GOR Pertamina UB Malang",
      badge: "3x3 Match 1"
    },
    {
      id: "m-sparr-sniper",
      year: "2026",
      date: "15 Februari 2026",
      event: "Club Friendly Sparring",
      team: "Dragons Squad (Velin #28)",
      opponent: "Sniper Basketball",
      venue: "Indoor Basketball Court",
      badge: "Season Opener"
    },

    // 2025 Season Matches
    {
      id: "m-cleo-4",
      year: "2025",
      date: "24 Desember 2025",
      event: "Cleo Nextgen Cup (Surabaya)",
      team: "Ilufa Dragons KU-13",
      opponent: "Cougar Jakarta",
      venue: "Ciputra World Surabaya",
      badge: "🥉 JUARA 3 MATCH"
    },
    {
      id: "m-cleo-3",
      year: "2025",
      date: "23 Desember 2025",
      event: "Cleo Nextgen Cup (Surabaya)",
      team: "Ilufa Dragons KU-13",
      opponent: "Merpati Bali",
      venue: "Ciputra World Surabaya",
      badge: "Nextgen Stage 3"
    },
    {
      id: "m-cleo-2",
      year: "2025",
      date: "22 Desember 2025",
      event: "Cleo Nextgen Cup (Surabaya)",
      team: "Ilufa Dragons KU-13",
      opponent: "Blitz Jakarta",
      venue: "Ciputra World Surabaya",
      badge: "Nextgen Stage 2"
    },
    {
      id: "m-cleo-1",
      year: "2025",
      date: "21 Desember 2025",
      event: "Cleo Nextgen Cup (Surabaya)",
      team: "Ilufa Dragons KU-13",
      opponent: "Line Spartan Surabaya",
      venue: "Ciputra World Surabaya",
      badge: "Nextgen Opener"
    },
    {
      id: "m-h7-3",
      year: "2025",
      date: "18 Desember 2025",
      event: "H7 Tournament Basketball",
      team: "Ilufa Dragons KU-14",
      opponent: "Sabertooth Surabaya",
      venue: "Hindra Jaya Malang",
      badge: "🥉 JUARA 3 MATCH"
    },
    {
      id: "m-h7-2",
      year: "2025",
      date: "17 Desember 2025",
      event: "H7 Tournament Basketball",
      team: "Ilufa Dragons KU-14",
      opponent: "H7 (Hindra Jaya) Malang",
      venue: "Hindra Jaya Malang",
      badge: "H7 Stage 2"
    },
    {
      id: "m-h7-1",
      year: "2025",
      date: "15 Desember 2025",
      event: "H7 Tournament Basketball",
      team: "Ilufa Dragons KU-14",
      opponent: "Mahameru Surabaya",
      venue: "Hindra Jaya Malang",
      badge: "H7 Opener"
    },
    {
      id: "m-tridharma-2",
      year: "2025",
      date: "7 Desember 2025",
      event: "Tridharma Winter Cup Madiun",
      team: "Ilufa Dragons KU-13",
      opponent: "Sahabat Ponorogo",
      venue: "Madiun, East Java",
      badge: "Juara 4 Final"
    },
    {
      id: "m-tridharma-1",
      year: "2025",
      date: "5 Desember 2025",
      event: "Tridharma Winter Cup Madiun",
      team: "Ilufa Dragons KU-13",
      opponent: "Indocourt Kediri",
      venue: "Madiun, East Java",
      badge: "Winter Cup Stage 1"
    },
    {
      id: "m-perbasi-2",
      year: "2025",
      date: "Oktober 2025",
      event: "Perbasi Cup Kota Malang",
      team: "Ilufa Dragons KU-14",
      opponent: "Greyhound Basketball",
      venue: "Malang, East Java",
      badge: "🥉 JUARA 3 MATCH"
    },
    {
      id: "m-perbasi-1",
      year: "2025",
      date: "Oktober 2025",
      event: "Perbasi Cup Kota Malang",
      team: "Ilufa Dragons KU-14",
      opponent: "Human Basketball",
      venue: "Malang, East Java",
      badge: "Perbasi Stage 1"
    },
    {
      id: "m-school-2025",
      year: "2025",
      date: "Oktober 2025",
      event: "Dempo Cup XX & Langsep Challenge",
      team: "SMP Kalam Kudus Malang",
      opponent: "Interschool Competitions",
      venue: "SMAK Santa Maria & Dempo",
      badge: "School Tournament"
    },
    {
      id: "m-rookie-jun-4",
      year: "2025",
      date: "Juni 2025",
      event: "Rookie Basketball KU-13",
      team: "Ilufa Dragons",
      opponent: "BS (Bima Sakti)",
      venue: "Unggul Sports Center Malang",
      badge: "Ceremonial Award"
    },
    {
      id: "m-rookie-jun-3",
      year: "2025",
      date: "Juni 2025",
      event: "Rookie Basketball KU-13",
      team: "Ilufa Dragons",
      opponent: "HBA (Highfive Academy)",
      venue: "Unggul Sports Center Malang",
      badge: "KU-13 Round 3"
    },
    {
      id: "m-rookie-jun-2",
      year: "2025",
      date: "Juni 2025",
      event: "Rookie Basketball KU-13",
      team: "Ilufa Dragons",
      opponent: "Human Basketball",
      venue: "Unggul Sports Center Malang",
      badge: "KU-13 Round 2"
    },
    {
      id: "m-rookie-jun-1",
      year: "2025",
      date: "Juni 2025",
      event: "Rookie Basketball KU-13",
      team: "Ilufa Dragons",
      opponent: "IM (Indonesia Muda)",
      venue: "Unggul Sports Center Malang",
      badge: "KU-13 Opener"
    },
    {
      id: "m-rookie-mei-2",
      year: "2025",
      date: "Mei 2025",
      event: "Rookie Fun Basketball KU-15",
      team: "Ilufa Dragons",
      opponent: "Human Basketball",
      venue: "Unggul Sports Center Malang",
      badge: "🥉 JUARA 3 MATCH"
    },
    {
      id: "m-rookie-mei-1",
      year: "2025",
      date: "Mei 2025",
      event: "Rookie Fun Basketball KU-15",
      team: "Ilufa Dragons",
      opponent: "Fighter Basketball",
      venue: "Unggul Sports Center Malang",
      badge: "KU-15 Stage 1"
    },

    // 2024 Season Matches
    {
      id: "m-rookie-24-3",
      year: "2024",
      date: "Desember 2024",
      event: "Rookie Basketball KU-15",
      team: "Ilufa Dragons",
      opponent: "Survivor Basketball",
      venue: "Unggul Sports Center Malang",
      badge: "🥈 RUNNER UP FINAL"
    },
    {
      id: "m-rookie-24-2",
      year: "2024",
      date: "Desember 2024",
      event: "Rookie Basketball KU-15",
      team: "Ilufa Dragons",
      opponent: "Garuda Basketball",
      venue: "Unggul Sports Center Malang",
      badge: "KU-15 Semi-Final"
    },
    {
      id: "m-rookie-24-1",
      year: "2024",
      date: "Desember 2024",
      event: "Rookie Basketball KU-15",
      team: "Ilufa Dragons",
      opponent: "IM (Indonesia Muda)",
      venue: "Unggul Sports Center Malang",
      badge: "KU-15 Tournament Debut"
    }
  ],

  gallery: [
    {
      src: "/JR DBL.jpeg",
      title: "Junior DBL Coast-to-Coast Drive",
      tag: "Action",
      subtitle: "Velin (#2) accelerating past the perimeter defender at GOR Ken Arok Malang."
    },
    {
      src: "/JR DBL VS CHARIS.jpeg",
      title: "Hard Drive vs Charis",
      tag: "Action",
      subtitle: "Velin (#2) attacking the paint against Charis Academy at Junior DBL East Java."
    },
    {
      src: "/JR DBL VS CHARIS 2.jpeg",
      title: "Transition Playmaking",
      tag: "Action",
      subtitle: "Velin orchestrating the offense in Kalam Kudus colors during the DBL tournament."
    },
    {
      src: "/LANCAR SUMMER LEAGUE 2026-76 (2).jpg",
      title: "In-Game Focus at Lancar Arena",
      tag: "Action",
      subtitle: "Velin (#28) handling perimeter pressure during LBE Summer League in Yogyakarta."
    },
    {
      src: "/Velin (Sparring Charis).JPG",
      title: "Game-Time Determination",
      tag: "Portrait",
      subtitle: "Velin catching her breath during intense sparring against Charis Academy."
    },
    {
      src: "/formal picture.jpeg",
      title: "Official Athlete Portrait",
      tag: "Portrait",
      subtitle: "Theadora Adeline Valerina official ID card photograph."
    },
    {
      src: "/Tune Up Game Ceritificate.jpeg",
      title: "3x3 Certificate of Sport",
      tag: "Awards",
      subtitle: "Awarded by FISIP Universitas Brawijaya for standing achievement in KU-14 Girls."
    },
    {
      src: "/Medal and Certificate LBE (lancar basketball event).png",
      title: "LBE Summer League 2026 Bronze Medal & Piagam",
      tag: "Awards",
      subtitle: "Juara 3 Bronze Medal and official certificate of achievement from Lancar Basketball Event Yogyakarta."
    },
    {
      src: "/Medal and Certificate Rookie 2025 KU 15.png",
      title: "Rookie Fun Basketball 2025 3rd Winner Medal & Award",
      tag: "Awards",
      subtitle: "Juara 3 bronze medal and Piagam Penghargaan for KU-15 Putri at Unggul Sports Center Malang."
    },
    {
      src: "/Medal and Certificate Rookie 2024.png",
      title: "Rookie Fun Basketball 2024 Runner Up Silver Medal",
      tag: "Awards",
      subtitle: "Juara 2 Silver Medal and official certificate of achievement from Rookie Fun Basketball 2024."
    },
    {
      src: "/Certificate H7 Tournaament 2025.png",
      title: "H7 Basketball Tournament 2025 Certificate",
      tag: "Awards",
      subtitle: "Official Piagam Penghargaan capturing 3rd place with Ilufa Dragons."
    },
    {
      src: "/Certificate Tridharma Madiun Winter Cup 2025.png",
      title: "Tridharma Winter Cup Madiun 2025 Certificate",
      tag: "Awards",
      subtitle: "Finalist certificate presented by Perbasi Kota Madiun at Tridharma Winter Cup."
    },
    {
      src: "/LANCAR SUMMER LEAGUE 2026-2.jpg",
      title: "Hustle vs Rising Star Jogjakarta",
      tag: "Teams",
      subtitle: "Post-match presentation at Lancar Arena Yogyakarta with gold tiaras."
    },
    {
      src: "/LANCAR SUMMER LEAGUE 2026-3.jpg",
      title: "Hustle vs Favorita Garut (GFOR3)",
      tag: "Teams",
      subtitle: "Group team photo at LBE Summer League 2026."
    },
    {
      src: "/SPARRING FIGHTER (24) VS HUSTLE (36).jpeg",
      title: "Hustle Victory vs Fighter (36-24)",
      tag: "Teams",
      subtitle: "Post-game celebration at Unggul Sports Center Malang."
    },
    {
      src: "/SPARRING KK (40) VS SMPN 1 (25).jpeg",
      title: "Kalam Kudus vs SMPN 1 Malang",
      tag: "Teams",
      subtitle: "Kalam Kudus victorious (40-25), with Velin smiling in jersey #28."
    },
    {
      src: "/SPARRING KK (37) VS SMPN 4 (18).jpeg",
      title: "Kalam Kudus vs SMPN 4 Malang",
      tag: "Teams",
      subtitle: "Team victory photo after 37-18 win at Alamo Court."
    },
    {
      src: "/3x3 Tune Up Dragons Squad 02.jpeg",
      title: "Dragons vs Metal Scuba (3x3 UB)",
      tag: "Teams",
      subtitle: "Joint team photo at GOR Pertamina UB after 3x3 Tune Up clash."
    },
    {
      src: "/SPARRING KK VS SMPN 4 WIDE.jpeg",
      title: "Kalam Kudus Squad vs SMPN 4",
      tag: "Teams",
      subtitle: "Wide full-squad photo after Alamo Court victory over SMPN 4 Malang."
    },
    {
      src: "/Dragons vs Sniper 15 Peb 2026 01.jpeg",
      title: "Dragons vs Sniper Sparring",
      tag: "Teams",
      subtitle: "Friendly clash on 15 Feb 2026 between Dragons and Sniper squads."
    }
  ]
};
