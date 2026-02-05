import { useEffect, useState } from "react";
import BookCard from "../components/BookCard/BookCard";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBooks = async () => {
        try {
            const response = await fetch(
                "https://stephen-king-api.onrender.com/api/books"
            );
            const data = await response.json();
            setBooks(data.data);
        } catch (error) {
            console.error("Error cargando books:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

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
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {books.map((book) => (
                        <BookCard key={book.id || book.Id} book={book} />
                    ))}
                </ul>
            )}
        </main>
    );
};

export default Books;

