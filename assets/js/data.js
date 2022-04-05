// estructura dades
var products = [
    {
        id: 1,
        name: 'Black Gloria',
        price: 10.5,
        type: 'Cerveses',
        subtype: 'Negres',
        img: '../img/cerveses/Black.webp'
    },
    {
        id: 2,
        name: 'Delirium Gloria',
        price: 12.25,
        type: 'Cerveses',
        subtype: 'Rosses',
        img: '../img/cerveses/Delirium.webp'
    },
    {
        id: 3,
        name: 'Doble Malta Gloria',
        price: 10.75,
        type: 'Cerveses',
        subtype: 'Torrades',
        img: '../img/cerveses/Doble malta.webp'
    },
    {
        id: 4,
        name: 'ECO Gloria',
        price: 5.5,
        type: 'Cerveses',
        subtype: 'IPAs',
        img: '../img/cerveses/ECO.webp'
    },
    {
        id: 5,
        name: 'Franciscana Gloria',
        price: 9.5,
        type: 'Cerveses',
        subtype: 'Rosses',
        img: '../img/cerveses/Franciscana.webp'
    },
    {
        id: 6,
        name: 'Fruit Gloria',
        price: 8.75,
        type: 'Cerveses',
        subtype: 'IPAs',
        img: '../img/cerveses/Fruit.webp'
    },
    {
        id: 7,
        name: 'Lager Gloria',
        price: 9,
        type: 'Cerveses',
        subtype: 'Rosses',
        img: '../img/cerveses/Lager.webp'
    },
    {
        id: 8,
        name: 'Morena Gloria',
        price: 6.75,
        type: 'Cerveses',
        subtype: 'Torrades',
        img: '../img/cerveses/Morena.webp'
    },
    {
        id: 9,
        name: 'Negra Deluxe Gloria',
        price: 12.75,
        type: 'Cerveses',
        subtype: 'Negres',
        img: '../img/cerveses/Negra Deluxe.webp'
    },
    {
        id: 10,
        name: 'Rubia Gloria',
        price: 12,
        type: 'Cerveses',
        subtype: 'Rosses',
        img: '../img/cerveses/Rubia.webp'
    },
    {
        id: 11,
        name: 'Toasted Gloria',
        price: 12.75,
        type: 'Cerveses',
        subtype: 'Torrades',
        img: '../img/cerveses/Toasted.webp'
    },
    {
        id: 12,
        name: 'Urbana Gloria',
        price: 7,
        type: 'Cerveses',
        subtype: 'IPAs',
        img: '../img/cerveses/Urbana.webp'
    },
    {
        id: 13,
        name: 'Gloria Picnic',
        price: 15,
        type: 'Packs',
        subtype: 'Gloria Picnic',
        img: ['../img/packs/promo-5.jpg', '../img/packs/promo-6.jpg', '../img/packs/promo-7.jpg', '../img/packs/promo-8.jpg']
    },
    {
        id: 14,
        name: 'Gloria Santissima',
        price: 15,
        type: 'Packs',
        subtype: 'Gloria Santissima',
        img: ['../img/packs/promo-1.jpg', '../img/packs/promo-2.jpg', '../img/packs/promo-3.jpg', '../img/packs/promo-4.jpg']
    },
    {
        id: 15,
        name: 'Samarreta Blanca Gloria',
        price: 20,
        type: 'Merchandising',
        subtype: 'Samarretes',
        img: ['../img/merchandising/samarreta-01.png', '../img/merchandising/samarreta-02.png', '../img/merchandising/samarreta-03.png']
    },
    {
        id: 16,
        name: 'Samarreta Negra Gloria',
        price: 20,
        type: 'Merchandising',
        subtype: 'Samarretes',
        img: ['../img/merchandising/samarreta-04.png', '../img/merchandising/samarreta-05.png', '../img/merchandising/samarreta-06.png']
    },
    {
        id: 17,
        name: 'Pack Guitarra y Camiseta Gloria',
        price: 200,
        type: 'Merchandising',
        subtype: 'Exclusiu',
        img: '../img/merchandising/guitarra-camiseta.png'
    },
    {
        id: 18,
        name: 'Skate Blanc Gloria',
        price: 79,
        type: 'Merchandising',
        subtype: 'Accesoris',
        img: ['../img/merchandising/skate-01.png', '../img/merchandising/skate-02.png', '../img/merchandising/skate-03.png']
    },
    {
        id: 19,
        name: 'Skate Groc Gloria',
        price: 79,
        type: 'Merchandising',
        subtype: 'Accesoris',
        img: ['../img/merchandising/skate-04.png', '../img/merchandising/skate-05.png', '../img/merchandising/skate-06.png']
    },
    {
        id: 20,
        name: 'Gerra Cervesa Gloria',
        price: 25,
        type: 'Merchandising',
        subtype: 'Accesoria',
        img: '../img/merchandising/beer.png'
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
