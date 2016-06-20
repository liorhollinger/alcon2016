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
                id: 'ashdar2000',
                name: 'אשדר 2000',
                developer: 'קבוצת אשטרום',
                architects: 'יהושוע פינצי ושמואל רווה אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg']
            },
            {
                id: 'azorimPark',
                name: 'פארק אזורים',
                developer: 'ריט ישראל בע"מ',
                architects: 'רפפורט אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
            },
            {
                id: 'azrieliAkko',
                name: 'עזריאלי עכו כדור',
                developer: 'קבוצת עזריאלי',
                architects: 'דוד עזריאלי, יגאל צמיר אדריכלים ויעל אוקו אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
            },
            {
                id: 'azrieliCenterHolon',
                name: 'מתחם עזריאלי חולון',
                developer: 'קבוצת עזריאלי',
                architects: 'אדריכל דוד עזריאלי, משהה צור אדריכלים, דוד עזריאלי אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg']
            },
            {
                id: 'azrieliMallAta',
                name: 'קניון עזריאלי קרית אתה',
                developer: 'ריט ישראל בע"מ',
                architects: 'רפפורט אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
            },
            {
                id: 'azrieliSquerTower',
                name: 'מגדל עזריאלי מרובע',
                developer: 'קבוצת עזריאלי',
                architects: 'אדריכל דוד עזריאלי, יסקי מור סיון אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
            },
            {
                id: 'cityGate',
                name: 'מגדל שער הסיטי',
                developer: 'מזל וברכה בע"מ',
                architects: 'פלג אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
            },
            {
                id: 'concordTower',
                name: 'מגדל קונקורד',
                developer: 'אפריקה ישראל',
                architects: 'יסקי מור סיון אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg']
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
                id: 'matamHifa',
                name: 'מת"מ חיפה',
                developer: 'חברת גב ים',
                architects: 'משה צור אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg']
            },
            {
                id: 'mercury',
                name: 'מרקורי',
                developer: 'מרקורי בע"מ',
                architects: 'מן שנער אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
            },
            {
                id: 'museumTower',
                name: 'מגדל המוזיאון',
                developer: 'חברת מגדל',
                architects: 'צבי גבאי אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
            },
            {
                id: 'petahTikvaTower',
                name: 'מגדל פתח תקווה',
                developer: 'חברת ביטוח מגדל',
                architects: 'גבאי אדריכלים',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
            }

        ];


        var techs = [
            {
                id: 1,
                name: 'alc10000',
                imgs: ['R_fragment.jpg', 's_fragment.jpg', 's_fragment_33cm.JPG', 's_wall.jpg', 'z_fragment.jpg'],
                pdf: '10000C.pdf'
            },{
                id: 2,
                name: 'alc500',
                imgs: ['alc_500_alum_0000_S.jpg',
                    'alc_500_alum_0001_S.jpg',
                    'alc_500_blue_wood_0000_S.jpg',
                    'alc_500_blue_wood_0001_S.jpg',
                    'alc_500_pattern_wood_0000_S.jpg',
                    'alc_500_pattern_wood_0001_S.jpg',
                    'alc_500_sketch_0001_S.jpg',
                    'alc_500_sketch_0002_S.jpg',
                    'alc_500_white_general_0000.jpg',
                    'alc_500_white_general_0001.jpg',
                    'alc_500_white_general_0002.jpg',
                    'alc_500_white_general_0003.jpg',
                    'alc_500_white_general_0004.jpg',
                    'alc_500_white_general_0005.jpg',
                    'colors_wall_0000.jpg',
                    'colors_wall_0001.jpg',
                    'colors_wall_0002.jpg',
                    'ikea_01.jpg',
                    'ikea_02.jpg'],
                pdf: 'alc_500.pdf'
            },{
                id: 3,
                name: 'alc1170',
                imgs: ['R_fragment.jpg', 's_fragment.jpg', 's_fragment_33cm.JPG', 's_wall.jpg', 'z_fragment.jpg'],
                pdf: 'alc_1170.pdf'
            },{
                id: 4,
                name: 'alc4000',
                imgs: ['ar_reg.jpg',
                    'b_reg.jpg',
                    'e_reg.jpg',
                    'e_sg.jpg',
                    'e_sg_nr.jpg',
                    'e_ssg.jpg',
                    'eb_reg.jpg',
                    'eb_sg.jpg',
                    'eb_sg_nr.jpg',
                    'eb_ssg.jpg',
                    'office.jpg',
                    'office2.jpg',
                    'office3.JPG'],
                pdf: 'alc4000.pdf'
            },{
                id: 5,
                name: 'alc9200',
                imgs: ['R_fragment.jpg', 's_fragment.jpg', 's_fragment_33cm.JPG', 's_wall.jpg', 'z_fragment.jpg'],
                pdf: 'ALC_9200.pdf'
            },{
                id: 6,
                name: 'alc9000',
                imgs: ['R_fragment.jpg', 's_fragment.jpg', 's_fragment_33cm.JPG', 's_wall.jpg', 'z_fragment.jpg'],
                pdf: 'ALC_9000.pdf'
            },{
                id: 7,
                name: 'alc7000',
                imgs: ['R_fragment.jpg', 's_fragment.jpg', 's_fragment_33cm.JPG', 's_wall.jpg', 'z_fragment.jpg'],
                pdf: 'ALC_7000.pdf'
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
                    return tech.name === id;
                });
                return filteredProjs[0];
            },
            getStaff: function () {
                return staff;
            }

        }
    }]);