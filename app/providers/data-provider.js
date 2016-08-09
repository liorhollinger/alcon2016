'use strict';

angular.module('myApp')


    .factory('DataFactory', ['$sce','$rootScope', function ($sce,$rootScope) {

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
                id: 'sarona',
                name: 'SARONA',
                developer: 'Azrieli_co',
                architects: 'DavidAzrieleArchMosheTzurArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
            }, {
                id: 'amot',
                name: 'AMOT',
                developer: 'AmotInvestmentsLtd',
                architects: 'MosheTzurArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
            },
            {
                id: 'platinumTower',
                name: 'PLATINUMTOWER',
                developer: 'AmotInvestmentsLtd',
                architects: 'Lea Rubanenko Arch.',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg']
            },
            {
                id: 'azrieliSquerTower',
                name: 'azrieliSquerTower',
                developer: 'Azrieli_co',
                architects: 'DavidAzrieliArchMooreYaskySivanArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
            },
            {
                id: 'quiryatHamemshala',
                name: 'quiryatHamemshala',
                developer: 'AfricaMinrav',
                architects: 'BenpelegArchZafrirGananiArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg']
            },
            {
                id: 'discountTower',
                name: 'discountTower',
                developer: 'LevinsteinCo',
                architects: 'MooreYaskySivanArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
            },
            {
                id: 'levinsteinTower',
                name: 'levinsteinTower',
                developer: 'LevinsteinCo',
                architects: 'RapaportArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg']
            },
            {
                id: 'museumTower',
                name: 'museumTower',
                developer: 'MigdalLtd',
                architects: 'ZviGabaiArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
            },
            {
                id: 'shoftimTower',
                name: 'shoftimTower',
                developer: 'Gindi',
                architects: 'RaniZissArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg']
            },
            {
                id: 'veredTower',
                name: 'veredTower',
                developer: 'IsralomPropertiesLtd',
                architects: 'BenpelegArchZafrirGananiArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
            },
            {
                id: 'concordTower',
                name: 'concordTower',
                developer: 'AfricaIsrael',
                architects: 'MooreYaskySivanArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg']
            },
            {
                id: 'azrieliCenterHolon',
                name: 'azrieliCenterHolon',
                developer: 'Azrieli_co',
                architects: 'DavidAzrieleArchMosheTzurArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
            },
            {
                id: 'petahTikvaTower',
                name: 'petahTikvaTower',
                developer: 'MigdalInsuranceLtd',
                architects: 'GabaiArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
            },
            {
                id: 'tamarPark',
                name: 'tamarPark',
                developer: 'Ruhrberg',
                architects: 'BenpelegArchZafrirGananiArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
            },
            {
                id: 'yesPlanet',
                name: 'yesPlanet',
                developer: 'IsraelTheatersLtd',
                architects: 'MooreYaskySivanArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg']
            },
            {
                id: 'cityGate',
                name: 'cityGate',
                developer: 'GoodFortuneLtd',
                architects: 'PelegArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
            },
            {
                id: 'tradeTower',
                name: 'tradeTower',
                developer: 'AtblismntWanageLtd',
                architects: 'MooreYaskySivanArch',
                imgs: ['1.jpg']
            },
            {
                id: 'sapTower',
                name: 'sapTower',
                developer: 'SAP',
                architects: 'RubinArch:',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
            },
            {
                id: 'twinTowers',
                name: 'twinTowers',
                developer: 'TwinTowersLtd',
                architects: 'MooreYaskySivanArch',
                imgs: ['1.jpg', '2.jpg']
            },
            {
                id: 'mercury',
                name: 'mercury',
                developer: 'MercuryCo',
                architects: 'MannShinarArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
            },
            {
                id: 'azorimPark',
                name: 'azorimPark',
                developer: 'BritichCo',
                architects: 'RapaportArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
            },
            {
                id: 'ashdar2000',
                name: 'ashdar2000',
                developer: 'AshtromGroupLtd',
                architects: 'FintziShmuelRava:',
                imgs: ['1.jpg', '2.jpg', '3.jpg']
            },
            {
                id: 'azrieliModin',
                name: 'azrieliModin',
                developer: 'Azrieli_co',
                architects: 'SafadieArchitects',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
            },
            {
                id: 'azrieliOrYehuda',
                name: 'azrieliOrYehuda',
                developer: 'EllaGroupInvestmentsLtd',
                architects: 'MosheKirshon',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
            },
            {
                id: 'azrieliAkko',
                name: 'azrieliAkko',
                developer: 'Azrieli_co',
                architects: 'AzrieliTzamireOko',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
            },
            {
                id: 'azrieliMallAta',
                name: 'azrieliMallAta',
                developer: 'Azrieli_co',
                architects: 'AzrieliTzamireOko',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
            },
            {
                id: 'azrieliRamla',
                name: 'azrieliRamla',
                developer: 'Azrieli_co',
                architects: 'YasharArch',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
            }



        ];


        var techs = [
            {
                id: 1,
                name: 'ALC10000',
                imgs: [$sce.trustAsResourceUrl('https://www.youtube.com/embed/5paSQnG3fPY?modestbranding=1&autohide=1&showinfo=0'), 'R_fragment.jpg', 's_fragment.jpg', 's_fragment_33cm.JPG', 's_wall.jpg', 'z_fragment.jpg'],
                pdf: '10000C.pdf'
            }, {
                id: 2,
                name: 'ALC500',
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
            },
            {
                id: 3,
                name: 'ALC1170',
                imgs: ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG'],
                pdf: 'alc_1170.pdf'
            },
            {
                id: 4,
                name: 'ALC4000',
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
            },
            {
                id: 5,
                name: 'ALC9200',
                imgs: ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.JPG'],
                pdf: 'ALC_9200.pdf'
            },
            {
                id: 6,
                name: 'ALC9000',
                imgs: ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.JPG', '8.JPG', '9.JPG'],
                pdf: 'ALC_9000.pdf'
            },
            {
                id: 7,
                name: 'ALC7000',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg'],
                pdf: 'ALC_7000.pdf'
            },
            {
                id: 8,
                name: 'ALC9900',
                imgs: ['1.jpg', '2.jpg', '3.jpg'],
                pdf: ''
            },
            {
                id: 9,
                name: 'ALC8000',
                imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'],
                pdf: ''
            }
        ];


        return {
            getProjs: function () {
               return projs
            },
            getProj: function (id) {
                var projects = projs;

                var filteredProjs = projects.filter(function (proj) {
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