import { motion } from "framer-motion";

const timeline = [
    { year: "1974", text: "Publicación de Carrie, su primera novela de gran éxito." },
    { year: "1977", text: "Lanza The Shining, consolidándose en el terror moderno." },
    { year: "1986", text: "Publica It, una de sus obras más icónicas." },
    { year: "2003", text: "Finaliza la saga de The Dark Tower." },
    { year: "Actualidad", text: "Continúa escribiendo y publicando nuevas historias." },
];

const movies = [
    { title: "It", image: "public/images/author/it.png" },
    { title: "The Shining", image: "public/images/author/theShining.png" },
    { title: "Doctor Sleep", image: "public/images/author/doctorSleep.png" },
];

const kingPhoto = "public/images/author/stephenKingPhoto.jpg";

const AuthorPage = () => {
    return (
        <main className="min-h-screen mx-auto py-10 px-4 text-center bg-[url('/images/background/backgroundpage1.png')] bg-cover bg-center bg-fixed text-white">
            {/* Aparición con animación suave */}
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold text-red-600 mb-6 drop-shadow-lg"
            >
                Stephen King
            </motion.h1>

            {/* Tarjeta principal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="max-w-5xl mx-auto bg-black/70 border border-red-900 rounded-2xl shadow-[0_0_30px_rgba(255,0,0,0.25)] p-6 md:p-10 backdrop-blur-sm"
            >
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
                            novelas de terror, suspense y fantasía oscura.
                        </p>

                        <p className="text-gray-400 italic">
                            “Los monstruos son reales, y los fantasmas también. Viven dentro
                            de nosotros, y a veces ganan.”
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Timeline */}
            <section className="max-w-4xl mx-auto mt-16 text-left">
                <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
                    Línea temporal
                </h2>

                <div className="border-l-2 border-red-800 pl-6 space-y-8">
                    {timeline.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="relative"
                        >
                            <span className="absolute -left-[34px] top-1 w-4 h-4 bg-red-600 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
                            <h3 className="text-red-400 font-semibold">{item.year}</h3>
                            <p className="text-gray-300">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Adaptaciones al cine */}
            <section className="max-w-5xl mx-auto mt-20">
                <h2 className="text-3xl font-bold text-red-500 mb-10">
                    Adaptaciones al cine
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {movies.map((movie, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="bg-black/70 border border-red-900 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,0,0,0.25)] hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] hover:scale-105 transition duration-300"
                        >
                            <img src={movie.image} alt={movie.title} className="w-full" />
                            <h3 className="text-red-500 font-bold py-3">{movie.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default AuthorPage;