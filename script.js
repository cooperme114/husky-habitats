const stems={hyper:"over",hypo:"under",phobia:"fear",pan:"all",mega:"big",pyro:"fire",circum:"around",cred:"believe",ject:"throw",med:"middle"};
const catalog=[
{id:"bed-white",name:"Basic White Bed",img:"images/items/Bed-basic-white-001.png",price:75,cat:"Furniture"},
{id:"bed-angel-cream",name:"Angel Cream Bed",img:"images/items/Bed-angel-cream-001.png",price:100,cat:"Furniture"},
{id:"chair-angel-cream",name:"Angel Cream Chair",img:"images/items/Chair-angel-cream-001.png",price:100,cat:"Furniture",turnable:true},
{id:"chair-basic-red",name:"Red Chair",img:"images/items/Chair-basic-red-001.png",price:75,cat:"Furniture",turnable:true},
{id:"chair-basic-yellow",name:"Yellow Chair",img:"images/items/Chair-basic-yellow-001.png",price:75,cat:"Furniture",turnable:true},
{id:"chair-deco-green",name:"Deco Green Chair",img:"images/items/Chair-deco-green-001.png",price:100,cat:"Furniture",turnable:true},
{id:"chair-deco-red",name:"Deco Red Chair",img:"images/items/Chair-deco-red-001.png",price:100,cat:"Furniture",turnable:true},
{id:"chair-geode-purple",name:"Purple Geode Chair",img:"images/items/Chair-geode-purple-001.png",price:100,cat:"Furniture",turnable:true},
{id:"chair-goth-black",name:"Black Goth Chair",img:"images/items/Chair-goth-black-001.png",price:100,cat:"Furniture",turnable:true},
{id:"chair-goth-purple",name:"Purple Goth Chair",img:"images/items/Chair-goth-purple-001.png",price:100,cat:"Furniture",turnable:true},
{id:"candles-sunset",name:"Sunset Candles",img:"images/items/Decor-candles-sunset-001.png",price:100,cat:"Decor"},
{id:"floral-vines",name:"Hanging Floral Vines",img:"images/items/Decor-floral-hanging-vines-001.png",price:100,cat:"Decor"},
{id:"floral-terrarium",name:"Floral Terrarium",img:"images/items/Decor-floral-terrarium-001.png",price:100,cat:"Decor"},
{id:"geode-purple",name:"Purple Geode",img:"images/items/Decor-geode-purple-001.png",price:100,cat:"Decor"},
{id:"endtable-geode",name:"Geode End Table",img:"images/items/EndTable-geode-001.png",price:100,cat:"Furniture"},
{id:"parrot",name:"Parrot",img:"images/items/Pet-parrot-001.png",price:150,cat:"Pets"},
{id:"table-geode-blue",name:"Blue Geode Table",img:"images/items/Table-geode-blue-001.png",price:100,cat:"Furniture"},
{id:"couch-angel-cream",name:"Angel Cream Couch",img:"images/items/Couch-angel-cream-001.png",price:100,cat:"Furniture"},
{id:"couch-antique-cream",name:"Antique Cream Couch",img:"images/items/Couch-antique-cream-001.png",price:100,cat:"Furniture"},
{id:"couch-basic-brown",name:"Brown Couch",img:"images/items/Couch-basic-brown-001.png",price:75,cat:"Furniture"},
{id:"couch-goth-purple",name:"Goth Purple Couch",img:"images/items/Couch-goth-purple-001.png",price:100,cat:"Furniture"},
{id:"cow-skull",name:"Cow Skull",img:"images/items/Decor-cow-skull-001.png",price:100,cat:"Decor"},
{id:"crystal-ball",name:"Crystal Ball",img:"images/items/Decor-crystalball-001.png",price:100,cat:"Decor"},
{id:"dresser-angel-cream",name:"Angel Cream Dresser",img:"images/items/Dresser-angel-cream-001.png",price:100,cat:"Furniture"},
{id:"dresser-basic-cream",name:"Cream Dresser",img:"images/items/Dresser-basic-cream-001.png",price:75,cat:"Furniture"},
{id:"dresser-basic-dark-brown",name:"Dark Brown Dresser",img:"images/items/Dresser-basic-dark-brown-001.png",price:75,cat:"Furniture"},
{id:"dresser-floral-white",name:"Floral White Dresser",img:"images/items/Dresser-floral-white-001.png",price:100,cat:"Furniture"},
{id:"table-angel-cream",name:"Angel Cream Table",img:"images/items/Table-angel-cream-001.png",price:100,cat:"Furniture"},
{id:"table-goth-purple",name:"Goth Purple Table",img:"images/items/Table-goth-purple-001.png",price:100,cat:"Furniture"},
{id:"couch-blue",name:"Blue Couch",img:"images/items/Couch-basic-blue-001.png",price:75,cat:"Furniture"},
{id:"couch-green",name:"Green Couch",img:"images/items/Couch-basic-green-001.png",price:75,cat:"Furniture"},
{id:"couch-red",name:"Red Couch",img:"images/items/Couch-basic-red-001.png",price:75,cat:"Furniture"},
{id:"couch-yellow",name:"Yellow Couch",img:"images/items/Couch-basic-yellow-001.png",price:75,cat:"Furniture"},
{id:"jackolantern",name:"Halloween Jack-o\'-Lantern",img:"images/items/Decor-jackolantern-001.png",price:100,cat:"Holiday"},
{id:"moon-stars",name:"Moon & Stars",img:"images/items/Decor-moon-and-stars-001.png",price:100,cat:"Decor"},
{id:"string-lights",name:"String Lights",img:"images/items/Lights-string-001.png",price:100,cat:"Decor"},
{id:"squirrel",name:"Squirrel",img:"images/items/Pet-squirrel-001.png",price:150,cat:"Pets"},
{id:"window-stars",name:"Star Porthole Window",img:"images/items/Window-porthole-stars-001.png",price:100,cat:"Windows"},
{id:"window-sun",name:"Sunny Window",img:"images/items/Window-sun-001.png",price:100,cat:"Windows"},
{id:"chair-cozy-pink",name:"Cozy Pink Chair",img:"images/items/Chair-cozy-pink-001.png",price:100,cat:"Furniture",turnable:true},
{id:"couch-cozy-pink",name:"Cozy Pink Couch",img:"images/items/Couch-cozy-pink-001.png",price:100,cat:"Furniture"},
{id:"cozy-calendar-pink",name:"Cozy Pink Calendar",img:"images/items/Decor-cozy-calendar-pink-001.png",price:100,cat:"Decor"},
{id:"cozy-candles",name:"Cozy Candles",img:"images/items/Decor-cozy-candles-001.png",price:100,cat:"Decor"},
{id:"cozy-flowers-pink",name:"Cozy Pink Flowers",img:"images/items/Decor-cozy-flowers-pink-001.png",price:100,cat:"Decor"},
{id:"dresser-cozy-pink",name:"Cozy Pink Dresser",img:"images/items/Dresser-cozy-pinkk-001.png",price:100,cat:"Furniture"},
{id:"bulbasaur",name:"Bulbasaur",img:"images/items/Pet-Bulbasaur-001.png",price:150,cat:"Pets"},
{id:"charmander",name:"Charmander",img:"images/items/Pet-Charmander-001.png",price:150,cat:"Pets"},
{id:"gamma",name:"Gamma",img:"images/items/Pet-Gamma-001.png",price:150,cat:"Pets"},
{id:"pikachu",name:"Pikachu",img:"images/items/Pet-Pikachu.png",price:150,cat:"Pets"},
{id:"squirtle",name:"Squirtle",img:"images/items/Pet-Squitle-001.png",price:150,cat:"Pets"},
{id:"cozy-friend",name:"Cozy Friend",img:"images/items/Pet-cozy-friend-001.png",price:150,cat:"Pets"},
{id:"neko",name:"Neko",img:"images/items/Pet-neko-001.png",price:150,cat:"Pets"},
{id:"piano-cozy-pink",name:"Cozy Pink Piano",img:"images/items/Piano-cozy-pink-001.png",price:100,cat:"Furniture"},
{id:"table-cozy-pink",name:"Cozy Pink Table",img:"images/items/Table-cozy-pink-001.png",price:100,cat:"Furniture"},
{id:"vanity-cozy-pink",name:"Cozy Pink Vanity",img:"images/items/Vanity-cozy-pink-001.png",price:100,cat:"Furniture"},
{id:"wall-blue-stripe",name:"Blue Stripe Wallpaper",img:"images/items/Wallpaper-blue-stripe-001.png",price:50,cat:"Walls"},
{id:"wall-green-stripe",name:"Green Stripe Wallpaper",img:"images/items/Wallpaper-green-stripe-001.png",price:50,cat:"Walls"},
{id:"wall-notebook",name:"Notebook Wallpaper",img:"images/items/Wallpaper-notebook-001.png",price:50,cat:"Walls"},
{id:"wall-orange-stripe",name:"Orange Stripe Wallpaper",img:"images/items/Wallpaper-orange-stripe-001.png",price:50,cat:"Walls"},
{id:"wall-purple-stripe",name:"Purple Stripe Wallpaper",img:"images/items/Wallpaper-purple-stripe-001.png",price:50,cat:"Walls"},
{id:"wall-red-stripe",name:"Red Stripe Wallpaper",img:"images/items/Wallpaper-red-stripe-001.png",price:50,cat:"Walls"},
{id:"wall-starry-night",name:"Starry Night Wallpaper",img:"images/items/Wallpaper-starry-night-001.png",price:50,cat:"Walls"},
{id:"wall-yellow-stripe",name:"Yellow Stripe Wallpaper",img:"images/items/Wallpaper-yellow-stripe-001.png",price:50,cat:"Walls"},
{id:"floor-carpet-red",name:"Red Carpet",img:"images/items/Floor-carpet-red-001.png",price:50,cat:"Floors"},
{id:"floor-marble-tiles",name:"Marble Tile Floor",img:"images/items/Floor-marble-tiles-001.png",price:50,cat:"Floors"},
{id:"floor-stone-tiles",name:"Stone Tile Floor",img:"images/items/Floor-stone-tiles-001.png",price:50,cat:"Floors"},
{id:"floor-tiles-blue",name:"Blue Tile Floor",img:"images/items/Floor-tiles-blue-001.png",price:50,cat:"Floors"},
{id:"floor-tiles-green",name:"Green Tile Floor",img:"images/items/Floor-tiles-green-001.png",price:50,cat:"Floors"},
{id:"floor-tiles-orange",name:"Orange Tile Floor",img:"images/items/Floor-tiles-orange-001.png",price:50,cat:"Floors"},
{id:"floor-tiles-pink",name:"Pink Tile Floor",img:"images/items/Floor-tiles-pink-001.png",price:50,cat:"Floors"},
{id:"floor-tiles-primary",name:"Primary Tile Floor",img:"images/items/Floor-tiles-primary-001.png",price:50,cat:"Floors"},
{id:"floor-tiles-purple",name:"Purple Tile Floor",img:"images/items/Floor-tiles-purple-001.png",price:50,cat:"Floors"},
{id:"floor-tiles-purple-pink",name:"Purple & Pink Tile Floor",img:"images/items/Floor-tiles-purple-pink-001.png",price:50,cat:"Floors"},
{id:"floor-tiles-red",name:"Red Tile Floor",img:"images/items/Floor-tiles-red-001.png",price:50,cat:"Floors"},
{id:"floor-tiles-white",name:"White Tile Floor",img:"images/items/Floor-tiles-white-001.png",price:50,cat:"Floors"},
{id:"floor-tiles-yellow",name:"Yellow Tile Floor",img:"images/items/Floor-tiles-yellow-001.png",price:50,cat:"Floors"},
{id:"bed-hellokitty",name:"Hello Kitty Bed",img:"images/items/Bed-HelloKitty-001.png",price:100,cat:"Furniture"},
{id:"bed-antique-green",name:"Antique Green Bed",img:"images/items/Bed-antique-green-001.png",price:100,cat:"Furniture"},
{id:"bed-classic-blue",name:"Classic Blue Bed",img:"images/items/Bed-classic-blue-001.png",price:75,cat:"Furniture"},
{id:"bed-classic-pink",name:"Classic Pink Bed",img:"images/items/Bed-classic-pink-001.png",price:75,cat:"Furniture"},
{id:"bed-classic-white",name:"Classic White Bed",img:"images/items/Bed-classic-white-001.png",price:75,cat:"Furniture"},
{id:"bed-classic-yellow",name:"Classic Yellow Bed",img:"images/items/Bed-classic-yellow-001.png",price:75,cat:"Furniture"},
{id:"bed-cozy-pink",name:"Cozy Pink Bed",img:"images/items/Bed-cozy-pink-001.png",price:100,cat:"Furniture"},
{id:"bed-cozy-yellow",name:"Cozy Yellow Bed",img:"images/items/Bed-cozy-yellow-001.png",price:100,cat:"Furniture"},
{id:"bed-cute-pink",name:"Cute Pink Bed",img:"images/items/Bed-cute-pink-001.png",price:100,cat:"Furniture"},
{id:"bed-retro-blue",name:"Retro Blue Bed",img:"images/items/Bed-retro-blue-001.png",price:100,cat:"Furniture"},
{id:"bed-retro-green",name:"Retro Green Bed",img:"images/items/Bed-retro-green-001.png",price:100,cat:"Furniture"},
{id:"bed-retro-red",name:"Retro Red Bed",img:"images/items/Bed-retro-red-001.png",price:100,cat:"Furniture"},
{id:"bed-retro-yellow",name:"Retro Yellow Bed",img:"images/items/Bed-retro-yellow-001.png",price:100,cat:"Furniture"},
{id:"bed-sweets-strawberry",name:"Sweets Strawberry Bed",img:"images/items/Bed-sweets-strawberry-001.png",price:100,cat:"Furniture"},
{id:"bookcase-cute-small",name:"Cute Small Bookcase",img:"images/items/Bookcase-cute-small-001.png",price:100,cat:"Furniture"},
{id:"bookcase-cute-white",name:"Cute White Bookcase",img:"images/items/Bookcase-cute-white-001.png",price:100,cat:"Furniture"},
{id:"bookcase-floral",name:"Floral Bookcase",img:"images/items/Bookcase-floral-001.png",price:100,cat:"Furniture"},
{id:"bookcase-sweets-ice-cream",name:"Sweets Ice Cream Bookcase",img:"images/items/Bookcase-sweets-ice-cream-001.png",price:100,cat:"Furniture"},
{id:"bookcase-wizard",name:"Wizard Bookcase",img:"images/items/Bookcase-wizard-001.png",price:100,cat:"Furniture"},
{id:"chair-classic-wooden",name:"Classic Wooden Chair",img:"images/items/Chair-classic-wooden-001.png",price:75,cat:"Furniture",turnable:true},
{id:"chair-cute-pink",name:"Cute Pink Chair",img:"images/items/Chair-cute-pink-001.png",price:100,cat:"Furniture",turnable:true},
{id:"chair-cute-pink-002",name:"Cute Pink Chair 2",img:"images/items/Chair-cute-pink-002.png",price:100,cat:"Furniture",turnable:true},
{id:"chair-retro-cushioned",name:"Retro Cushioned Chair",img:"images/items/Chair-retro-cushioned-001.png",price:100,cat:"Furniture",turnable:true},
{id:"chair-retro-light-wood",name:"Retro Light Wood Chair",img:"images/items/Chair-retro-light-wood-001.png",price:100,cat:"Furniture",turnable:true},
{id:"chair-retro-red",name:"Retro Red Chair",img:"images/items/Chair-retro-red-001.png",price:100,cat:"Furniture",turnable:true},
{id:"chair-retro-red-002",name:"Retro Red Chair 2",img:"images/items/Chair-retro-red-002.png",price:100,cat:"Furniture",turnable:true},
{id:"chair-retro-yellow",name:"Retro Yellow Chair",img:"images/items/Chair-retro-yellow-001.png",price:100,cat:"Furniture",turnable:true},
{id:"coffeetable-retro-glass",name:"Retro Glass Coffee Table",img:"images/items/CoffeeTable-retro-glass-001.png",price:100,cat:"Furniture"},
{id:"couch-antique-green",name:"Antique Green Couch",img:"images/items/Couch-antique-green-001.png",price:100,cat:"Furniture"},
{id:"couch-cozy-orange",name:"Cozy Orange Couch",img:"images/items/Couch-cozy-orange-001.png",price:100,cat:"Furniture"},
{id:"couch-cozy-purple",name:"Cozy Purple Couch",img:"images/items/Couch-cozy-purple-001.png",price:100,cat:"Furniture"},
{id:"couch-cute-pink",name:"Cute Pink Couch",img:"images/items/Couch-cute-pink-001.png",price:100,cat:"Furniture"},
{id:"couch-cute-white",name:"Cute White Couch",img:"images/items/Couch-cute-white-001.png",price:100,cat:"Furniture"},
{id:"couch-retro-green",name:"Retro Green Couch",img:"images/items/Couch-retro-green-001.png",price:100,cat:"Furniture"},
{id:"couch-retro-red",name:"Retro Red Couch",img:"images/items/Couch-retro-red-001.png",price:100,cat:"Furniture"},
{id:"couch-sweets-pink",name:"Sweets Pink Couch",img:"images/items/Couch-sweets-pink-001.png",price:100,cat:"Furniture"},
{id:"decor-hellokitty-clock",name:"Hello Kitty Clock",img:"images/items/Decor-HelloKitty-clock-001.png",price:100,cat:"Decor"},
{id:"decor-hellokitty-plant",name:"Hello Kitty Plant",img:"images/items/Decor-HelloKitty-plant-001.png",price:100,cat:"Decor"},
{id:"decor-antique-flowers",name:"Antique Flowers",img:"images/items/Decor-antique-flowers-001.png",price:100,cat:"Decor"},
{id:"decor-antique-globe",name:"Antique Globe",img:"images/items/Decor-antique-globe-001.png",price:100,cat:"Decor"},
{id:"decor-antique-grandfather-clock",name:"Antique Grandfather Clock",img:"images/items/Decor-antique-grandfather-clock-001.png",price:100,cat:"Decor"},
{id:"decor-antique-painting",name:"Antique Painting",img:"images/items/Decor-antique-painting-001.png",price:100,cat:"Decor"},
{id:"decor-antique-painting-002",name:"Antique Painting 2",img:"images/items/Decor-antique-painting-002.png",price:100,cat:"Decor"},
{id:"decor-antique-phonograph",name:"Antique Phonograph",img:"images/items/Decor-antique-phonograph-001.png",price:100,cat:"Decor"},
{id:"decor-classic-stuffed-rabbit",name:"Classic Stuffed Rabbit",img:"images/items/Decor-classic-stuffed-rabbit-001.png",price:75,cat:"Decor"},
{id:"decor-cute-stuffed-unicorn",name:"Cute Stuffed Unicorn",img:"images/items/Decor-cozy-stuffed-unicorn-001.png",price:100,cat:"Decor"},
{id:"decor-cute-shelves",name:"Cute Shelves",img:"images/items/Decor-cute-shelves-001.png",price:100,cat:"Decor"},
{id:"decor-cute-stuffed-bunny",name:"Cute Stuffed Bunny",img:"images/items/Decor-cute-stuffed-bunny-001.png",price:100,cat:"Decor"},
{id:"decor-cute-teddy-bear",name:"Cute Teddy Bear",img:"images/items/Decor-cute-teddy-bear-001.png",price:100,cat:"Decor"},
{id:"decor-floral-purple-box",name:"Floral Purple Box",img:"images/items/Decor-floral-purple-box-001.png",price:100,cat:"Decor"},
{id:"decor-floral-yellow-box",name:"Floral Yellow Box",img:"images/items/Decor-floral-yellow-box-001.png",price:100,cat:"Decor"},
{id:"decor-goth-shelves",name:"Goth Shelves",img:"images/items/Decor-goth-shelves-001.png",price:100,cat:"Decor"},
{id:"decor-greek-column",name:"Greek Column",img:"images/items/Decor-greek-column-001.png",price:100,cat:"Decor"},
{id:"decor-greek-column-002",name:"Greek Column 2",img:"images/items/Decor-greek-column-002.png",price:100,cat:"Decor"},
{id:"decor-large-plant",name:"Large Plant",img:"images/items/Decor-large-plant-001.png",price:100,cat:"Decor"},
{id:"decor-plant-large",name:"Plant Large",img:"images/items/Decor-plant-large-001.png",price:100,cat:"Decor"},
{id:"decor-pride-flag",name:"Pride Flag",img:"images/items/Decor-pride-flag-001.png",price:100,cat:"Flags"},
{id:"decor-pride-flag-002",name:"Pride Flag 2",img:"images/items/Decor-pride-flag-002.png",price:100,cat:"Flags"},
{id:"decor-pride-flag-003",name:"Pride Flag 3",img:"images/items/Decor-pride-flag-003.png",price:100,cat:"Flags"},
{id:"decor-pride-flag-004",name:"Pride Flag 4",img:"images/items/Decor-pride-flag-004.png",price:100,cat:"Flags"},
{id:"decor-pride-flag-005",name:"Pride Flag 5",img:"images/items/Decor-pride-flag-005.png",price:100,cat:"Flags"},
{id:"decor-pride-flag-006",name:"Pride Flag 6",img:"images/items/Decor-pride-flag-006.png",price:100,cat:"Flags"},
{id:"decor-pride-flag-007",name:"Pride Flag 7",img:"images/items/Decor-pride-flag-007.png",price:100,cat:"Flags"},
{id:"decor-pride-flag-008",name:"Pride Flag 8",img:"images/items/Decor-pride-flag-008.png",price:100,cat:"Flags"},
{id:"decor-pride-flag-009",name:"Pride Flag 9",img:"images/items/Decor-pride-flag-009.png",price:100,cat:"Flags"},
{id:"decor-pride-flag-010",name:"Pride Flag 10",img:"images/items/Decor-pride-flag-010.png",price:100,cat:"Flags"},
{id:"decor-retro-butterfly-painting",name:"Retro Butterfly Painting",img:"images/items/Decor-retro-butterfly-painting-001.png",price:100,cat:"Decor"},
{id:"decor-retro-mirror",name:"Retro Mirror",img:"images/items/Decor-retro-mirror-001.png",price:100,cat:"Decor"},
{id:"decor-retro-record-machine",name:"Retro Record Machine",img:"images/items/Decor-retro-record-machine-001.png",price:100,cat:"Decor"},
{id:"decor-retro-rubber-tree-plant",name:"Retro Rubber Tree Plant",img:"images/items/Decor-retro-rubber-tree-plant-001.png",price:100,cat:"Decor"},
{id:"decor-retro-wall-clock",name:"Retro Wall Clock",img:"images/items/Decor-retro-wall-clock-001.png",price:100,cat:"Decor"},
{id:"decor-wizard-book-pile",name:"Wizard Book Pile",img:"images/items/Decor-wizard-book-pile-001.png",price:100,cat:"Decor"},
{id:"decor-wizard-book-pile-002",name:"Wizard Book Pile 2",img:"images/items/Decor-wizard-book-pile-002.png",price:100,cat:"Decor"},
{id:"decor-wizard-cauldron",name:"Wizard Cauldron",img:"images/items/Decor-wizard-cauldron-001.png",price:100,cat:"Decor"},
{id:"decor-wizard-painting",name:"Wizard Painting",img:"images/items/Decor-wizard-painting-001.png",price:100,cat:"Decor"},
{id:"decor-wizard-potion-table",name:"Wizard Potion Table",img:"images/items/Decor-wizard-potion-table-001.png",price:100,cat:"Decor"},
{id:"decor-wizard-shelves",name:"Wizard Shelves",img:"images/items/Decor-wizard-shelves-001.png",price:100,cat:"Decor"},
{id:"desk-antique-dark-wood",name:"Antique Dark Wood Desk",img:"images/items/Desk-antique-dark-wood-001.png",price:100,cat:"Furniture"},
{id:"desk-wizard",name:"Wizard Desk",img:"images/items/Desk-wizard-001.png",price:100,cat:"Furniture"},
{id:"dresser-hellokitty",name:"Hello Kitty Dresser",img:"images/items/Dresser-HelloKitty-001.png",price:100,cat:"Furniture"},
{id:"dresser-sweets-chocolate",name:"Sweets Chocolate Dresser",img:"images/items/Dresser-sweets-chocolate-001.png",price:100,cat:"Furniture"},
{id:"drums-classic-blue",name:"Classic Blue Drums",img:"images/items/Drums-classic-blue-001.png",price:75,cat:"Furniture"},
{id:"endtable-retro-wooden",name:"Retro Wooden End Table",img:"images/items/EndTable-retro-wooden-001.png",price:100,cat:"Furniture"},
{id:"endtable-sweets-cream",name:"Sweets Cream End Table",img:"images/items/EndTable-sweets-cream-001.png",price:100,cat:"Furniture"},
{id:"fireplace-antique-wood",name:"Antique Wood Fireplace",img:"images/items/Fireplace-antique-wood-001.png",price:100,cat:"Furniture"},
{id:"fireplace-antique-wood-002",name:"Antique Wood Fireplace 2",img:"images/items/Fireplace-antique-wood-002.png",price:100,cat:"Furniture"},
{id:"fireplace-cute-white",name:"Cute White Fireplace",img:"images/items/Fireplace-cute-white-001.png",price:100,cat:"Furniture"},
{id:"floors-angel-cream-tiles",name:"Angel Cream Tiles Floor",img:"images/items/Floors-angel-cream-tiles-001.png",price:50,cat:"Floors"},
{id:"floors-antique-blue-carpet",name:"Antique Blue Carpet Floor",img:"images/items/Floors-antique-blue-carpet-001.png",price:50,cat:"Floors"},
{id:"floors-antique-brown-carpet",name:"Antique Brown Carpet Floor",img:"images/items/Floors-antique-brown-carpet-001.png",price:50,cat:"Floors"},
{id:"floors-antique-green-carpet",name:"Antique Green Carpet Floor",img:"images/items/Floors-antique-green-carpet-001.png",price:50,cat:"Floors"},
{id:"floors-antique-red-carpet",name:"Antique Red Carpet Floor",img:"images/items/Floors-antique-red-carpet-001.png",price:50,cat:"Floors"},
{id:"floors-classic-dark-wood",name:"Classic Dark Wood Floor",img:"images/items/Floors-classic-dark-wood-001.png",price:50,cat:"Floors"},
{id:"floors-classic-dark-wood-002",name:"Classic Dark Wood Floor 2",img:"images/items/Floors-classic-dark-wood-002.png",price:50,cat:"Floors"},
{id:"floors-classic-darkest-wood",name:"Classic Darkest Wood Floor",img:"images/items/Floors-classic-darkest-wood-001.png",price:50,cat:"Floors"},
{id:"floors-classic-darkest-wood-002",name:"Classic Darkest Wood Floor 2",img:"images/items/Floors-classic-darkest-wood-002.png",price:50,cat:"Floors"},
{id:"floors-classic-light-wood",name:"Classic Light Wood Floor",img:"images/items/Floors-classic-light-wood-001.png",price:50,cat:"Floors"},
{id:"floors-classic-light-wood-002",name:"Classic Light Wood Floor 2",img:"images/items/Floors-classic-light-wood-002.png",price:50,cat:"Floors"},
{id:"floors-classic-medium-wood",name:"Classic Medium Wood Floor",img:"images/items/Floors-classic-medium-wood-001.png",price:50,cat:"Floors"},
{id:"floors-classic-medium-wood-002",name:"Classic Medium Wood Floor 2",img:"images/items/Floors-classic-medium-wood-002.png",price:50,cat:"Floors"},
{id:"harp-angel-white",name:"Angel White Harp",img:"images/items/Harp-angel-white-001.png",price:100,cat:"Furniture"},
{id:"harp-antique-dark-wood",name:"Antique Dark Wood Harp",img:"images/items/Harp-antique-dark-wood-001.png",price:100,cat:"Furniture"},
{id:"harp-classic-light",name:"Classic Light Harp",img:"images/items/Harp-classic-light-001.png",price:75,cat:"Furniture"},
{id:"organ-antique-wooden",name:"Antique Wooden Organ",img:"images/items/Organ-antique-wooden-001.png",price:100,cat:"Furniture"},
{id:"pets-cinnamonroll",name:"Cinnamoroll",img:"images/items/Pets-Cinnamonroll.png",price:150,cat:"Pets"},
{id:"pets-jimothy",name:"Jimothy",img:"images/items/Pets-Jimothy.png",price:150,cat:"Pets"},
{id:"pets-cat-black",name:"Cat Black",img:"images/items/Pets-cat-black.png",price:150,cat:"Pets"},
{id:"pets-cat-blue",name:"Cat Blue",img:"images/items/Pets-cat-blue.png",price:150,cat:"Pets"},
{id:"pets-cat-calico",name:"Cat Calico",img:"images/items/Pets-cat-calico.png",price:150,cat:"Pets"},
{id:"pets-cat-fluffy",name:"Cat Fluffy",img:"images/items/Pets-cat-fluffy.png",price:150,cat:"Pets"},
{id:"pets-cat-orange",name:"Cat Orange",img:"images/items/Pets-cat-orange.png",price:150,cat:"Pets"},
{id:"pets-cat-point",name:"Cat Point",img:"images/items/Pets-cat-point.png",price:150,cat:"Pets"},
{id:"pets-cat-tabby",name:"Cat Tabby",img:"images/items/Pets-cat-tabby.png",price:150,cat:"Pets"},
{id:"pets-cat-tuxedo",name:"Cat Tuxedo",img:"images/items/Pets-cat-tuxedo.png",price:150,cat:"Pets"},
{id:"pets-cat-white",name:"Cat White",img:"images/items/Pets-cat-white.png",price:150,cat:"Pets"},
{id:"pets-chao-dark",name:"Chao Dark",img:"images/items/Pets-chao-dark.png",price:150,cat:"Pets"},
{id:"pets-chao-hero",name:"Chao Hero",img:"images/items/Pets-chao-hero.png",price:150,cat:"Pets"},
{id:"pets-chao-neutral",name:"Chao Neutral",img:"images/items/Pets-chao-neutral.png",price:150,cat:"Pets"},
{id:"pets-dog-beagle",name:"Dog Beagle",img:"images/items/Pets-dog-beagle.png",price:150,cat:"Pets"},
{id:"pets-dog-collie",name:"Dog Collie",img:"images/items/Pets-dog-collie.png",price:150,cat:"Pets"},
{id:"pets-dog-dalmation",name:"Dog Dalmatian",img:"images/items/Pets-dog-dalmation.png",price:150,cat:"Pets"},
{id:"pets-dog-german-shepherd",name:"Dog German Shepherd",img:"images/items/Pets-dog-german-shepherd.png",price:150,cat:"Pets"},
{id:"pets-dog-husky",name:"Dog Husky",img:"images/items/Pets-dog-husky.png",price:150,cat:"Pets"},
{id:"pets-dog-pug",name:"Dog Pug",img:"images/items/Pets-dog-pug.png",price:150,cat:"Pets"},
{id:"pets-dog-shiba",name:"Dog Shiba",img:"images/items/Pets-dog-shiba.png",price:150,cat:"Pets"},
{id:"pets-dog-spaniel",name:"Dog Spaniel",img:"images/items/Pets-dog-spaniel.png",price:150,cat:"Pets"},
{id:"pets-frog",name:"Frog",img:"images/items/Pets-frog.png",price:150,cat:"Pets"},
{id:"pets-turtle",name:"Turtle",img:"images/items/Pets-turtle.png",price:150,cat:"Pets"},
{id:"piano-angel-white",name:"Angel White Piano",img:"images/items/Piano-angel-white-001.png",price:100,cat:"Furniture"},
{id:"piano-antique-wooden",name:"Antique Wooden Piano",img:"images/items/Piano-antique-wooden-001.png",price:100,cat:"Furniture"},
{id:"piano-classic-black",name:"Classic Black Piano",img:"images/items/Piano-classic-black-001.png",price:75,cat:"Furniture"},
{id:"tv-basic-dark",name:"Basic Dark TV",img:"images/items/TV-basic-dark-001.png",price:75,cat:"Furniture"},
{id:"tv-basic-light",name:"Basic Light TV",img:"images/items/TV-basic-light-001.png",price:75,cat:"Furniture"},
{id:"table-basic-covered",name:"Basic Covered Table",img:"images/items/Table-basic-covered-001.png",price:75,cat:"Furniture"},
{id:"table-cute-heart",name:"Cute Heart Table",img:"images/items/Table-cute-heart-001.png",price:100,cat:"Furniture"},
{id:"table-retro-glass",name:"Retro Glass Table",img:"images/items/Table-retro-glass-001.png",price:100,cat:"Furniture"},
{id:"vanity-antique-dark-wood",name:"Antique Dark Wood Vanity",img:"images/items/Vanity-antique-dark-wood-001.png",price:100,cat:"Furniture"},
{id:"viola-antique-wooden",name:"Antique Wooden Viola",img:"images/items/Viola-antique-wooden-001.png",price:100,cat:"Furniture"},
{id:"walls-classic-blue",name:"Classic Blue Wallpaper",img:"images/items/Walls-classic-blue-001.png",price:50,cat:"Walls"},
{id:"walls-classic-green",name:"Classic Green Wallpaper",img:"images/items/Walls-classic-green-001.png",price:50,cat:"Walls"},
{id:"walls-classic-orange",name:"Classic Orange Wallpaper",img:"images/items/Walls-classic-orange-001.png",price:50,cat:"Walls"},
{id:"walls-classic-pink",name:"Classic Pink Wallpaper",img:"images/items/Walls-classic-pink-001.png",price:50,cat:"Walls"},
{id:"walls-classic-purple",name:"Classic Purple Wallpaper",img:"images/items/Walls-classic-purple-001.png",price:50,cat:"Walls"},
{id:"walls-classic-red",name:"Classic Red Wallpaper",img:"images/items/Walls-classic-red-001.png",price:50,cat:"Walls"},
{id:"walls-classic-teal",name:"Classic Teal Wallpaper",img:"images/items/Walls-classic-teal-001.png",price:50,cat:"Walls"},
{id:"walls-classic-yellow",name:"Classic Yellow Wallpaper",img:"images/items/Walls-classic-yellow-001.png",price:50,cat:"Walls"},
{id:"walls-cute-pink",name:"Cute Pink Wallpaper",img:"images/items/Walls-cute-pink-001.png",price:50,cat:"Walls"},
{id:"walls-cute-purple",name:"Cute Purple Wallpaper",img:"images/items/Walls-cute-purple-001.png",price:50,cat:"Walls"},
{id:"walls-cute-yellow",name:"Cute Yellow Wallpaper",img:"images/items/Walls-cute-yellow-001.png",price:50,cat:"Walls"},
{id:"window-cute-white",name:"Cute White Window",img:"images/items/Window-cute-white-001.png",price:100,cat:"Windows"},
{id:"decor-wizard-mushroom",name:"Wizard Mushroom decor",img:"images/items/decor-wizard-mushroom-001.png",price:100,cat:"Decor"},
{id:"decor-retro-lamp",name:"Retro Lamp",img:"images/items/Decor-retro-lamp-001.gif",price:100,cat:"Decor"}
,
{"id":"bathroom-rattan-sink","name":"Bathroom Rattan Sink","img":"images/items/Bathroom-rattan-sink-001.png","price":100,"cat":"Furniture"},
{"id":"bathroom-sink-light-wood","name":"Bathroom Sink Light Wood","img":"images/items/Bathroom-sink-light-wood-001.png","price":100,"cat":"Furniture"},
{"id":"bathroom-toilet-white","name":"Bathroom Toilet White","img":"images/items/Bathroom-toilet-white-001.png","price":100,"cat":"Furniture"},
{"id":"bathroom-tub-white","name":"Bathroom Tub White","img":"images/items/Bathroom-tub-white-001.png","price":100,"cat":"Furniture"},
{"id":"bed-opulent-purple-wood","name":"Bed Opulent Purple Wood","img":"images/items/Bed-opulent-purple-wood-001.png","price":200,"cat":"Furniture"},
{"id":"bed-opulent-yellow-wood","name":"Bed Opulent Yellow Wood","img":"images/items/Bed-opulent-yellow-wood-001.png","price":200,"cat":"Furniture"},
{"id":"bed-rattan-blue","name":"Bed Rattan Blue","img":"images/items/Bed-rattan-blue-001.png","price":100,"cat":"Furniture"},
{"id":"bed-wizard-lavender","name":"Bed Wizard Lavender","img":"images/items/Bed-wizard-lavender-001.png","price":100,"cat":"Furniture"},
{"id":"chair-wizard-purple","name":"Chair Wizard Purple","img":"images/items/Chair-wizard-purple-001.png","price":100,"cat":"Furniture"},
{"id":"couch-opulent-leather-couch","name":"Couch Opulent Leather Couch","img":"images/items/Couch-opulent-leather-couch-001.png","price":200,"cat":"Furniture"},
{"id":"couch-rattan-blue","name":"Couch Rattan Blue","img":"images/items/Couch-rattan-blue-001.png","price":100,"cat":"Furniture"},
{"id":"couch-rattan-white","name":"Couch Rattan White","img":"images/items/Couch-rattan-white-001.png","price":100,"cat":"Furniture"},
{"id":"couch-wizard-blue","name":"Couch Wizard Blue","img":"images/items/Couch-wizard-blue-001.png","price":100,"cat":"Furniture"},
{"id":"decor-uk-flag","name":"UK Flag","img":"images/items/Decor-UK-flag.png","price":100,"cat":"Flags"},
{"id":"decor-us-flag","name":"US Flag","img":"images/items/Decor-US-flag.png","price":100,"cat":"Flags"},
{"id":"decor-ukraine-flag","name":"Ukraine Flag","img":"images/items/Decor-Ukraine-flag.png","price":100,"cat":"Flags"},
{"id":"decor-argentina-flag","name":"Argentina Flag","img":"images/items/Decor-argentina-flag-001.png","price":100,"cat":"Flags"},
{"id":"decor-brazil-flag","name":"Brazil Flag","img":"images/items/Decor-brazil-flag-001.png","price":100,"cat":"Flags"},
{"id":"decor-canada-flag","name":"Canada Flag","img":"images/items/Decor-canada-flag.png","price":100,"cat":"Flags"},
{"id":"decor-germany-flag","name":"Germany Flag","img":"images/items/Decor-germany-flag.png","price":100,"cat":"Flags"},
{"id":"decor-halloween-candles","name":"Halloween Candles","img":"images/items/Decor-halloween-candles-001.png","price":100,"cat":"Holiday"},
{"id":"decor-halloween-cauldron","name":"Halloween Cauldron","img":"images/items/Decor-halloween-cauldron-001.png","price":100,"cat":"Holiday"},
{"id":"decor-halloween-dead-tree","name":"Halloween Dead Tree","img":"images/items/Decor-halloween-dead-tree-001.png","price":100,"cat":"Holiday"},
{"id":"decor-halloween-jackolantern-002","name":"Halloween Jack-o\'-Lantern (Animated)","img":"images/items/Decor-halloween-jackolantern-002.gif","price":100,"cat":"Holiday"},
{"id":"decor-halloween-pumpkin-stack","name":"Halloween Pumpkin Stack","img":"images/items/Decor-halloween-pumpkin-stack-001.png","price":100,"cat":"Holiday"},
{"id":"decor-halloween-skull","name":"Halloween Skull","img":"images/items/Decor-halloween-skull-001.png","price":100,"cat":"Holiday"},
{"id":"decor-halloween-string-lights","name":"Halloween String Lights","img":"images/items/Decor-halloween-string-lights-001.png","price":100,"cat":"Holiday"},
{"id":"decor-halloween-wheel-barrow","name":"Halloween Wheel Barrow","img":"images/items/Decor-halloween-wheel-barrow-001.png","price":100,"cat":"Holiday"},
{"id":"decor-halloween-witch-hat","name":"Halloween Witch Hat","img":"images/items/Decor-halloween-witch-hat-001.png","price":100,"cat":"Holiday"},
{"id":"decor-ireland-flag","name":"Ireland Flag","img":"images/items/Decor-ireland-flag.png","price":100,"cat":"Flags"},
{"id":"decor-italy-flag","name":"Italy Flag","img":"images/items/Decor-italy-flag.png","price":100,"cat":"Flags"},
{"id":"decor-jamaica-flag","name":"Jamaica Flag","img":"images/items/Decor-jamaica-flag.png","price":100,"cat":"Flags"},
{"id":"decor-japan-flag","name":"Japan Flag","img":"images/items/Decor-japan-flag.png","price":100,"cat":"Flags"},
{"id":"decor-mexican-flag","name":"Mexican Flag","img":"images/items/Decor-mexican-flag-001.png","price":100,"cat":"Flags"},
{"id":"decor-opulent-billiards-table","name":"Opulent Billiards Table","img":"images/items/Decor-opulent-billiards-table-001.png","price":200,"cat":"Decor"},
{"id":"decor-opulent-judge-painting","name":"Opulent Judge Painting","img":"images/items/Decor-opulent-judge-painting-001.png","price":200,"cat":"Decor"},
{"id":"decor-opulent-map-painting","name":"Opulent Map Painting","img":"images/items/Decor-opulent-map-painting-001.png","price":200,"cat":"Decor"},
{"id":"decor-opulent-moose-head","name":"Opulent Moose Head","img":"images/items/Decor-opulent-moose-head-001.png","price":200,"cat":"Decor"},
{"id":"decor-opulent-ship-display","name":"Opulent Ship Display","img":"images/items/Decor-opulent-ship-display-001.png","price":200,"cat":"Decor"},
{"id":"decor-opulent-suitcase-stack","name":"Opulent Suitcase Stack","img":"images/items/Decor-opulent-suitcase-stack-001.png","price":200,"cat":"Decor"},
{"id":"decor-rattan-cushion-green","name":"Rattan Cushion Green","img":"images/items/Decor-rattan-cushion-green.png","price":100,"cat":"Decor"},
{"id":"decor-rattan-ukelele","name":"Rattan Ukelele","img":"images/items/Decor-rattan-ukelele-001.png","price":100,"cat":"Decor"},
{"id":"decor-russia-flag","name":"Russia Flag","img":"images/items/Decor-russia-flag.png","price":100,"cat":"Flags"},
{"id":"decor-spain-flag","name":"Spain Flag","img":"images/items/Decor-spain-flag.png","price":100,"cat":"Flags"},
{"id":"decor-spice-rack","name":"Spice Rack","img":"images/items/Decor-spice-rack-001.png","price":100,"cat":"Decor"},
{"id":"decor-wizard-candle","name":"Wizard Candle","img":"images/items/Decor-wizard-candle-001.png","price":100,"cat":"Decor"},
{"id":"desk-opulent-wooden-study","name":"Desk Opulent Wooden Study","img":"images/items/Desk-opulent-wooden-study-001.png","price":200,"cat":"Furniture"},
{"id":"dresser-wizard-wooden","name":"Dresser Wizard Wooden","img":"images/items/Dresser-wizard-wooden-001.png","price":100,"cat":"Furniture"},
{"id":"fireplace-opulent-wooden","name":"Fireplace Opulent Wooden","img":"images/items/Fireplace-opulent-wooden-001.png","price":200,"cat":"Furniture"},
{"id":"floor-basic-teal-carpet","name":"Basic Teal Carpet","img":"images/items/Floor-basic-teal-carpet.png","price":50,"cat":"Floors"},
{"id":"floor-bubbles","name":"Bubbles","img":"images/items/Floor-bubbles-001.png","price":50,"cat":"Floors"},
{"id":"floor-cute-pink-carpet","name":"Cute Pink Carpet","img":"images/items/Floor-cute-pink-carpet-001.png","price":50,"cat":"Floors"},
{"id":"floor-space","name":"Space","img":"images/items/Floor-space-001.png","price":50,"cat":"Floors"},
{"id":"petsupplies-cat-bowl-blue", "name":"Cat Bowl Blue","img":"images/items/PetSupplies-cat-bowl-blue-001.png","price":100,"cat":"Pet Supplies"},
{"id":"petsupplies-cat-bowl-pink", "name":"Cat Bowl Pink","img":"images/items/PetSupplies-cat-bowl-pink-001.png","price":100,"cat":"Pet Supplies"},
{"id":"petsupplies-cat-tree-white", "name":"Cat Tree White","img":"images/items/PetSupplies-cat-tree-white-001.png","price":100,"cat":"Pet Supplies"},
{"id":"petsupplies-dog-bowl-black", "name":"Dog Bowl Black","img":"images/items/PetSupplies-dog-bowl-black-001.png","price":100,"cat":"Pet Supplies"},
{"id":"petsupplies-dog-bowl-white", "name":"Dog Bowl White","img":"images/items/PetSupplies-dog-bowl-white-001.png","price":100,"cat":"Pet Supplies"},
{"id":"petsupplies-doghouse-brick", "name":"Doghouse Brick","img":"images/items/PetSupplies-doghouse-brick-001.png","price":100,"cat":"Pet Supplies"},
{"id":"petsupplies-long-aquarium", "name":"Long Aquarium","img":"images/items/PetSupplies-long-aquarium-001.png","price":100,"cat":"Pet Supplies"},
{"id":"petsupplies-pet-bed-green", "name":"Pet Bed Green","img":"images/items/PetSupplies-pet-bed-green-001.png","price":100,"cat":"Pet Supplies"},
{"id":"petsupplies-pet-bed-red", "name":"Pet Bed Red","img":"images/items/PetSupplies-pet-bed-red-001.png","price":100,"cat":"Pet Supplies"},
{"id":"petsupplies-tall-aquarium", "name":"Tall Aquarium","img":"images/items/PetSupplies-tall-aquarium-001.png","price":100,"cat":"Pet Supplies"},
{"id":"pets-clownfish","name":"Clownfish","img":"images/items/Pets-clownfish-001.png","price":150,"cat":"Pets"},
{"id":"pets-dino-blue","name":"Dino Blue","img":"images/items/Pets-dino-blue-001.png","price":150,"cat":"Pets"},
{"id":"pets-dino-green","name":"Dino Green","img":"images/items/Pets-dino-green-001.png","price":150,"cat":"Pets"},
{"id":"pets-dino-pink","name":"Dino Pink","img":"images/items/Pets-dino-pink-001.png","price":150,"cat":"Pets"},
{"id":"pets-dino-red","name":"Dino Red","img":"images/items/Pets-dino-red-001.png","price":150,"cat":"Pets"},
{"id":"pets-dino-yellow","name":"Dino Yellow","img":"images/items/Pets-dino-yellow-001.png","price":150,"cat":"Pets"},
{"id":"pets-dodo","name":"Dodo","img":"images/items/Pets-dodo-001.png","price":150,"cat":"Pets"},
{"id":"pets-goldfish","name":"Goldfish","img":"images/items/Pets-goldfish-001.png","price":150,"cat":"Pets"},
{"id":"pets-halloween-ghost-dog","name":"Halloween Ghost Dog","img":"images/items/Pets-halloween-ghost-dog-001.png","price":150,"cat":"Pets"},
{"id":"pets-halloween-happy-pumpkkin","name":"Halloween Happy Pumpkkin","img":"images/items/Pets-halloween-happy-pumpkkin-001.gif","price":150,"cat":"Pets"},
{"id":"pets-halloween-pumpkin-turtle","name":"Halloween Pumpkin Turtle","img":"images/items/Pets-halloween-pumpkin-turtle-001.png","price":150,"cat":"Pets"},
{"id":"pets-halloween-skeleton","name":"Halloween Skeleton","img":"images/items/Pets-halloween-skeleton-001.png","price":150,"cat":"Pets"},
{"id":"pets-halloween-skeleton-cat","name":"Halloween Skeleton Cat","img":"images/items/Pets-halloween-skeleton-cat-001.png","price":150,"cat":"Pets"},
{"id":"pets-halloween-tall-ghost","name":"Halloween Tall Ghost","img":"images/items/Pets-halloween-tall-ghost-001.png","price":150,"cat":"Pets"},
{"id":"pets-pigeon","name":"Pigeon","img":"images/items/Pets-pigeon-001.png","price":150,"cat":"Pets"},
{"id":"rug-basic-geometric-black","name":"Rug Basic Geometric Black","img":"images/items/Rug-basic-geometric-black-001.png","price":75,"cat":"Rugs"},
{"id":"rug-basic-geometric-purple","name":"Rug Basic Geometric Purple","img":"images/items/Rug-basic-geometric-purple-001.png","price":75,"cat":"Rugs"},
{"id":"rug-basic-swirl-blue","name":"Rug Basic Swirl Blue","img":"images/items/Rug-basic-swirl-blue-001.png","price":75,"cat":"Rugs"},
{"id":"rug-basic-swirl-green","name":"Rug Basic Swirl Green","img":"images/items/Rug-basic-swirl-green-001.png","price":75,"cat":"Rugs"},
{"id":"rug-opulent-bear-skin","name":"Rug Opulent Bear Skin","img":"images/items/Rug-opulent-bear-skin-001.png","price":200,"cat":"Rugs"},
{"id":"rug-rattan-cream-and-blue","name":"Rug Rattan Cream And Blue","img":"images/items/Rug-rattan-cream-and-blue-001.png","price":100,"cat":"Rugs"},
{"id":"rug-retro-blue","name":"Rug Retro Blue","img":"images/items/Rug-retro-blue-001.png","price":100,"cat":"Rugs"},
{"id":"rug-retro-frame","name":"Rug Retro Frame","img":"images/items/Rug-retro-frame-001.png","price":100,"cat":"Rugs"},
{"id":"rug-retro-gray","name":"Rug Retro Gray","img":"images/items/Rug-retro-gray-001.png","price":100,"cat":"Rugs"},
{"id":"rug-retro-patterned","name":"Rug Retro Patterned","img":"images/items/Rug-retro-patterned-001.png","price":100,"cat":"Rugs"},
{"id":"rug-wizard-blue","name":"Rug Wizard Blue","img":"images/items/Rug-wizard-blue-001.png","price":100,"cat":"Rugs"},
{"id":"table-opulent-wooden","name":"Table Opulent Wooden","img":"images/items/Table-opulent-wooden-001.png","price":200,"cat":"Furniture"},
{"id":"vanity-opulent-wooden","name":"Vanity Opulent Wooden","img":"images/items/Vanity-opulent-wooden-001.png","price":200,"cat":"Furniture"},
{"id":"vanity-rattan-light","name":"Vanity Rattan Light","img":"images/items/Vanity-rattan-light-001.png","price":100,"cat":"Furniture"},
{"id":"wallpaper-castle-stone","name":"Castle Stone Wallpaper","img":"images/items/Wallpaper-castle-stone-001.png","price":50,"cat":"Walls"},
{"id":"wallpaper-floral-black","name":"Floral Black Wallpaper","img":"images/items/Wallpaper-floral-black-001.png","price":50,"cat":"Walls"},
{"id":"wallpaper-floral-green","name":"Floral Green Wallpaper","img":"images/items/Wallpaper-floral-green-001.png","price":50,"cat":"Walls"},
{"id":"wallpaper-goth-eyes","name":"Goth Eyes Wallpaper","img":"images/items/Wallpaper-goth-eyes-001.png","price":50,"cat":"Walls"},
{"id":"wallpaper-mermaid-blue","name":"Mermaid Blue Wallpaper","img":"images/items/Wallpaper-mermaid-blue-001.png","price":50,"cat":"Walls"},
{"id":"wallpaper-mermaid-lavender","name":"Mermaid Lavender Wallpaper","img":"images/items/Wallpaper-mermaid-lavender-001.png","price":50,"cat":"Walls"},
{"id":"walls-classic-black","name":"Classic Black Wall","img":"images/items/Walls-classic-black-001.png","price":50,"cat":"Walls"},
{"id":"walls-classic-white","name":"Classic White Wall","img":"images/items/Walls-classic-white-001.png","price":50,"cat":"Walls"},
{"id":"window-basic-large","name":"Window Basic Large","img":"images/items/Window-basic-large-001.png","price":75,"cat":"Windows"},
{"id":"window-basic-small","name":"Window Basic Small","img":"images/items/Window-basic-small-001.png","price":75,"cat":"Windows"},
{"id":"window-wizard-moon","name":"Window Wizard Moon","img":"images/items/Window-wizard-moon-001.png","price":100,"cat":"Windows"},
{"id":"decor-flag-india","name":"Flag India","img":"images/items/decor-flag-india.png","price":100,"cat":"Flags"},
{"id":"decor-france-flag","name":"France Flag","img":"images/items/decor-france-flag.png","price":100,"cat":"Flags"},
{id:"decor-diwali-diya-row",name:"Diwali Diya Row",img:"images/items/Decor-diwali-diya-row-001.png",price:100,cat:"Holiday"},
{id:"decor-diwali-elephant-statue",name:"Diwali Elephant Statue",img:"images/items/Decor-diwali-elephant-statue-001.png",price:100,cat:"Holiday"},
{id:"decor-diwali-floating-flowers",name:"Diwali Floating Flowers",img:"images/items/Decor-diwali-floating flowers.png",price:100,cat:"Holiday"},
{id:"decor-diwali-kandil-lantern",name:"Diwali Kandil Lantern",img:"images/items/Decor-diwali-kandil-lantern-001.png",price:100,cat:"Holiday"},
{id:"decor-diwali-lanterns",name:"Diwali Lanterns",img:"images/items/Decor-diwali-lanterns-001.png",price:100,cat:"Holiday"},
{id:"decor-diwali-marigold-strand",name:"Diwali Marigold Strand",img:"images/items/Decor-diwali-marigold-strand-001.png",price:100,cat:"Holiday"},
{id:"decor-diwali-peacock-statue",name:"Diwali Peacock Statue",img:"images/items/Decor-diwali-peacock-statue-001.png",price:100,cat:"Holiday"},
{id:"decor-diwali-string-lights",name:"Diwali String Lights",img:"images/items/Decor-diwali-string-lights-001.png",price:100,cat:"Holiday"},
{id:"decor-diwali-toran",name:"Diwali Toran",img:"images/items/Decor-diwali-toran-001.png",price:100,cat:"Holiday"},
{id:"rug-diwali-rangoli",name:"Diwali Rangoli",img:"images/items/Rug-diwali-rangoli-001.png",price:100,cat:"Rugs"},
{id:"rug-diwali-rangoli-002",name:"Diwali Rangoli 002",img:"images/items/Rug-diwali-rangoli-002.png",price:100,cat:"Rugs"},
{id:"rug-diwali-rangoli-003",name:"Diwali Rangoli 003",img:"images/items/Rug-diwali-rangoli-003.png",price:100,cat:"Rugs"},
{id:"decor-diwali-cushions",name:"Diwali Cushions",img:"images/items/decor-diwali-cushions-001.png",price:100,cat:"Holiday"},
{id:"trophy-questions-bronze",name:"Bronze Questions Trophy",img:"images/items/Trophy-questions-bronze.png",price:0,cat:"Trophies"},
{id:"trophy-questions-silver",name:"Silver Questions Trophy",img:"images/items/Trophy-questions-silver.png",price:0,cat:"Trophies"},
{id:"trophy-questions-gold",name:"Gold Questions Trophy",img:"images/items/Trophy-questions-gold.png",price:0,cat:"Trophies"},
{id:"trophy-streak-bronze",name:"Bronze Streak Trophy",img:"images/items/Trophy-streak-bronze.png",price:0,cat:"Trophies"},
{id:"trophy-streak-silver",name:"Silver Streak Trophy",img:"images/items/Trophy-streak-silver.png",price:0,cat:"Trophies"},
{id:"trophy-streak-gold",name:"Gold Streak Trophy",img:"images/items/Trophy-streak-gold.png",price:0,cat:"Trophies"},
{id:"trophy-coin-bronze",name:"Bronze Coin Trophy",img:"images/items/Trophy-coin-bronze.png",price:0,cat:"Trophies"},
{id:"trophy-coin-silver",name:"Silver Coin Trophy",img:"images/items/Trophy-coin-silver.png",price:0,cat:"Trophies"},
{id:"trophy-coin-gold",name:"Gold Coin Trophy",img:"images/items/Trophy-coin-gold.png",price:0,cat:"Trophies"},
{id:"trophy-furniture-bronze",name:"Bronze Furniture Trophy",img:"images/items/Trophy-furniture-bronze.png",price:0,cat:"Trophies"},
{id:"trophy-furniture-silver",name:"Silver Furniture Trophy",img:"images/items/Trophy-furniture-silver.png",price:0,cat:"Trophies"},
{id:"trophy-furniture-gold",name:"Gold Furniture Trophy",img:"images/items/Trophy-furniture-gold.png",price:0,cat:"Trophies"},
{id:"trophy-pet-bronze",name:"Bronze Pet Trophy",img:"images/items/Trophy-pet-bronze.png",price:0,cat:"Trophies"},
{id:"trophy-pet-silver",name:"Silver Pet Trophy",img:"images/items/Trophy-pet-silver.png",price:0,cat:"Trophies"},
{id:"trophy-pet-gold",name:"Gold Pet Trophy",img:"images/items/Trophy-pet-gold.png",price:0,cat:"Trophies"}
];

