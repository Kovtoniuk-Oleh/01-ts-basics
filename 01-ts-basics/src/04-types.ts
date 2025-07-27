/**
 * - Union
 * - Літеральні типи ( )
 */

/***************** 1 *****************/
// "pending", "shipped", "delivered", "canceled"

// const pendingStatus = "pending";

type Status = "pending" | "shipped" | "delivered" | "canceled";

let status: Status = "pending";

status = "pending";

status = "shipped";

status = "delivered";

status = "canceled";

// status = 33232

/***************** 2 *****************/
// delivery: "drone", "courier", "pickup"
// deliveryTime: "morning", "afternoon", "evening"
interface Order {
  username: string;
  email: string;
  total: number;
  delivery: "drone" | "courier" | "pickup";
  deliveryTime: "morning" | "afternoon" | "evening";
}

const order: Order = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  total: 120,
  delivery: "courier",
  deliveryTime: "afternoon",
};
