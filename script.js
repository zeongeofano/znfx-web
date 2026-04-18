// Simulasi data berita otomatis
const newsData = [
    { type: 'HIGH IMPACT', title: 'US Core CPI (MoM)', desc: 'Volatilitas tinggi diperkirakan pada XAUUSD.' },
    { type: 'MARKET', title: 'DXY Strength', desc: 'Indeks Dollar menguat, menekan harga emas.' },
    { type: 'SYSTEM', title: 'ZNFX Update', desc: 'Dashboard v1.0 kini mendukung real-time RSS.' }
];

const container = document.getElementById('news-container');
container.innerHTML = ''; // Hapus loading teks

newsData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'news-item';
    div.innerHTML = `
        <small style="color: #4A6FA5; font-weight: bold;">${item.type}</small><br>
        <strong>${item.title}</strong> - ${item.desc}
    `;
    container.appendChild(div);
});