const collections=[
{name:"Classic Collection",emoji:"🎻",items:["bed-classic-blue","bed-classic-pink","bed-classic-white","bed-classic-yellow","chair-classic-wooden","decor-classic-stuffed-rabbit","drums-classic-blue","floors-classic-dark-wood","floors-classic-dark-wood-002","floors-classic-darkest-wood","floors-classic-darkest-wood-002","floors-classic-light-wood","floors-classic-light-wood-002","floors-classic-medium-wood","floors-classic-medium-wood-002","harp-classic-light","piano-classic-black","walls-classic-blue","walls-classic-green","walls-classic-orange","walls-classic-pink","walls-classic-purple","walls-classic-red","walls-classic-teal","walls-classic-yellow","walls-classic-black","walls-classic-white"]},
{name:"Retro Collection",emoji:"📺",items:["bed-retro-blue","bed-retro-green","bed-retro-red","bed-retro-yellow","chair-retro-cushioned","chair-retro-light-wood","chair-retro-red","chair-retro-red-002","chair-retro-yellow","coffeetable-retro-glass","couch-retro-green","couch-retro-red","decor-retro-butterfly-painting","decor-retro-mirror","decor-retro-record-machine","decor-retro-rubber-tree-plant","decor-retro-wall-clock","endtable-retro-wooden","table-retro-glass","decor-retro-lamp","rug-retro-blue","rug-retro-frame","rug-retro-gray","rug-retro-patterned"]},
{name:"Antique Collection",emoji:"🕰️",items:["couch-antique-cream","bed-antique-green","couch-antique-green","decor-antique-flowers","decor-antique-globe","decor-antique-grandfather-clock","decor-antique-painting","decor-antique-painting-002","decor-antique-phonograph","desk-antique-dark-wood","fireplace-antique-wood","fireplace-antique-wood-002","floors-antique-blue-carpet","floors-antique-brown-carpet","floors-antique-green-carpet","floors-antique-red-carpet","harp-antique-dark-wood","organ-antique-wooden","piano-antique-wooden","vanity-antique-dark-wood","viola-antique-wooden"]},
{name:"Basic Collection",emoji:"🛋️",items:["bed-white","chair-basic-red","chair-basic-yellow","couch-basic-brown","dresser-basic-cream","dresser-basic-dark-brown","couch-blue","couch-green","couch-red","couch-yellow","tv-basic-dark","tv-basic-light","table-basic-covered","floor-basic-teal-carpet","rug-basic-geometric-black","rug-basic-geometric-purple","rug-basic-swirl-blue","rug-basic-swirl-green","window-basic-large","window-basic-small"]},
{name:"Cute Collection",emoji:"🎀",items:["bed-cute-pink","bookcase-cute-small","bookcase-cute-white","chair-cute-pink","chair-cute-pink-002","couch-cute-pink","couch-cute-white","decor-cute-shelves","decor-cute-stuffed-bunny","decor-cute-teddy-bear","fireplace-cute-white","table-cute-heart","walls-cute-pink","walls-cute-purple","walls-cute-yellow","window-cute-white","decor-cute-stuffed-unicorn","floor-cute-pink-carpet"]},
{name:"Wizard Collection",emoji:"🧙",items:["bookcase-wizard","decor-wizard-book-pile","decor-wizard-book-pile-002","decor-wizard-cauldron","decor-wizard-painting","decor-wizard-potion-table","decor-wizard-shelves","desk-wizard","decor-wizard-mushroom","moon-stars","crystal-ball","bed-wizard-lavender","chair-wizard-purple","couch-wizard-blue","decor-wizard-candle","dresser-wizard-wooden","rug-wizard-blue","window-wizard-moon"]},
{name:"Halloween Collection",emoji:"🎃",items:["jackolantern","decor-halloween-candles","decor-halloween-cauldron","decor-halloween-dead-tree","decor-halloween-jackolantern-002","decor-halloween-pumpkin-stack","decor-halloween-skull","decor-halloween-string-lights","decor-halloween-wheel-barrow","decor-halloween-witch-hat","pets-halloween-ghost-dog","pets-halloween-happy-pumpkkin","pets-halloween-pumpkin-turtle","pets-halloween-skeleton","pets-halloween-skeleton-cat","pets-halloween-tall-ghost"]},
{name:"Cozy Collection",emoji:"🩷",items:["chair-cozy-pink","couch-cozy-pink","cozy-calendar-pink","cozy-candles","cozy-flowers-pink","dresser-cozy-pink","cozy-friend","piano-cozy-pink","table-cozy-pink","vanity-cozy-pink","bed-cozy-pink","bed-cozy-yellow","couch-cozy-orange","couch-cozy-purple","decor-cute-stuffed-unicorn"]},
{name:"Opulent Collection",emoji:"👑",items:["bed-opulent-purple-wood","bed-opulent-yellow-wood","couch-opulent-leather-couch","decor-opulent-billiards-table","decor-opulent-judge-painting","decor-opulent-map-painting","decor-opulent-moose-head","decor-opulent-ship-display","decor-opulent-suitcase-stack","desk-opulent-wooden-study","fireplace-opulent-wooden","rug-opulent-bear-skin","table-opulent-wooden","vanity-opulent-wooden"]},
{name:"Diwali Collection",emoji:"🪔",items:["decor-diwali-diya-row","decor-diwali-elephant-statue","decor-diwali-floating-flowers","decor-diwali-kandil-lantern","decor-diwali-lanterns","decor-diwali-marigold-strand","decor-diwali-peacock-statue","decor-diwali-string-lights","decor-diwali-toran","rug-diwali-rangoli","rug-diwali-rangoli-002","rug-diwali-rangoli-003","decor-diwali-cushions"]},
{name:"Angel Collection",emoji:"☁️",items:["bed-angel-cream","chair-angel-cream","couch-angel-cream","dresser-angel-cream","table-angel-cream","floors-angel-cream-tiles","harp-angel-white","piano-angel-white","pets-chao-hero"]},
{name:"Goth Collection",emoji:"🖤",items:["chair-goth-black","chair-goth-purple","couch-goth-purple","table-goth-purple","decor-goth-shelves","candles-sunset","gamma","pets-chao-dark","wallpaper-goth-eyes"]},
{name:"Floral Collection",emoji:"🌸",items:["floral-vines","floral-terrarium","dresser-floral-white","bookcase-floral","decor-floral-purple-box","decor-floral-yellow-box","wallpaper-floral-black","wallpaper-floral-green"]},
{name:"Rattan Collection",emoji:"🪴",items:["bathroom-rattan-sink","bed-rattan-blue","couch-rattan-blue","couch-rattan-white","decor-rattan-cushion-green","decor-rattan-ukelele","rug-rattan-cream-and-blue","vanity-rattan-light"]},
{name:"Sweets Collection",emoji:"🍓",items:["bed-sweets-strawberry","bookcase-sweets-ice-cream","couch-sweets-pink","dresser-sweets-chocolate","endtable-sweets-cream"]},
{name:"Geode Collection",emoji:"💎",items:["chair-geode-purple","geode-purple","endtable-geode","table-geode-blue"]},
{name:"Hello Kitty Collection",emoji:"🎀",items:["bed-hellokitty","decor-hellokitty-clock","decor-hellokitty-plant","dresser-hellokitty"]},
{name:"Deco Collection",emoji:"✨",items:["chair-deco-green","chair-deco-red"]},
{name:"Mermaid Collection",emoji:"🧜",items:["wallpaper-mermaid-blue","wallpaper-mermaid-lavender"]}
];
let s={screen:"setup",first:"",initial:"",coins:100,xp:0,streak:0,inventory:[],placed:[],wall:"plain",floor:"plain",q:null,answered:0,correct:0,loot:null,favorites:[],achievements:[],completedCollections:[],favoriteCollections:[],lifetime:{purchases:0,sales:0,mysteryBoxes:0,petsPetted:0,flips:0}};
const app=document.querySelector("#app");
const SAVE_KEY="huskyHabitatsSaveV1";
const EXPANSIONS=["north","south","east","west"];
const EXPANSION_COST=400;
let activeRoom="center";
function ensureRooms(){
 if(!s.rooms||typeof s.rooms!=="object")s.rooms={};
 if(!s.rooms.center)s.rooms.center={wall:s.wall||"plain",floor:s.floor||"plain"};
 for(const d of EXPANSIONS)if(s.rooms[d]&&!s.rooms[d].wall)s.rooms[d].wall="plain";
 for(const d of EXPANSIONS)if(s.rooms[d]&&!s.rooms[d].floor)s.rooms[d].floor="plain";
 if(!Array.isArray(s.placed))s.placed=[];
 s.placed.forEach(p=>{if(!p.room||(!s.rooms[p.room]&&p.room!=="center"))p.room="center"});
 if(typeof s.highScore!=="number")s.highScore=roomScore();
 s.highScore=Math.max(s.highScore,roomScore());
 if(!s.expansionClaims||typeof s.expansionClaims!=="object")s.expansionClaims={};
 if(!s.expansionPurchases||typeof s.expansionPurchases!=="number")s.expansionPurchases=0;
 if(!s.rooms[activeRoom])activeRoom="center";
}
function expansionCredits(){return [25,50,75,100].filter(n=>s.highScore>=n).length-Object.keys(s.expansionClaims).length}
function unlockRoom(direction,paid=false){
 ensureRooms();
 if(!EXPANSIONS.includes(direction)||s.rooms[direction])return;
 const free=expansionCredits()>0;
 if(!free&&!paid){alert("Earn a house-score milestone or buy this room for "+EXPANSION_COST+" coins.");return}
 if(!free&&s.coins<EXPANSION_COST){alert("You need "+(EXPANSION_COST-s.coins)+" more coins.");return}
 if(free)s.expansionClaims[direction]=true;
 else{s.coins-=EXPANSION_COST;s.expansionPurchases++}
 s.rooms[direction]={wall:"plain",floor:"plain"};
 activeRoom=direction;saveSilently();render();panel("expansions");
}
function roomDecor(id){return s.rooms[id]||s.rooms.center}
function setActiveRoom(id){if(!s.rooms[id])return;activeRoom=id;render();panel("inventory")}
function expansionsPanel(p){
 ensureRooms();
 p.innerHTML='<h2>🏠 Expand Your Habitat</h2><p class="tiny">Your starter room stays in the center. Unlock a North, South, East, or West room. Each room can have its own wallpaper and flooring.</p><p><b>Highest house score:</b> '+s.highScore+' · <b>Free expansions ready:</b> '+Math.max(0,expansionCredits())+'</p><p class="tiny">Score milestones: 25, 50, 75, 100. Otherwise buy a room early for 🪙 '+EXPANSION_COST+'. Unlocked rooms stay forever.</p><div class="expansion-grid">'+EXPANSIONS.map(d=>'<div class="expansion-card"><b>'+d[0].toUpperCase()+d.slice(1)+' Room</b><div class="tiny">'+(s.rooms[d]?'✓ Unlocked':expansionCredits()>0?'🎉 Free expansion available':'🪙 '+EXPANSION_COST+' or reach the next milestone')+'</div><button class="secondary" data-expand="'+d+'" '+(s.rooms[d]||(!expansionCredits()&&s.coins<EXPANSION_COST)?'disabled':'')+'>'+(s.rooms[d]?'Owned':expansionCredits()>0?'Unlock Free':'Buy Room')+'</button></div>').join("")+'</div>';
 p.querySelectorAll("[data-expand]").forEach(b=>b.onclick=()=>unlockRoom(b.dataset.expand,true));
}

