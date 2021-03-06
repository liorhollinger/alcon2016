'use strict';

angular.module('myApp.contact', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'ContactCtrl as vm'
        });
    }])

    .controller('ContactCtrl', ['$rootScope',function ($rootScope) {

        if (window.innerWidth >= 700) {
            var elelist = document.getElementsByTagName("input");
            elelist[1].focus();
        }


        document.body.scrollTop = document.documentElement.scrollTop = 0;

        //if($rootScope.langKey === "en"){
        //    document.querySelector(".form-inputs").style.paddingLeft =  "0";
        //    document.querySelector(".form-inputs").style.paddingRight =  "2em";
        //    console.log("sdfsdfsdf");
        //}




        $(function () {

            // Get the form.
            var form = $('#ajax-contact');

            // Get the messages div.
            var formMessages = $('#form-messages');

            // Set up an event listener for the contact form.
            $(form).submit(function (e) {
                // Stop the browser from submitting the form.
                e.preventDefault();

                // Serialize the form data.
                var formData = $(form).serialize();

                // Submit the form using AJAX.
                $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                    .done(function (response) {
                        // Make sure that the formMessages div has the 'success' class.
                        $(formMessages).removeClass('error');
                        $(formMessages).addClass('success');

                        // Set the message text.
                        $(formMessages).text(response);

                        // Clear the form.
                        $('#tel').val('');
                        $('#name').val('');
                        $('#email').val('');
                        $('#message').val('');

                    })
                    .fail(function (data) {


                        // Make sure that the formMessages div has the 'error' class.
                        $(formMessages).removeClass('success');
                        $(formMessages).addClass('error');

                        // Set the message text.
                        if (data.responseText !== '') {
                            $(formMessages).text(data.responseText);
                        } else {
                            $(formMessages).text('צר לנו אך עקב תקלה הודעתך לא נשלחה');
                        }
                    });

                // hide the form and show the success message.
                $(".formCon").hide();
                $(".message-success").show();
            });
        });


    }]);