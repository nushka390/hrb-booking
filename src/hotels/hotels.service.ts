import { eq } from "drizzle-orm";
import db from "../drizzle/queries/db"; 
import { hotels } from "../drizzle/queries/schema";
import type { TSHotel } from "../drizzle/queries/schema"; // Adjust the path if needed

export const createhotelsService = async (hotels: TSHotel) => {
  const [created] = await db.insert(hotels).values(hotels).returning();
  return created;
};

export const gethotelsService = async () => {
  const allhotels = await db.select().from(hotels);
  return allhotels;
};

export const gethotelsByIdService = async (id: number) => {
  const hotels = await db.query.hotels.findFirst({
    where: eq(hotels.hotel_id, id),
  });
  return hotels;
};



export const updatehotelsService = async (id: number,hotels: TSHotel) => {
  await db.update(hotels).set(hotels).where(eq(hotels.hotel_id, id)).returning();
  return "room updated successfully";
};

export const deletehotelsService = async (id: number) => {
  const [deleted] = await db.delete(rooms).where(eq(rooms.room_id, id)).returning();
  return deleted;
};