let shopUi={cat:"All",query:"",sort:"az",favoritesFirst:false,ownedFirst:false};
let inventoryUi={sort:"az",favoritesFirst:true};
function saveGame(){
  try{if(s.screen==="game"){s.highScore=Math.max(s.highScore||0,roomScore())}
    localStorage.setItem(SAVE_KEY,JSON.stringify(s));
    showSaveStatus("Saved! 💾");
  }catch(e){
    showSaveStatus("Could not save on this browser.");
  }
}
function loadGame(){
  try{
    const raw=localStorage.getItem(SAVE_KEY);
    if(!raw)return false;
    const saved=JSON.parse(raw);
    s={...s,...saved,screen:"game"}; if(typeof s.questionLocked!=="boolean")s.questionLocked=false;
    if(!Array.isArray(s.favorites))s.favorites=[];
    if(!Array.isArray(s.achievements))s.achievements=[];
    if(!Array.isArray(s.completedCollections))s.completedCollections=[];
    if(!Array.isArray(s.favoriteCollections))s.favoriteCollections=[];
    if(typeof s.correct!=="number")s.correct=Math.floor((s.xp||0)/10);
    ensureRooms();
    syncTrophies();
    if(!s.lifetime||typeof s.lifetime!=="object")s.lifetime={purchases:0,sales:0,mysteryBoxes:0,petsPetted:0,flips:0};
    for(const k of ["purchases","sales","mysteryBoxes","petsPetted","flips"])if(typeof s.lifetime[k]!=="number")s.lifetime[k]=0;
    render();
    showSaveStatus("Loaded saved habitat.");
    return true;
  }catch(e){return false}
}
function showSaveStatus(msg){
  let el=document.querySelector("#saveStatus");
  if(!el)return;
  el.textContent=msg;
  clearTimeout(showSaveStatus.t);
  showSaveStatus.t=setTimeout(()=>{if(el)el.textContent=""},1800);
}

