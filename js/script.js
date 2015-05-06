$(function () {
    // scale font sizes
    $(window).resize(function () {
        setBodyScale();
        adjustLinks();
        imgHeight = $('#team ul li img:visible').eq(0).height();
    });
    var body = $('body'); //Cache this for performance
    var setBodyScale = function () {
        var scaleSource = body.width(),
            scaleFactor = 0.0974296423933727,
            maxScale = 140,
            minScale = 73; //Tweak these values to taste
        var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:
        if (fontSize > maxScale) fontSize = maxScale;
        if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

        $('body').css('font-size', fontSize + '%');
    }
    setBodyScale();

    $('.header div > a').click(function () {
        var which = $(this).attr('href');
        selectHeaderMenuItem(which);
    });

    function selectHeaderMenuItem(which) {
        $('.header a').removeClass('active');
        $('.header a[href=' + which + ']').addClass('active');
    }

    $('.mynavbar div > a').click(function () {
        var which = $(this).attr('href');
        selectNvabarMenuItem(which);
    });

    function selectNvabarMenuItem(which) {
        $('.mynavbar a').css('background', '');
        $('.mynavbar a[href=' + which + ']').css("background", "#dcdcdc");
    }

    $('.cata-group-btn').mouseover(function () {
        var which = $(this).attr('id');
        selectCataGroupItem(which);
    });

    $('.cata-group-btn').mouseout(function () {
        $('.cata-group-btn').removeClass('over-group');
    });

    function selectCataGroupItem(which) {
        $('.cata-group-btn').removeClass('over-group');
        $('#' + which).addClass('over-group');
    }
})


