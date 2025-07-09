import { eq } from "drizzle-orm";
import db from "../drizzle/queries/db"; 
import { tickets } from "../drizzle/queries/schema";
import type { TSTicket } from "../drizzle/queries/schema"; // Adjust the path if needed

export const createticketsService = async (ticket: TSTicket) => {
  const [created] = await db.insert(tickets).values(ticket).returning();
  return created;
};

export const getticketsService = async () => {
  const alltickets = await db.select().from(tickets);
  return alltickets;
};

export const getticketsByIdService = async (id: number) => {
  const ticket: TSTicket | undefined = await db.query.tickets.findFirst({
    where: eq(tickets.ticket_id, id),
  });
  return ticket;
};



export const updateticketsService = async (id: number, ticket: TSTicket) => {
  await db.update(tickets).set(ticket).where(eq(tickets.ticket_id, id)).returning();
  return "room updated successfully";
};

export const deleteticketsService = async (id: number) => {
  const [deleted] = await db.delete(tickets).where(eq(tickets.ticket_id, id)).returning();
  return deleted;
};
