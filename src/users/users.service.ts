import { eq, sql } from "drizzle-orm";
import db from "../drizzle/queries/db"; 
import { users } from "../drizzle/queries/schema";
import type { TSUser, TUserInsert } from "../drizzle/queries/schema"; // Adjust the path if needed

export const createusersService = async (user: TUserInsert) => {
//   const [created] = await db.insert(users).values(user).returning();
//   return created;
await db.insert(users).values(user)
return "user created "
};

export const getusersService = async () => {
//   const allusers = await db.select().from(users);
//   return allusers;

return await db.query.users.findMany({
    columns:{
        userID: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
        address: true,
        role: true
    }
})
};

export const getusersByIdService = async (id: number) => {
//   const users: TSUser | undefined = await db.query.users.findFirst({
//     where: eq(users.userID, id),
//   });
//   return users;
return await db.query.users.findFirst({
    where: sql`${users.userID} = ${id}`
})
};



export const updateusersService = async (id: number, payment: TSUser) => {
  await db.update(users).set(users).where(eq(users.userID, id)).returning();
  return "users updated successfully";
};

export const deleteusersService = async (id: number) => {
  const [deleted] = await db.delete(users).where(eq(users.userID, id)).returning();
  return deleted;
};
