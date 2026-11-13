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
    summary: "Practical, comfortable rooms with all the essentials — from 120 sq ft singles to 300–320 sq ft triples.",
    image: "/rooms/single-economy.jpg",
    amenities: ["Free Wi‑Fi", "Air conditioning", "TV", "Room service (lunch & dinner)", "Complimentary breakfast"],
  },
  {
    id: "deluxe",
    name: "Deluxe",
    summary: "The same room sizes and amenities as Economy, with lavishly done interiors.",
    image: "/rooms/double-deluxe.jpg",
    amenities: ["Lavishly done interiors", "Free Wi‑Fi", "Air conditioning", "TV", "Room service (lunch & dinner)", "Complimentary breakfast"],
  },
  {
    id: "suite",
    name: "Suite",
    summary: "A spacious 450 sq ft suite with a main bedroom plus an additional room — best for guests travelling with an assistant.",
    image: "/rooms/suite-1.jpg",
    amenities: ["Additional room for an assistant", "Free Wi‑Fi", "Air conditioning", "Premium TV", "Room service (lunch & dinner)", "Complimentary breakfast"],
  },
];

export const roomTypes = [
  {
    id: "single-economy",
    name: "Smart Solo Compact Room",
    category: "economy",
    guests: 1,
    size: "120 sq ft",
    image: "/rooms/single-economy.jpg",
    note: "Our entry-level room for solo travellers — a compact 120 sq ft room with the essentials, at our lowest tariff.",
  },
  { id: "single-deluxe", name: "Single Deluxe", category: "deluxe", guests: 1, size: "120 sq ft" },
  { id: "double-economy", name: "Double Economy", category: "economy", guests: 2, size: "220–300 sq ft", image: "/rooms/deluxe2.jpeg" },
  { id: "double-deluxe", name: "Double Deluxe", category: "deluxe", guests: 2, size: "220–300 sq ft", image: "/rooms/double-deluxe.jpg" },
  { id: "triple-economy", name: "Triple Economy", category: "economy", guests: 3, size: "300–320 sq ft", beds: "Three twin beds" },
  { id: "triple-deluxe", name: "Triple Deluxe", category: "deluxe", guests: 3, size: "300–320 sq ft", beds: "One king bed and one sofa bed", image: "/rooms/show.jpeg" },
  { id: "suite", name: "Suite", category: "suite", guests: 3, guestsLabel: "2–3 guests", size: "450 sq ft", image: "/rooms/suite-1.jpg" },
];

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));

export const guestLabel = (room) => room.guestsLabel ?? `${room.guests} guest${room.guests > 1 ? "s" : ""}`;
