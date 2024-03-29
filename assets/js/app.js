! function (t) {
    "use strict";
    var e = function () {
        this.$body = t("body"), this.$wrapper = t("#wrapper"), this.$btnFullScreen = t("#btn-fullscreen"), this.$leftMenuButton = t(".button-menu-mobile"), this.$menuItem = t(".has_sub > a")
    };
    e.prototype.intSlimscrollmenu = function () {
        t(".slimscroll-menu").slimscroll({
            height: "auto",
            position: "right",
            size: "5px",
            color: "#9ea5ab",
            wheelStep: 5,
            touchScrollStep: 50
        })
    }, e.prototype.initSlimscroll = function () {
        t(".slimscroll").slimscroll({
            height: "auto",
            position: "right",
            size: "5px",
            color: "#9ea5ab",
            touchScrollStep: 50
        })
    }, e.prototype.initMetisMenu = function () {
        t("#side-menu").metisMenu()
    }, e.prototype.initLeftMenuCollapse = function () {
        t(".button-menu-mobile").on("click", function (e) {
            e.preventDefault(), t("body").toggleClass("enlarged")
        })
    }, e.prototype.initEnlarge = function () {
        t(window).width() < 1025 ? t("body").addClass("enlarged") : t("body").removeClass("enlarged")
    }, e.prototype.initActiveMenu = function () {
        t("#sidebar-menu a").each(function () {
            var e = window.location.href.split(/[?#]/)[0];
            this.href == e && (t(this).addClass("active"), t(this).parent().addClass("active"), t(this).parent().parent().addClass("in"), t(this).parent().parent().prev().addClass("active"), t(this).parent().parent().parent().addClass("active"), t(this).parent().parent().parent().parent().addClass("in"), t(this).parent().parent().parent().parent().parent().addClass("active"))
        })
    }, e.prototype.initComponents = function () {
        t('[data-toggle="tooltip"]').tooltip(), t('[data-toggle="popover"]').popover()
    }, e.prototype.initFullScreen = function () {
        this.$btnFullScreen.on("click", function (e) {
            e.preventDefault(), document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        })
    }, e.prototype.init = function () {
        this.intSlimscrollmenu(), this.initSlimscroll(), this.initMetisMenu(), this.initLeftMenuCollapse(), this.initEnlarge(), this.initActiveMenu(), this.initComponents(), this.initFullScreen(), Waves.init()
    }, t.MainApp = new e, t.MainApp.Constructor = e
}(window.jQuery),
function (e) {
    "use strict";
    window.jQuery.MainApp.init()
}();


// Custom
$(document).ready(function(){
    // Checkbox - Same as Billing address for Shipping
    $(".shippingAddress").hide();
    $("#billingaddress").click(function() {
        if($(this).is(":checked")) {
            $(".shippingAddress").hide();
            $(".billingAddress").show();
        } else {
            $(".shippingAddress").show();
            $(".billingAddress").hide();
        }
    });
    
    // Show History - Collapsed
    $(".his-body").hide();
    $(document).on('click', '.his-card', function(e){
        var $this = $(this);
        if(!$this.hasClass('his-collapsed')) {
            $this.parents('.card').find('.his-body').slideUp();
            $this.addClass('his-collapsed');
            $this.find('i').removeClass('icofont-rounded-up').addClass('icofont-rounded-down');
            
        } else {
            $this.parents('.card').find('.his-body').slideDown();
            $this.removeClass('his-collapsed');
            $this.find('i').removeClass('icofont-rounded-down').addClass('icofont-rounded-up');
            
        }
    });

    // Landed Cost Hid and Show section
    $(".landed-cost").hide();
    // Show
    $("#landedCost").click(function() {
        $(".landed-cost").show();
        $("#landedCost").hide();
    });
    // hide 
    $(".landed-cost-remove").click(function(){
        $(".landed-cost").hide();
        $("#landedCost").show();
    });
});

// File Upload
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}