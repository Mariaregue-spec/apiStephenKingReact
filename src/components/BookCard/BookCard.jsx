const BookCard = ({ book }) => {
  return (
    <li className="bg-black/80 border border-red-900 rounded-xl p-6 flex flex-col justify-between shadow-[0_0_20px_rgba(255,0,0,0.25)] transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] transition duration-300">
      
      {/* Título */}
      <h2 className="text-2xl font-extrabold text-red-600 drop-shadow mb-4 text-center">
        {book.Title}
      </h2>

      {/* Información */}
      <div className="text-gray-300 space-y-1 text-center">
        <p>Año: {book.Year}</p>
        <p>Páginas: {book.Pages}</p>
        <p className="italic text-gray-400">{book.Publisher}</p>
      </div>
    </li>
  );
};

export default BookCard;