function collectionForItem(id){return collections.find(c=>c.items.includes(id))||null}
function roomItemIds(){
  const ids=s.placed.map(p=>p.id);
  const rooms=s.rooms&&Object.keys(s.rooms).length?Object.values(s.rooms):[{wall:s.wall,floor:s.floor}];
  rooms.forEach(r=>{if(catalog.some(x=>x.id===r.wall))ids.push(r.wall);if(catalog.some(x=>x.id===r.floor))ids.push(r.floor)});

  return ids;
}
function roomScore(){
  const ids=roomItemIds();
  const counts={};ids.forEach(id=>counts[id]=(counts[id]||0)+1);
  let total=0,used=new Set();
  collections.forEach(col=>{
    const unique=col.items.filter(id=>counts[id]>0&&!used.has(id));
    const mult=Math.max(1,unique.length);
    unique.forEach(id=>{
      const x=catalog.find(a=>a.id===id);
      const base=x&&x.cat==="Pets"?2:1;
      total+=base*mult;
      used.add(id);
      if(counts[id]>1)total+=base*(counts[id]-1);
    });
  });
  Object.entries(counts).forEach(([id,count])=>{
    if(used.has(id))return;
    const x=catalog.find(a=>a.id===id);
    const base=x&&x.cat==="Pets"?2:1;
    total+=base*count;
  });
  return total;
}
function toggleFavorite(id){
  const i=s.favorites.indexOf(id);
  if(i>=0)s.favorites.splice(i,1);else s.favorites.push(id);
  saveSilently();
}
function toggleCollectionFavorite(name){
  const i=s.favoriteCollections.indexOf(name);
  if(i>=0)s.favoriteCollections.splice(i,1);else s.favoriteCollections.push(name);
  saveSilently();
}
function saveSilently(){try{if(s.screen==="game"){s.highScore=Math.max(s.highScore||0,roomScore())}localStorage.setItem(SAVE_KEY,JSON.stringify(s))}catch(e){}}
function makeSaveCode(){
  const payload={...s,screen:"game",q:null,loot:null,questionLocked:false,saveVersion:1};
  delete payload.saveVersion;
  const json=JSON.stringify(payload);
  return "HH1-"+btoa(unescape(encodeURIComponent(json)));
}
function applySaveCode(code){
  try{
    const raw=code.trim().replace(/^HH1-/,"");
    const saved=JSON.parse(decodeURIComponent(escape(atob(raw))));
    s={...s,...saved,screen:"game",q:null,loot:null,questionLocked:false};
    if(!Array.isArray(s.favorites))s.favorites=[];
    if(!Array.isArray(s.achievements))s.achievements=[];
    if(!Array.isArray(s.completedCollections))s.completedCollections=[];
    if(!Array.isArray(s.favoriteCollections))s.favoriteCollections=[];
    if(typeof s.correct!=="number")s.correct=Math.floor((s.xp||0)/10);
    syncTrophies();
    if(!s.lifetime||typeof s.lifetime!=="object")s.lifetime={purchases:0,sales:0,mysteryBoxes:0,petsPetted:0,flips:0};
    for(const k of ["purchases","sales","mysteryBoxes","petsPetted","flips"])if(typeof s.lifetime[k]!=="number")s.lifetime[k]=0;
    saveSilently();
    render();
    showSaveStatus("Save code loaded!");
    return true;
  }catch(e){
    alert("That save code could not be loaded. Make sure you copied the whole code.");
    return false;
  }
}
function showSaveCode(startWithLoad=false){
  const old=document.querySelector(".savecode-overlay");if(old)old.remove();
  const el=document.createElement("div");el.className="savecode-overlay";
  const code=makeSaveCode();
  el.innerHTML='<div class="savecode-modal" role="dialog" aria-modal="true"><button class="savecode-close" type="button" aria-label="Close">×</button><h2>🔐 Save Codes</h2><p class="tiny">Copy your code to back up your habitat, or paste a saved code below to restore it.</p><label for="saveCodeBox"><b>Your Backup Code</b></label><textarea id="saveCodeBox" class="savecode-box" readonly>'+code+'</textarea><div class="savecode-actions"><button id="copySaveCode" class="primary" type="button">Copy Save Code</button></div><label for="loadSaveBox"><b>Load a Saved Habitat</b></label><textarea id="loadSaveBox" class="savecode-box" placeholder="Paste your HH1- save code here" spellcheck="false" autocomplete="off"></textarea><div class="savecode-actions"><button id="loadCodeHere" class="primary" type="button">Load Save Code</button></div><p id="loadCodeError" class="tiny" role="alert"></p></div>';
  document.body.appendChild(el);
  const close=()=>el.remove();
  el.querySelector(".savecode-close").onclick=close;
  el.addEventListener("click",e=>{if(e.target===el)close()});
  el.querySelector("#copySaveCode").onclick=async()=>{
    const box=el.querySelector("#saveCodeBox");box.select();
    try{await navigator.clipboard.writeText(box.value);el.querySelector("#copySaveCode").textContent="Copied! ✓"}
    catch(e){document.execCommand("copy");el.querySelector("#copySaveCode").textContent="Copied! ✓"}
  };
  el.querySelector("#loadCodeHere").onclick=()=>{
    const value=el.querySelector("#loadSaveBox").value.trim();
    if(!value){el.querySelector("#loadCodeError").textContent="Paste your save code first.";return}
    if(applySaveCode(value))close();
  };
  if(startWithLoad)el.querySelector("#loadSaveBox").focus();
}
function loadSaveCodePrompt(){showSaveCode(true)}
function totalPetsOwned(){return s.inventory.filter(id=>{const x=catalog.find(a=>a.id===id);return x&&x.cat==="Pets"}).length}
function uniquePetsOwned(){return new Set(s.inventory.filter(id=>{const x=catalog.find(a=>a.id===id);return x&&x.cat==="Pets"})).size}
function placedPets(){return s.placed.filter(p=>{const x=catalog.find(a=>a.id===p.id);return x&&x.cat==="Pets"}).length}
function maxCopiesOwned(){const counts={};let max=0;s.inventory.forEach(id=>{counts[id]=(counts[id]||0)+1;if(counts[id]>max)max=counts[id]});return max}
function placedCollectionNames(){return new Set(s.placed.map(p=>collectionForItem(p.id)).filter(Boolean).map(c=>c.name))}
function maxPlacedFromOneCollection(){let max=0;collections.forEach(c=>{const n=s.placed.filter(p=>c.items.includes(p.id)).length;if(n>max)max=n});return max}
function collectionComplete(name){const c=collections.find(x=>x.name===name);return !!(c&&c.items.length&&c.items.every(id=>ownedCount(id)>0))}
function completedCollectionNames(){return collections.filter(c=>c.items.length&&c.items.every(id=>ownedCount(id)>0)).map(c=>c.name)}
function checkCollectionComplete(){
  const now=completedCollectionNames();
  const newly=now.filter(n=>!s.completedCollections.includes(n));
  s.completedCollections=now;
  if(newly.length)showCollectionFanfare(newly[0]);
}
function showCollectionFanfare(name){
  const old=document.querySelector(".collection-fanfare");if(old)old.remove();
  const el=document.createElement("div");el.className="collection-fanfare";
  el.innerHTML='<div class="fanfare-card"><div class="fanfare-sparkle">✨</div><h2>COLLECTION COMPLETE!</h2><p>'+esc(name)+'</p><button class="primary" type="button">Awesome!</button></div>';
  document.body.appendChild(el);
  const close=()=>el.remove();el.querySelector("button").onclick=close;
  setTimeout(()=>{if(el.isConnected)close()},5000);
}
const achievementDefs=[
 // Questions
 {id:"correct-10",name:"Getting Started",desc:"Answer 10 questions correctly.",test:()=>s.correct>=10},
 {id:"correct-25",name:"On a Roll",desc:"Answer 25 questions correctly.",test:()=>s.correct>=25},
 {id:"correct-50",name:"Half Century",desc:"Answer 50 questions correctly.",test:()=>s.correct>=50},
 {id:"correct-75",name:"Rising Scholar",desc:"Answer 75 questions correctly.",test:()=>s.correct>=75},
 {id:"correct-100",name:"Century Club",desc:"Answer 100 questions correctly.",test:()=>s.correct>=100},
 {id:"correct-200",name:"Double Century",desc:"Answer 200 questions correctly.",test:()=>s.correct>=200},
 {id:"correct-300",name:"Knowledge Machine",desc:"Answer 300 questions correctly.",test:()=>s.correct>=300},
 {id:"correct-400",name:"Homework Hero",desc:"Answer 400 questions correctly.",test:()=>s.correct>=400},
 {id:"correct-500",name:"Knowledge Keeper",desc:"Answer 500 questions correctly.",test:()=>s.correct>=500},
 {id:"correct-750",name:"Brainiac",desc:"Answer 750 questions correctly.",test:()=>s.correct>=750},
 {id:"correct-1000",name:"Husky Legend",desc:"Answer 1,000 questions correctly.",test:()=>s.correct>=1000},
 {id:"correct-1500",name:"Still Going?!",desc:"Answer 1,500 questions correctly.",test:()=>s.correct>=1500},
 {id:"correct-2000",name:"Unstoppable",desc:"Answer 2,000 questions correctly.",test:()=>s.correct>=2000},
 {id:"correct-2500",name:"Scholar Supreme",desc:"Answer 2,500 questions correctly.",test:()=>s.correct>=2500},
 {id:"correct-5000",name:"Walking Encyclopedia",desc:"Answer 5,000 questions correctly.",test:()=>s.correct>=5000},

 // Streaks
 {id:"streak-5",name:"Heating Up",desc:"Reach a 5-answer streak.",test:()=>s.streak>=5},
 {id:"streak-10",name:"Hot Streak",desc:"Reach a 10-answer streak.",test:()=>s.streak>=10},
 {id:"streak-25",name:"Locked In",desc:"Reach a 25-answer streak.",test:()=>s.streak>=25},
 {id:"streak-50",name:"No Mistakes Here",desc:"Reach a 50-answer streak.",test:()=>s.streak>=50},
 {id:"streak-75",name:"Laser Focus",desc:"Reach a 75-answer streak.",test:()=>s.streak>=75},
 {id:"streak-100",name:"Perfect Century",desc:"Reach a 100-answer streak.",test:()=>s.streak>=100},
 {id:"streak-150",name:"How?!",desc:"Reach a 150-answer streak.",test:()=>s.streak>=150},
 {id:"streak-250",name:"Untouchable",desc:"Reach a 250-answer streak.",test:()=>s.streak>=250},

 // Coins and shopping
 {id:"coins-500",name:"Pocket Change",desc:"Have 500 coins at one time.",test:()=>s.coins>=500},
 {id:"coins-1000",name:"Piggy Bank",desc:"Have 1,000 coins at one time.",test:()=>s.coins>=1000},
 {id:"coins-2500",name:"Big Saver",desc:"Have 2,500 coins at one time.",test:()=>s.coins>=2500},
 {id:"coins-5000",name:"Dragon Hoard",desc:"Have 5,000 coins at one time.",test:()=>s.coins>=5000},
 {id:"buy-1",name:"Window Shopper",desc:"Buy your first item.",test:()=>s.lifetime.purchases>=1},
 {id:"buy-10",name:"Shopping Spree",desc:"Buy 10 items.",test:()=>s.lifetime.purchases>=10},
 {id:"buy-25",name:"Retail Therapy",desc:"Buy 25 items.",test:()=>s.lifetime.purchases>=25},
 {id:"buy-50",name:"Frequent Shopper",desc:"Buy 50 items.",test:()=>s.lifetime.purchases>=50},
 {id:"buy-100",name:"Shopaholic",desc:"Buy 100 items.",test:()=>s.lifetime.purchases>=100},
 {id:"sell-1",name:"Secondhand Shop",desc:"Sell your first item.",test:()=>s.lifetime.sales>=1},
 {id:"sell-10",name:"Spring Cleaning",desc:"Sell 10 items.",test:()=>s.lifetime.sales>=10},
 {id:"box-1",name:"Mystery Shopper",desc:"Open your first Mystery Box.",test:()=>s.lifetime.mysteryBoxes>=1},
 {id:"box-10",name:"Feeling Lucky",desc:"Open 10 Mystery Boxes.",test:()=>s.lifetime.mysteryBoxes>=10},
 {id:"box-25",name:"Box Addict",desc:"Open 25 Mystery Boxes.",test:()=>s.lifetime.mysteryBoxes>=25},

 // Ownership
 {id:"own-1",name:"First Possession",desc:"Own your first item.",test:()=>s.inventory.length>=1},
 {id:"unique-25",name:"Room Starter",desc:"Own 25 unique items.",test:()=>new Set(s.inventory).size>=25},
 {id:"unique-50",name:"Habitat Hoarder",desc:"Own 50 unique items.",test:()=>new Set(s.inventory).size>=50},
 {id:"unique-100",name:"Mega Collector",desc:"Own 100 unique items.",test:()=>new Set(s.inventory).size>=100},
 {id:"unique-150",name:"Treasure Trove",desc:"Own 150 unique items.",test:()=>new Set(s.inventory).size>=150},
 {id:"unique-200",name:"Museum Curator",desc:"Own 200 unique items.",test:()=>new Set(s.inventory).size>=200},
 {id:"unique-250",name:"One of Everything",desc:"Own 250 unique items.",test:()=>new Set(s.inventory).size>=250},
 {id:"copies-2",name:"Double Trouble",desc:"Own 2 copies of one item.",test:()=>maxCopiesOwned()>=2},
 {id:"copies-5",name:"Why Stop at One?",desc:"Own 5 copies of one item.",test:()=>maxCopiesOwned()>=5},
 {id:"copies-10",name:"Okay, You REALLY Like That",desc:"Own 10 copies of one item.",test:()=>maxCopiesOwned()>=10},
 {id:"copies-25",name:"Army Builder",desc:"Own 25 copies of one item.",test:()=>maxCopiesOwned()>=25},

 // Collections
 {id:"collection-1",name:"Collector",desc:"Complete 1 collection.",test:()=>completedCollectionNames().length>=1},
 {id:"collection-3",name:"Collection Curator",desc:"Complete 3 collections.",test:()=>completedCollectionNames().length>=3},
 {id:"collection-5",name:"Master Collector",desc:"Complete 5 collections.",test:()=>completedCollectionNames().length>=5},
 {id:"collection-10",name:"Collection Connoisseur",desc:"Complete 10 collections.",test:()=>completedCollectionNames().length>=10},
 {id:"collection-12",name:"Gotta Get 'Em All",desc:"Complete 12 collections.",test:()=>completedCollectionNames().length>=12},
 {id:"collection-basic",name:"Basic, But Brilliant",desc:"Complete the Basic Collection.",test:()=>collectionComplete("Basic Collection")},
 {id:"collection-classic",name:"Class Act",desc:"Complete the Classic Collection.",test:()=>collectionComplete("Classic Collection")},
 {id:"collection-antique",name:"Old Soul",desc:"Complete the Antique Collection.",test:()=>collectionComplete("Antique Collection")},
 {id:"collection-retro",name:"Totally Retro",desc:"Complete the Retro Collection.",test:()=>collectionComplete("Retro Collection")},
 {id:"collection-cute",name:"Adorable",desc:"Complete the Cute Collection.",test:()=>collectionComplete("Cute Collection")},
 {id:"collection-cozy",name:"Maximum Cozy",desc:"Complete the Cozy Collection.",test:()=>collectionComplete("Cozy Collection")},
 {id:"collection-wizard",name:"Master of the Arcane",desc:"Complete the Wizard Collection.",test:()=>collectionComplete("Wizard Collection")},
 {id:"collection-angel",name:"Heavenly",desc:"Complete the Angel Collection.",test:()=>collectionComplete("Angel Collection")},
 {id:"collection-goth",name:"Creature of the Night",desc:"Complete the Goth Collection.",test:()=>collectionComplete("Goth Collection")},
 {id:"collection-floral",name:"In Full Bloom",desc:"Complete the Floral Collection.",test:()=>collectionComplete("Floral Collection")},
 {id:"collection-sweets",name:"Sweet Tooth",desc:"Complete the Sweets Collection.",test:()=>collectionComplete("Sweets Collection")},
 {id:"collection-geode",name:"Rock Collector",desc:"Complete the Geode Collection.",test:()=>collectionComplete("Geode Collection")},
 {id:"collection-hellokitty",name:"Hello, Kitty!",desc:"Complete the Hello Kitty Collection.",test:()=>collectionComplete("Hello Kitty Collection")},
 {id:"collection-deco",name:"Art Deco",desc:"Complete the Deco Collection.",test:()=>collectionComplete("Deco Collection")},

 // Pets
 {id:"pet-1",name:"New Best Friend",desc:"Own your first pet.",test:()=>totalPetsOwned()>=1},
 {id:"pets-10",name:"Pet Pack",desc:"Own 10 pets.",test:()=>totalPetsOwned()>=10},
 {id:"pets-unique-20",name:"Pet Paradise",desc:"Own 20 unique pets.",test:()=>uniquePetsOwned()>=20},
 {id:"pets-unique-30",name:"Dr. Dolittle",desc:"Own 30 unique pets.",test:()=>uniquePetsOwned()>=30},
 {id:"pets-placed-2",name:"Double the Cuteness",desc:"Place 2 pets in your room.",test:()=>placedPets()>=2},
 {id:"pets-placed-5",name:"Pet Party",desc:"Place 5 pets in your room.",test:()=>placedPets()>=5},
 {id:"pets-placed-10",name:"Petting Zoo",desc:"Place 10 pets in your room.",test:()=>placedPets()>=10},
 {id:"pets-placed-20",name:"Animal House",desc:"Place 20 pets in your room.",test:()=>placedPets()>=20},
 {id:"pet-25",name:"Best Friends Forever",desc:"Pet animals 25 times.",test:()=>s.lifetime.petsPetted>=25},
 {id:"pet-100",name:"Professional Petter",desc:"Pet animals 100 times.",test:()=>s.lifetime.petsPetted>=100},
 {id:"pet-500",name:"Please Let Them Rest",desc:"Pet animals 500 times.",test:()=>s.lifetime.petsPetted>=500},

 // Decorating
 {id:"placed-10",name:"Interior Designer",desc:"Place 10 items in your room.",test:()=>s.placed.length>=10},
 {id:"placed-25",name:"More Is More",desc:"Place 25 items in your room.",test:()=>s.placed.length>=25},
 {id:"placed-50",name:"Maximalist",desc:"Place 50 items in your room.",test:()=>s.placed.length>=50},
 {id:"placed-75",name:"Where Is the Floor?",desc:"Place 75 items in your room.",test:()=>s.placed.length>=75},
 {id:"wall-1",name:"Fresh Paint",desc:"Use a wallpaper.",test:()=>s.wall!=="plain"},
 {id:"floor-1",name:"New Floors",desc:"Use a flooring.",test:()=>s.floor!=="plain"},
 {id:"room-custom-10",name:"Make It Yours",desc:"Use wallpaper and flooring with 10 placed items.",test:()=>s.wall!=="plain"&&s.floor!=="plain"&&s.placed.length>=10},
 {id:"room-collections-5",name:"Mix & Match",desc:"Place items from 5 different collections.",test:()=>placedCollectionNames().size>=5},
 {id:"room-collections-10",name:"Eclectic Taste",desc:"Place items from 10 different collections.",test:()=>placedCollectionNames().size>=10},
 {id:"room-one-collection-10",name:"Commit to the Bit",desc:"Place 10 items from one collection.",test:()=>maxPlacedFromOneCollection()>=10},
 {id:"flip-1",name:"Turn Around",desc:"Flip an object.",test:()=>s.lifetime.flips>=1},
 {id:"flip-25",name:"No, the OTHER Way",desc:"Flip objects 25 times.",test:()=>s.lifetime.flips>=25},

 // Room score
 {id:"score-10",name:"Cozy Corner",desc:"Reach a Room Score of 10.",test:()=>roomScore()>=10},
 {id:"score-25",name:"Looking Good",desc:"Reach a Room Score of 25.",test:()=>roomScore()>=25},
 {id:"score-50",name:"Room with a View",desc:"Reach a Room Score of 50.",test:()=>roomScore()>=50},
 {id:"score-100",name:"Designer Habitat",desc:"Reach a Room Score of 100.",test:()=>roomScore()>=100},
 {id:"score-250",name:"Showroom",desc:"Reach a Room Score of 250.",test:()=>roomScore()>=250},
 {id:"score-500",name:"Dream Habitat",desc:"Reach a Room Score of 500.",test:()=>roomScore()>=500},
 {id:"score-1000",name:"Architectural Marvel",desc:"Reach a Room Score of 1,000.",test:()=>roomScore()>=1000},

 // Special
 {id:"jimothy-10",name:"Jimothy's Chosen",desc:"Own 10 Jimothys.",test:()=>ownedCount("pets-jimothy")>=10},
 {id:"gamma-25",name:"Gamma Gamma Gamma",desc:"Own 25 Gammas.",test:()=>ownedCount("gamma")>=25},
 {id:"frog-25",name:"Frog Situation",desc:"Place 25 frogs in your room.",test:()=>s.placed.filter(p=>p.id==="pets-frog").length>=25}
]
const trophyAwards={"correct-100":"trophy-questions-bronze","correct-300":"trophy-questions-silver","correct-500":"trophy-questions-gold","streak-25":"trophy-streak-bronze","streak-50":"trophy-streak-silver","streak-100":"trophy-streak-gold","buy-10":"trophy-coin-bronze","buy-25":"trophy-coin-silver","buy-50":"trophy-coin-gold","placed-10":"trophy-furniture-bronze","placed-25":"trophy-furniture-silver","placed-50":"trophy-furniture-gold","pets-10":"trophy-pet-bronze","pets-unique-20":"trophy-pet-silver","pets-unique-30":"trophy-pet-gold"};
function syncTrophies(){if(!Array.isArray(s.inventory))s.inventory=[];for(const [achievement,id] of Object.entries(trophyAwards)){if(s.achievements.includes(achievement)&&!s.inventory.includes(id))s.inventory.push(id)}}
function checkAchievements(){
  const newly=[];
  achievementDefs.forEach(a=>{if(a.test()&&!s.achievements.includes(a.id)){s.achievements.push(a.id);newly.push(a)}});
  syncTrophies();
  if(newly.length)showAchievement(newly[0]);
}
function showAchievement(a){
  const old=document.querySelector(".achievement-toast");if(old)old.remove();
  const el=document.createElement("div");el.className="achievement-toast";
  el.innerHTML='<b>🏆 Achievement Unlocked!</b><span>'+esc(a.name)+'</span><small>'+esc(a.desc)+'</small>';
  document.body.appendChild(el);setTimeout(()=>el.remove(),4000);
}
const musicalItemIds=new Set(["piano-cozy-pink","decor-antique-phonograph","decor-retro-record-machine","drums-classic-blue","harp-angel-white","harp-antique-dark-wood","harp-classic-light","organ-antique-wooden","piano-angel-white","piano-antique-wooden","piano-classic-black","viola-antique-wooden"]);
function isMusicalItem(x){return !!x&&musicalItemIds.has(x.id)}
function hideItemControls(){const old=document.querySelector(".item-size-controls");if(old)old.remove()}
function showItemControls(index,el){
 hideItemControls();if(!s.placed[index])return;
 const c=document.createElement("div");c.className="item-size-controls";c.dataset.forPlace=index;
 const item=catalog.find(a=>a.id===s.placed[index].id);if(item&&item.cat==="Pets")c.dataset.pet="true";
 const current=s.placed[index].size||"normal";
 c.innerHTML='<div class="size-row"><button data-size="small" class="'+(current==="small"?"active":"")+'" title="Small" aria-label="Small">−</button><button data-size="normal" class="'+(current==="normal"?"active":"")+'" title="Normal" aria-label="Normal">○</button><button data-size="large" class="'+(current==="large"?"active":"")+'" title="Large" aria-label="Large">+</button></div><div class="edit-row"><button data-lock="1" title="Lock or unlock position" aria-label="Lock or unlock position">'+(s.placed[index].locked?'🔒':'🔓')+'</button><button data-flip="1" title="Flip" aria-label="Flip">↔</button><button data-layer="-1" title="Move backward one layer" aria-label="Move backward one layer">↓</button><button data-layer="1" title="Move forward one layer" aria-label="Move forward one layer">↑</button></div>';
 el.closest(".house-room").appendChild(c);
 const roomRect=el.closest(".house-room").getBoundingClientRect(),r=el.getBoundingClientRect();
 let left=r.left-roomRect.left+r.width/2,top=r.bottom-roomRect.top+8;
 c.style.left=left+"px";c.style.top=top+"px";
 const lockBtn=c.querySelector("[data-lock]");if(lockBtn)lockBtn.onclick=e=>{e.preventDefault();e.stopPropagation();s.placed[index].locked=!s.placed[index].locked;saveSilently();render();const el=document.querySelector('.placed[data-place="'+index+'"]');if(el)showItemControls(index,el)};
 const flipBtn=c.querySelector("[data-flip]");if(flipBtn)flipBtn.onclick=e=>{e.preventDefault();e.stopPropagation();turnItem(index)};
 c.querySelectorAll("[data-layer]").forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();moveItemLayer(index,+b.dataset.layer)});
 c.querySelectorAll("[data-size]").forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();setItemSize(index,b.dataset.size)});
}
function moveItemLayer(index,direction){
 const target=index+direction;
 if(!s.placed[index]||target<0||target>=s.placed.length)return;
 if((catalog.find(x=>x.id===s.placed[index].id)?.cat==="Rugs")!==(catalog.find(x=>x.id===s.placed[target].id)?.cat==="Rugs"))return;
 [s.placed[index],s.placed[target]]=[s.placed[target],s.placed[index]];
 saveSilently();render();
 const el=document.querySelector('.placed[data-place="'+target+'"]');if(el)showItemControls(target,el);
}
function setItemSize(index,size){
 if(!s.placed[index]||!["small","normal","large"].includes(size))return;
 s.placed[index].size=size;saveSilently();render();
 const el=document.querySelector('.placed[data-place="'+index+'"]');if(el)showItemControls(index,el);
}
function musicNotes(el){
 ["♪","♫","♪"].forEach((note,i)=>{
   const n=document.createElement("span");n.className="music-note";n.textContent=note;n.style.setProperty("--note-x",((i-1)*18)+"px");n.style.animationDelay=(i*.12)+"s";el.appendChild(n);setTimeout(()=>n.remove(),2600);
 });
}
function petHeart(el){
  s.lifetime.petsPetted++;checkAchievements();saveSilently();
  const h=document.createElement("span");h.className="pet-heart";h.textContent="♥";el.appendChild(h);setTimeout(()=>h.remove(),3000);
}
function roomScoreBreakdown(){
  const ids=roomItemIds();
  const counts={};ids.forEach(id=>counts[id]=(counts[id]||0)+1);
  const rows=[];
  const used=new Set();

  collections.forEach(col=>{
    const unique=col.items.filter(id=>counts[id]>0&&!used.has(id));
    if(!unique.length)return;
    const mult=Math.max(1,unique.length);
    const items=[];
    let subtotal=0;

    unique.forEach(id=>{
      const x=catalog.find(a=>a.id===id);
      const base=x&&x.cat==="Pets"?2:1;
      const points=base*mult;
      subtotal+=points;
      items.push({name:x?x.name:id,base,mult,points,duplicate:false});
      used.add(id);

      if(counts[id]>1){
        const extras=counts[id]-1;
        subtotal+=base*extras;
        for(let i=0;i<extras;i++)items.push({name:(x?x.name:id)+" (extra copy)",base,mult:1,points:base,duplicate:true});
      }
    });

    rows.push({label:col.name,subtotal,items});
  });

  const others=[];
  let otherSubtotal=0;
  Object.entries(counts).forEach(([id,count])=>{
    if(used.has(id))return;
    const x=catalog.find(a=>a.id===id);
    const base=x&&x.cat==="Pets"?2:1;
    for(let i=0;i<count;i++){
      others.push({name:x?x.name:id,base,mult:1,points:base,duplicate:false});
      otherSubtotal+=base;
    }
  });
  if(others.length)rows.push({label:"Other Items",subtotal:otherSubtotal,items:others});
  return rows;
}
function showScoreBreakdown(){
  const old=document.querySelector(".score-overlay");if(old)old.remove();
  const rows=roomScoreBreakdown();
  const el=document.createElement("div");el.className="score-overlay";
  const content=rows.length?rows.map(group=>{
    return '<section class="score-group"><div class="score-group-head"><b>'+esc(group.label)+'</b><span>'+group.subtotal+' pts</span></div><div class="score-lines">'+group.items.map(item=>{
      const math=item.mult>1?(item.base+' × '+item.mult+' = '+item.points):(item.points+' point'+(item.points===1?'':'s'));
      return '<div class="score-line"><span>'+esc(item.name)+'</span><span>'+math+'</span></div>';
    }).join("")+'</div></section>';
  }).join(""):'<p class="tiny">Place some items in your room to start earning points.</p>';
  el.innerHTML='<div class="score-modal" role="dialog" aria-modal="true" aria-labelledby="scoreTitle"><button class="score-close" type="button" aria-label="Close room score">×</button><h2 id="scoreTitle">🏆 Room Score: '+roomScore()+'</h2>'+content+'<p class="score-note"><b>Collection Bonus:</b> Different items from the same collection multiply each other. Duplicate copies still earn their base points but do not increase the multiplier.</p></div>';
  document.body.appendChild(el);
  const close=()=>el.remove();
  el.querySelector(".score-close").onclick=close;
  el.addEventListener("click",e=>{if(e.target===el)close()});
  document.addEventListener("keydown",function scoreEsc(e){if(e.key==="Escape"){close();document.removeEventListener("keydown",scoreEsc)}}); 
}
function showHelp(){
 const old=document.querySelector(".help-overlay");if(old)old.remove();
 const el=document.createElement("div");el.className="help-overlay";
 el.innerHTML='<div class="help-modal" role="dialog" aria-modal="true" aria-labelledby="helpTitle"><button class="help-close" type="button" aria-label="Close instructions">×</button><h2 id="helpTitle">❓ How to Play Husky Habitats</h2><div class="help-sections"><section><h3>Top Icons</h3><p>🪙 Coins = spend them in the shop.<br>⭐ XP = how much experience you have earned.<br>🔥 Streak = correct answers in a row.<br>🏆 Room Score = how many decorating points your room has.</p></section><section><h3>Earn Coins & Prizes</h3><p>Answer questions correctly to earn coins and XP. Every 25 correct answers in a row earns a free random item. Mystery Boxes cost 200 coins and give 3 random items. Duplicates are possible.</p></section><section><h3>Decorating</h3><p>Open Inventory to place items, then drag them where you want. Want something on top of something else? Items placed later appear in front. Remove and place an item again to bring it to the front. Click or tap any placed item for editing controls, including 🔓 to lock its position (🔒 means locked). Rugs automatically sit behind other items. Use Clear Room to remove all placed items without losing anything you own. Tap an item image in the shop to see a larger preview. Use − for small, ○ for normal, + for large, ↔ to flip it, ↓ to move it one layer behind, and ↑ to move it one layer in front.</p></section><section><h3>Pets</h3><p>Pets are worth 2 room-score points instead of 1. Click a pet in your room to pet it and make a little heart appear. ♥ Musical instruments and music players make floating music notes when clicked. ♪</p></section><section><h3>Room Score</h3><p>Most items are worth 1 point. Pets are worth 2. Different items from the same collection multiply each other: 2 matching collection items = ×2, 3 = ×3, and so on. Duplicate copies do not increase the multiplier, but they still give their normal points.</p></section><section><h3>Collections & Favorites</h3><p>The Collections tab shows what you own. Completing a collection gives a celebration. You can ★ favorite a collection you are working toward, and ★ favorite shop items so they are easier to find later.</p></section><section><h3>Saving</h3><p>Quick Save may not survive a Google Sites refresh. Use Save Code for a reliable backup. Copy the code somewhere safe, then use Load Save Code to restore your room and progress. Weekly questions are not stored in the code.</p></section></div></div>';
 document.body.appendChild(el);
 const close=()=>el.remove();
 el.querySelector(".help-close").onclick=close;
 el.addEventListener("click",e=>{if(e.target===el)close()});
 document.addEventListener("keydown",function escClose(e){if(e.key==="Escape"){close();document.removeEventListener("keydown",escClose)}}); 
}
function render(){
 if(s.screen==="setup")return setup();
 ensureRooms();
 const roomMarkup=id=>{
 const r=roomDecor(id),wallItem=catalog.find(x=>x.id===r.wall),floorItem=catalog.find(x=>x.id===r.floor);
 const unlocked=!!s.rooms[id];
 if(!unlocked)return '<button class="house-locked" data-locked-room="'+id+'" title="Unlock '+id+' room">🔒<span>'+id.toUpperCase()+'</span></button>';
 return '<div class="house-room '+(activeRoom===id?'selected':'')+'" data-room="'+id+'"><div class="wall-surface" style="background-image:'+(wallItem&&wallItem.img?'url(&quot;'+wallItem.img+'&quot;)':'none')+'"></div><div class="floor-surface" style="background-image:'+(floorItem&&floorItem.img?'url(&quot;'+floorItem.img+'&quot;)':'none')+'"></div><div class="baseboard"></div><button class="room-label" data-select-room="'+id+'">'+(id==="center"?'Starter':id[0].toUpperCase()+id.slice(1))+' ✎</button>'+s.placed.map((p,i)=>{if((p.room||"center")!==id)return "";const x=catalog.find(a=>a.id===p.id);if(!x)return "";const flip=p.dir==="right"?" flipped":"";const musical=isMusicalItem(x);const size=p.size||"normal";return '<button class="placed turnable size-'+size+(x.cat==="Pets"?' pet-place':'')+(musical?' music-place':'')+(p.locked?' item-locked':'')+'" data-place="'+i+'" style="left:'+p.x+'%;top:'+p.y+'%" aria-label="Move '+esc(x.name)+'">'+itemVisual(x,"room",flip,x.cat==="Pets"?i:null)+'</button>'}).join("")+'</div>';
 };
 app.innerHTML='<div class="shell"><div class="topbar"><div><b>🐾 Husky Habitats</b><div class="tiny">'+esc(s.first)+' '+esc(s.initial)+'.\'s House</div></div><div class="stats"><span id="coinPill" class="pill" title="Coins">🪙 '+s.coins+'</span><span id="xpPill" class="pill" title="XP">⭐ '+s.xp+' XP</span><span id="streakPill" class="pill" title="Streak">🔥 '+s.streak+'</span><button id="scoreBtn" class="pill score-pill" title="See your house score">🏆 '+roomScore()+'</button><button id="helpBtn" class="save-btn">❓ How to Play</button><button id="saveBtn" class="save-btn">💾 Quick Save</button><button id="saveCodeBtn" class="save-btn">🔐 Save Code</button><span id="saveStatus" class="save-status" aria-live="polite"></span></div></div><div class="house-hint">🏠 Decorating: <b>'+activeRoom[0].toUpperCase()+activeRoom.slice(1)+'</b> room · Click a room name to switch · Drag items between rooms</div><div id="room" class="room house"><div class="house-grid"><div class="house-slot north">'+roomMarkup("north")+'</div><div class="house-slot west">'+roomMarkup("west")+'</div><div class="house-slot center">'+roomMarkup("center")+'</div><div class="house-slot east">'+roomMarkup("east")+'</div><div class="house-slot south">'+roomMarkup("south")+'</div></div><div id="questionOverlay" class="question-overlay hidden"></div></div><div class="nav"><button class="primary" data-view="questions">📚 Answer Questions</button><button class="secondary" data-view="shop">🛍️ Shop</button><button class="secondary" data-view="inventory">🎒 Inventory</button><button class="secondary" data-view="expansions">🏠 Expand House</button><button class="secondary" data-view="collections">📖 Collections</button><button class="secondary" data-view="achievements">🏆 Achievements</button><button class="secondary" id="clearRoomBtn">🧹 Clear Selected Room</button></div><div id="panel" class="card panel"></div></div>';
 document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>{if(b.dataset.view==="questions")showQuestionOverlay();else panel(b.dataset.view)});
 const clearRoomBtn=document.querySelector("#clearRoomBtn");if(clearRoomBtn)clearRoomBtn.onclick=()=>{if(!s.placed.some(x=>(x.room||"center")===activeRoom))return;if(confirm("Remove all placed items from this room? You will keep everything you own, your coins, and your progress.")){s.placed=s.placed.filter(x=>(x.room||"center")!==activeRoom);saveSilently();render();}};
 const scoreBtn=document.querySelector("#scoreBtn"); if(scoreBtn)scoreBtn.onclick=showScoreBreakdown;
 const helpBtn=document.querySelector("#helpBtn"); if(helpBtn)helpBtn.onclick=showHelp;
 const saveBtn=document.querySelector("#saveBtn"); if(saveBtn)saveBtn.onclick=saveGame;
 const saveCodeBtn=document.querySelector("#saveCodeBtn"); if(saveCodeBtn)saveCodeBtn.onclick=showSaveCode;
 document.querySelectorAll("[data-select-room]").forEach(b=>b.onclick=()=>setActiveRoom(b.dataset.selectRoom));
 document.querySelectorAll("[data-locked-room]").forEach(b=>b.onclick=()=>panel("expansions"));
 enableDragging();
 document.querySelectorAll(".placed").forEach(b=>{
   b.addEventListener("click",e=>{
     if(b.classList.contains("dragging"))return;
     e.stopPropagation();
     const idx=+b.dataset.place;
     showItemControls(idx,b);
     if(b.classList.contains("pet-place"))petHeart(b);
     if(b.classList.contains("music-place"))musicNotes(b);
   });
 });
 const room=document.querySelector("#room");if(room)room.addEventListener("click",e=>{if(e.target===room||e.target.classList.contains("wall-surface")||e.target.classList.contains("floor-surface"))hideItemControls()});
 const p=document.querySelector("#panel");if(p)p.innerHTML='<p class="tiny">Choose Answer Questions, Shop, Inventory, Collections, or Achievements.</p>';
}
function setup(){
 app.innerHTML='<div class="shell"><div class="card setup-card"><h1 class="title">🐾 Husky Habitats</h1><p class="sub">Build a room that is completely yours.</p><div class="row"><div class="field"><label>Your first name</label><input id="first" maxlength="18" placeholder="Your real first name"></div><div class="field"><label>Your last initial</label><input id="initial" maxlength="1" placeholder="R"></div></div><p class="tiny">Use your real first name and last initial so your teacher knows which habitat is yours.</p><div class="setup-actions"><button id="start" class="primary">Start My Habitat →</button><button id="continueSave" class="secondary" style="display:none">💾 Continue Saved Habitat</button><button id="loadSaveCodeStart" class="secondary">🔐 Load Save Code</button></div><div id="setupmsg" class="feedback"></div></div></div>';
 const savedButton=document.querySelector("#continueSave");
 try{if(localStorage.getItem(SAVE_KEY))savedButton.style.display=""}catch(e){}
 savedButton.onclick=()=>loadGame();
 const loadCodeStart=document.querySelector("#loadSaveCodeStart"); if(loadCodeStart)loadCodeStart.onclick=loadSaveCodePrompt;
 document.querySelector("#start").onclick=()=>{let f=document.querySelector("#first").value.trim(),i=document.querySelector("#initial").value.trim();if(!f||!/^[A-Za-z]$/.test(i)){document.querySelector("#setupmsg").textContent="Please enter your real first name and one last initial.";return}s.first=f[0].toUpperCase()+f.slice(1).toLowerCase();s.initial=i.toUpperCase();s.screen="game";render()};
}
function sortItems(items,sort,favoritesFirst=false,ownedFirst=false){
 const indexed=new Map(catalog.map((x,i)=>[x.id,i]));
 return [...items].sort((a,b)=>{
   if(favoritesFirst){
     const d=(s.favorites.includes(b.id)?1:0)-(s.favorites.includes(a.id)?1:0);
     if(d)return d;
   }
   if(ownedFirst){
     const d=(ownedCount(b.id)>0?1:0)-(ownedCount(a.id)>0?1:0);
     if(d)return d;
   }
   if(sort==="za")return b.name.localeCompare(a.name);
   if(sort==="newest")return (indexed.get(b.id)||0)-(indexed.get(a.id)||0);
   if(sort==="oldest")return (indexed.get(a.id)||0)-(indexed.get(b.id)||0);
   if(sort==="price-low")return a.price-b.price||a.name.localeCompare(b.name);
   if(sort==="price-high")return b.price-a.price||a.name.localeCompare(b.name);
   return a.name.localeCompare(b.name);
 });
}
function ownedCount(id){return s.inventory.filter(x=>x===id).length}
function placedCount(id){return s.placed.filter(x=>x.id===id).length}
function updateTopStats(){
 const c=document.querySelector("#coinPill"),x=document.querySelector("#xpPill"),st=document.querySelector("#streakPill"),sc=document.querySelector("#scoreBtn");
 if(s.screen==="game"){s.highScore=Math.max(s.highScore||0,roomScore())}if(c)c.textContent="🪙 "+s.coins;
 if(x)x.textContent="⭐ "+s.xp+" XP";
 if(st)st.textContent="🔥 "+s.streak;
 if(sc)sc.textContent="🏆 "+roomScore();
}
function showQuestionOverlay(){
 if(!s.q)newQ();
 const q=document.querySelector("#questionOverlay");if(!q)return;
 q.classList.remove("hidden");
 q.innerHTML='<button id="closeQuestions" class="question-close" type="button" aria-label="Back to room">×</button><div class="question-card"><div class="tiny question-kicker">Answer Questions</div><h2>Earn Coins</h2><p class="question-prompt">What does the Greek/Latin stem <b>'+s.q.stem+'</b> mean?</p><div class="answers question-answers">'+s.q.opts.map(o=>'<button class="answer" data-a="'+o+'" '+(s.questionLocked?'disabled':'')+'>'+o+'</button>').join("")+'</div><div id="feedback" class="feedback question-feedback"></div>'+(s.loot?'<div class="loot">🎁 <b>Loot drop!</b> '+itemVisual(s.loot,"loot")+' <span>'+s.loot.name+' was added to your inventory!</span></div>':"")+'</div>';
 q.querySelector("#closeQuestions").onclick=hideQuestionOverlay;
 if(!s.questionLocked)q.querySelectorAll("[data-a]").forEach(b=>b.onclick=()=>answer(b.dataset.a));
}
function hideQuestionOverlay(){
 const q=document.querySelector("#questionOverlay");if(q)q.classList.add("hidden");
}
function panel(v){
 const p=document.querySelector("#panel");
 if(v==="expansions"){expansionsPanel(p)}
 if(v==="shop"){shopPanel(p);}
 if(v==="collections"){collectionsPanel(p);}
 if(v==="achievements"){achievementsPanel(p);}
 if(v==="trophies"){trophyCasePanel(p);}
 if(v==="inventory"){
   let owned=sortItems(catalog.filter(x=>ownedCount(x.id)>0),inventoryUi.sort,inventoryUi.favoritesFirst,false);
   p.innerHTML='<h2>🎒 Inventory</h2><p class="tiny">Place as many copies as you own, then drag them where you want them.</p>'+
   '<div class="sort-controls"><label>Sort by <select id="inventorySort" class="sort-select"><option value="az">A–Z</option><option value="za">Z–A</option><option value="newest">Newest First</option><option value="oldest">Oldest First</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option></select></label><label class="sort-check"><input id="inventoryFavFirst" type="checkbox" '+(inventoryUi.favoritesFirst?'checked':'')+'> ★ Favorites first</label></div>'+
   (owned.length?'<div class="shop-grid">'+owned.map(x=>{
     const useDisabled=((!["Walls","Floors","Trophies"].includes(x.cat)&&placedCount(x.id)>=ownedCount(x.id))||(x.cat==="Walls"&&roomDecor(activeRoom).wall===x.id)||(x.cat==="Floors"&&roomDecor(activeRoom).floor===x.id));
     return '<div class="shop-item"><button class="favorite-btn '+(s.favorites.includes(x.id)?'favorited':'')+'" data-fav="'+x.id+'" title="Favorite">'+(s.favorites.includes(x.id)?'★':'☆')+'</button><button class="item-art preview-trigger" data-preview="'+x.id+'" title="Preview '+esc(x.name)+'">'+itemVisual(x,"shop")+'</button><b>'+x.name+'</b><div class="tiny">'+x.cat+' • Owned: '+ownedCount(x.id)+'</div><div class="inventory-actions"><button class="secondary" data-use="'+x.id+'" '+(useDisabled?"disabled":"")+'>'+useLabel(x)+'</button>'+((!["Walls","Floors"].includes(x.cat)&&placedCount(x.id)>0)?'<button class="secondary" data-remove="'+x.id+'">Remove One</button>':"")+(x.cat==="Trophies"?'':'<button class="secondary sell-btn" data-sell="'+x.id+'">Sell 🪙 '+Math.floor(x.price*.5)+'</button>')+'</div></div>';
   }).join("")+'</div>':'<p>Your inventory is empty. Answer questions and visit the shop!</p>');
   const invSort=p.querySelector("#inventorySort");if(invSort){invSort.value=inventoryUi.sort;invSort.onchange=()=>{inventoryUi.sort=invSort.value;panel("inventory")}}
   const invFav=p.querySelector("#inventoryFavFirst");if(invFav)invFav.onchange=()=>{inventoryUi.favoritesFirst=invFav.checked;panel("inventory")};
   document.querySelectorAll("[data-fav]").forEach(b=>b.onclick=()=>{toggleFavorite(b.dataset.fav);panel("inventory")});
   document.querySelectorAll("[data-use]").forEach(b=>b.onclick=()=>useItem(b.dataset.use));
   document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>removeOne(b.dataset.remove));
   document.querySelectorAll("[data-sell]").forEach(b=>b.onclick=()=>sellItem(b.dataset.sell));
 }
}
function trophyCasePanel(p){
 syncTrophies();
 const groups=[["Questions","questions"],["Streaks","streak"],["Shopping","coin"],["Decorating","furniture"],["Pets","pet"]];
 const tiers=["bronze","silver","gold"];
 const earned=Object.values(trophyAwards).filter(id=>s.inventory.includes(id)).length;
 p.innerHTML='<h2>🏆 Trophy Case</h2><p class="tiny">'+earned+' / 15 trophies earned. Earn trophies through achievements, then display them in your room!</p><button class="secondary" id="backAchievements">← Back to Achievements</button>'+
 groups.map(([label,type])=>'<section class="achievement-section"><h3>'+label+'</h3><div class="achievement-grid">'+tiers.map(tier=>{
 const id="trophy-"+type+"-"+tier;
 const x=catalog.find(item=>item.id===id);
 const achievementId=Object.keys(trophyAwards).find(a=>trophyAwards[a]===id);
 const a=achievementDefs.find(def=>def.id===achievementId);
 const got=s.achievements.includes(achievementId);
 return '<div class="achievement-card '+(got?'earned':'')+'"><div style="height:110px;display:flex;align-items:center;justify-content:center"><img src="'+x.img+'" alt="'+esc(x.name)+'" style="max-width:100%;max-height:105px;object-fit:contain;'+(got?'':'filter:grayscale(1);opacity:.35;')+'"></div><b>'+esc(x.name)+'</b><div class="tiny">'+(got?'✓ Earned':esc(a.desc))+'</div></div>';
 }).join("")+'</div></section>').join("");
 p.querySelector("#backAchievements").onclick=()=>panel("achievements");
}
function achievementsPanel(p){
 const groups=[
  ["Questions",0,15],["Streaks",15,23],["Coins & Shopping",23,37],["Ownership",37,48],
  ["Collections",48,67],["Pets",67,78],["Decorating",78,90],["Room Score",90,97],["Special",97,100]
 ];
 p.innerHTML='<h2>🏆 Achievements</h2><button class="primary" id="viewTrophyCase">🏆 View Trophy Case</button><p class="tiny">100 long-term goals. Once unlocked, an achievement stays unlocked.</p>'+
 groups.map(g=>'<section class="achievement-section"><h3>'+g[0]+'</h3><div class="achievement-grid">'+achievementDefs.slice(g[1],g[2]).map(a=>{let got=s.achievements.includes(a.id);return '<div class="achievement-card '+(got?'earned':'')+'"><div class="achievement-icon">'+(got?'🏆':'🔒')+'</div><b>'+a.name+'</b><div class="tiny">'+a.desc+'</div></div>'}).join("")+'</div></section>').join("");
 p.querySelector('#viewTrophyCase').onclick=()=>panel('trophies');
}
function collectionsPanel(p){
 p.innerHTML='<h2>📖 Collections</h2><p class="tiny">Own at least one item to check it off. Star a collection you want to keep an eye on.</p><div class="collections-grid">'+collections.map(col=>{let found=col.items.filter(id=>ownedCount(id)>0).length;let complete=found===col.items.length&&col.items.length>0;let fav=s.favoriteCollections.includes(col.name);return '<section class="collection-card '+(complete?'complete':'')+'"><div class="collection-head"><div><button class="collection-favorite '+(fav?'favorited':'')+'" data-colfav="'+esc(col.name)+'" title="Favorite collection">'+(fav?'★':'☆')+'</button><span class="collection-emoji">'+col.emoji+'</span><b>'+col.name+'</b></div><span class="collection-progress">'+found+'/'+col.items.length+' owned</span></div><div class="collection-items">'+col.items.map(id=>{let x=catalog.find(a=>a.id===id);if(!x)return "";let owned=ownedCount(id)>0;return '<div class="collection-item '+(owned?'owned':'')+'"><div class="collection-check">'+(owned?'✓':'○')+'</div><div class="collection-thumb">'+itemVisual(x,"shop")+'</div><div class="collection-name">'+x.name+'</div></div>'}).join("")+'</div></section>'}).join("")+'</div>';
 p.querySelectorAll("[data-colfav]").forEach(b=>b.onclick=()=>{toggleCollectionFavorite(b.dataset.colfav);collectionsPanel(p)});
}
function shopPanel(p,active=null,query=null){
 if(active!==null)shopUi.cat=active;
 if(query!==null)shopUi.query=query;
 const cats=["All","Furniture","Decor","Rugs","Flags","Pets","Pet Supplies","Holiday","Windows","Walls","Floors"];
 const q=shopUi.query.trim().toLowerCase();
 const purchasable=catalog.filter(x=>x.cat!=="Trophies");
 const base=shopUi.cat==="All"?purchasable:purchasable.filter(x=>shopUi.cat==="Holiday"?(x.cat==="Holiday"||/halloween|diwali/i.test(x.img||"")):x.cat===shopUi.cat);
 const filtered=q?base.filter(x=>(x.name+" "+x.cat+" "+x.id).toLowerCase().includes(q)):base;
 const items=sortItems(filtered,shopUi.sort,shopUi.favoritesFirst,shopUi.ownedFirst);
 p.innerHTML='<h2>🛍️ Habitat Shop</h2><p class="tiny">Furniture, decor, pets, and windows can be bought more than once.</p>'+
 '<div class="mystery-shop-banner" style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:14px;margin:12px 0;background:#fff4dc;border:2px solid #efcf86;border-radius:15px"><div><b>🎁 Mystery Box — 🪙 200</b><div class="tiny">Get 3 surprise items! Duplicates are possible.</div></div><button class="primary" id="buyMysteryBoxBtn" '+(s.coins<200?'disabled':'')+'>'+(s.coins<200?'Need 🪙 '+(200-s.coins):'Open Mystery Box')+'</button></div><div class="shop-search-wrap"><span class="shop-search-icon">🔎</span><input id="shopSearch" class="shop-search" type="search" placeholder="Search the shop..." value="'+esc(shopUi.query)+'" autocomplete="off"></div>'+
 '<div class="sort-controls"><label>Sort by <select id="shopSort" class="sort-select"><option value="az">A–Z</option><option value="za">Z–A</option><option value="newest">Newest First</option><option value="oldest">Oldest First</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option></select></label><label class="sort-check"><input id="shopFavFirst" type="checkbox" '+(shopUi.favoritesFirst?'checked':'')+'> ★ Favorites first</label><label class="sort-check"><input id="shopOwnedFirst" type="checkbox" '+(shopUi.ownedFirst?'checked':'')+'> Owned first</label></div>'+
 '<div class="shop-tabs">'+cats.map(c=>'<button class="shop-tab '+(c===shopUi.cat?'active':'')+'" data-cat="'+c+'">'+c+'</button>').join("")+'</div>'+
 '<div id="shopResults" class="shop-grid">'+(items.length?items.map(x=>{let count=ownedCount(x.id),oneOnly=["Walls","Floors"].includes(x.cat);return '<div class="shop-item"><button class="favorite-btn '+(s.favorites.includes(x.id)?'favorited':'')+'" data-shopfav="'+x.id+'" title="Favorite">'+(s.favorites.includes(x.id)?'★':'☆')+'</button><div class="item-art">'+itemVisual(x,"shop")+'</div><b>'+x.name+'</b><div class="tiny">'+x.cat+(count?' • Owned: '+count:'')+'</div><div class="price">🪙 '+x.price+'</div><button class="secondary buy-btn '+(s.coins<x.price?'cant-afford':'')+'" data-buy="'+x.id+'" '+((oneOnly&&count)||s.coins<x.price?"disabled":"")+'>'+(oneOnly&&count?"Owned":s.coins<x.price?"Need 🪙 "+(x.price-s.coins):count?"Buy Another":"Buy")+'</button></div>'}).join(""):'<div class="shop-empty">No items match “'+esc(shopUi.query)+'”.</div>')+'</div>';
 const mysteryButton=p.querySelector("#buyMysteryBoxBtn");if(mysteryButton)mysteryButton.onclick=buyMysteryBox;
 const input=p.querySelector("#shopSearch");
 if(input){
   input.focus();input.setSelectionRange(input.value.length,input.value.length);
   input.oninput=()=>shopPanel(p,null,input.value);
 }
 const sort=p.querySelector("#shopSort");if(sort){sort.value=shopUi.sort;sort.onchange=()=>{shopUi.sort=sort.value;shopPanel(p)}}
 const fav=p.querySelector("#shopFavFirst");if(fav)fav.onchange=()=>{shopUi.favoritesFirst=fav.checked;shopPanel(p)};
 const own=p.querySelector("#shopOwnedFirst");if(own)own.onchange=()=>{shopUi.ownedFirst=own.checked;shopPanel(p)};
 p.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>shopPanel(p,b.dataset.cat,null));
 p.querySelectorAll("[data-shopfav]").forEach(b=>b.onclick=()=>{toggleFavorite(b.dataset.shopfav);shopPanel(p)});
 p.querySelectorAll("[data-buy]").forEach(b=>b.onclick=()=>buy(b.dataset.buy));
 p.querySelectorAll("[data-preview]").forEach(b=>b.onclick=()=>showItemPreview(b.dataset.preview));
}

