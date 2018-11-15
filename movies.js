//use movies;

db.createCollection('movies');

db.products.insert({
    id: 16752456,
    title: "E.T. The Extra-Terrestrial ",
    current_price: {
        value: 9.40,
        currency_code: "USD",
    }
});

db.products.insert({
    id: 16696652,
    title: "Spy Game",
    current_price: {
        value: 13.97,
        currency_code: "USD",
    }
});

db.products.insert({
    id: 16483589,
    title: "Ferris Bueller's Day Off",
    current_price: {
        value: 3.99,
        currency_code: "USD",
    }
});

db.products.insert({
    id: 15643793,
    title: "Indiana Jones & Temple of Doom",
    current_price: {
        value: 14.47,
        currency_code: "USD",
    }
});

db.products.insert({
    id: 15117729,
    title: "Star Wars Episode IV: A New Hope",
    current_price: {
        value: 19.99,
        currency_code: "USD",
    }
});


db.products.insert({
    id: 13860428,
    title: "The Big Lebowski",
    current_price: {
        value: 15.49,
        currency_code: "USD",
    }
});