const touristAttraction = [
  {
    namaTempatWisata: "Mt. Everest",
    location: "Nepal",
    imageDocument: "https://ambitionhimalaya.com/wp-content/uploads/2024/08/mount-everest.webp",
    description: "Puncak tertinggi di dunia yang berdiri kokoh di pegunungan Himalaya. Destinasi impian para pendaki kelas dunia yang menawarkan pemandangan spektakuler dan tantangan fisik yang tak tertandingi.",
    price: { days14: 20000000, days28: 35000000 },
    continent: "Asia"
  },
  {
    namaTempatWisata: "Taj Mahal",
    location: "India",
    imageDocument: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    description: "Mahakarya arsitektur Mughal di Agra, India, yang dibangun sebagai lambang cinta abadi. Monumen marmer putih berkilau ini adalah salah satu Keajaiban Dunia yang paling ikonik.",
    price: { days14: 25000000, days28: 35000000 },
    continent: "Asia"
  },
  {
    namaTempatWisata: "Pyramid of Giza",
    location: "Egypt",
    imageDocument: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&q=80",
    description: "Satu-satunya Keajaiban Dunia Kuno yang masih berdiri tegak. Piramida raksasa ini dibangun lebih dari 4.500 tahun lalu sebagai makam firaun dan tetap menjadi misteri arsitektur terbesar sepanjang masa.",
    price: { days14: 25000000, days28: 50000000 },
    continent: "Africa"
  },
  {
    namaTempatWisata: "Niagara Falls",
    location: "Canada",
    imageDocument: "https://images.unsplash.com/photo-1489447068241-b3490214e879?w=800&q=80",
    description: "Air terjun paling terkenal di dunia yang terletak di perbatasan Kanada dan Amerika Serikat. Gemuruh air yang dahsyat dan kabut air yang memenuhi udara menciptakan pengalaman alam yang tak terlupakan.",
    price: { days14: 55000000, days28: 75000000 },
    continent: "America"
  },
  {
    namaTempatWisata: "Eiffel Tower",
    location: "France",
    imageDocument: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    description: "Menara besi ikonik setinggi 330 meter yang menjadi simbol Kota Paris dan seluruh Prancis. Dibangun tahun 1889, menara ini menawarkan pemandangan kota yang memukau dari tiga tingkat observasi.",
    price: { days14: 40000000, days28: 60000000 },
    continent: "Europe"
  },
  {
    namaTempatWisata: "Mt. Fuji",
    location: "Japan",
    imageDocument: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80",
    description: "Gunung berapi tertinggi di Jepang dengan ketinggian 3.776 meter yang dianggap suci oleh masyarakat Jepang. Keindahan puncaknya yang bersalju menjadi simbol nasional dan inspirasi seni selama berabad-abad.",
    price: { days14: 20000000, days28: 30000000 },
    continent: "Asia"
  },
  {
    namaTempatWisata: "Burj Khalifa",
    location: "UAE",
    imageDocument: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80",
    description: "Gedung tertinggi di dunia yang menjulang 828 meter di jantung kota Dubai. Dari observasi deck-nya, pengunjung dapat menikmati panorama gurun pasir, laut biru, dan kota futuristik yang menakjubkan.",
    price: { days14: 20000000, days28: 40000000 },
    continent: "Asia"
  },
  {
    namaTempatWisata: "Colosseum",
    location: "Italy",
    imageDocument: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    description: "Amfiteater kuno terbesar di dunia yang dibangun pada tahun 70-80 Masehi di jantung kota Roma. Saksi bisu kejayaan Kekaisaran Romawi ini dulunya menampung hingga 80.000 penonton untuk berbagai pertunjukan.",
    price: { days14: 45000000, days28: 70000000 },
    continent: "Europe"
  },
  {
    namaTempatWisata: "Disney Land",
    location: "California",
    imageDocument: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=80",
    description: "Taman hiburan impian dari Walt Disney yang pertama di dunia, dibuka sejak 1955. Dengan puluhan wahana, pertunjukan, dan karakter Disney favorit, Disneyland adalah surga kebahagiaan untuk semua usia.",
    price: { days14: 50000000, days28: 90000000 },
    continent: "America"
  },
  {
    namaTempatWisata: "Opera House",
    location: "Australia",
    imageDocument: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    description: "Mahakarya arsitektur modern abad ke-20 yang berdiri megah di tepi pelabuhan Sydney. Gedung kesenian multifungsi ini menampung lebih dari 1.500 pertunjukan setiap tahunnya dan menjadi simbol Australia.",
    price: { days14: 20000000, days28: 30000000 },
    continent: "Australia"
  }
];

