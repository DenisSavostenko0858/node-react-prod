import {makeAutoObservable} from 'mobx'

export default class ProductStore{
    constructor(){
        this._types = [
            {id: 1, name:'Свечи'},
            {id: 2, name:'Диффузоры'}
        ];

        this._brand = [
            {id: 1, name:'Gucci'},
            {id: 2, name:'Molecule'}
        ];

        this._product = [
            {id: 1, name:'Свеча Gucci', price:25000, rating:1, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adverti.ru%2Fp-15626.html&psig=AOvVaw3Yp8KkefiDbYcagrerSNlS&ust=1720272255623000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDyotf_j4cDFQAAAAAdAAAAABAE'},
            {id: 2, name:'Диффузор Molecule', price:25000, rating:1, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adverti.ru%2Fp-15626.html&psig=AOvVaw3Yp8KkefiDbYcagrerSNlS&ust=1720272255623000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDyotf_j4cDFQAAAAAdAAAAABAE'},
            {id: 3, name:'Свеча Gucci', price:25000, rating:1, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adverti.ru%2Fp-15626.html&psig=AOvVaw3Yp8KkefiDbYcagrerSNlS&ust=1720272255623000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDyotf_j4cDFQAAAAAdAAAAABAE'},
            {id: 4, name:'Диффузор Molecule', price:25000, rating:1, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adverti.ru%2Fp-15626.html&psig=AOvVaw3Yp8KkefiDbYcagrerSNlS&ust=1720272255623000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDyotf_j4cDFQAAAAAdAAAAABAE'}

        ];
        
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types;
    }

    setBrand(brand){
        this._brand = brand;
    }

    setProduct(product){
        this._product = product;
    }

    setSelectTypes(type){
        this._selectedType = type;
    }

    setSelectBrand(brand){
        this._selectedBrand = brand;
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    setPage(page) {
        this._page = page
    }
    get types(){
        return this._types;
    }

    get brand(){
        return this._brand;
    }

    get product(){
        return this._types;
    }

    get selectedType(){
        return this._selectedType;
    }

    get selectedBrand(){
        return this._selectedBrand;
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}