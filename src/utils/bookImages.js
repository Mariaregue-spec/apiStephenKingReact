export const bookImages = {
    "Carrie": "public/images/bookCoversCards/carrie.png",
    "It": "public/images/bookCoversCards/it.png",
    "The Shining": "public/images/bookCoversCards/theShining.png",
    "Pet Sematary": "public/images/bookCoversCards/petSematary.png",
    "Revival": "public/images/bookCoversCards/revival.png",
    "Salem's Lot": "public/images/bookCoversCards/salemsLot.png",
    "The Dark Tower": "public/images/bookCoversCards/theDarkTower.png",
    "The Dead Zone": "public/images/bookCoversCards/theDeadZone.png",
    "The Long Walk": "public/images/bookCoversCards/theLongWalk.png",
    "The Stand": "public/images/bookCoversCards/theStand.png",
    };

export const getBookImage = (title) => {
  return bookImages[title] || "public/images/bookCoversCards/default.png";
};