/* ===========================
   FORMAT CURRENCY RUPIAH
   (sesuai fungsi Anda)
=========================== */
function currencyRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
}

/* ===========================
   RENDER CARD
   (adaptasi attractionList Anda)
=========================== */
const listAttractionContainer = document.getElementById("cardsGrid");

function attractionList(e, index) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.animationDelay = `${index * 0.07}s`;
  card.setAttribute("data-index", index);

  card.innerHTML = `
    <div class="card-img">
      <img
        src="${e.imageDocument}"
        alt="${e.namaTempatWisata}"
        loading="lazy"
        onerror="this.src='https://ambitionhimalaya.com/wp-content/uploads/2024/08/mount-everest.webp'"
      />
      <span class="card-continent-badge">${e.continent}</span>
      <button class="card-detail-btn span2" data-key="${index}">
        <i class="fa-solid fa-eye"></i> Lihat Detail
      </button>
    </div>
    <div class="card-body">
      <h3 class="card-name span1">${e.namaTempatWisata}, ${e.location}</h3>
      <div class="card-prices">
        <div class="card-price-item">
          <span class="card-price-label">14 Hari</span>
          <span class="card-price-value">${currencyRupiah(e.price.days14)}</span>
        </div>
        <div class="card-price-item">
          <span class="card-price-label">28 Hari</span>
          <span class="card-price-value">${currencyRupiah(e.price.days28)}</span>
        </div>
      </div>
    </div>
  `;

  listAttractionContainer.appendChild(card);
}

/* ===========================
   LOOP DATA
   (adaptasi loopData Anda —
    pasang event listener pada
    tombol "Lihat Detail")
=========================== */
function loopData(newArray) {
  const detailButtons = listAttractionContainer.querySelectorAll(".span2");

  detailButtons.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.stopPropagation(); // cegah klik card ikut terpicu
      const key = event.currentTarget.getAttribute("data-key");
      showPreview(newArray[key]);
    });
  });

  // Klik seluruh card juga membuka preview
  const cards = listAttractionContainer.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      const key = card.getAttribute("data-index");
      showPreview(newArray[key]);
    });
  });
}

