const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const WHATSAPP_NUMBER = '6281234567890'; // Ganti dengan nomor WhatsApp bisnis Anda.

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  document.body.classList.toggle('menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const cafeImages = [
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1400&q=85'
];
const cafeImage = document.querySelector('#cafe-image');
if (cafeImage) cafeImage.src = cafeImages[Math.floor(Math.random() * cafeImages.length)];

const catPhotos = [
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=720&q=80'
];
const drinks = [
  ['Es Kopi Susu', 'Lembut, manis, dan dingin.', '28'], ['Americano', 'Espreso bold, pilihan panas atau es.', '25'], ['Cappuccino', 'Kopi klasik dengan foam lembut.', '32'], ['Caramel Latte', 'Espreso, susu, dan karamel.', '34'], ['Vanilla Latte', 'Manis ringan dengan aroma vanila.', '34'],
  ['Matcha Cloud', 'Matcha lembut dengan foam susu.', '32'], ['Matcha Oat Latte', 'Matcha dan susu oat yang creamy.', '36'], ['Hojicha Latte', 'Teh panggang dengan aroma karamel.', '33'], ['Chocolate Haze', 'Cokelat pekat dan susu segar.', '32'], ['Red Velvet Latte', 'Manis lembut dengan foam keju.', '35'],
  ['Teh Sore', 'Teh melati dan madu hangat.', '24'], ['Lychee Tea', 'Teh hitam dingin dengan leci.', '27'], ['Peach Tea', 'Teh persik yang ringan dan wangi.', '27'], ['Lemon Tea', 'Segar, manis, dan sedikit asam.', '25'], ['Earl Grey Milk Tea', 'Teh wangi dengan susu creamy.', '30'],
  ['Cold Brew', 'Diseduh dingin selama 16 jam.', '30'], ['Kopi Pandan', 'Kopi susu dengan harum pandan.', '31'], ['Affogato', 'Espreso dan es krim vanila.', '35'], ['Sparkling Yuzu', 'Soda citrus yang menyegarkan.', '29'], ['Strawberry Soda', 'Soda dingin dengan stroberi.', '28'],
  ['Mango Smoothie', 'Mangga manis dan yoghurt.', '34'], ['Berry Smoothie', 'Campuran beri dan pisang.', '35'], ['Air Mineral', 'Dingin atau suhu ruang.', '10'], ['Extra Shot', 'Tambahkan satu shot espreso.', '8'], ['Babycino', 'Susu hangat untuk si kecil.', '18']
];
const foods = [
  ['Croissant Butter', 'Hangat, renyah, baru dipanggang.', '27'], ['Pain au Chocolat', 'Croissant isi cokelat leleh.', '30'], ['Toast Jamur', 'Roti panggang dan jamur creamy.', '38'], ['Avocado Toast', 'Alpukat, telur, dan roti sourdough.', '42'], ['Egg Mayo Toast', 'Telur creamy dan daun segar.', '35'],
  ['Banana Bread', 'Lembut dengan karamel asin.', '25'], ['Carrot Cake', 'Wortel, rempah, dan krim keju.', '32'], ['Chocolate Cake', 'Cokelat gelap yang lumer.', '34'], ['Lemon Loaf', 'Asam segar dan manis seimbang.', '28'], ['Cookies Butter', 'Tiga kukis butter renyah.', '22'],
  ['Pasta Aglio Olio', 'Pasta bawang putih dan cabai.', '45'], ['Mac & Cheese', 'Pasta panggang super creamy.', '48'], ['Chicken Sandwich', 'Ayam panggang dan selada segar.', '43'], ['Beef Burger', 'Daging sapi, keju, dan kentang.', '55'], ['Chicken Katsu Bowl', 'Nasi hangat dan katsu renyah.', '52'],
  ['Nasi Goreng Kafe', 'Nasi goreng rumahan penuh rasa.', '42'], ['French Fries', 'Kentang goreng dan saus spesial.', '25'], ['Onion Rings', 'Bawang renyah dengan dip creamy.', '27'], ['Salad Garden', 'Sayur segar dan dressing jeruk.', '35'], ['Pancake Madu', 'Pancake hangat, madu, dan buah.', '38']
];
const renderMenu = (selector, items, category) => {
  const panel = document.querySelector(selector);
  if (!panel) return;
  panel.innerHTML = items.map(([name, description, price], index) => {
    const imageUrl = catPhotos[(index + (category === 'drink' ? 0 : 2)) % catPhotos.length];
    return `<article class="menu-item"><img src="${imageUrl}" alt="${name}" loading="lazy"><div><span>${String(index + 1).padStart(2, '0')}</span><h3>${name}</h3><p>${description}</p><b>Rp${price}k</b></div></article>`;
  }).join('');
};
renderMenu('#drinks-panel', drinks, 'drink');
renderMenu('#food-panel', foods, 'food');

document.querySelectorAll('.whatsapp-link').forEach((link) => {
  const message = link.dataset.message || 'Halo, saya ingin membuat pesanan.';
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

const menuTabs = [...document.querySelectorAll('.menu-tab')];
const menuPanels = [...document.querySelectorAll('.menu-panel')];
const menuTrack = document.querySelector('.menu-track');
const setMenuPanel = (index) => {
  menuTabs.forEach((tab, tabIndex) => {
    const active = tabIndex === index;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  menuPanels.forEach((panel, panelIndex) => {
    const active = panelIndex === index;
    panel.hidden = false;
    panel.classList.toggle('active', active);
    panel.setAttribute('aria-hidden', String(!active));
  });
  menuTrack?.style.setProperty('--menu-position', `${index * -100}%`);
};

menuTabs.forEach((tab, index) => tab.addEventListener('click', () => setMenuPanel(index)));
setMenuPanel(0);

let touchStartX = 0;
menuTrack?.addEventListener('touchstart', (event) => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
menuTrack?.addEventListener('touchend', (event) => {
  const distance = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(distance) > 45) setMenuPanel(distance < 0 ? 1 : 0);
}, { passive: true });

document.querySelector('#year').textContent = new Date().getFullYear();
