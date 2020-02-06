var PROVIDER = (function(){
    var _allData = {};
    var currentPage = "";
    var _getData = function(callback){
            $.getJSON("../data/data.json", function(data){
                // this is when it has completed
                // console.log('success', data);
            }).fail(function(error){
                // console.log('error', error.responseText)
        
            }).done(function(data){
                // console.log('done', data.MainNav);
                _allData = data;
                callback();
            })
    };

    var _getMainNav = function(){

        return _allData.MainNav;
        
    }

    var _getPageContent = function(nameOfPage){
        
        var content = "";

        // console.log('getPageContent ' + nameOfPage);

        $.each(_allData.Pages, function(idx, page){
            if(nameOfPage === page.pageName){
                // console.log("Get page content match")
                content = page.content;
                currentPage = page.pageName;
            }
        });

        return content;
    }

    var _getCurrentPageName = function(){
        return currentPage;
    }

    return {
        getData: _getData,
        getMainNav: _getMainNav,
        getPageContent : _getPageContent,
        getCurrentPageName : _getCurrentPageName
    }
})();