/* ===========================
   PREVIEW
=========================== */
function showPreview(dest) {
  const section = document.getElementById("previewSection");

  document.getElementById("previewImg").src               = dest.imageDocument;
  document.getElementById("previewImg").alt               = dest.namaTempatWisata;
  document.getElementById("previewContinent").textContent = dest.continent;
  document.getElementById("previewName").textContent      = dest.namaTempatWisata + ", " + dest.location;
  document.getElementById("previewDesc").textContent      = dest.description;
  document.getElementById("previewPrice14").textContent   = currencyRupiah(dest.price.days14);
  document.getElementById("previewPrice28").textContent   = currencyRupiah(dest.price.days28);

  section.style.display = "block";
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closePreview() {
  document.getElementById("previewSection").style.display = "none";
}

/* ===========================
   HELPER — render ulang daftar
=========================== */
function renderList(array) {
  listAttractionContainer.innerHTML = "";
  array.forEach(attractionList);
  loopData(array);
  updateResultInfo(array.length);
  document.getElementById("emptyState").style.display = array.length === 0 ? "block" : "none";
}

function updateResultInfo(count) {
  const info = document.getElementById("resultInfo");
  if (info) {
    info.textContent = `Menampilkan ${count} dari ${touristAttraction.length} destinasi`;
  }
}

/* ===========================
   HELPER — array sesuai filter
   benua yang sedang aktif
=========================== */
let activeContinent = "All";

function getActiveFiltered() {
  if (activeContinent === "All") return [...touristAttraction];
  return touristAttraction.filter(e => e.continent === activeContinent);
}

/* ===========================
   SORT DATA
   (adaptasi inputSort Anda)
=========================== */
const inputSort = document.getElementById("sortSelect");

inputSort.addEventListener("change", function (event) {
  const currentFiltered = getActiveFiltered();

  switch (event.target.selectedIndex) {
    case 1: // A – Z
      currentFiltered.sort((a, b) => a.namaTempatWisata < b.namaTempatWisata ? -1 : 1);
      break;
    case 2: // Harga 14 hari terendah
      currentFiltered.sort((a, b) => a.price.days14 - b.price.days14);
      break;
    case 3: // Harga 14 hari tertinggi
      currentFiltered.sort((a, b) => b.price.days14 - a.price.days14);
      break;
    case 4: // Harga 28 hari terendah
      currentFiltered.sort((a, b) => a.price.days28 - b.price.days28);
      break;
    case 5: // Harga 28 hari tertinggi
      currentFiltered.sort((a, b) => b.price.days28 - a.price.days28);
      break;
    default:
      break;
  }

  renderList(currentFiltered);
});

/* ===========================
   FILTER DATA
   (adaptasi inputFilter Anda —
    kini pakai pill buttons)
=========================== */
document.getElementById("filterPills").addEventListener("click", function (event) {
  if (!event.target.classList.contains("pill")) return;

  // Update tombol aktif
  document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
  event.target.classList.add("active");

  activeContinent = event.target.dataset.continent;

  // Reset sort ke default saat filter berubah
  inputSort.selectedIndex = 0;

  renderList(getActiveFiltered());
});

/* ===========================
   SEARCH DATA
   (adaptasi searchInput Anda —
    keyup, hide/show card)
=========================== */
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function (event) {
  const query = event.target.value.toLowerCase();
  const cards  = listAttractionContainer.getElementsByClassName("card");
  const names  = listAttractionContainer.getElementsByClassName("span1");

  for (let i = 0; i < names.length; i++) {
    if (names[i].textContent.toLowerCase().indexOf(query) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }

  // Hitung yang masih tampil untuk info & empty state
  const visible = Array.from(cards).filter(c => c.style.display !== "none").length;
  updateResultInfo(visible);
  document.getElementById("emptyState").style.display = visible === 0 ? "block" : "none";
});

/* ===========================
   NAVBAR SCROLL
=========================== */
function handleNavbarScroll() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 20);
}

/* ===========================
   ACTIVE NAV LINK
=========================== */
function updateActiveLink() {
  const sections = ["home", "destinations", "about"];
  const scrollY  = window.scrollY + 100;
  let current    = "home";

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) current = id;
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

/* ===========================
   HAMBURGER MENU
=========================== */
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const spans  = hamburger.querySelectorAll("span");
    const isOpen = navLinks.classList.contains("open");
    spans[0].style.transform = isOpen ? "rotate(45deg) translate(5px, 5px)"   : "";
    spans[1].style.opacity   = isOpen ? "0"                                    : "";
    spans[2].style.transform = isOpen ? "rotate(-45deg) translate(5px, -5px)" : "";
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.querySelectorAll("span").forEach(s => {
        s.style.transform = "";
        s.style.opacity   = "";
      });
    });
  });
}

/* ===========================
   INIT
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  // Render daftar awal (pola Anda: touristAttraction.map(attractionList) lalu loopData)
  touristAttraction.forEach(attractionList);
  loopData(touristAttraction);
  updateResultInfo(touristAttraction.length);

  // Tombol close preview
  document.getElementById("closePreview").addEventListener("click", closePreview);

  // Scroll events
  window.addEventListener("scroll", () => {
    handleNavbarScroll();
    updateActiveLink();
  });

  handleNavbarScroll();
  initHamburger();
});