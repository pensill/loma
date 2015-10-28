/*yandex map*/
var mapAlokom;

ymaps.ready(function(){
    mapAlokom = new ymaps.Map("ya_maps", {
        center: [59.96, 30.46],
        zoom: 15
    });
    var myPlacemark = new ymaps.Placemark([59.96, 30.46]);
    mapAlokom.geoObjects.add(myPlacemark);
});
/*yandex map end*/



$(document).ready(function() {

/*
888888  dP"Yb  88""Yb 8b    d8     Yb    dP    db    88     88 8888b.     db    888888 888888 
88__   dP   Yb 88__dP 88b  d88      Yb  dP    dPYb   88     88  8I  Yb   dPYb     88   88__   
88""   Yb   dP 88"Yb  88YbdP88       YbdP    dP__Yb  88  .o 88  8I  dY  dP__Yb    88   88""   
88      YbodP  88  Yb 88 YY 88        YP    dP""""Yb 88ood8 88 8888Y"  dP""""Yb   88   888888 */
    $('#contact_form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: '* Введите ваше имя'
                    }
                }
            },
             
            email: {
                validators: {
                    notEmpty: {
                        message: 'Введите ваш e-mail'
                    },
                    emailAddress: {
                        message: 'Введите корректный e-mail адресс'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Введите ваш номер телефона'
                    },
                    phone: {
                        country: 'RUS',
                        message: 'Введите верный телефонный номер'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        message:'Введите больше 10 символов сообщения'
                    },
                    notEmpty: {
                        message: 'Введите текст вашего сообщения'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });

/*
888888  dP"Yb  88""Yb 8b    d8     Yb    dP    db    88     88 8888b.     db    888888 888888     888888 88b 88 8888b.  
88__   dP   Yb 88__dP 88b  d88      Yb  dP    dPYb   88     88  8I  Yb   dPYb     88   88__       88__   88Yb88  8I  Yb 
88""   Yb   dP 88"Yb  88YbdP88       YbdP    dP__Yb  88  .o 88  8I  dY  dP__Yb    88   88""       88""   88 Y88  8I  dY 
88      YbodP  88  Yb 88 YY 88        YP    dP""""Yb 88ood8 88 8888Y"  dP""""Yb   88   888888     888888 88  Y8 8888Y"  */

/*mobile menu*/
    $('.hamburger').click(function(){
        $('.main-menu ul').slideToggle();
    });
/*mobile menu end*/

});