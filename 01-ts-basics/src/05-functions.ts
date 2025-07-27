/**
 * - Типізація функцій
 * - Типізація аргументів
 * - Тип значення, яке повертає функція
 * - Опціональні параметри
 * - Типізація методів
 */

/***************** 1 *****************/
// interface User {
//   username: string;
//   age: number;
// }

// const allUsers = [
//   { username: "poly", age: 20 },
//   { username: "jacob", age: 30 },
//   { username: "mango", age: 25 },
// ];

// function getUserNames(users: User[]): string[] {
//   return users.map((user) => user.username);
// }

// const names = getUserNames(allUsers);

/***************** 2 *****************/
function greet(username: string, age?: number): void {
  if (age === undefined) {
    console.log(username);

    return;
  }

  console.log(`${username}, ${age}`);
}

// greet("Poly", 15);

// greet("Jacob");

/***************** 3 *****************/
interface User {
  username: string;
  greet: (message: string) => void;
}

const jacob: User = {
  username: "Jacob",
  greet: (message) => {
    console.log(message);
  },
};

// jacob.greet("Welcome!");

/***************** 4 *****************/
interface Player {
  username: string;
  isOnline: boolean;
}

const allPlayers: Player[] = [
  { username: "poly", isOnline: false },
  { username: "jacob", isOnline: true },
  { username: "adrian", isOnline: false },
];

interface GamePlatform {
  getOnlinePlayers: (players: Player[]) => Player[];
  getPlayerNames: (players: Player[]) => string[];
}

const platform: GamePlatform = {
  getOnlinePlayers: (players) => {
    return players.filter((player) => player.isOnline);
  },
  getPlayerNames: (players) => {
    return players.map((player) => player.username);
  },
};

platform.getOnlinePlayers(allPlayers);
platform.getPlayerNames(allPlayers);

//// 5

type LogNameFunc = (name: string) => never;

// const logName: LogNameFunc = (name) => {
//   while(true) {}
// };

// logName("Andrii");

const planets: any[] = [{ name: "Earth" }];

planets.forEach((planet) => {
  planet.toFixed(3232);
});
