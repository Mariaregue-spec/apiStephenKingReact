const BookCard = ({ book }) => {
    const imageUrl = `/images/bookCovers/${book.Title
        ?.toLowerCase()
        .replaceAll(" ", "-")}.png`;

    return (
        <li className="bg-black/70 border border-red-900 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,0,0,0.25)] transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] transition duration-300">

            {/* Imagen */}
            <div className="h-64 bg-black">
                <img
                    src={imageUrl}
                    alt={book.Title}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
                    onError={(e) => {
                        e.target.src = "/images/bookCovers/default.png";
                    }}
                />
            </div>

            {/* Info */}
            <div className="p-4 text-center">
                <h2 className="text-xl font-bold text-red-500 drop-shadow">
                    {book.Title}
                </h2>

                <p className="text-sm text-gray-300 mt-2">Año: {book.Year}</p>
                <p className="text-sm text-gray-300">Páginas: {book.Pages}</p>
                <p className="text-sm text-gray-400 italic">{book.Publisher}</p>
            </div>
        </li>
    );
};

export default BookCard;

