'use strict';

angular.module('myApp')


    .factory('DataFactory', ['$sce', function ($sce) {

        var staff = [
            {
                id: 'israelI',
                name: 'ישראל ישראלי',
                about: ' אנחנו מתחדשים כלהזמן אנחנו מתחדשים כלהזמן אנחנו מתחדשים כלהזמן אנחנו מתחדשים כלהזמן אנחנו מתחדשים כלהזמןאנחנו מתחדשים כלהזמן'
            },
            {
                id: 'davidT',
                name: 'דוד תנובה',
                about: ' אנחנו מתחדשים כלהזמן אנחנו מתחדשים כלהזמן אנחנו מתחדשים כלהזמן אנחנו מתחדשים כלהזמן אנחנו מתחדשים כלהזמןאנחנו מתחדשים כלהזמן'

            },
            {
                id: 'meirA',
                name: 'מאיר אבו',
                about: ' אנחנו מתחדשים כלהזמן אנחנו מתחדשים כלהזמן אנחנו מתחדשים כלהזמן אנחנו מתחדשים כלהזמן אנחנו מתחדשים כלהזמןאנחנו מתחדשים כלהזמן'

            }

        ];

        var projs = [
            {
                id: 'platinumTower',
                name: 'מגדל פלטינום',
                developer: 'אמות השקעות בע"מ',
                architects: 'לאה רובננקו אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg']
            },
            {
                id: 'azrieliSquerTower',
                name: 'מגדל עזריאלי מרובע',
                developer: 'קבוצת עזריאלי',
                architects: 'אדריכל דוד עזריאלי, יסקי מור סיון אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
            },
            {
                id: 'quiryatHamemshala',
                name: 'קרית הממשלה',
                developer: 'אפריקה מינרב',
                architects: 'בן פלג אדריכלים, צפריר גנני אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg']
            },
            {
                id: 'discountTower',
                name: 'מגדל דיסקונט',
                developer: 'קבוצת לוינשטיין',
                architects: 'יסקי מור סיון אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
            },
            {
                id: 'levinsteinTower',
                name: 'מגדל לוינשטיין',
                developer: 'קבוצת משולם לוינשטיין',
                architects: 'רפפורט אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg']
            },
            {
                id: 'museumTower',
                name: 'מגדל המוזיאון',
                developer: 'חברת מגדל',
                architects: 'צבי גבאי אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
            },
            {
                id: 'shoftimTower',
                name: 'מגדל השופטים',
                developer: 'גינדי',
                architects: 'רוני זיס אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg']
            },
            {
                id: 'concordTower',
                name: 'מגדל קונקורד',
                developer: 'אפריקה ישראל',
                architects: 'יסקי מור סיון אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg']
            },
            {
                id: 'azrieliCenterHolon',
                name: 'מתחם עזריאלי חולון',
                developer: 'קבוצת עזריאלי',
                architects: 'אדריכל דוד עזריאלי, משהה צור אדריכלים, דוד עזריאלי אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg']
            },
            {
                id: 'petahTikvaTower',
                name: 'בית מגדל פ"ת',
                developer: 'חברת ביטוח מגדל',
                architects: 'גבאי אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
            },
            {
                id: 'tamarPark',
                name: 'פארק תמר',
                developer: 'רורברג השקעות ובניה',
                architects: 'בן פלג אדריכלים, צפריר גנני אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
            },
            {
                id: 'yesPlanet',
                name: 'יס פלאנט',
                developer: 'תיאטראות ישראל',
                architects: 'יסקי מור סיון אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg','15.jpg']
            },
            {
                id: 'cityGate',
                name: 'מגדל שער הסיטי',
                developer: 'מזל וברכה בע"מ',
                architects: 'פלג אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
            },
            {
                id: 'tradeTower',
                name: 'מגדל הטרייד טאוור',
                developer: 'אטבליסמנט ניהול',
                architects: 'יסקי מור סיון אדריכלים',
                imgs: ['1.jpg']
            },
            {
                id: 'sapTower',
                name: 'מגדל שאפ',
                developer: 'קבוצת שאפ',
                architects: 'רובין אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
            },
            {
                id: 'twinTowers',
                name: 'מגדלי התאומים',
                developer: 'מגדלי התאומים בע"מ מגדלי עסקים(אחזקות)בע"מ',
                architects: 'יסקי מור סיון אדריכלים',
                imgs: ['1.jpg','2.jpg']
            },
            {
                id: 'mercury',
                name: 'מרקורי',
                developer: 'מרקורי בע"מ',
                architects: 'מן שנער אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
            },
            {
                id: 'azorimPark',
                name: 'פארק אזורים',
                developer: 'ריט ישראל בע"מ',
                architects: 'רפפורט אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
            },
            {
                id: 'ashdar2000',
                name: 'אשדר 2000',
                developer: 'קבוצת אשטרום',
                architects: 'יהושוע פינצי ושמואל רווה אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg']
            },
            {
                id: 'azrieliAkko',
                name: 'עזריאלי עכו כדור',
                developer: 'קבוצת עזריאלי',
                architects: 'דוד עזריאלי, יגאל צמיר אדריכלים ויעל אוקו אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
            },
            {
                id: 'azrieliMallAta',
                name: 'עזריאלי קירית אתא כדור',
                developer: 'קבוצת עזריאלי',
                architects: 'אד\' דוד עזריאלי, יגאל צמיר, יעל אוקו אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
            },
            {
                id: 'matamHifa',
                name: 'מת"מ חיפה',
                developer: 'חברת גב ים',
                architects: 'משה צור אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg']
            }


        ];


        var techs = [
            {
                id: 1,
                name: 'alc10000',
                imgs: [$sce.trustAsResourceUrl('https://www.youtube.com/embed/5paSQnG3fPY'), 'R_fragment.jpg', 's_fragment.jpg', 's_fragment_33cm.JPG', 's_wall.jpg', 'z_fragment.jpg'],

                pdf: '10000C.pdf'
            }
        ];

        console.log('techs', techs);


        return {
            getProjs: function () {
                return projs;
            },
            getProj: function (id) {
                var filteredProjs = projs.filter(function (proj) {
                    return proj.id === id;
                });
                return filteredProjs[0];
            },
            getTechs: function () {
                return techs;
            },
            getTech: function (id) {
                var filteredProjs = techs.filter(function (tech) {
                    return tech.id === +id;
                });
                return filteredProjs[0];
            },
            getStaff: function () {
                return staff;
            }

        }
    }]);