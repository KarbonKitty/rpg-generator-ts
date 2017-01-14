export class Item {
  name: string;
  rarity: number;
  tags: string | string[];
  size: Size;
  types?: WeightedOptions;

  constructor(name: string, rarity: number, tags: Tag | Tag[], size: Size, types?: WeightedOptions) {
    this.name = name;
    this.rarity = rarity;
    this.tags = tags;
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
    { name: "child photos", p: 0.25, types: { "photo of a child": 5, "photos of children": 2, "photo of dog": 1 } },
    { name: "partner photos", p: 0.4, types: { "photo of partner": 5, "photo of cat": 1 } }
  ],
  containers: <Container[]>[
    { name: "pockets", p: 0.7, types: { "pockets": 1 }, sizes: { tiny: { min: 0, max: 2 } } },
    { name: "purse", p: 0.4, types: { "small purse": 2, "large purse": 5 }, sizes: { tiny: { min: 2, max: 5 }, small: { min: 1, max: 4 }, little: { min: 1, max: 2 } } },
    { name: "backpack", p: 0.2, types: { "backpack": 1 }, sizes: { tiny: { min: 0, max: 3 }, small: { min: 0, max: 2 }, little: { min: 1, max: 2 }, medium: { min: 1, max: 2 } } }
  ],
  uncommon: <Item[]>[
    new Item("scalpel blade", 0.1, "medical", "tiny"),
    new Item("band-aid", 0.5, "medical", "tiny"),
    new Item("bandage", 0.3, "medical", "tiny"),
    new Item("self-adhesive bandage", 0.2, "medical", "tiny"),
    new Item("small bottle of disinfectant", 0.2, "medical", "tiny"),
    new Item("hypodermic needle", 0.1, "medical", "tiny"),
    new Item("painkillers", 0.5, "medical", "tiny"),
    new Item("allergy pills", 0.3, "medical", "tiny"),
    new Item("uncommon medicine", 0.1, "medical", "tiny"),
    new Item("cold medcinie", 0.2, "medical", "tiny"),
    new Item("stiches", 0.1, "medical", "tiny"),
    new Item("glucometer", 0.2, "medical", "small"),
    new Item("epipen", 0.1, "medical", "small"),
    new Item("large bottle of painkillers", 0.2, "medical", "small"),
    new Item("insulin pen", 0.1, "medical", "small"),
    new Item("bottle of disinfectant", 0.2, "medical", "small"),
    new Item("sterile gauze", 0.1, "medical", "small"),
    new Item("elastic bandage", 0.5, "medical", "little"),
    new Item("soft orthosis", 0.1, "medical", "little"),
    new Item("first aid kit", 0.3, "medical", "medium"),
    new Item("blood pressure meter", 0.1, "medical", "medium"),
    new Item("sthetoscope", 0.1, "medical", "medium"),
    new Item("pocket knife", 0.5, "survival", "tiny"),
    new Item("Swiss army knife", 0.3, "survival", "tiny"),
    new Item("fish hook", 0.1, "survival", "tiny"),
    new Item("firestarter", 0.1, "survival", "tiny"),
    new Item("whistle", 0.1, "survival", "tiny"),
    new Item("glowsticks", 0.2, "survival", "tiny"),
    new Item("storm matches", 0.2, "survival", "tiny"),
    new Item("folding knife", 0.3, "survival", "small"),
    new Item("signalling mirror", 0.1, "survival", "small"),
    new Item("candle", 0.2, "survival", "small"),
    new Item("paracord", 0.2, "survival", "small"),
    new Item("hunting knife", 0.1, "survival", "little"),
    new Item("portable radio", 0.1, "survival", "little"),
    new Item("flashlight", 0.7, "survival", "little"),
    new Item("roll of duct tape", 0.2, "survival", "little"),
    new Item("rope", 0.5, "survival", "medium"),
    new Item("survival blanket", 0.1, "survival", "medium"),
    new Item("dehydrated food", 0.2, "survival", "medium"),
    new Item("piece of candy", 0.5, "refreshment", "tiny"),
    new Item("chewing gum", 0.5, "refreshment", "tiny"),
    new Item("ketchup packet", 0.1, "refreshment", "tiny"),
    new Item("candy bar", 0.5, "refreshment", "small"),
    new Item("bag of peanuts", 0.5, "refreshment", "small"),
    new Item("sauce packets", 0.1, "refreshment", "small"),
    new Item("soda can", 0.5, "refreshment", "little"),
    new Item("pretzel", 0.3, "refreshment", "little"),
    new Item("sandwich", 0.2, "refreshment", "little"),
    new Item("box of chocolades", 0.5, "refreshment", "medium"),
    new Item("water bottle", 0.5, "refreshment", "medium"),
    new Item("soda bottle", 0.3, "refreshment", "medium"),
    new Item("cinnamon bun", 0.3, "refreshment", "medium"),
    new Item("lunch in a box", 0.2, "refreshment", "medium"),
    new Item("electronic screwdriver", 0.2, "tool", "tiny"),
    new Item("needle", 0.1, "tool", "tiny"),
    new Item("bike tools set", 0.1, "tool", "small"),
    new Item("small wire cutters", 0.1, "tool", "tiny"),
    new Item("screwdriver", 0.3, "tool", "little"),
    new Item("multitool", 0.3, "tool", "little"),
    new Item("pliers", 0.2, "tool", "little"),
    new Item("multimeter", 0.1, "tool", "little"),
    new Item("hammer", 0.3, "tool", "medium"),
    new Item("electric drill", 0.1, "tool", "medium"),
    new Item("hand saw", 0.1, "tool", "medium"),
    new Item("monkey wrench", 0.2, "tool", "medium"),
    new Item("soldering iron", 0.1, "tool", "medium"),
    new Item("toothbrush", 0.2, "hygiene", "small"),
    new Item("tooth paste", 0.2, "hygiene", "little"),
    new Item("deodorant", 0.3, "hygiene", "little"),
    new Item("soap bar", 0.2, "hygiene", "small"),
    new Item("dental floss", 0.1, "hygiene", "tiny"),
    new Item("tampons", 0.5, "hygiene", "little"),
    new Item("shampoo", 0.1, "hygiene", "medium"),
    new Item("nail clippers", 0.2, "hygiene", "tiny"),
    new Item("dry shampoo", 0.1, "hygiene", "small"),
    new Item("toilet paper", 0.2, "hygiene", "medium"),
    new Item("tissues", 0.5, "hygiene", "small"),
    new Item("wet tissues", 0.3, "hygiene", "little"),
    new Item("pads", 0.3, "hygiene", "medium")
  ]
}

type Size = 'tiny' | 'small' | 'little' | 'medium';
type Tag = 'medical' | 'survival' | 'refreshment' | 'tool' | 'hygiene';

export interface WeightedOptions {
  [name: string]: number;
}

export interface CommonItemTemplate {
  name: string,
  p: number,
  types: WeightedOptions
}

export interface Category {
  [name: string]: WeightedOptions
}

export interface Container extends CommonItemTemplate {
  sizes: {
    [name: string]: MinMax
  }
}

export interface MinMax {
  min: number,
  max: number
}