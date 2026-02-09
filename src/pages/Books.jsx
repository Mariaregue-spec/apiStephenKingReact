import { useEffect, useState } from "react";
import BookCard from "../components/bookCard/bookCard";
import { getBookImage } from "../utils/bookImages";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 15;

    const fetchBooks = async () => {
        try {
            setLoading(true);

            const resBooks = await fetch("https://stephen-king-api.onrender.com/api/books");
            const dataBooks = await resBooks.json();
            const booksApi = Array.isArray(dataBooks.data) ? dataBooks.data : [];

            // Añadir imágenes usando el mapeo
            const booksWithImages = booksApi.map(book => ({
                ...book,
                image: getBookImage(book.Title)
            }));

            setBooks(booksWithImages);

        } catch (error) {
            console.error("Error cargando libros:", error);
            setBooks([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    // Paginación
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    const totalPages = Math.ceil(books.length / booksPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <main className="min-h-screen w-full py-10 text-center bg-[url('/images/background/backgroundpage1.png')] bg-cover bg-center bg-fixed text-white">

            <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 drop-shadow-lg">
                Libros de Stephen King
            </h1>

            {/* Spinner */}
            {loading && (
                <div className="flex justify-center items-center mt-20">
                    <div className="relative w-16 h-16">
                        <div className="absolute inset-0 rounded-full border-4 border-red-600 opacity-30" />
                        <div className="absolute inset-0 rounded-full border-4 border-red-600 border-t-transparent animate-spin" />
                    </div>
                </div>
            )}

            {/* Grid de libros */}
            {!loading && (
                <>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12 px-4 md:px-8">
                        {currentBooks.map((book) => (
                            <BookCard key={book.id || book.Id} book={book} />
                        ))}
                    </ul>

                    {/* Paginación */}
                    <div className="flex justify-center gap-3 mt-8 flex-wrap">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-4 py-2 rounded-md font-semibold transition
                            ${page === currentPage
                                        ? "bg-red-600 text-black shadow-[0_0_10px_rgba(255,0,0,0.5)]"
                                        : "bg-gray-800 text-gray-300 hover:bg-red-600 hover:text-black"
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