describe('Service tests - check api definitions', function () {
    //var dataService, $httpBackend;
    var urlBase = 'http://www.techcipher.com/api/';
    var $httpBackend, $rootScope, $service, $dataService;
    // load the service's module
    beforeEach(module('tcApp'));

    beforeEach(inject(function (_dataService_, _$httpBackend_) {
        $dataService = _dataService_;
        $httpBackend = _$httpBackend_;
    }));

    // check to see if it has the expected function
    it('should have an getAllSections function', function () {
        expect(angular.isFunction($dataService.getAllSections)).toBe(true);
    });

    // check to see if it has the expected function
    it('should have an getAllCategories function', function () {
        expect(angular.isFunction($dataService.getAllCategories)).toBe(true);
    });

    // check to see if it has the expected function
    it('should have an getSubCategories function', function () {
        expect(angular.isFunction($dataService.getSubCategories)).toBe(true);
    });

    // check to see if it has the expected function
    it('should have an getSubCategory function', function () {
        expect(angular.isFunction($dataService.getSubCategory)).toBe(true);
    });

    // check to see if it has the expected function
    it('should have an getArticle function', function () {
        expect(angular.isFunction($dataService.getArticle)).toBe(true);
    });
});

describe('Service tests - check api calls', function () {
    //var dataService, $httpBackend;
    var urlBase = 'http://www.techcipher.com/api/';
    var $httpBackend, $rootScope, $service, $dataService;
    // load the service's module
    beforeEach(module('tcApp'));

    beforeEach(inject(function (_dataService_, _$httpBackend_) {
        $dataService = _dataService_;
        $httpBackend = _$httpBackend_;
    }));

    it('should get all sections', function () {
        $httpBackend.when("GET", urlBase + 'section/Home/all').respond([{}, {}, {}]);

        var sections = $dataService.getAllSections();
        sections.success(function (data, status, headers, config) {
            expect(data.length).toBe(3);
        })
        .error(function (data, status, headers, config) {
            var d = data;
        });
        $httpBackend.flush();
    });

    it('should get all categories', function () {
        var sectionID = 1447;
        $httpBackend.when("GET", urlBase + 'category/' + sectionID + '/all').respond([{}, {}]);

        var categories = $dataService.getAllCategories(sectionID);
        categories.success(function (data, status, headers, config) {
            expect(data.length).toBe(2);
        })
        .error(function (data, status, headers, config) {
            var d = data;
        });
        $httpBackend.flush();
    });

    it('should get all subCategories based on category id', function () {
        var categoryid = 21458;
        $httpBackend.when("GET", urlBase + 'category/' + categoryid).respond([{}, {}, {}, {}]);

        var subCategories = $dataService.getSubCategories(categoryid);
        subCategories.success(function (data, status, headers, config) {
            expect(data.length).toBe(4);
        })
        .error(function (data, status, headers, config) {
            var d = data;
        });
        $httpBackend.flush();
    });

    it('should get subcategory based on id', function () {
        var subcategoryid = 624587;
        $httpBackend.when("GET", urlBase + 'subcategory/' + subcategoryid).respond({ id: subcategoryid });

        var subCategories = $dataService.getSubCategory(subcategoryid);
        subCategories.success(function (data, status, headers, config) {
            expect(data.id).toBe(subcategoryid);
        })
        .error(function (data, status, headers, config) {
            var d = data;
        });
        $httpBackend.flush();
    });

    it('should get article based on id', function () {
        var articleid = 14257;
        $httpBackend.when("GET", urlBase + 'article/' + articleid).respond({ id: articleid });

        var article = $dataService.getArticle(articleid);
        article.success(function (data, status, headers, config) {
            expect(data.id).toBe(articleid);
        })
        .error(function (data, status, headers, config) {
            var d = data;
        });
        $httpBackend.flush();
    });
});