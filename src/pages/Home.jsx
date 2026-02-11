import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importar imágenes directamente
import itCover from "../assets/images/bookCovers/it.png";
import shiningCover from "../assets/images/bookCovers/theShining.png";
import miseryCover from "../assets/images/bookCovers/misery.png";
import petCover from "../assets/images/bookCovers/petSematary.png";
import revival from "../assets/images/bookCovers/revival.png";
import salemsLot from "../assets/images/bookCovers/salemsLot.png";
import theDarkTower from "../assets/images/bookCovers/theDarkTower.png";
import theDeadZone from "../assets/images/bookCovers/theDeadZone.png";
import theLongWalk from "../assets/images/bookCovers/theLongWalk.png";
import theStand from "../assets/images/bookCovers/theStand.png";

const books = [
    { title: "It", image: itCover },
    { title: "The Shining", image: shiningCover },
    { title: "Carrie", image: miseryCover },
    { title: "Pet Sematary", image: petCover },
    { title: "Revival", image: revival },
    { title: "Salem's Lot", image: salemsLot },
    { title: "The Dark Tower", image: theDarkTower },
    { title: "The Dead Zone", image: theDeadZone },
    { title: "The Long Walk", image: theLongWalk },
    { title: "The Shining", image: shiningCover },
    { title: "The Stand", image: theStand },
];

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <main className="min-h-screen cover mx-auto py-10 text-center bg-[url('/images/background/backgroundpage1.png')] bg-cover bg-center bg-fixed text-white">
            <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4 drop-shadow-lg">
                Bienvenido al universo de Stephen King
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
                Explora sus novelas, adaptaciones al cine y curiosidades de su carrera literaria.
            </p>

            <div className="max-w-5xl mx-auto">
                <Slider {...settings}>
                    {books.map((book, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-black/70 border border-red-900 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,0,0,0.25)] transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] transition duration-300">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full object-contain bg-gray-100"
                                />
                                <h3 className="text-red-500 font-bold mt-2">{book.title}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </main>
    );
};

export default Home;
