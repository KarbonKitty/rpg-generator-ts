
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
  uncommon: {
    medical: <Category>{
      tiny: { "scalpel blade": 1, "band-aid": 5, "bandage": 3, "self-adhesive bandage": 2, "small bottle of disinfectant": 2, "hypodermic needle": 1, "painkillers": 5, "allergy pills": 3, "uncommon medicine": 1, "cold medicine": 2, "stiches": 1 },
      small: { "epipen": 1, "glucometer": 2, "large bottle of painkillers": 2, "insulin pen": 1, "bottle of disinfectant": 2, "sterile gauze": 1 },
      little: { "elastic bandage": 5, "soft orthosis": 1,  },
      medium: { "first aid kid": 3, "blood pressure meter": 1, "sthetoscope": 1 }
    },
    survival: <Category>{
      tiny: { "pocket knife": 5, "Swiss army knife": 3, "fish hook": 1, "firestarter": 1, "whistle": 1, "glowsticks": 2, "storm matches": 2 },
      small: { "folding knife": 3, "signalling mirror": 1, "couple of candles": 2, "length of paracord": 2 },
      little: { "hunting knife": 1, "portable radio": 1, "flashlight": 7, "roll of duct tape": 2 },
      medium: { "length of rope": 5, "survival blanket": 1, "dehydrated food": 2 }
    },
    refreshments: <Category>{
      tiny: { "piece of candy": 5, "chewing gum": 5, "ketchup packet": 1 },
      small: { "candy bar": 5, "bag of peanuts": 5, "handful of sauce packets": 1 },
      little: { "soda can": 5, "pretzel": 3, "sandwich": 2 },
      medium: { "box of chocolades": 5, "water bottle": 5, "soda bottle": 3, "cinnamon bun": 3, "lunch in a box": 2 }
    },
    tools: <Category>{
      tiny: { "electronic screwdriver": 2, "needle": 1 },
      small: { "bike tools set": 1, "small wire cutters": 1, },
      little: { "screwdriver": 3, "multitool": 3, "pliers": 2, "multimeter": 1 },
      medium: { "hammer": 3, "electric drill": 1, "hand saw": 1, "monkey wrench": 2, "soldering iron": 1, }
    }
  }
}

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

export interface ItemTemplate {
  name: string,
  w: number,
  types: WeightedOptions
}

export interface MinMax {
  min: number,
  max: number
}