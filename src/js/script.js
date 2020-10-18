var MainScript = (function () {
    var self = this;
    var REX_IS_NUMBER = new RegExp('^[0-9]*$');
    var REX_LOWERCASE = new RegExp('(?=.*[a-z])');
    var REX_UPPERCASE = new RegExp('(?=.*[A-Z])');
    var REX_NUMBER = new RegExp('(?=.*[0-9])');
    var REX_SPECIAL = new RegExp('(?=.[!@#\$%\^&])');
    var REX_INTERGER = new RegExp('^[0-9]*$');
    var REX_PHONE = new RegExp('^(0|84)[0-9]*$');
    var REX_EMAIL = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var REX_URL = new RegExp(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i);

    var _init = function () {
        self.PopupValidateForm();
        self.Block1ValidateForm();
        self.Block5ValidateForm();
        self.Block2Slider();
        self.Block8Slider();
        self.Block6Slider();
        self.Menu();
        self.OpenMenu();
    }
    var _resize = function () { }

    this.PopupValidateForm = function () {
        $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
            $(".block6__slider").slick("resize");
        })
    }

    this.PopupValidateForm = function () {
        var form = [{
            name: '.PopupName',
            validators: ['required']
        }, {
            name: '.PopupPhone',
            validators: ['required', 'isNumber', 'minLength', 'maxLength'],
            minLength: 10,
            maxLength: 10,
        }, {
            name: '.PopupEmail',
            validators: ['required']
        }, {
            name: '.PopupNote',
            validators: []
        }]
        var $submit = ".popup__button button";
        validateForm($submit, form);
    }

    this.Block1ValidateForm = function () {
        var form = [{
            name: '.block1Name',
            validators: ['required']
        }, {
            name: '.block1Phone',
            validators: ['required', 'isNumber', 'minLength', 'maxLength'],
            minLength: 10,
            maxLength: 10,
        }, {
            name: '.block1Email',
            validators: ['required']
        }, {
            name: '.block1Note',
            validators: []
        }]
        var $submit = ".block1__form-button button";
        validateForm($submit, form);
    }

    this.Block5ValidateForm = function () {
        var form = [{
            name: '.block5Name',
            validators: ['required'],
        }, {
            name: '.block5Phone',
            validators: ['required', 'isNumber', 'minLength', 'maxLength'],
            minLength: 10,
            maxLength: 10,
        }, {
            name: '.block5Email',
            validators: ['required']
        }];
        var $submit = '.block5__button button';
        validateForm($submit, form);
    }

    this.Block2Slider = function () {
        if ($(".block2__slider").length === 0) {
            return false
        }

        $(".block2__slider").slick({
            arrows: true,
            dots: false,
            autoplay: false,
            autoplaySpeed: 3000
        });
    }

    this.Block8Slider = function () {
        if ($(".block8__slider").length === 0) {
            return false
        }

        $(".block8__slider").slick({
            arrows: true,
            dots: false,
            autoplay: false,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    }

    this.Block6Slider = function () {
        if ($(".block6__slider").length === 0) {
            return false
        }

        $(".block6__slider").slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }

    this.Menu = function () {
        $('.menu__absolute a').click(function (e) {
            e.preventDefault();

            $('.menu__absolute a').removeClass('active');
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
            } else {
                $(this).addClass('active')
            }

            goToByScroll($(this).attr('link'));

            let name = $(this).attr('name');
            $('.menu__dots_text').text(name)

        })


        $('.menu__dots_circle a').click(function (e) {
            e.preventDefault();

            $('.menu__dots_circle a').removeClass('active');
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
            } else {
                $(this).addClass('active')
            }

            $('.menu__absolute a').removeClass('active');
            $('.menu__absolute a[link="' + $(this).attr('link') + '"]').addClass('active')

            goToByScroll($(this).attr('link'));

            let name = $(this).attr('name');
            $('.menu__dots_text').text(name)

        })

        function goToByScroll(echo) {
            $('html,body').animate({
                scrollTop: $("." + echo).offset().top - 50
            }, 'slow');
        }
    }

    this.OpenMenu = function () {
        $('.menu__text').click(function () {
            if ($('.menu__text_toggle').hasClass('active')) {
                $('.menu__text_toggle').removeClass('active')
                $('.menu__absolute').removeClass('active')
            } else {
                $('.menu__text_toggle').addClass('active')
                $('.menu__absolute').addClass('active')
            }
        })
    }
    /**
     * Validate form
     * @param {{name,validators}[]} form
     */
    function isValidForm(form) {
        isValid = true;

        form.forEach(function (input) {
            var value = $(input.name).val();
            input.validators.forEach(function (validator) {
                switch (validator) {
                    case 'required':
                        if (value === '') {
                            isValid = false;
                        }
                        break;
                    case 'isNumber':
                        if (REX_IS_NUMBER.test(value) === false) {
                            isValid = false;
                        }
                        break;
                    case 'min':
                        if (+value < input.min) {
                            isValid = false;
                        }
                        break;
                    case 'max':
                        if (+value > input.max) {
                            isValid = false;
                        }
                        break;
                    case 'minLength':
                        if (value.length < input.minLength) {
                            isValid = false;
                        }
                        break;
                    case 'maxLength':
                        if (value.length > input.maxLength) {
                            isValid = false;
                        }
                        break;
                    case 'email':
                        if (REX_EMAIL.test(value) === false) {
                            isValid = false;
                        }
                        break;
                }
            });
        });

        return isValid;
    }

    function validateForm($submit, form) {

        function updateView() {
            $($submit).attr("disabled", !isValidForm(form));
        }

        var arrElement = [];
        form.forEach(function (element) {
            arrElement.push(element.name);
        });

        $(arrElement.join(",")).on("change keyup", function () {
            updateView();
        });
        updateView();
    }

    return {
        init: _init,
        resize: _resize
    }
});

var mainScript = new MainScript();

$(window).on("load", function () {
    mainScript.init();
    new WOW().init();
});

$(window).on("resize", function () {
    mainScript.resize();
});

var sections = $('section')
    , nav = $('.menu__dots_circle')
    , nav_text = $('.menu__absolute')
    , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height - 80,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            nav_text.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            nav_text.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');

            let id = $(this).attr('id');
            let value = $('.menu__dots_circle a[link="' + id + '"]').attr('name')

            $('.menu__dots_text').text(value)

        }
    });
});