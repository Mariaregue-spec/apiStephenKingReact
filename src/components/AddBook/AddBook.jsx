import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";



const BooksList = () => {
    // 1️⃣ ESTADO
    const [books, setBooks] = useState([]);

    // 2️⃣ CARGAR LIBROS
    useEffect(() => {
        axios
            .get("https://stephen-king-api.onrender.com/api/books")
            .then(res => setBooks(res.data.data));
    }, []);

    // 3️⃣ FUNCIÓN BORRAR (AQUÍ VA)
    const handleDelete = (id) => {
        setBooks(prevBooks =>
            prevBooks.filter(book => book.id !== id)
        );
    };

    // 4️⃣ RENDER
    return (
        <ul className="grid gap-4">
            {books.map(book => (
                <BookCard
                    key={book.id}
                    book={book}
                    onDelete={handleDelete}
                />
            ))}
        </ul>
    );
};

export default BooksList;

