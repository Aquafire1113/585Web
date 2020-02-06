



function initNav(){
    $("a").click(function(e){
        var currentPage = PROVIDER.getCurrentPageName();
        var btnID = e.currentTarget.id;
        TODD_UTILITY.trace("initNav", currentPage);
        if(currentPage != btnID){
            loadContent(btnID);
        }
    })
}

function loadContent(nameOfPage){
    // console.log('loadContent' + nameOfPage);
    var pageContent = PROVIDER.getPageContent(nameOfPage);
    // console.log("loadContent " + pageContent)

    $(".content").html(pageContent);

    initNav();
}

function populateNav(navArray){

    var nav = PROVIDER.getMainNav();

    $.each(nav, function(idx, link){
        $("nav").append(`<a id="${link.path}" href="#">${link.link}</a>`);
    })

    loadContent("home");
}

function dataIsLoaded(){
    populateNav();
}

$(document).ready(function(){
    PROVIDER.getData(dataIsLoaded);
})