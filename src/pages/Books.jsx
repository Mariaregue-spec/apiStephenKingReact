import { useEffect, useState } from "react";
import BookCard from "../components/BookCard/BookCard";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 16;
    const fetchBooks = async () => {
        try {
            const response = await fetch("https://stephen-king-api.onrender.com/api/books");
            const data = await response.json();
            setBooks(Array.isArray(data.data) ? data.data : []);
        } catch (error) {
            console.error("Error cargando libros:", error);
            setBooks
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const totalPages = Math.ceil(books.length / booksPerPage);
    return (
        <main className="min-h-screen px-6 py-10 text-white">
            <h1 className="text-4xl font-extrabold text-center text-red-600 drop-shadow-lg">
                Libros de Stephen King
            </h1>

            {/* 🩸 Spinner de sangre */}
            {loading && (
                <div className="flex justify-center items-center mt-20">
                    <div className="relative w-16 h-16">
                        <div className="absolute inset-0 rounded-full border-4 border-red-900 opacity-30" />
                        <div className="absolute inset-0 rounded-full border-4 border-red-600 border-t-transparent animate-spin" />
                    </div>
                </div>
            )}

            {/* 📚 Grid de libros */}
            {!loading && (
                <>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {currentBooks.map((book) => (
                            <BookCard key={book.id || book.Id} book={book} />
                        ))}
                    </ul>
                    <div className="flex justify-center gap-3 mt-8 flex-wrap">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-4 py-2 rounded-md font-semibold transition ${page === currentPage
                                        ? "bg-red-600 text-black shadow-[0_0_10px_rgba(255,0,0,0.5)]"
                                        : "bg-gray-800 text-gray-300 hover:bg-red-500 hover:text-black"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </main>
    );
};

export default Books;

