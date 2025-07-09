import { eq } from "drizzle-orm";
import db from "../drizzle/queries/db"; 
import { bookings, rooms } from "../drizzle/queries/schema";
import type { TSRoom } from "../drizzle/queries/schema"; // Adjust the path if needed

export const createroomsService = async (room: TSRoom) => {
  const [created] = await db.insert(rooms).values(room).returning();
  return created;
};

export const getroomsService = async () => {
  const allrooms = await db.select().from(rooms);
  return allrooms;
};

export const getroomsByIdService = async (id: number) => {
    console.log(id)
  const Rooms = await db.select()
        .from(bookings)
        .where(eq(bookings.BookingID, id));


  console.log('33333', Rooms)
  return Rooms;
};



export const updateroomsService = async (id: number, booking: TSRoom) => {
  await db.update(rooms).set(booking).where(eq(rooms.room_id, id)).returning();
  return "room updated successfully";
};

export const deleteroomsService = async (id: number) => {
  const [deleted] = await db.delete(rooms).where(eq(rooms.room_id, id)).returning();
  return deleted;
};
