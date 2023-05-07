export interface Poke{
img: string;
id: number;
name: string;
height: number;
weight: number;
abilities: [
  {
    ability: {
      name: string;
    };
    slot: number;
  }
];
types: [
  {
    slot: 1;
    type: {
      name: string;
    };
  }
];
stats: [
  {
    base_stat: number;
    stat: {
      name: string;
    }
  }
];
}
