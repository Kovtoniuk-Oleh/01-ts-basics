/**
 * - Типізація об'єктів
 * - Використання interface
 * - Опціональні (?) та readonly поля
 */

// type User = {
//   username: string;
//   email: string;
//   isOnline: boolean;
//   age: number;
// };

interface IUser {
  username?: string;
  readonly email: string;
  isOnline?: boolean;
  age: number;
}

const jacob: IUser = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  // isOnline: undefined,
  age: 30,
};

const poly: IUser = {
  // username: "Poly",
  email: "p.makko@mail.com",
  isOnline: true,
  age: 20,
};

// jacob.email = ""

console.log(jacob.email);
console.log(poly);
