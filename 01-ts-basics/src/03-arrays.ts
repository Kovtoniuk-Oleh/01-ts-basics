/**
 * - Типізація масивів: тип[] та Array<тип>
 * - Підказки методів та властивостей
 * - Типізація масиву об'єктів
 */

/***************** 1 *****************/
const planets: string[] = ["Mercury", "Venus", "Earth", "Mars"];

const numbers: number[] = [11, 243];

console.log(numbers[0].toFixed());

/***************** 2 *****************/
export interface Order {
  email?: string;
  total?: number;
}

const orders: Array<Order> = [
  { total: 120 },
  { email: "emily.watts@mail.com" },
  { email: "liam.smith@mail.com", total: 200 },
  { email: "sophia.jones@mail.com" },
  { email: "noah.brown@mail.com", total: 95 },
];

const orders2: Order[] = [
  { email: "sophia.jones@mail.com" },
  { email: "noah.brown@mail.com", total: 95 },
];

orders[0].total = 2;
