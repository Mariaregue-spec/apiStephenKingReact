const BookCard = ({ book }) => {
  return (
    <li className="bg-black/80 border border-red-900 rounded-xl p-4 flex flex-col justify-between shadow-[0_0_20px_rgba(255,0,0,0.25)] transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] transition duration-300">
      
      {/* Imagen de portada */}
      <div className="mb-4 h-72 w-full rounded-lg bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-3">
        <img
          src={book.image}
          alt={book.Title}
          className="max-w-full max-h-full object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]"
          onError={(e) => {
            e.target.src = "/images/bookCovers/default.jpg";
          }}
        />
      </div>

      {/* Título */}
      <h2 className="text-xl font-extrabold text-red-600 drop-shadow mb-4 text-center leading-tight">
        {book.Title}
      </h2>

      {/* Información del libro */}
      <div className="text-gray-300 space-y-2 text-center mt-auto">
        <p className="text-base">
          <span className="text-red-600 font-semibold">Año:</span> {book.Year}
        </p>
        <p className="text-base">
          <span className="text-red-600 font-semibold">Páginas:</span> {book.Pages}
        </p>
        <p className="italic text-gray-400 text-sm mt-3">
          <span className="text-red-600 font-semibold">Editorial:</span> {book.Publisher}
        </p>
      </div>
    </li>
  );
};

export default BookCard;
