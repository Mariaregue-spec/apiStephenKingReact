const BookCard = ({ book, onDelete }) => {
    return (
        <li className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{book.Title}</h2>
            <p className="text-gray-700">Stephen King</p>
            <p className="text-sm text-gray-500">Año: {book.Year}</p>

            <button
                onClick={() => onDelete(book.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 mt-3"
            >
                Borrar
            </button>
        </li>
    );
};

export default BookCard;
