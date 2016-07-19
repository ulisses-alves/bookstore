describe('HomeCtrl', function () {
  var expect = chai.expect
  var stub = sinon.stub
  var spy = sinon.spy
  var $controller;
  var scope, Books

  beforeEach(module('bookstore.home'))

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_
  }))

  beforeEach(function () {
    scope = {}
    Books = {
      query: stub()
    }
  })

  describe('$scope.books', function () {
    it('query for books', function () {
      var stubBooks = []

      Books.query.returns(stubBooks)

      var ctrl = $controller('HomeCtrl', {
        $scope: scope,
        Books: Books
      })

      expect(Books.query.calledOnce).to.be.true
      expect(scope.books).to.equal(stubBooks)
    })
  })

  describe('$scope.search()', function () {
    var stubBooks

    beforeEach(function () {
      stubBooks = {
        $cancelRequest: spy()
      }

      Books.query.returns(stubBooks)

      $controller('HomeCtrl', {
        $scope: scope,
        Books: Books
      })
    })

    it('should cancel current query', function () {
      scope.search()
      expect(stubBooks.$cancelRequest.calledOnce).to.be.true
    })

    it('should query for search text', function () {
      scope.searchText = 'lorem ipsum'
      scope.search()

      expect(Books.query.calledWith({
        q: scope.searchText
      })).to.be.true
    })

    it('should use default query when no search text', function () {
      scope.search()

      expect(Books.query.calledWith({
        q: '.'
      })).to.be.true

    })
  })
})
