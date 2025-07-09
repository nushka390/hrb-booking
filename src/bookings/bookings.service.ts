import db from "../drizzle/queries/db"; 
import { eq } from "drizzle-orm";
import { bookings } from "../drizzle//queries/schema";

// Create a new booking
export const createbookingsService = async (bookingData: typeof bookings.$inferInsert) => {
  try {
    const result = await db.insert(bookings).values(bookingData).returning();
    return result[0]; // return the newly created booking
  } catch (error) {
    throw new Error(`Failed to create booking: ${error}`);
  }
};


export const getAllbookingsService = async () => {
  try {
    return await db.select().from(bookings);
  } catch (error) {
    throw new Error(`Failed to fetch bookings: ${error}`);
  }
};

// Get booking by ID
export const getbookingsByIdService = async (id: number) => {
  try {
    const result = await db.select().from(bookings).where(eq(bookings.BookingID, id));
    return result[0]; // return the booking or undefined
  } catch (error) {
    throw new Error(`Failed to fetch booking by ID: ${error}`);
  }
};

// Update booking
export const updatebookingsService = async (id: number, updatedData: Partial<typeof bookings.$inferInsert>) => {
  try {
    const result = await db
      .update(bookings)
      .set(updatedData)
      .where(eq(bookings.BookingID, id))
      .returning();
    return result[0]; // return the updated booking
  } catch (error) {
    throw new Error(`Failed to update booking: ${error}`);
  }
};

// Delete booking
export const deletebookingsService = async (id: number) => {
  try {
    const result = await db.delete(bookings).where(eq(bookings.BookingID, id)).returning();
    return result[0]; // return deleted booking (if needed)
  } catch (error) {
    throw new Error(`Failed to delete booking: ${error}`);
  }
};