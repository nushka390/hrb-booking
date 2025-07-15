import { eq, sql } from "drizzle-orm";
import db from "../drizzle/queries/db"; 
import { users } from "../drizzle/queries/schema";
import type { TSUser, TUserInsert } from "../drizzle/queries/schema";

export const createusersService = async (user: TUserInsert) => {
  await db.insert(users).values(user);
  return "user created";
};

export const getusersService = async () => {
  return await db.query.users.findMany({
    columns: {
      userID: true,
      firstName: true,
      lastName: true,
      phoneNumber: true,
      address: true,
      role: true
    }
  });
};

export const getusersByIdService = async (id: number) => {
  return await db.query.users.findFirst({
    where: sql`${users.userID} = ${id}`
  });
};

export const updateusersService = async (id: number, updatedUser: Partial<TSUser>) => {
  await db.update(users).set(updatedUser).where(eq(users.userID, id)).returning();
  return "users updated successfully";
};

export const deleteusersService = async (id: number) => {
  const [deleted] = await db.delete(users).where(eq(users.userID, id)).returning();
  return deleted;
};
