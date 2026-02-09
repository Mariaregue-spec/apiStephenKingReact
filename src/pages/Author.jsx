import kingPhoto from "../assets/images/author/stephenKingPhoto.jpg";

const AuthorPage = () => {
  return (
    <main className="min-h-screen mx-auto py-10 px-4 text-center bg-[url('public/images/background/backgroundpage1.png')] bg-cover bg-center bg-fixed text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 drop-shadow-lg">
        Stephen King
      </h1>

      <div className="max-w-5xl mx-auto bg-black/70 border border-red-900 rounded-2xl shadow-[0_0_30px_rgba(255,0,0,0.25)] p-6 md:p-10 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={kingPhoto}
            alt="Stephen King"
            className="w-64 md:w-80 rounded-xl border border-red-800 shadow-[0_0_25px_rgba(255,0,0,0.4)]"
          />

          <div className="text-left space-y-4">
            <p className="text-lg text-gray-200 leading-relaxed">
              Stephen King es uno de los escritores más influyentes de la
              literatura contemporánea, reconocido mundialmente por sus
              novelas de terror, suspense y fantasía oscura. A lo largo de su
              carrera ha publicado decenas de obras que se han convertido en
              clásicos modernos y han sido adaptadas al cine y la televisión.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Entre sus títulos más famosos se encuentran <span className="text-red-500 font-semibold">It</span>,{" "}
              <span className="text-red-600 font-semibold">The Shining</span>,{" "}
              <span className="text-red-600 font-semibold">Carrie</span> y{" "}
              <span className="text-red-600 font-semibold">The Dark Tower</span>,
              obras que han marcado generaciones de lectores y han redefinido
              el género del terror moderno.
            </p>

            <p className="text-gray-400 italic">
              “Los monstruos son reales, y los fantasmas también. Viven dentro
              de nosotros, y a veces ganan.”
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthorPage;
