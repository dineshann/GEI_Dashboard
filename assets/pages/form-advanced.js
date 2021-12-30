! function (t) {
    "use strict";
    var e = function () {};
    e.prototype.init = function () {
        jQuery("#datepicker").datepicker(), jQuery("#datepicker-inline").datepicker(), jQuery("#datepicker-multiple").datepicker({
            numberOfMonths: 3,
            showButtonPanel: !0
        }), jQuery("#datepicker").datepicker(), jQuery("#datepicker-autoclose").datepicker({
            autoclose: !0,
            todayHighlight: !0
        }), jQuery("#datepicker-multiple-date").datepicker({
            format: "mm/dd/yyyy",
            clearBtn: !0,
            multidate: !0,
            multidateSeparator: ","
        }), jQuery("#date-range").datepicker({
            toggleActive: !0
        })
    }, t.AdvancedForm = new e, t.AdvancedForm.Constructor = e
}(window.jQuery),
function (t) {
    "use strict";
    window.jQuery.AdvancedForm.init()
}();
