let carsInformation = {
    carId: 'bmw116d_1234',
    model: '116',
    yil: 2015,
    renk: 'white',
    servisKayitlari: [
        {
            id: 'bmw116d_1234_1',
            tarih: '30/01/2016',
            km: '13000',
            ucret: '900',
            detay:[
                {
                    id: 'bmw116d_1234_1',
                    aciklama:'Yağ değişim Ücreti',
                    ucret:'300'
                },
                {
                    id: 'bmw116d_1234_1',
                    aciklama:'Filtre değişim Ücreti',
                    ucret:'300'
                },
                {
                    id: 'bmw116d_1234_1',
                    aciklama:'Fren Hidroliği Ücreti',
                    ucret:'300'
                }
            ]
        },
        {
            id: 'bmw116d_1234_2',
            tarih: '10/01/2017',
            km: '28000',
            ucret: '1800',
            detay:[
                {
                    id: 'bmw116d_1234_2',
                    aciklama:'Yağ değişim Ücreti',
                    ucret:'350'
                },
                {
                    id: 'bmw116d_1234_2',
                    aciklama:'Filtre değişim Ücreti',
                    ucret:'350'
                },
                {
                    id: 'bmw116d_1234_2',
                    aciklama:'Fren Hidroliği Ücreti',
                    ucret:'300'
                },
                {
                    id: 'bmw116d_1234_2',
                    aciklama:'Balata Değişim Ücreti',
                    ucret:'800' 
                }
            ]
        },

    ]
}



console.log(carsInformation);
