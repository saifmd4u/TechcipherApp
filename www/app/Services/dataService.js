tcApp.factory('dataService', function ($http) {

    var urlBase = 'http://www.techcipher.com/api/';
    //urlBase = 'http://localhost:51970/api/';
    return {
        getAllSections: function () {
            return $http.get(urlBase + 'section/Home/all');
        },
        getAllCategories: function (sectionID) {
            return $http.get(urlBase + 'category/' + sectionID + '/all');
        },

        getSubCategories: function (categoryid) {
            return $http.get(urlBase + 'category/' + categoryid);
        },

        getSubCategory: function (subcategoryid) {
            return $http.get(urlBase + 'subcategory/' + subcategoryid);
        },

        getArticle: function (articleid) {
            return $http.get(urlBase + 'article/' + articleid);
        }
    }
});