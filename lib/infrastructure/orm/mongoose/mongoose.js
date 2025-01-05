'use strict';
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// MongoDB bağlantısını başlat
mongoose.connect(process.env.MONGO_URI);

// Bağlantı durumunu dinlemek için olaylar
mongoose.connection.on('connected', () => {
    console.log('MongoDB bağlantısı başarılı!');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB bağlantı hatası:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB bağlantısı kesildi.');
});

// Kapatıldığında bağlantıyı temizle
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Uygulama kapandı, MongoDB bağlantısı kesildi.');
    process.exit(0);
});

// Örnek Model tanımlama
const EtkinlikSchema = new mongoose.Schema({
    ad: String,
    tarih: Date,
    aciklama: String,
    yorumlar: [
        {
            yazar: String,
            mesaj: String,
            tarih: { type: Date, default: Date.now },
        },
    ],
    kisiler: [
        {
            ad: String,
            soyad: String,
            email: String,
        }
    ]
});

const Etkinlik = mongoose.model('Etkinlik', EtkinlikSchema);

module.exports = { Etkinlik };
