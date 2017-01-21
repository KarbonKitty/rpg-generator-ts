type Size = 1 | 2 | 4 | 8;
const tiny = 1;
const small = 2;
const little = 4;
const medium = 8;

type Rarity = 1 | 0.5 | 0.3 | 0.2 | 0.1;
const very_common = 1;
const common = 0.5;
const uncommon = 0.3;
const rare = 0.2;
const very_rare = 0.1;

type Tag = 'medical' | 'survival' | 'refreshment' | 'tool' | 'hygiene' | 'groceries';

export class Item {
  name: string;
  rarity: Rarity;
  tags: Tag[];
  size: Size;
  types?: WeightedOptions;

  constructor(name: string, rarity: Rarity, tags: Tag | Tag[], size: Size, types?: WeightedOptions) {
    this.name = name;
    this.rarity = rarity;
    this.tags = typeof (tags) === 'array' ? tags : [tags];
    this.size = size;
    this.types = types;
  }
}

export let items = {
  common: <CommonItemTemplate[]>[
    { name: "keys", p: 0.85, types: { "a few keys": 5, "house key": 3, "large key ring": 1 } },
    { name: "glasses", p: 0.3, types: { "sunglasses": 10, "corrective glasses": 1, "contact lenses": 5 } },
    { name: "ID", p: 0.95, types: { "driver's licence": 20, "passport": 1 } },
    { name: "money", p: 1, types: { "handful of change": 5, "a few dollars": 10, "couple fivers": 5, "several twenties": 5, "wad of bills": 1 } },
    { name: "phone", p: 0.9, types: { "feature phone": 3, "smartphone": 7, "top-shelf smartphone": 3 } },
    { name: "child photos", p: 0.25, types: { "photo of a child": 5, "photos of children": 2, "photo of a dog": 1 } },
    { name: "partner photos", p: 0.4, types: { "photo of partner": 5, "photo of a cat": 1 } }
  ],
  containers: <Container[]>[
    { name: "pockets", p: 0.7, types: { "pockets": 1 }, capacity: 2 },
    { name: "purse", p: 0.4, types: { "small purse": 2, "large purse": 5 }, capacity: 16 },
    { name: "backpack", p: 0.2, types: { "backpack": 1 }, capacity: 32 }
  ],
  uncommon: <Item[]>[
    new Item("scalpel blade", very_rare, "medical", tiny),
    new Item("band-aid", common, "medical", tiny),
    new Item("bandage", uncommon, "medical", tiny),
    new Item("self-adhesive bandage", rare, "medical", tiny),
    new Item("small bottle of disinfectant", rare, "medical", tiny),
    new Item("hypodermic needle", very_rare, "medical", tiny),
    new Item("painkillers", very_common, "medical", tiny),
    new Item("allergy pills", uncommon, "medical", tiny),
    new Item("uncommon medicine", very_rare, "medical", tiny),
    new Item("cold medcinie", uncommon, "medical", tiny),
    new Item("stiches", very_rare, "medical", tiny),
    new Item("glucometer", rare, "medical", small),
    new Item("epipen", very_rare, "medical", small),
    new Item("large bottle of painkillers", rare, "medical", small),
    new Item("insulin pen", rare, "medical", small),
    new Item("bottle of disinfectant", rare, "medical", small),
    new Item("sterile gauze", uncommon, "medical", small),
    new Item("elastic bandage", common, "medical", little),
    new Item("soft orthosis", very_rare, "medical", little),
    new Item("first aid kit", uncommon, "medical", medium),
    new Item("blood pressure meter", very_rare, "medical", medium),
    new Item("sthetoscope", very_rare, "medical", medium),
    new Item("pocket knife", uncommon, "survival", tiny),
    new Item("Swiss army knife", rare, "survival", tiny),
    new Item("fish hook", very_rare, "survival", tiny),
    new Item("firestarter", very_rare, "survival", tiny),
    new Item("whistle", very_rare, "survival", tiny),
    new Item("glowsticks", rare, "survival", tiny),
    new Item("storm matches", rare, "survival", tiny),
    new Item("folding knife", uncommon, "survival", small),
    new Item("signalling mirror", very_rare, "survival", small),
    new Item("candle", rare, "survival", small),
    new Item("paracord", rare, "survival", small),
    new Item("hunting knife", very_rare, "survival", little),
    new Item("portable radio", very_rare, "survival", little),
    new Item("flashlight", very_common, "survival", little),
    new Item("roll of duct tape", rare, "survival", little),
    new Item("rope", uncommon, "survival", medium),
    new Item("survival blanket", very_rare, "survival", medium),
    new Item("dehydrated food", rare, "survival", medium),
    new Item("piece of candy", common, "refreshment", tiny),
    new Item("chewing gum", very_common, "refreshment", tiny),
    new Item("ketchup packet", very_rare, "refreshment", tiny),
    new Item("candy bar", common, "refreshment", small),
    new Item("bag of peanuts", common, "refreshment", small),
    new Item("sauce packets", rare, "refreshment", small),
    new Item("soda can", very_common, "refreshment", little),
    new Item("pretzel", uncommon, "refreshment", little),
    new Item("sandwich", rare, "refreshment", little),
    new Item("box of chocolades", uncommon, "refreshment", medium),
    new Item("water bottle", very_common, "refreshment", medium),
    new Item("soda bottle", common, "refreshment", medium),
    new Item("cinnamon bun", uncommon, "refreshment", medium),
    new Item("lunch in a box", rare, "refreshment", medium),
    new Item("electronic screwdriver", rare, "tool", tiny),
    new Item("needle", very_rare, "tool", tiny),
    new Item("bike tools set", very_rare, "tool", small),
    new Item("small wire cutters", very_rare, "tool", tiny),
    new Item("screwdriver", rare, "tool", little),
    new Item("multitool", rare, "tool", little),
    new Item("pliers", rare, "tool", little),
    new Item("multimeter", very_rare, "tool", little),
    new Item("hammer", rare, "tool", medium),
    new Item("electric drill", very_rare, "tool", medium),
    new Item("hand saw", very_rare, "tool", medium),
    new Item("monkey wrench", rare, "tool", medium),
    new Item("soldering iron", very_rare, "tool", medium),
    new Item("toothbrush", rare, "hygiene", small),
    new Item("tooth paste", rare, "hygiene", little),
    new Item("deodorant", uncommon, "hygiene", little),
    new Item("soap bar", rare, "hygiene", small),
    new Item("dental floss", very_rare, "hygiene", tiny),
    new Item("tampons", very_common, "hygiene", little),
    new Item("shampoo", very_rare, "hygiene", medium),
    new Item("nail clippers", rare, "hygiene", tiny),
    new Item("dry shampoo", very_rare, "hygiene", small),
    new Item("toilet paper", rare, "hygiene", medium),
    new Item("tissues", very_common, "hygiene", small),
    new Item("wet tissues", common, "hygiene", little),
    new Item("pads", common, "hygiene", medium),
    new Item("small fruit", very_common, "groceries", little, { mandarines: 1, plums: 2, lychee: 1, berries: 3 }),
    new Item("large fruit", common, "groceries", medium, { grapes: 1, banana: 2, apple: 3, pear: 2, mango: 1, pomelo: 1, grapefruit: 1, pomegranate: 2 }),
    new Item("small vegetable", common, "groceries", little, { tomato: 1, cucumber: 1, onion: 1, carrot: 1, }),
    new Item("large vegetable", rare, "groceries", medium, { lettuce: 1, cauliflower: 1, potatoes: 2, pumpkin: 1, }),
    new Item("nuts", uncommon, "groceries", small, { peanuts: 1, walnuts: 1, cashews: 1, pistachios: 1, almonds: 1 }),
    new Item("small baked goods", uncommon, "groceries", little, { breadroll: 2, bagel: 2, cookies: 1 }),
    new Item("large baked goods", rare, "groceries", medium, { bread: 1, baguette: 1, cake: 2, pie: 2 }),
    new Item("drinks", common, "groceries", medium, { "bottle of water": 3, "bottle of soda": 2, "jug of milk": 2, "bottle of juice": 1, "tea bags": 1, "coffee": 1 }),
    new Item("beer", common, "groceries", little),
    new Item("wine", rare, "groceries", medium),
    new Item("spirits", rare, "groceries", medium, { whiskey: 3, bourbon: 2, vodka: 1, gin: 1, rum: 1 }),
    new Item("pasta", rare, "groceries", medium),
    new Item("rice", rare, "groceries", medium),
    new Item("sweets", common, "groceries", little, { candies: 1, "candy bars": 1, chocolate: 2, chocolates: 1 }),
    new Item("canned food", rare, "groceries", medium),
    new Item("frozen meal", uncommon, "groceries", medium),
    new Item("meat", uncommon, "groceries", medium, { poultry: 1, beef: 1, pork: 1, fish: 1 })
  ]
}

export interface WeightedOptions {
  [name: string]: number;
}

export interface CommonItemTemplate {
  name: string,
  p: number,
  types: WeightedOptions
}

export interface Container extends CommonItemTemplate {
  capacity: number;
}