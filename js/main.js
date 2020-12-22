window.onload = function () {
    setTimeout(logo, 1000);
    setTimeout(tap, 1000);
    setTimeout(social, 1000);
    setTimeout(media, 1000);
    setTimeout(indi, 1000);
    setTimeout(content, 1500);
    setTimeout(img, 1500);
    setTimeout(page_nav, 1500);
    setTimeout(about_main, 1500);
    setTimeout(lavender_main, 1500);
    setTimeout(shop, 1500);
};

function logo() {
    var h = document.querySelector("#logo h1");
    h.style.opacity = "1";
}

function tap() {
    var l = document.querySelectorAll("#tap li");
    var i;
    for (i = 0; i < l.length; i++) {
        l[i].style.opacity = "1";
        l[i].style.transform = "translate(0)";
    }
}
function social() {
    var l = document.querySelectorAll("#social li");
    var i;
    for (i = 0; i < l.length; i++) {
        l[i].style.opacity = "1";
        l[i].style.transform = "translate(0)";
    }
}

function media() {
    var l = document.querySelectorAll("#media li");
    var i;
    for (i = 0; i < l.length; i++) {
        l[i].style.opacity = "1";
        l[i].style.transform = "translate(0)";
    }
}

function indi() {
    var l = document.querySelectorAll("#indi li");
    var i;
    for (i = 0; i < l.length; i++) {
        l[i].style.opacity = "1";
        l[i].style.transform = "translate(0)";
    }
}

function content() {
    var he = document.querySelector("#content h1");
    he.style.opacity = "1";
    he.style.transform = "translate(0)";

    var p = document.querySelector("#content p");
    p.style.opacity = "1";
    p.style.transform = "translate(0)";

    var b = document.querySelector("#content button");
    b.style.opacity = "1";
    b.style.transform = "translate(0)";
}
function about_main() {
    var t = document.querySelector("#about_main h1");
    t.style.opacity = "1";
    t.style.transform = "translate(0)";

    var pt = document.querySelector("#about_main p");
    pt.style.opacity = "1";
    pt.style.transform = "translate(0)";
}
function lavender_main() {
    var t = document.querySelector("#lavender_main h1");
    t.style.opacity = "1";
    t.style.transform = "translate(0)";

    var pt = document.querySelector("#lavender_main p");
    pt.style.opacity = "1";
    pt.style.transform = "translate(0)";
}
function img() {
    var im = document.querySelector("#img");
    im.style.opacity = "1";
    im.style.transform = "translate(0)";
}

function page_nav() {
    var a = document.querySelector("#page_nav");
    a.style.opacity = "1";
    a.style.transform = "translate(0)";
}
function shop() {
    var im = document.querySelector("#shop");
    im.style.opacity = "1";
    im.style.transform = "translate(0)";
}
