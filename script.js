const stems={hyper:"over",hypo:"under",phobia:"fear",pan:"all",mega:"big",pyro:"fire",circum:"around",cred:"believe",ject:"throw",med:"middle"};
const catalog=[
{id:"bed-white",name:"Basic White Bed",img:"images/items/Bed-basic-white-001.png",price:100,cat:"Furniture"},
{id:"bed-angel-cream",name:"Angel Cream Bed",img:"images/items/Bed-angel-cream-001.png",price:100,cat:"Furniture"},
{id:"chair-angel-cream",name:"Angel Cream Chair",img:"images/items/Chair-angel-cream-001.png",price:100,cat:"Furniture",turnable:true},
{id:"chair-basic-red",name:"Red Chair",img:"images/items/Chair-basic-red-001.png",price:100,cat:"Furniture",turnable:true},
{id:"chair-basic-yellow",name:"Yellow Chair",img:"images/items/Chair-basic-yellow-001.png",price:100,cat:"Furniture",turnable:true},
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
{id:"couch-basic-brown",name:"Brown Couch",img:"images/items/Couch-basic-brown-001.png",price:100,cat:"Furniture"},
{id:"couch-goth-purple",name:"Goth Purple Couch",img:"images/items/Couch-goth-purple-001.png",price:100,cat:"Furniture"},
{id:"cow-skull",name:"Cow Skull",img:"images/items/Decor-cow-skull-001.png",price:100,cat:"Decor"},
{id:"crystal-ball",name:"Crystal Ball",img:"images/items/Decor-crystalball-001.png",price:100,cat:"Decor"},
{id:"dresser-angel-cream",name:"Angel Cream Dresser",img:"images/items/Dresser-angel-cream-001.png",price:100,cat:"Furniture"},
{id:"dresser-basic-cream",name:"Cream Dresser",img:"images/items/Dresser-basic-cream-001.png",price:100,cat:"Furniture"},
{id:"dresser-basic-dark-brown",name:"Dark Brown Dresser",img:"images/items/Dresser-basic-dark-brown-001.png",price:100,cat:"Furniture"},
{id:"dresser-floral-white",name:"Floral White Dresser",img:"images/items/Dresser-floral-white-001.png",price:100,cat:"Furniture"},
{id:"table-angel-cream",name:"Angel Cream Table",img:"images/items/Table-angel-cream-001.png",price:100,cat:"Furniture"},
{id:"table-goth-purple",name:"Goth Purple Table",img:"images/items/Table-goth-purple-001.png",price:100,cat:"Furniture"},
{id:"couch-blue",name:"Blue Couch",img:"images/items/Couch-basic-blue-001.png",price:100,cat:"Furniture"},
{id:"couch-green",name:"Green Couch",img:"images/items/Couch-basic-green-001.png",price:100,cat:"Furniture"},
{id:"couch-red",name:"Red Couch",img:"images/items/Couch-basic-red-001.png",price:100,cat:"Furniture"},
{id:"couch-yellow",name:"Yellow Couch",img:"images/items/Couch-basic-yellow-001.png",price:100,cat:"Furniture"},
{id:"jackolantern",name:"Jack-o'-Lantern",img:"images/items/Decor-jackolantern-001.png",price:100,cat:"Decor"},
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
{id:"bed-classic-blue",name:"Classic Blue Bed",img:"images/items/Bed-classic-blue-001.png",price:100,cat:"Furniture"},
{id:"bed-classic-pink",name:"Classic Pink Bed",img:"images/items/Bed-classic-pink-001.png",price:100,cat:"Furniture"},
{id:"bed-classic-white",name:"Classic White Bed",img:"images/items/Bed-classic-white-001.png",price:100,cat:"Furniture"},
{id:"bed-classic-yellow",name:"Classic Yellow Bed",img:"images/items/Bed-classic-yellow-001.png",price:100,cat:"Furniture"},
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
{id:"chair-classic-wooden",name:"Classic Wooden Chair",img:"images/items/Chair-classic-wooden-001.png",price:100,cat:"Furniture",turnable:true},
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
{id:"decor-classic-stuffed-rabbit",name:"Classic Stuffed Rabbit",img:"images/items/Decor-classic-stuffed-rabbit-001.png",price:100,cat:"Decor"},
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
{id:"decor-pride-flag",name:"Pride Flag",img:"images/items/Decor-pride-flag-001.png",price:100,cat:"Decor"},
{id:"decor-pride-flag-002",name:"Pride Flag 2",img:"images/items/Decor-pride-flag-002.png",price:100,cat:"Decor"},
{id:"decor-pride-flag-003",name:"Pride Flag 3",img:"images/items/Decor-pride-flag-003.png",price:100,cat:"Decor"},
{id:"decor-pride-flag-004",name:"Pride Flag 4",img:"images/items/Decor-pride-flag-004.png",price:100,cat:"Decor"},
{id:"decor-pride-flag-005",name:"Pride Flag 5",img:"images/items/Decor-pride-flag-005.png",price:100,cat:"Decor"},
{id:"decor-pride-flag-006",name:"Pride Flag 6",img:"images/items/Decor-pride-flag-006.png",price:100,cat:"Decor"},
{id:"decor-pride-flag-007",name:"Pride Flag 7",img:"images/items/Decor-pride-flag-007.png",price:100,cat:"Decor"},
{id:"decor-pride-flag-008",name:"Pride Flag 8",img:"images/items/Decor-pride-flag-008.png",price:100,cat:"Decor"},
{id:"decor-pride-flag-009",name:"Pride Flag 9",img:"images/items/Decor-pride-flag-009.png",price:100,cat:"Decor"},
{id:"decor-pride-flag-010",name:"Pride Flag 10",img:"images/items/Decor-pride-flag-010.png",price:100,cat:"Decor"},
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
{id:"drums-classic-blue",name:"Classic Blue Drums",img:"images/items/Drums-classic-blue-001.png",price:100,cat:"Furniture"},
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
{id:"harp-classic-light",name:"Classic Light Harp",img:"images/items/Harp-classic-light-001.png",price:100,cat:"Furniture"},
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
{id:"piano-classic-black",name:"Classic Black Piano",img:"images/items/Piano-classic-black-001.png",price:100,cat:"Furniture"},
{id:"tv-basic-dark",name:"Basic Dark TV",img:"images/items/TV-basic-dark-001.png",price:100,cat:"Furniture"},
{id:"tv-basic-light",name:"Basic Light TV",img:"images/items/TV-basic-light-001.png",price:100,cat:"Furniture"},
{id:"table-basic-covered",name:"Basic Covered Table",img:"images/items/Table-basic-covered-001.png",price:100,cat:"Furniture"},
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
];

