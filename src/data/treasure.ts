
export let items = {
  common: /*<CommonItemTemplate[]>*/[
    { name: "keys", p: 0.85, types: { "a few keys": 5, "house key": 3, "large key ring": 1 } },
    { name: "glasses", p: 0.3, types: { "sunglasses": 10, "corrective glasses": 1, "contact lenses": 5 } },
    { name: "ID", p: 0.95, types: { "driver's licence": 20, "passport": 1 } },
    { name: "money", p: 1, types: { "handful of change": 5, "a few dollars": 10, "couple fivers": 5, "several twenties": 5, "wad of bills": 1 } },
    { name: "phone", p: 0.9, types: { "feature phone": 3, "smartphone": 7, "top-shelf smartphone": 3 } },
    { name: "child photos", p: 0.25, types: { "photo of child": 5, "photos of children": 2, "photo of dog": 1 } },
    { name: "partner photos", p: 0.4, types: { "photo of partner": 5, "photo of cat": 1 } }
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

export interface ItemTemplate {
  name: string,
  w: number,
  types: WeightedOptions
}