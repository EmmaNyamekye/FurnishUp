const products = [
    {
        name: 'Pair of Chairs',
        imageUrl: 'https://github.com/EmmaNyamekye/FurnishUp/blob/main/public/images/chairs_image.png?raw=true',
        description: 'Warm and inviting acacia wood chairs, perfect for adding a touch of nature to your outdoor space.',
        location: 'Tralee',
        contact: 'maria.rossella@example.com'
    },
    {
        name: 'Cutting Board and Cutlery Set',
        imageUrl: 'https://github.com/EmmaNyamekye/FurnishUp/blob/main/public/images/cutting_board_image.png?raw=true',
        description: 'This wooden cutting board and utensil set shows signs of use, but is still in excellent working order.',
        location: 'Killarney',
        contact: 'marco.mengoni@example.com'
    },
    {
        name: 'Pot with Lid',
        imageUrl: 'https://github.com/EmmaNyamekye/FurnishUp/blob/main/public/images/pot_image.png?raw=true',
        description: 'This versatile stainless steel pot is ideal for preparing soups, sauces, and more. Includes a glass lid for easy monitoring of your cooking.',
        location: 'Tralee',
        contact: 'mario.mario@example.com'
    },
    {
        name: 'Dutch Ovens',
        imageUrl: 'https://github.com/EmmaNyamekye/FurnishUp/blob/main/public/images/dutch_oven_image.png?raw=true',
        description: 'This red Le Creuset Dutch oven has been well-cared for and shows very little wear.',
        location: 'Tralee',
        contact: 'luigi.bros@example.com'
    },
    {
        name: 'Table',
        imageUrl: 'https://github.com/EmmaNyamekye/FurnishUp/blob/main/public/images/table_image.png?raw=true',
        description: 'This sleek black dining table is perfect for everyday meals and special occasions. It extends to comfortably seat 6-8 people, making it ideal for entertaining guests.',
        location: 'Killarney',
        contact: 'leo.vinci@example.com'
    },
    {
        name: 'Bed with Matching Bed Frame',
        imageUrl: 'https://github.com/EmmaNyamekye/FurnishUp/blob/main/public/images/bed_image.png?raw=true',
        description: 'This single bed has been well-cared for and shows very little wear. Perfect for those seeking quality used furniture.',
        location: 'Killarney',
        contact: 'bugs.bunny@example.com'
    }
];

const index = function(req, res) {
    res.render('index', { title: 'FurnishUp', products: products });
};

// Exporting the index function
module.exports = {
    index
};
