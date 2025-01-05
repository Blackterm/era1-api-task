'use strict';

const { Etkinlik } = require('../../infrastructure/orm/mongoose/mongoose');
const ActivityRepository = require('../../domain/repository/ActivityRepository');
const UID = require('../../application/uid/Uid');
const dateNow = require('../../application/enums/DateEnum');

module.exports = class extends ActivityRepository {

    async getActivities() {
        try {
            return await Etkinlik.find().select('-yorumlar -kisiler');
        } catch (error) {
            throw new Error('Etkinlik sorgusu sırasında hata oluştu');
        }
    };

    async getActivityDetail(id) {
        try {
            return await Etkinlik.findById(id);
        } catch (error) {
            throw new Error('Etkinlik sorgusu sırasında hata oluştu');
        }
    };
    async postAddActivity(ad, tarih, aciklama) {
        const yeniEtkinlik = new Etkinlik({
            ad,
            tarih,
            aciklama,
        });
        try {
            await yeniEtkinlik.save();
        } catch (error) {
            throw new Error('Etkinlik eklenirken hata oluştu');
        }

    };
    async updateActivity(id, ad, tarih, aciklama) {
        try {
            const etkinlik = await Etkinlik.findByIdAndUpdate(id, {
                ad,
                tarih,
                aciklama,
            }, { new: true });
            if (!etkinlik) {
                throw new Error('Etkinlik bulunamadı');
            }
            return etkinlik;
        } catch (error) {
            throw new Error('Etkinlik güncelleme işlemi sırasında hata oluştu');
        }
    };
    async deleteActivity(id) {
        try {
            const etkinlik = await Etkinlik.findByIdAndDelete(id);
            if (!etkinlik) {
                throw new Error('Etkinlik bulunamadı');
            }
            return true;
        } catch (error) {
            throw new Error('Etkinlik silme işlemi sırasında hata oluştu');
        }
    };

    async getComments(id) {

        try {
            const etkinlik = await Etkinlik.findById(id);
            return etkinlik.yorumlar;

        } catch (error) {
            throw new Error('Böyle bir etkinlik bulunamadı');
        }
    };
    async postAddComment(id, yazar, mesaj) {

        try {
            const etkinlik = await Etkinlik.findById(id);
            if (!etkinlik) {
                throw new Error('Böyle bir etkinlik bulunamadı');
            }
            etkinlik.yorumlar.push({ yazar, mesaj });
            await etkinlik.save();
            return true;
        } catch (error) {
            console.log(error);
            throw new Error('Yorum ekleme sırasında hata meydana geldi');
        }
    };

    async postJoinActivity(etkinlikId, ad, soyad, email) {
        try {
            const etkinlik = await Etkinlik.findById(etkinlikId);
            if (!etkinlik) {
                throw new Error('Böyle bir etkinlik bulunamadı');
            }
            etkinlik.kisiler.push({ ad, soyad, email });
            await etkinlik.save();
            return true;
        } catch (error) {
            console.log(error);
            throw new Error('Etkinliğe katılım sırasında hata meydana geldi');
        }
    };

};

