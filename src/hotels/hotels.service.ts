import { eq } from "drizzle-orm";
import db from "../drizzle/queries/db";
import { hotels } from "../drizzle/queries/schema";
import type { TSHotel } from "../drizzle/queries/schema";

export const createhotelsService = async (hotel: TSHotel) => {
  const [created] = await db.insert(hotels).values(hotel).returning();
  return created;
};

export const gethotelsService = async () => {
  return await db.select().from(hotels);
};

export const gethotelsByIdService = async (id: number) => {
  return await db.query.hotels.findFirst({
    where: eq(hotels.hotel_id, id),
  });
};

export const updatehotelsService = async (id: number, hotel: TSHotel) => {
  await db.update(hotels).set(hotel).where(eq(hotels.hotel_id, id)).returning();
  return "room updated successfully";
};

export const deletehotelsService = async (id: number) => {
  const [deleted] = await db.delete(hotels).where(eq(hotels.hotel_id, id)).returning();
  return deleted;
};
