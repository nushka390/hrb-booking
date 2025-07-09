import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  timestamp,
  decimal,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { boolean } from "drizzle-orm/pg-core";

export const users = pgTable("user_table", {
  userID: serial("userID").primaryKey(), 
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  password: varchar("password", { length: 256 }).notNull(),
  phoneNumber: integer("phoneNumber").notNull(),
  address: varchar("address", { length: 256 }),
  role: text("role").notNull(),
  isVerified: boolean("isVerified").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});


export const hotels = pgTable("hotels_table", {
  hotel_id: serial("hotel_id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  address: varchar("address", { length: 255 }).notNull(),
  phoneNumber: integer("phoneNumber").notNull(),
  category: text("category"),
  rating: integer("rating"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const rooms = pgTable("rooms", {
  room_id: serial("room_id").primaryKey(),
  hotel_id: integer("hotel_id")
    .notNull()
    .references(() => hotels.hotel_id, { onDelete: "cascade" }),
  room_type: text("room_type").notNull(),
  price_per_night: decimal("price_per_night").notNull(),
  capacity: integer("capacity").notNull(),
  amenities: text("amenities"),
  is_available: text("is_available").default("true"),
  created_at: timestamp("created_at").defaultNow(),
});


export const bookings = pgTable("booking_table", {
  BookingID: serial("BookingID").primaryKey(),
  user_id: integer("user_id")
    .notNull()
    .references(() => users.userID, { onDelete: "cascade" }),
  room_id: integer("room_id")
    .notNull()
    .references(() => rooms.room_id, { onDelete: "cascade" }),
  check_in_date: timestamp("check_in_date").notNull(),
  booking_status: text("booking_status").default("pending"),
  totalAmount: decimal("totalAmount").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});


export const payments = pgTable("payment_table", {
  paymentID: serial("paymentID").primaryKey(),
  bookingID: integer("bookingID")
    .notNull()
    .references(() => bookings.BookingID, { onDelete: "cascade" }),
  paymentDate: timestamp("paymentDate").defaultNow(),
  amount: decimal("amount").notNull(),
  paymentMethod: text("payment method").notNull(),
});

export const tickets = pgTable("customer_support_ticket", {
  ticket_id: serial("ticket_id").primaryKey(),
  user_id: integer("user_id")
    .notNull()
    .references(() => users.userID, { onDelete: "cascade" }),
  subject: text("subject").notNull(),
  description: text("description"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const usersRelations = relations(users as any, ({ many }) => ({
  bookings: many(bookings),
  tickets: many(tickets),
}));
export const hotelsRelations = relations(hotels, ({ many }) => ({
  rooms: many(rooms),
}));





export const roomsRelations = relations(rooms, ({ one, many }) => ({
    hotel: one(hotels, {
        fields: [rooms.hotel_id],
        references: [hotels.hotel_id],
    }), 

    bookings: many(bookings), 
}));


export const bookingsRelations = relations(bookings, ({ one }) => ({
    user: one(users, {
        fields: [bookings.user_id],
        references: [users.userID],
    }), 

    room: one(rooms, {
        fields: [bookings.room_id],
        references: [rooms.room_id],
    }), 
}));



export const paymentsRelations = relations(payments, ({ one }) => ({
    booking: one(bookings, {
        fields: [payments.bookingID],
        references: [bookings.BookingID],
    })
}))
export const supportTicketsRelations = relations(tickets, ({ one }) => ({
    user: one(users, {
        fields: [tickets.user_id],
        references: [users.userID],
    }), 
}));
export type TSUser = typeof users.$inferSelect;
export type TUserInsert = typeof users.$inferInsert;
export type TSHotel = typeof hotels.$inferSelect;
export type THotelInsert = typeof hotels.$inferInsert;
export type TSRoom = typeof rooms.$inferSelect;
export type TRoomInsert = typeof rooms.$inferInsert;
export type TSBooking = typeof bookings.$inferSelect;
export type TBookingInsert = typeof bookings.$inferInsert;
export type TSPayment = typeof payments.$inferSelect;
export type TPaymentInsert = typeof payments.$inferInsert;
export type TSTicket = typeof tickets.$inferSelect;
export type TTicketInsert = typeof tickets.$inferInsert;


