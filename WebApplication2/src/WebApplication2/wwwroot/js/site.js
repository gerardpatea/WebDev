﻿(function () {



    //var ele = $("#username");
    //ele.text("fasi talo");

    //var main = $("#main");

    //main.on("mouseenter", function () {
    //    main.style = "background-color:#888;"
    //});

    //main.on("mouseleave", function () {
    //    main.style = "";
    //});

    //var menuItems = $("ul.menu li a");
    //menuItems.on("click", function () {
    //    var me = $(this);
    //    alert(me.text());
    //});

    var $sideBarAndWrapper = $("#sidebar,#wrapper");

    $("#sidebarToggle").on("click", function () {

        $sideBarAndWrapper.toggleClass("hide-sidebar");

        if ($sideBarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show sidebar");
        }
        else {
            $(this).text("hide sidebar");
        }
    });




})();