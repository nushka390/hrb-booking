import { eq } from "drizzle-orm";
import db from "../drizzle/queries/db"; 
import { payments } from "../drizzle/queries/schema";
import type { TSPayment } from "../drizzle/queries/schema"; // Adjust the path if needed

export const createpaymentsService = async (payment: TSPayment) => {
  const [created] = await db.insert(payments).values(payment).returning();
  return created;
};

export const getpaymentsService = async () => {
  const allpayments = await db.select().from(payments);
  return allpayments;
};

export const getpaymentsByIdService = async (id: number) => {
  const payament: TSPayment | undefined = await db.query.payments.findFirst({
    where: eq(payments.paymentID, id),
  });
  return payment;
};



export const updatepaymentsService = async (id: number, payment: TSPayment) => {
  await db.update(payments).set(payment).where(eq(payments.paymentID, id)).returning();
  return "room updated successfully";
};

export const deletepaymentsService = async (id: number) => {
  const [deleted] = await db.delete(payments).where(eq(payments.paymentID, id)).returning();
  return deleted;
};
