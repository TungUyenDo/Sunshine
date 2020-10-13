$('.sidebar_toggler').click(function () {
    $('.mini-sidebar').hasClass('active')
        ? $('.mini-sidebar').removeClass('active')
        : $('.mini-sidebar').addClass('active')

    $('.sidebar_toggler').hasClass('active')
        ? $('.sidebar_toggler').removeClass('active')
        : $('.sidebar_toggler').addClass('active')
})

// slide bar hidden when scroll
function hideSidebarWhenScroll() {
    var windowWidth = $(window).width();
    $(window).resize(function () {
        var windowWidth = $(window).width();
        if (windowWidth < 1200) {
            $(".main_wapper").addClass('mini-sidebar');
        } else {
            $(".main_wapper").removeClass('mini-sidebar');
            $(".mini-sidebar").removeClass('active');
            $(".main_wapper").removeClass('mini-sidebar')
        }
    })
    if (windowWidth < 1200) {
        $(".main_wapper").addClass('mini-sidebar');
    }
}
$(window).ready(function () {
    hideSidebarWhenScroll();
    $(".js-datepicker").datepicker();
});


$(document).on('click', '.toggle_password', function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $(".input_password");
    input.attr('type') === 'password' ? input.attr('type', 'text') : input.attr('type', 'password')
});

$(".check_circle").click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
    } else {
        $(this).addClass('active');
    }
});

$(".detect_content .skip_list").click(function () {

    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        $(this).closest('.detect_content').removeClass('active')
        $('.detect_content__sidebar_open').removeClass('active')
    } else {
        $(this).addClass('active')
        $(this).closest('.detect_content').addClass('active');
        $('.detect_content__sidebar_open').addClass('active')
    }

});

$(".detect_content__sidebar_open").click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        $('.detect_content').removeClass('active');
        $(".detect_content .skip_list").removeClass('active');
    } else {
        $(this).addClass('active')
        $('.detect_content').addClass('active');
        $(".detect_content .skip_list").addClass('active');
    }
});

$(".icon_modal_edit").click(function () {

    var name = $('#inputCameraName').val();
    $("#nameCamera").text(name);

    $('.modal-body').find('.title_model').addClass('showEdit');
    $('.edit_name_camera').addClass('active');

});

$(".icon_yes").click(function () {
    var name = $('#inputCameraName').val();
    $("#nameCamera").text(name);

    $('.modal-body').find('.title_model').removeClass('showEdit');
    $('.edit_name_camera').removeClass('active');
});

$(".icon_no").click(function () {
    $('.modal-body').find('.title_model').removeClass('showEdit');
    $('.edit_name_camera').removeClass('active');
});

$('.sidebar__heading-text').click(function () {
    $('.sidebar__heading-text').removeClass('active')
    $('.sidebar__item .nav').removeClass('show')
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).closest('.has_dropdown').find('.collapse').removeClass('show')
    } else {
        $(this).addClass('active');
        $(this).closest('.has_dropdown').find('.collapse').addClass('show')
    }
})

$(".user").click(function (e) {
    $(".user__actions").hasClass('active') 
    ? $(".user__actions").removeClass('active') 
    : $(".user__actions").addClass('active')
    e.stopPropagation()
})

$(document).ready(function() {
    $(".user__actions").removeClass('active')
})