// Room data shared by the homepage and the Rooms page (/hotel-malda-wb).
//
// - `categories`: the three comfort levels. The homepage shows only these.
// - `roomTypes`: every bookable room type, shown on the Rooms page grouped by guest count.
//   A room type without its own `image` falls back to its category's photo and is
//   labelled "Representative photo" on the page — add a real photo when you have one.

export const categories = [
  {
    id: "economy",
    name: "Economy",
    summary: "Practical, comfortable rooms with all the essentials — for 1 to 3 guests.",
    image: "/rooms/single-economy.jpg",
    amenities: ["Free Wi‑Fi", "Air conditioning", "TV", "Room service (lunch & dinner)", "Complimentary breakfast"],
  },
  {
    id: "deluxe",
    name: "Deluxe",
    summary: "More space, modern furnishings and a premium TV — for 1 to 3 guests.",
    image: "/rooms/double-deluxe.jpg",
    amenities: ["Free Wi‑Fi", "Air conditioning", "Premium TV", "Room service (lunch & dinner)", "Complimentary breakfast"],
  },
  {
    id: "suite",
    name: "Suite",
    summary: "A main bedroom plus an additional room — best for guests travelling with an assistant.",
    image: "/rooms/suite-1.jpg",
    amenities: ["Additional room for an assistant", "Free Wi‑Fi", "Air conditioning", "Premium TV", "Room service (lunch & dinner)", "Complimentary breakfast"],
  },
];

export const roomTypes = [
  { id: "single-economy", name: "Single Economy", category: "economy", guests: 1, image: "/rooms/single-economy.jpg" },
  { id: "single-deluxe", name: "Single Deluxe", category: "deluxe", guests: 1 },
  { id: "double-economy", name: "Double Economy", category: "economy", guests: 2, image: "/rooms/deluxe2.jpeg" },
  { id: "double-deluxe", name: "Double Deluxe", category: "deluxe", guests: 2, image: "/rooms/double-deluxe.jpg" },
  { id: "triple-economy", name: "Triple Economy", category: "economy", guests: 3 },
  { id: "triple-deluxe", name: "Triple Deluxe", category: "deluxe", guests: 3 },
  { id: "suite", name: "Suite", category: "suite", guests: 3, guestsLabel: "2–3 guests", image: "/rooms/suite-1.jpg" },
];

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));

export const guestLabel = (room) => room.guestsLabel ?? `${room.guests} guest${room.guests > 1 ? "s" : ""}`;
