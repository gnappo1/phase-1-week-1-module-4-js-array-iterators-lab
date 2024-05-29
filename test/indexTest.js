const books = require("./testData");

describe("Bookstore Operations Functions", () => {
    describe("calculateTotalRevenue", () => {
        it("Should calculate the total revenue generated from all sales", () => {
            const totalRevenue = calculateTotalRevenue(books);
            expect(totalRevenue).to.equal(64246);
        });

        it("Should use at least one iterator method", () => {
            const iteratorsUsed = ["forEach", "map", "filter", "find", "reduce"];
            const anyIteratorUsed = iteratorsUsed.some(iterator => calculateTotalRevenue.toString().includes(`.${iterator}(`));
            expect(anyIteratorUsed).to.be.true;
        });
    });

    describe("getBestsellingAuthor", () => {
        it("Should return the name of the author with the most books sold", () => {
            const bestsellingAuthor = getBestsellingAuthor(books);
            expect(bestsellingAuthor).to.equal("Suzanne Collins");
        });

        it("Should use at least one iterator method", () => {
            const iteratorsUsed = ["forEach", "map", "filter", "find", "reduce"];
            const anyIteratorUsed = iteratorsUsed.some(iterator => getBestsellingAuthor.toString().includes(`.${iterator}(`));
            expect(anyIteratorUsed).to.be.true;
        });
    });

    describe("filterBooksByGenre", () => {
        it("Should return an array of books belonging to the specified genre", () => {
            const filteredBooks = filterBooksByGenre(books, "Fantasy");
            expect(filteredBooks).to.be.an("array").that.has.lengthOf(2);
            expect(filteredBooks[0].genre).to.equal("Fantasy");
        });

        it("Should use at least one iterator method", () => {
            const iteratorsUsed = ["forEach", "map", "filter", "find", "reduce"];
            const anyIteratorUsed = iteratorsUsed.some(iterator => filterBooksByGenre.toString().includes(`.${iterator}(`));
            expect(anyIteratorUsed).to.be.true;
        });
    });

    describe("getBooksByPriceRange", () => {
        it("Should return an array of books within the specified price range", () => {
            const priceRange = { min: 10, max: 12 };
            const booksInRange = getBooksByPriceRange(books, priceRange);
            expect(booksInRange).to.be.an("array").that.has.lengthOf(2);
            expect(booksInRange[0].price).to.be.at.least(priceRange.min);
        });

        it("Should use at least one iterator method", () => {
            const iteratorsUsed = ["forEach", "map", "filter", "find", "reduce"];
            const anyIteratorUsed = iteratorsUsed.some(iterator => getBooksByPriceRange.toString().includes(`.${iterator}(`));
            expect(anyIteratorUsed).to.be.true;
        });
    });

    describe("getAuthorsByBookCount", () => {
        it("Should return an array of authors who have written more books than the threshold", () => {
            const authors = getAuthorsByBookCount(books, 1000);
            expect(authors).to.be.an("array").that.has.lengthOf(2);
            expect(authors).to.include("Dan Brown");
        });

        it("Should use at least one iterator method", () => {
            const iteratorsUsed = ["forEach", "map", "filter", "find", "reduce"];
            const anyIteratorUsed = iteratorsUsed.some(iterator => getAuthorsByBookCount.toString().includes(`.${iterator}(`));
            expect(anyIteratorUsed).to.be.true;
        });
    });
});
