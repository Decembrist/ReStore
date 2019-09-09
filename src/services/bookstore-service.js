export default class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Первая книга',
                author: 'Петр Петрович'
            },
            {
                id: 2,
                title: 'Вторая книга',
                author: 'Иван Иванов'
            }
        ];
    }
}