function showItemPreview(id){
 const x=catalog.find(a=>a.id===id);if(!x)return;
 const overlay=document.createElement("div");overlay.className="preview-overlay";
 overlay.innerHTML='<div class="preview-modal" role="dialog" aria-modal="true" aria-label="Item preview"><button class="preview-close" aria-label="Close preview">×</button><div class="preview-image">'+itemVisual(x,"shop")+'</div><h2>'+esc(x.name)+'</h2><p>'+esc(x.cat)+' · 🪙 '+x.price+'</p></div>';
 document.body.appendChild(overlay);
 overlay.querySelector(".preview-close").onclick=()=>overlay.remove();
 overlay.onclick=e=>{if(e.target===overlay)overlay.remove()};
}
function enableDragging(){
 const room=document.querySelector("#room"); if(!room)return;
 room.querySelectorAll(".placed").forEach(el=>{
   el.addEventListener("pointerdown",e=>{
     e.preventDefault(); const idx=+el.dataset.place; if(s.placed[idx]?.locked)return; el.setPointerCapture(e.pointerId); el.classList.add("dragging");
     const move=ev=>{
       const target=ev.target.closest(".house-room")||document.elementFromPoint(ev.clientX,ev.clientY)?.closest(".house-room");
       const destination=document.elementFromPoint(ev.clientX,ev.clientY)?.closest(".house-room");
       const r=(destination||el.closest(".house-room")).getBoundingClientRect();
       const visual=el.querySelector(".room-item-image")||el;
       const vr=visual.getBoundingClientRect();
       const halfW=Math.min(r.width/2,vr.width/2);
       const halfH=Math.min(r.height/2,vr.height/2);
       let px=ev.clientX-r.left,py=ev.clientY-r.top;
       px=Math.max(halfW,Math.min(r.width-halfW,px));
       py=Math.max(halfH,Math.min(r.height-halfH,py));
       let x=(px/r.width)*100,y=(py/r.height)*100;
       if(destination&&destination!==el.parentElement){s.placed[idx].room=destination.dataset.room;destination.appendChild(el)}
       s.placed[idx].x=x;s.placed[idx].y=y;el.style.left=x+"%";el.style.top=y+"%";
     };
     const up=()=>{el.classList.remove("dragging");el.removeEventListener("pointermove",move);el.removeEventListener("pointerup",up);el.removeEventListener("pointercancel",up);s.highScore=Math.max(s.highScore||0,roomScore());saveSilently();};
     el.addEventListener("pointermove",move);el.addEventListener("pointerup",up);el.addEventListener("pointercancel",up);
   });
 });
}
function itemVisual(x,where,extra="",petIndex=null){
 if(x.img){
   const cls=where==="room"?"room-item-image":"item-image";
   let petClass="",petStyle="";
   if(where==="room"&&x.cat==="Pets"){
     const variants=["pet-bob","pet-squish","pet-hop","pet-wiggle"];
     const idx=petIndex==null?0:petIndex;
     petClass=" pet-animated "+variants[idx%variants.length];
     const delay=-((idx*0.47)%3.8);
     const duration=2.6+(idx%4)*0.35;
     petStyle=' style="animation-delay:'+delay+'s;animation-duration:'+duration+'s"';
   }
   return '<img class="'+cls+' item-'+x.id+petClass+extra+'" src="'+x.img+'" alt=""'+petStyle+'>';
 }
 return '<span class="fallback-icon">'+(x.icon||"")+'</span>';
}
function newQ(){let keys=Object.keys(stems),stem=keys[Math.floor(Math.random()*keys.length)],correct=stems[stem],wrong=[...new Set(Object.values(stems).filter(x=>x!==correct))].sort(()=>Math.random()-.5).slice(0,3);s.q={stem,correct,opts:[correct,...wrong].sort(()=>Math.random()-.5)};s.loot=null;s.questionLocked=false}
function answer(a){
 if(s.questionLocked)return;
 s.questionLocked=true;
 let f=document.querySelector("#feedback");
 document.querySelectorAll("#questionOverlay [data-a]").forEach(b=>b.disabled=true);
 if(a===s.q.correct){
   s.coins+=20;s.xp+=10;s.streak++;s.answered++;s.correct++;
   updateTopStats();
   if(f)f.textContent="Correct! +20 coins 🪙";
   let rewardDelay=1100;
   if(s.streak>0&&s.streak%25===0){
     let pool=catalog.filter(x=>!s.inventory.includes(x.id)&&!["Walls","Floors"].includes(x.cat));
     if(pool.length){
       let item=pool[Math.floor(Math.random()*pool.length)];
       s.inventory.push(item.id);s.loot=item;checkCollectionComplete();checkAchievements();
       if(f)f.textContent="🔥 "+s.streak+"-answer streak! You earned "+item.name+"!";
       rewardDelay=3200;
     }
   }
   checkAchievements();saveSilently();
   setTimeout(()=>{newQ();showQuestionOverlay()},rewardDelay);
 }else{
   s.streak=0;s.answered++;updateTopStats();
   if(f)f.textContent="Not quite. "+s.q.stem+" means "+s.q.correct+".";
   saveSilently();
   setTimeout(()=>{newQ();showQuestionOverlay()},1400);
 }
}
function buy(id){let x=catalog.find(a=>a.id===id);if(!x||x.cat==="Trophies")return;if(s.coins<x.price){alert("You need "+(x.price-s.coins)+" more coins.");return}s.coins-=x.price;s.inventory.push(id);s.lifetime.purchases++;render();checkCollectionComplete();checkAchievements();saveSilently();const p=document.querySelector("#panel");if(p)shopPanel(p)}
function buyMysteryBox(){
 if(s.coins<200){alert("You need "+(200-s.coins)+" more coins.");return}
 s.coins-=200;
 s.lifetime.mysteryBoxes++;
 const pool=catalog.filter(x=>!["Walls","Floors","Trophies"].includes(x.cat));
 const won=[0,1,2].map(()=>pool[Math.floor(Math.random()*pool.length)]);
 won.forEach(x=>s.inventory.push(x.id));
 render();checkCollectionComplete();checkAchievements();saveSilently();
 const p=document.querySelector("#panel");
 p.innerHTML='<h2>🎁 Mystery Box!</h2><p>You got:</p><div class="mystery-reveal">'+won.map((x,i)=>'<div class="mystery-prize" style="animation-delay:'+(i*.35)+'s">'+itemVisual(x,"shop")+'<b>'+x.name+'</b></div>').join("")+'</div><button class="primary" id="backShop">Back to Shop</button>';
 document.querySelector("#backShop").onclick=()=>shopPanel(p);
}
function sellableCount(id){const x=catalog.find(a=>a.id===id);return x&&x.cat==="Trophies"?0:ownedCount(id)}
function sellItem(id){
 const x=catalog.find(a=>a.id===id);if(!x||sellableCount(id)<=0)return;
 // Do not sell a copy currently placed if every remaining sellable copy would be needed for placement.
 if(!["Walls","Floors"].includes(x.cat)&&placedCount(id)>=ownedCount(id)){
   alert("Remove one "+x.name+" from your room before selling it.");
   return;
 }
 const idx=s.inventory.lastIndexOf(id);if(idx<0)return;
 // Prefer removing a sellable copy: inventory copies are indistinguishable, so nonSellable count simply remains reserved.
 s.inventory.splice(idx,1);
 s.lifetime.sales++;
 const refund=Math.floor(x.price*.5);
 s.coins+=refund;
 if(s.favorites.includes(id)&&ownedCount(id)===0)s.favorites=s.favorites.filter(f=>f!==id);
 checkCollectionComplete();checkAchievements();saveSilently();
 render();panel("inventory");
}
function useLabel(x){if(x.cat==="Walls")return roomDecor(activeRoom).wall===x.id?"In Use":"Use Wallpaper";if(x.cat==="Floors")return roomDecor(activeRoom).floor===x.id?"In Use":"Use Flooring";let available=ownedCount(x.id)-placedCount(x.id);return available>0?(placedCount(x.id)>0?"Place Another":"Place in Room"):"All Placed"}
function useItem(id){let x=catalog.find(a=>a.id===id);if(x.cat==="Walls"){roomDecor(activeRoom).wall=id;if(activeRoom==="center")s.wall=id}else if(x.cat==="Floors"){roomDecor(activeRoom).floor=id;if(activeRoom==="center")s.floor=id}else if(placedCount(id)<ownedCount(id)){{const obj={id,room:activeRoom,x:42+(s.placed.length*8)%35,y:58-(s.placed.length%3)*10,dir:"left",size:"normal"};if(x.cat==="Rugs")s.placed.unshift(obj);else s.placed.push(obj)}}checkAchievements();render();saveSilently();panel("inventory")}
function removeOne(id){let found=s.placed.map(p=>(p.room||"center")===activeRoom?p.id:null).lastIndexOf(id);if(found>=0)s.placed.splice(found,1);render();panel("inventory")}
function turnItem(index){if(!s.placed[index])return;s.placed[index].dir=s.placed[index].dir==="right"?"left":"right";s.lifetime.flips++;checkAchievements();saveSilently();render();}
function esc(x){return x.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
render();