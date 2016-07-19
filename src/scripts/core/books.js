angular.module('bookstore.core.books', [])
.factory('Books', function ($resource, settings) {
  function createBookModel(book) {
    var info = book.volumeInfo
    var images = info.imageLinks

    return {
      id: book.id,
      thumbnail: images && images.thumbnail,
      cover: images && (images.large
          || images.medium
          || images.small
          || images.thumbnail),
      title: info.title,
      description: info.description,
      authors: info.authors
    }
  }

  return $resource(settings.api,
    {id: '@id'},
    {
      query: {
        method: 'GET',
        isArray: true,
        params: {
          maxResults: 40,
          q: '.'
        },
        transformResponse: function (data) {
          return angular.fromJson(data).items.map(createBookModel)
        }
      },
      get: {
        method: 'GET',
        transformResponse: function (data) {
          return createBookModel(angular.fromJson(data))
        }
      }
    },
    {cancellable: true}
  );
})
