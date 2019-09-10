export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Первая книга',
            author: 'Петр Петрович',
            price: 33,
            imgSrc: 'http://placehold.jp/500x500.png'
        },
        {
            id: 2,
            title: 'Вторая книга',
            author: 'Иван Иванов',
            price: 44,
            imgSrc: 'http://placehold.jp/500x500.png'
        }
    ];
    getBooks() {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(this.data);
            }, 1000);
        });
    }
}