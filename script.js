// Ubah nomor ini menjadi nomor WhatsApp bisnis Anda, tanpa tanda + atau spasi.
const WHATSAPP_NUMBER = "6281234567890";

const catPhotos = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=85"
];

const drinks = [
  ["Es Kopi Susu","Lembut, manis, dan dingin.",28],["Americano","Espreso bold, panas atau es.",25],["Cappuccino","Kopi klasik dengan foam lembut.",32],["Caramel Latte","Espreso, susu, dan karamel.",34],["Vanilla Latte","Manis ringan dengan aroma vanila.",34],
  ["Matcha Cloud","Matcha lembut dengan foam susu.",32],["Matcha Oat Latte","Matcha dan susu oat yang creamy.",36],["Hojicha Latte","Teh panggang beraroma karamel.",33],["Chocolate Haze","Cokelat pekat dan susu segar.",32],["Red Velvet Latte","Manis lembut dengan foam keju.",35],
  ["Teh Sore","Teh melati dan madu hangat.",24],["Lychee Tea","Teh hitam dingin dengan leci.",27],["Peach Tea","Teh persik yang ringan dan wangi.",27],["Lemon Tea","Segar, manis, dan sedikit asam.",25],["Earl Grey Milk Tea","Teh wangi dengan susu creamy.",30],
  ["Cold Brew","Diseduh dingin selama 16 jam.",30],["Kopi Pandan","Kopi susu dengan harum pandan.",31],["Affogato","Espreso dan es krim vanila.",35],["Sparkling Yuzu","Soda citrus yang menyegarkan.",29],["Strawberry Soda","Soda dingin dengan stroberi.",28],
  ["Mango Smoothie","Mangga manis dan yoghurt.",34],["Berry Smoothie","Campuran beri dan pisang.",35],["Air Mineral","Dingin atau suhu ruang.",10],["Extra Shot","Tambahkan satu shot espreso.",8],["Babycino","Susu hangat untuk si kecil.",18]
];

const foods = [
  ["Croissant Butter","Hangat, renyah, baru dipanggang.",27],["Pain au Chocolat","Croissant isi cokelat leleh.",30],["Toast Jamur","Roti panggang dan jamur creamy.",38],["Avocado Toast","Alpukat, telur, dan sourdough.",42],["Egg Mayo Toast","Telur creamy dan daun segar.",35],
  ["Banana Bread","Lembut dengan karamel asin.",25],["Carrot Cake","Wortel, rempah, dan krim keju.",32],["Chocolate Cake","Cokelat gelap yang lumer.",34],["Lemon Loaf","Asam segar dan manis seimbang.",28],["Cookies Butter","Tiga kukis butter renyah.",22],
  ["Pasta Aglio Olio","Pasta bawang putih dan cabai.",45],["Mac & Cheese","Pasta panggang super creamy.",48],["Chicken Sandwich","Ayam panggang dan selada segar.",43],["Beef Burger","Daging sapi, keju, dan kentang.",55],["Chicken Katsu Bowl","Nasi hangat dan katsu renyah.",52],
  ["Nasi Goreng Kafe","Nasi goreng rumahan penuh rasa.",42],["French Fries","Kentang goreng dan saus spesial.",25],["Onion Rings","Bawang renyah dengan dip creamy.",27],["Salad Garden","Sayur segar dan dressing jeruk.",35],["Pancake Madu","Pancake hangat, madu, dan buah.",38]
];

function createMenuItem([name, description, price], index, photoOffset) {
  const image = catPhotos[(index + photoOffset) % catPhotos.length];
  return `<article class="menu-item"><img src="${image}" alt="Kucing untuk menu ${name}" loading="lazy"><div class="menu-item__body"><span class="menu-item__number">${String(index + 1).padStart(2, "0")}</span><h3>${name}</h3><p>${description}</p><strong>Rp${price}k</strong></div></article>`;
}

function renderMenu(selector, items, photoOffset) {
  const panel = document.querySelector(selector);
  panel.innerHTML = items.map((item, index) => createMenuItem(item, index, photoOffset)).join("");
}

function setupMobileMenu() {
  const button = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  const closeMenu = () => { navigation.classList.remove("is-open"); document.body.classList.remove("menu-open"); button.setAttribute("aria-expanded", "false"); };
  button.addEventListener("click", () => { const open = navigation.classList.toggle("is-open"); document.body.classList.toggle("menu-open", open); button.setAttribute("aria-expanded", String(open)); });
  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
}

function setupMenuTabs() {
  const tabs = [...document.querySelectorAll(".menu-tab")];
  const track = document.querySelector(".menu-track");
  const tabList = document.querySelector(".menu-tabs");
  const selectTab = (index) => { tabs.forEach((tab, tabIndex) => { const active = tabIndex === index; tab.classList.toggle("is-active", active); tab.setAttribute("aria-selected", String(active)); }); track.dataset.active = index; tabList.dataset.active = index; };
  tabs.forEach((tab, index) => tab.addEventListener("click", () => selectTab(index)));
  let startX = 0;
  track.addEventListener("touchstart", (event) => { startX = event.changedTouches[0].screenX; }, { passive:true });
  track.addEventListener("touchend", (event) => { if (Math.abs(event.changedTouches[0].screenX - startX) > 45) selectTab(event.changedTouches[0].screenX < startX ? 1 : 0); }, { passive:true });
}

function setupWhatsAppOrder() {
  const message = "Halo Hearth & Honey, saya ingin membuat pesanan.";
  const link = document.querySelector("#whatsapp-order");
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
}

document.querySelector("#hero-cat").src = catPhotos[Math.floor(Math.random() * catPhotos.length)];
document.querySelector("#year").textContent = new Date().getFullYear();
renderMenu("#drinks-panel", drinks, 0);
renderMenu("#food-panel", foods, 2);
setupMobileMenu();
setupMenuTabs();
setupWhatsAppOrder();
