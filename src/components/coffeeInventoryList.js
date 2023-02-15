import { v4 } from 'uuid';

const coffeeInventoryList = [
  {
    name: "Ethiopia Sidama", 
    origin: "Belayneh Barisio farm - Bombe Bensa", 
    pricePerLb: 18.95, 
    roast: "light",
    tastingNotes: "Apricot, peach, & blueberry",
    quantityLbs: 130, 
    soldOut: false,
    id: v4()
  },

  {
    name: "El Salvador Santa Leticia", 
    origin: "Apaneca, Ahuachapan", 
    pricePerLb: 17.95, 
    roast: "light",
    tastingNotes: "Cherry, Orange, Cocoa & Carmelized Sugar", 
    quantityLbs: 130, 
    soldOut: false,
    id: v4()
  },

  {
    name: "Guatemala La Antigua Los Volcanes", 
    origin: "Finca Covadonga and Finca La Guatelupe", 
    pricePerLb: 17.50, 
    roast: "medium",
    tastingNotes: "Cocoa & Hard Candy Sweetness", 
    quantityLbs: 130, 
    soldOut: false,
    id: v4()
  },

  {
    name: "Tina's Stomach Turner", 
    origin: "NE PDX", 
    pricePerLb: 4, 
    roast: "scorched",
    tastingNotes: "Chinchilla, dirty socks, moldy persimmon", 
    quantityLbs: 130, 
    soldOut: false,
    id: v4()
  }
  
]

export default coffeeInventoryList;