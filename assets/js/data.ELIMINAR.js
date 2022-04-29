// estructura dades
export const products = [
    {
        id: 1,
        name: 'Black Gloria',
        price: 10.5,
        type: 'Cerveses',
        subtype: 'Negres',
        img: 'assets/img/cerveses/Black.webp'
    },
    {
        id: 2,
        name: 'Delirium Gloria',
        price: 12.25,
        type: 'Cerveses',
        subtype: 'Rosses',
        img: 'assets/img/cerveses/Delirium.webp'
    },
    {
        id: 3,
        name: 'Doble Malta Gloria',
        price: 10.75,
        type: 'Cerveses',
        subtype: 'Torrades',
        img: 'assets/img/cerveses/Doble malta.webp'
    },
    {
        id: 4,
        name: 'ECO Gloria',
        price: 5.5,
        type: 'Cerveses',
        subtype: 'IPAs',
        img: 'assets/img/cerveses/ECO.webp'
    },
    {
        id: 5,
        name: 'Franciscana Gloria',
        price: 9.5,
        type: 'Cerveses',
        subtype: 'Rosses',
        img: 'assets/img/cerveses/Franciscana.webp'
    },
    {
        id: 6,
        name: 'Fruit Gloria',
        price: 8.75,
        type: 'Cerveses',
        subtype: 'IPAs',
        img: 'assets/img/cerveses/Fruit.webp'
    },
    {
        id: 7,
        name: 'Lager Gloria',
        price: 9,
        type: 'Cerveses',
        subtype: 'Rosses',
        img: 'assets/img/cerveses/Lager.webp'
    },
    {
        id: 8,
        name: 'Morena Gloria',
        price: 6.75,
        type: 'Cerveses',
        subtype: 'Torrades',
        img: 'assets/img/cerveses/Morena.webp'
    },
    {
        id: 9,
        name: 'Negra Deluxe Gloria',
        price: 12.75,
        type: 'Cerveses',
        subtype: 'Negres',
        img: 'assets/img/cerveses/Negra Deluxe.webp'
    },
    {
        id: 10,
        name: 'Rubia Gloria',
        price: 12,
        type: 'Cerveses',
        subtype: 'Rosses',
        img: 'assets/img/cerveses/Rubia.webp'
    },
    {
        id: 11,
        name: 'Toasted Gloria',
        price: 12.75,
        type: 'Cerveses',
        subtype: 'Torrades',
        img: 'assets/img/cerveses/Toasted.webp'
    },
    {
        id: 12,
        name: 'Urbana Gloria',
        price: 7,
        type: 'Cerveses',
        subtype: 'IPAs',
        img: 'assets/img/cerveses/Urbana.webp'
    },
    {
        id: 13,
        name: 'Glòria Pícnic',
        price: 480,
        type: 'Packs',
        subtype: 'Glòria Pícnic',
        img: ['assets/img/packs/promo-5.jpg', 'assets/img/packs/promo-6.jpg', 'assets/img/packs/promo-7.jpg', 'assets/img/packs/promo-8.jpg'],
        url: 'promocions-single-2.html?id=13'
    },
    {
        id: 14,
        name: 'Glòria Santíssima',
        price: 240,
        type: 'Packs',
        subtype: 'Glòria Santíssima',
        img: ['assets/img/packs/promo-1.jpg', 'assets/img/packs/promo-2.jpg', 'assets/img/packs/promo-3.jpg', 'assets/img/packs/promo-4.jpg'],
        url: 'promocions-single-1.html?id=14'
    },
    {
        id: 15,
        name: 'Samarreta Blanca Gloria',
        price: 20,
        type: 'Merchandising',
        subtype: 'Samarretes',
        img: ['assets/img/merchandising/samarreta-01.png', 'assets/img/merchandising/samarreta-02.png', 'assets/img/merchandising/samarreta-03.png']
    },
    {
        id: 16,
        name: 'Samarreta Negra Gloria',
        price: 20,
        type: 'Merchandising',
        subtype: 'Samarretes',
        img: ['assets/img/merchandising/samarreta-04.png', 'assets/img/merchandising/samarreta-05.png', 'assets/img/merchandising/samarreta-06.png']
    },
    {
        id: 17,
        name: 'Pack Guitarra y Camiseta Gloria',
        price: 200,
        type: 'Merchandising',
        subtype: 'Exclusiu',
        img: 'assets/img/merchandising/guitarra-camiseta.png'
    },
    {
        id: 18,
        name: 'Skate Blanc Gloria',
        price: 79,
        type: 'Merchandising',
        subtype: 'Accessoris',
        img: ['assets/img/merchandising/skate-01.png', 'assets/img/merchandising/skate-02.png', 'assets/img/merchandising/skate-03.png']
    },
    {
        id: 19,
        name: 'Skate Groc Gloria',
        price: 79,
        type: 'Merchandising',
        subtype: 'Accessoris',
        img: ['assets/img/merchandising/skate-04.png', 'assets/img/merchandising/skate-05.png', 'assets/img/merchandising/skate-06.png']
    },
    {
        id: 20,
        name: 'Gerra Cervesa Gloria',
        price: 25,
        type: 'Merchandising',
        subtype: 'Accessoris',
        img: 'assets/img/merchandising/beer.png'
    }
]

var cart = [];

// Array de la llista de la compra
var cartList = [];

var subtotal = {
    grocery: {
        value: 0,
        discount: 0
    },
    beauty: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
    gadget: {
        value: 0,
        discount: 0
    },
};
