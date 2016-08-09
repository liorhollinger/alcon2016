angular.module('myApp')

    .config(function($translateProvider) {
        $translateProvider.translations('en', {
            HEADLINE: 'Hello there, This is my awesome app!',
            INTRO_TEXT: 'And it has i18n support!',
            BUTTON_TEXT_EN: 'english',
            BUTTON_TEXT_DE: 'german'
        })
            .translations('heb', {
                HEADLINE: 'fgdfgdf',
                INTRO_TEXT: 'Und sie untersützt mehrere Sprachen!',
                BUTTON_TEXT_EN: 'englisch',
                BUTTON_TEXT_DE: 'deutsch'
            });
        $translateProvider.preferredLanguage('heb');
    });


