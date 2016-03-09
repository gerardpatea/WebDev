(function () {



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

    var $icon = $("#sidebarToggle i.fa");

    $("#sidebarToggle").on("click", function () {

        $sideBarAndWrapper.toggleClass("hide-sidebar");

        if ($sideBarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa fa-angle-left");
            $icon.addClass("fa fa-angle-right");
        }
        else {
            $icon.removeClass("fa fa-angle-right");
            $icon.addClass("fa fa-angle-left");
        }
    });




})();