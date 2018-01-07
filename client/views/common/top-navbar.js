Template.topNavbar.rendered = function(){

    // FIXED TOP NAVBAR OPTION
    // Uncomment this if you want to have fixed top navbar
    // $('body').addClass('fixed-nav');
    // $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
        const localeFromBrowser = window.navigator.userLanguage || window.navigator.language;
        if (localeFromBrowser.match(/ru/) && localStorage.getItem("currentLanguage") == undefined) {
            TAPi18n.setLanguage('ru');
        }
        if (localeFromBrowser.match(/en/) && localStorage.getItem("currentLanguage") == undefined) {
            TAPi18n.setLanguage('en');
        }
        if (typeof(localStorage) !== "undefined" && localStorage.getItem("currentLanguage") != undefined) {
            TAPi18n.setLanguage(localStorage.getItem("currentLanguage"));
        }
};

Template.topNavbar.events({

    // Toggle left navigation
    'click .lang-set': function(event){
        lang = 'undefined';
        $this = $(event.target);
        lang = $this.data("lang");
        TAPi18n.setLanguage(lang);
        localStorage.setItem("currentLanguage", lang);
    },
    'click #navbar-minimalize': function(event){

        event.preventDefault();

        // Toggle special class
        $("body").toggleClass("mini-navbar");

        // Enable smoothly hide/show menu
        if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            $('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(400);
                }, 200);
        } else if ($('body').hasClass('fixed-sidebar')) {
            $('#side-menu').hide();
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(400);
                }, 200);
        } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#side-menu').removeAttr('style');
        }
    },

    // Toggle right sidebar
    'click .right-sidebar-toggle': function(){
        $('#right-sidebar').toggleClass('sidebar-open');
    }
});
