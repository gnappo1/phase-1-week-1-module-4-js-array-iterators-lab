// Write your code below.


function calculateTotalRevenue(books) {
    // The quickest way to calculate total revenue is to use the reduce method.
    // The reduce method takes a callback function and an initial value as arguments.
    // The callback function takes two arguments: the accumulator and the current element.
    return books.reduce((total, book) => total + (book.price * book.quantitySold), 0);
}

function getBestsellingAuthor(books) {
    // Here we are using the reduce method to calculate the total sales for each author.
    const salesByAuthor = books.reduce((sales, book) => {
        // We are using the logical OR operator to set the initial value of the sales object to 0.
        // This way, if the author is not already in the sales object, it will be initialized with a value of 0.
        sales[book.author] = (sales[book.author] || 0) + book.quantitySold;

        // We are returning the sales object at the end of each iteration.
        // The returned value will be the sales object for the next iteration.
        return sales;
    }, {});

    // We are using the Object.keys method to get an array of the author names.
    return Object.keys(salesByAuthor).reduce((bestseller, author) => {
        // We are using the ternary operator to compare the sales of the current author with the sales of the bestseller.
        return salesByAuthor[author] > salesByAuthor[bestseller] ? author : bestseller;
    });
}

function filterBooksByGenre(books, genre) {
    // The filter method is used to create a new array with elements that pass a certain condition.
    return books.filter(book => book.genre === genre);
}


function getBooksByPriceRange(books, priceRange) {
    // Here the important part is checking if the price of the book is within the specified range.
    return books.filter(book => book.price >= priceRange.min && book.price <= priceRange.max);
}

function getAuthorsByBookCount(books, threshold) {
    // Same idea as the getBestsellingAuthor function, but with a threshold for the book count.
    const authorBookCounts = books.reduce((counts, book) => {
        counts[book.author] = (counts[book.author] || 0) + book.quantitySold;
        return counts;
    }, {});

    return Object.keys(authorBookCounts).filter(author => authorBookCounts[author] > threshold);
}