const collections=[
{name:"Basic Collection",emoji:"🛋️",items:["bed-white","chair-basic-red","chair-basic-yellow","couch-basic-brown","dresser-basic-cream","dresser-basic-dark-brown","couch-blue","couch-green","couch-red","couch-yellow","tv-basic-dark","tv-basic-light","table-basic-covered"]},
{name:"Classic Collection",emoji:"🎻",items:["bed-classic-blue","bed-classic-pink","bed-classic-white","bed-classic-yellow","chair-classic-wooden","decor-classic-stuffed-rabbit","drums-classic-blue","floors-classic-dark-wood","floors-classic-dark-wood-002","floors-classic-darkest-wood","floors-classic-darkest-wood-002","floors-classic-light-wood","floors-classic-light-wood-002","floors-classic-medium-wood","floors-classic-medium-wood-002","harp-classic-light","piano-classic-black","walls-classic-blue","walls-classic-green","walls-classic-orange","walls-classic-pink","walls-classic-purple","walls-classic-red","walls-classic-teal","walls-classic-yellow"]},
{name:"Antique Collection",emoji:"🕰️",items:["couch-antique-cream","bed-antique-green","couch-antique-green","decor-antique-flowers","decor-antique-globe","decor-antique-grandfather-clock","decor-antique-painting","decor-antique-painting-002","decor-antique-phonograph","desk-antique-dark-wood","fireplace-antique-wood","fireplace-antique-wood-002","floors-antique-blue-carpet","floors-antique-brown-carpet","floors-antique-green-carpet","floors-antique-red-carpet","harp-antique-dark-wood","organ-antique-wooden","piano-antique-wooden","vanity-antique-dark-wood","viola-antique-wooden"]},
{name:"Retro Collection",emoji:"📺",items:["bed-retro-blue","bed-retro-green","bed-retro-red","bed-retro-yellow","chair-retro-cushioned","chair-retro-light-wood","chair-retro-red","chair-retro-red-002","chair-retro-yellow","coffeetable-retro-glass","couch-retro-green","couch-retro-red","decor-retro-butterfly-painting","decor-retro-mirror","decor-retro-record-machine","decor-retro-rubber-tree-plant","decor-retro-wall-clock","endtable-retro-wooden","table-retro-glass"]},
{name:"Cute Collection",emoji:"🎀",items:["bed-cute-pink","bookcase-cute-small","bookcase-cute-white","chair-cute-pink","chair-cute-pink-002","couch-cute-pink","couch-cute-white","decor-cute-shelves","decor-cute-stuffed-bunny","decor-cute-teddy-bear","fireplace-cute-white","table-cute-heart","walls-cute-pink","walls-cute-purple","walls-cute-yellow","window-cute-white","decor-cute-stuffed-unicorn"]},
{name:"Cozy Collection",emoji:"🩷",items:["chair-cozy-pink","couch-cozy-pink","cozy-calendar-pink","cozy-candles","cozy-flowers-pink","dresser-cozy-pink","cozy-friend","piano-cozy-pink","table-cozy-pink","vanity-cozy-pink","bed-cozy-pink","bed-cozy-yellow","couch-cozy-orange","couch-cozy-purple"]},
{name:"Wizard Collection",emoji:"🧙",items:["bookcase-wizard","decor-wizard-book-pile","decor-wizard-book-pile-002","decor-wizard-cauldron","decor-wizard-painting","decor-wizard-potion-table","decor-wizard-shelves","desk-wizard","decor-wizard-mushroom","moon-stars","crystal-ball"]},
{name:"Angel Collection",emoji:"☁️",items:["bed-angel-cream","chair-angel-cream","couch-angel-cream","dresser-angel-cream","table-angel-cream","floors-angel-cream-tiles","harp-angel-white","piano-angel-white","pets-chao-hero"]},
{name:"Goth Collection",emoji:"🖤",items:["chair-goth-black","chair-goth-purple","couch-goth-purple","table-goth-purple","decor-goth-shelves","candles-sunset","gamma","pets-chao-dark"]},
{name:"Floral Collection",emoji:"🌸",items:["floral-vines","floral-terrarium","dresser-floral-white","bookcase-floral","decor-floral-purple-box","decor-floral-yellow-box"]},
{name:"Sweets Collection",emoji:"🍓",items:["bed-sweets-strawberry","bookcase-sweets-ice-cream","couch-sweets-pink","dresser-sweets-chocolate","endtable-sweets-cream"]},
{name:"Geode Collection",emoji:"💎",items:["chair-geode-purple","geode-purple","endtable-geode","table-geode-blue"]},
{name:"Hello Kitty Collection",emoji:"🎀",items:["bed-hellokitty","decor-hellokitty-clock","decor-hellokitty-plant","dresser-hellokitty"]},
{name:"Deco Collection",emoji:"✨",items:["chair-deco-green","chair-deco-red"]}
];
let s={screen:"setup",first:"",initial:"",coins:100,xp:0,streak:0,inventory:[],placed:[],wall:"plain",floor:"plain",q:null,answered:0,correct:0,loot:null,favorites:[],achievements:[],completedCollections:[],favoriteCollections:[]};
const app=document.querySelector("#app");
const SAVE_KEY="huskyHabitatsSaveV1";
function saveGame(){
  try{
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
    s={...s,...saved,screen:"game"};
    if(!Array.isArray(s.favorites))s.favorites=[];
    if(!Array.isArray(s.achievements))s.achievements=[];
    if(!Array.isArray(s.completedCollections))s.completedCollections=[];
    if(!Array.isArray(s.favoriteCollections))s.favoriteCollections=[];
    if(typeof s.correct!=="number")s.correct=Math.floor((s.xp||0)/10);
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
  if(catalog.some(x=>x.id===s.wall))ids.push(s.wall);
  if(catalog.some(x=>x.id===s.floor))ids.push(s.floor);
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
function saveSilently(){try{localStorage.setItem(SAVE_KEY,JSON.stringify(s))}catch(e){}}
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
 {id:"correct-10",name:"Getting Started",desc:"Answer 10 questions correctly.",test:()=>s.correct>=10},
 {id:"correct-25",name:"On a Roll",desc:"Answer 25 questions correctly.",test:()=>s.correct>=25},
 {id:"correct-50",name:"Half Century",desc:"Answer 50 questions correctly.",test:()=>s.correct>=50},
 {id:"correct-75",name:"Root Scholar",desc:"Answer 75 questions correctly.",test:()=>s.correct>=75},
 {id:"correct-100",name:"Century Club",desc:"Answer 100 questions correctly.",test:()=>s.correct>=100},
 {id:"correct-200",name:"Word Wizard",desc:"Answer 200 questions correctly.",test:()=>s.correct>=200},
 {id:"correct-500",name:"Stem Master",desc:"Answer 500 questions correctly.",test:()=>s.correct>=500},
 {id:"correct-1000",name:"Husky Legend",desc:"Answer 1,000 questions correctly.",test:()=>s.correct>=1000},
 {id:"collection-1",name:"Collector",desc:"Complete your first collection.",test:()=>completedCollectionNames().length>=1},
 {id:"collection-3",name:"Collection Curator",desc:"Complete 3 collections.",test:()=>completedCollectionNames().length>=3},
 {id:"collection-5",name:"Master Collector",desc:"Complete 5 collections.",test:()=>completedCollectionNames().length>=5},
 {id:"pets-10",name:"Pet Pack",desc:"Own 10 pets.",test:()=>s.inventory.filter(id=>{let x=catalog.find(a=>a.id===id);return x&&x.cat==="Pets"}).length>=10},
 {id:"unique-25",name:"Room Starter",desc:"Own 25 unique items.",test:()=>new Set(s.inventory).size>=25},
 {id:"unique-50",name:"Habitat Hoarder",desc:"Own 50 unique items.",test:()=>new Set(s.inventory).size>=50},
 {id:"unique-100",name:"Mega Collector",desc:"Own 100 unique items.",test:()=>new Set(s.inventory).size>=100}
];
function checkAchievements(){
  const newly=[];
  achievementDefs.forEach(a=>{if(a.test()&&!s.achievements.includes(a.id)){s.achievements.push(a.id);newly.push(a)}});
  if(newly.length)showAchievement(newly[0]);
}
function showAchievement(a){
  const old=document.querySelector(".achievement-toast");if(old)old.remove();
  const el=document.createElement("div");el.className="achievement-toast";
  el.innerHTML='<b>🏆 Achievement Unlocked!</b><span>'+esc(a.name)+'</span><small>'+esc(a.desc)+'</small>';
  document.body.appendChild(el);setTimeout(()=>el.remove(),4000);
}
function petHeart(el){
  const h=document.createElement("span");h.className="pet-heart";h.textContent="♥";el.appendChild(h);setTimeout(()=>h.remove(),3000);
}
function render(){
 if(s.screen==="setup")return setup();
 let wallItem=catalog.find(x=>x.id===s.wall),floorItem=catalog.find(x=>x.id===s.floor);
 app.innerHTML='<div class="shell"><div class="topbar"><div><b>🐾 Husky Habitats</b><div class="tiny">'+esc(s.first)+' '+esc(s.initial)+'.\'s Room</div></div><div class="stats"><span class="pill">🪙 '+s.coins+'</span><span class="pill">⭐ '+s.xp+' XP</span><span class="pill">🔥 '+s.streak+'</span><span class="pill">🏠 '+roomScore()+'</span><button id="saveBtn" class="save-btn">💾 Save</button><span id="saveStatus" class="save-status" aria-live="polite"></span></div></div><div id="room" class="room" aria-label="Your room"><div class="wall-surface"></div><div class="floor-surface"></div><div class="baseboard"></div>'+s.placed.map((p,i)=>{let x=catalog.find(a=>a.id===p.id);let flip=p.dir==="right"?" flipped":"";return '<button class="placed'+(x.turnable?' turnable':'')+(x.cat==="Pets"?' pet-place':'')+'" data-place="'+i+'" style="left:'+p.x+'%;top:'+p.y+'%" aria-label="Move '+x.name+(x.turnable?'. Double-click to turn.':'')+'">'+itemVisual(x,"room",flip,x.cat==="Pets"?i:null)+'</button>'}).join("")+'<div class="move-hint">Drag your things anywhere in the room ✨</div></div><div class="nav"><button class="primary" data-view="questions">📚 Answer Questions</button><button class="secondary" data-view="shop">🛍️ Shop</button><button class="secondary" data-view="inventory">🎒 Inventory</button><button class="secondary" data-view="collections">📖 Collections</button><button class="secondary" data-view="achievements">🏆 Achievements</button></div><div id="panel" class="card panel"></div></div>';
 document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>panel(b.dataset.view));
 const saveBtn=document.querySelector("#saveBtn"); if(saveBtn)saveBtn.onclick=saveGame;
 const wallSurface=document.querySelector(".wall-surface");
 const floorSurface=document.querySelector(".floor-surface");
 if(wallSurface) wallSurface.style.backgroundImage=wallItem&&wallItem.img?'url("'+wallItem.img+'")':"none";
 if(floorSurface) floorSurface.style.backgroundImage=floorItem&&floorItem.img?'url("'+floorItem.img+'")':"none";
 enableDragging();
 document.querySelectorAll(".placed.turnable").forEach(b=>b.addEventListener("dblclick",e=>{e.preventDefault();e.stopPropagation();turnItem(+b.dataset.place)}));
 document.querySelectorAll(".placed.pet-place").forEach(b=>b.addEventListener("click",e=>{if(b.classList.contains("dragging"))return;e.stopPropagation();petHeart(b)}));
 panel("questions");
}
function setup(){
 app.innerHTML='<div class="shell"><div class="card setup-card"><h1 class="title">🐾 Husky Habitats</h1><p class="sub">Build a room that is completely yours.</p><div class="row"><div class="field"><label>Your first name</label><input id="first" maxlength="18" placeholder="Your real first name"></div><div class="field"><label>Your last initial</label><input id="initial" maxlength="1" placeholder="R"></div></div><p class="tiny">Use your real first name and last initial so your teacher knows which habitat is yours.</p><div class="setup-actions"><button id="start" class="primary">Start My Habitat →</button><button id="continueSave" class="secondary" style="display:none">💾 Continue Saved Habitat</button></div><div id="setupmsg" class="feedback"></div></div></div>';
 const savedButton=document.querySelector("#continueSave");
 try{if(localStorage.getItem(SAVE_KEY))savedButton.style.display=""}catch(e){}
 savedButton.onclick=()=>loadGame();
 document.querySelector("#start").onclick=()=>{let f=document.querySelector("#first").value.trim(),i=document.querySelector("#initial").value.trim();if(!f||!/^[A-Za-z]$/.test(i)){document.querySelector("#setupmsg").textContent="Please enter your real first name and one last initial.";return}s.first=f[0].toUpperCase()+f.slice(1).toLowerCase();s.initial=i.toUpperCase();s.screen="game";render()};
}
function ownedCount(id){return s.inventory.filter(x=>x===id).length}
function placedCount(id){return s.placed.filter(x=>x.id===id).length}
function panel(v){
 const p=document.querySelector("#panel");
 if(v==="questions"){if(!s.q)newQ();p.innerHTML='<h2>Earn Coins</h2><p>What does the Greek/Latin stem <b>'+s.q.stem+'</b> mean?</p><div class="answers">'+s.q.opts.map(o=>'<button class="answer" data-a="'+o+'">'+o+'</button>').join("")+'</div><div id="feedback" class="feedback"></div>'+ (s.loot?'<div class="loot">🎁 <b>Loot drop!</b> '+itemVisual(s.loot,"loot")+' <span>'+s.loot.name+' was added to your inventory!</span></div>':"");document.querySelectorAll("[data-a]").forEach(b=>b.onclick=()=>answer(b.dataset.a));}
 if(v==="shop"){shopPanel(p,"All");}
 if(v==="collections"){collectionsPanel(p);}
 if(v==="achievements"){achievementsPanel(p);}
 if(v==="inventory"){let owned=catalog.filter(x=>ownedCount(x.id)>0);p.innerHTML='<h2>🎒 Inventory</h2><p class="tiny">Place as many copies as you own, then drag them where you want them.</p>'+(owned.length?'<div class="shop-grid">'+owned.sort((a,b)=>(s.favorites.includes(b.id)?1:0)-(s.favorites.includes(a.id)?1:0)).map(x=>'<div class="shop-item"><button class="favorite-btn '+(s.favorites.includes(x.id)?'favorited':'')+'" data-fav="'+x.id+'" title="Favorite">'+(s.favorites.includes(x.id)?'★':'☆')+'</button><div class="item-art">'+itemVisual(x,"shop")+'</div><b>'+x.name+'</b><div class="tiny">'+x.cat+' • Owned: '+ownedCount(x.id)+'</div><div class="inventory-actions"><button class="secondary" data-use="'+x.id+'" '+(((!["Walls","Floors"].includes(x.cat)&&placedCount(x.id)>=ownedCount(x.id))||(x.cat==="Walls"&&s.wall===x.id)||(x.cat==="Floors"&&s.floor===x.id))?"disabled":"")+'>'+useLabel(x)+'</button>'+((!["Walls","Floors"].includes(x.cat)&&placedCount(x.id)>0)?'<button class="secondary" data-remove="'+x.id+'">Remove One</button>':"")+'</div></div>').join("")+'</div>':'<p>Your inventory is empty. Answer questions and visit the shop!</p>');document.querySelectorAll("[data-fav]").forEach(b=>b.onclick=()=>{toggleFavorite(b.dataset.fav);panel("inventory")});document.querySelectorAll("[data-use]").forEach(b=>b.onclick=()=>useItem(b.dataset.use));document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>removeOne(b.dataset.remove));}
}
function achievementsPanel(p){
 p.innerHTML='<h2>🏆 Achievements</h2><p class="tiny">Achievements are based on lifetime progress.</p><div class="achievement-grid">'+achievementDefs.map(a=>{let got=s.achievements.includes(a.id);return '<div class="achievement-card '+(got?'earned':'')+'"><div class="achievement-icon">'+(got?'🏆':'🔒')+'</div><b>'+a.name+'</b><div class="tiny">'+a.desc+'</div></div>'}).join("")+'</div>';
}
function collectionsPanel(p){
 p.innerHTML='<h2>📖 Collections</h2><p class="tiny">Own at least one item to check it off. Star a collection you want to keep an eye on.</p><div class="collections-grid">'+collections.map(col=>{let found=col.items.filter(id=>ownedCount(id)>0).length;let complete=found===col.items.length&&col.items.length>0;let fav=s.favoriteCollections.includes(col.name);return '<section class="collection-card '+(complete?'complete':'')+'"><div class="collection-head"><div><button class="collection-favorite '+(fav?'favorited':'')+'" data-colfav="'+esc(col.name)+'" title="Favorite collection">'+(fav?'★':'☆')+'</button><span class="collection-emoji">'+col.emoji+'</span><b>'+col.name+'</b></div><span class="collection-progress">'+found+'/'+col.items.length+' owned</span></div><div class="collection-items">'+col.items.map(id=>{let x=catalog.find(a=>a.id===id);if(!x)return "";let owned=ownedCount(id)>0;return '<div class="collection-item '+(owned?'owned':'')+'"><div class="collection-check">'+(owned?'✓':'○')+'</div><div class="collection-thumb">'+itemVisual(x,"shop")+'</div><div class="collection-name">'+x.name+'</div></div>'}).join("")+'</div></section>'}).join("")+'</div>';
 p.querySelectorAll("[data-colfav]").forEach(b=>b.onclick=()=>{toggleCollectionFavorite(b.dataset.colfav);collectionsPanel(p)});
}
function shopPanel(p,active){
 const cats=["All","★ Favorites","Furniture","Decor","Pets","Windows","Walls","Floors"];
 const items=active==="All"?catalog:active==="★ Favorites"?catalog.filter(x=>s.favorites.includes(x.id)):catalog.filter(x=>x.cat===active);
 p.innerHTML='<h2>🛍️ Habitat Shop</h2><div class="mystery-box"><div><b>🎁 Mystery Box</b><div class="tiny">3 random items. Duplicates are possible.</div></div><button class="primary" id="mysteryBuy">🪙 200</button></div><p class="tiny">Furniture, decor, pets, and windows can be bought more than once.</p><div class="shop-tabs">'+cats.map(c=>'<button class="shop-tab '+(c===active?'active':'')+'" data-cat="'+c+'">'+c+'</button>').join("")+'</div><div class="shop-grid">'+items.map(x=>{let count=ownedCount(x.id),oneOnly=["Walls","Floors"].includes(x.cat);return '<div class="shop-item"><button class="favorite-btn '+(s.favorites.includes(x.id)?'favorited':'')+'" data-fav="'+x.id+'" title="Favorite">'+(s.favorites.includes(x.id)?'★':'☆')+'</button><div class="item-art">'+itemVisual(x,"shop")+'</div><b>'+x.name+'</b><div class="tiny">'+x.cat+(count?' • Owned: '+count:'')+'</div><div class="price">🪙 '+x.price+'</div><button class="secondary" data-buy="'+x.id+'" '+(oneOnly&&count?"disabled":"")+'>'+(oneOnly&&count?"Owned":count?"Buy Another":"Buy")+'</button></div>'}).join("")+'</div>';
 const mystery=p.querySelector("#mysteryBuy");if(mystery)mystery.onclick=buyMysteryBox;
 p.querySelectorAll("[data-fav]").forEach(b=>b.onclick=()=>{toggleFavorite(b.dataset.fav);shopPanel(p,active)});
 p.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>shopPanel(p,b.dataset.cat));
 p.querySelectorAll("[data-buy]").forEach(b=>b.onclick=()=>buy(b.dataset.buy));
}
function enableDragging(){
 const room=document.querySelector("#room"); if(!room)return;
 room.querySelectorAll(".placed").forEach(el=>{
   el.addEventListener("pointerdown",e=>{
     e.preventDefault(); const idx=+el.dataset.place; el.setPointerCapture(e.pointerId); el.classList.add("dragging");
     const move=ev=>{
       const r=room.getBoundingClientRect();
       const visual=el.querySelector(".room-item-image")||el;
       const vr=visual.getBoundingClientRect();
       const halfW=Math.min(r.width/2,vr.width/2);
       const halfH=Math.min(r.height/2,vr.height/2);
       let px=ev.clientX-r.left,py=ev.clientY-r.top;
       px=Math.max(halfW,Math.min(r.width-halfW,px));
       py=Math.max(halfH,Math.min(r.height-halfH,py));
       let x=(px/r.width)*100,y=(py/r.height)*100;
       s.placed[idx].x=x;s.placed[idx].y=y;el.style.left=x+"%";el.style.top=y+"%";
     };
     const up=()=>{el.classList.remove("dragging");el.removeEventListener("pointermove",move);el.removeEventListener("pointerup",up);el.removeEventListener("pointercancel",up);};
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
   return '<img class="'+cls+petClass+extra+'" src="'+x.img+'" alt=""'+petStyle+'>';
 }
 return '<span class="fallback-icon">'+(x.icon||"")+'</span>';
}
function newQ(){let keys=Object.keys(stems),stem=keys[Math.floor(Math.random()*keys.length)],correct=stems[stem],wrong=[...new Set(Object.values(stems).filter(x=>x!==correct))].sort(()=>Math.random()-.5).slice(0,3);s.q={stem,correct,opts:[correct,...wrong].sort(()=>Math.random()-.5)};s.loot=null}
function answer(a){let f=document.querySelector("#feedback");document.querySelectorAll("[data-a]").forEach(b=>b.disabled=true);if(a===s.q.correct){s.coins+=20;s.xp+=10;s.streak++;s.answered++;s.correct++;f.textContent="Correct! +20 coins 🪙";let rewardDelay=1100;if(s.streak>0&&s.streak%25===0){let pool=catalog.filter(x=>!s.inventory.includes(x.id)&&!["Walls","Floors"].includes(x.cat));if(pool.length){let item=pool[Math.floor(Math.random()*pool.length)];s.inventory.push(item.id);s.loot=item;checkCollectionComplete();checkAchievements();f.textContent="🔥 "+s.streak+"-answer streak! You earned "+item.name+"!";rewardDelay=3200}}checkAchievements();saveSilently();setTimeout(()=>{newQ();render()},rewardDelay)}else{s.streak=0;s.answered++;f.textContent="Not quite. "+s.q.stem+" means "+s.q.correct+".";document.querySelector(".pill:last-child").textContent="🔥 0";setTimeout(()=>{newQ();render()},1400)}}
function buy(id){let x=catalog.find(a=>a.id===id);if(s.coins<x.price){alert("You need "+(x.price-s.coins)+" more coins.");return}s.coins-=x.price;s.inventory.push(id);render();checkCollectionComplete();checkAchievements();saveSilently();panel("shop")}
function buyMysteryBox(){
 if(s.coins<200){alert("You need "+(200-s.coins)+" more coins.");return}
 s.coins-=200;
 const pool=catalog.filter(x=>!["Walls","Floors"].includes(x.cat));
 const won=[0,1,2].map(()=>pool[Math.floor(Math.random()*pool.length)]);
 won.forEach(x=>s.inventory.push(x.id));
 render();checkCollectionComplete();checkAchievements();saveSilently();
 const p=document.querySelector("#panel");
 p.innerHTML='<h2>🎁 Mystery Box!</h2><p>You got:</p><div class="mystery-reveal">'+won.map((x,i)=>'<div class="mystery-prize" style="animation-delay:'+(i*.35)+'s">'+itemVisual(x,"shop")+'<b>'+x.name+'</b></div>').join("")+'</div><button class="primary" id="backShop">Back to Shop</button>';
 document.querySelector("#backShop").onclick=()=>shopPanel(p,"All");
}
function useLabel(x){if(x.cat==="Walls")return s.wall===x.id?"In Use":"Use Wallpaper";if(x.cat==="Floors")return s.floor===x.id?"In Use":"Use Flooring";let available=ownedCount(x.id)-placedCount(x.id);return available>0?(placedCount(x.id)>0?"Place Another":"Place in Room"):"All Placed"}
function useItem(id){let x=catalog.find(a=>a.id===id);if(x.cat==="Walls"){s.wall=id}else if(x.cat==="Floors"){s.floor=id}else if(placedCount(id)<ownedCount(id)){s.placed.push({id,x:42+(s.placed.length*8)%35,y:58-(s.placed.length%3)*10,dir:"left"})}render();saveSilently();panel("inventory")}
function removeOne(id){let found=s.placed.map(p=>p.id).lastIndexOf(id);if(found>=0)s.placed.splice(found,1);render();panel("inventory")}
function turnItem(index){if(!s.placed[index])return;s.placed[index].dir=s.placed[index].dir==="right"?"left":"right";render();}
function esc(x){return x.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
render();