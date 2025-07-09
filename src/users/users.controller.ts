

import { Request, Response } from "express";
import bycrypt from "bcryptjs"

import { createusersService, deleteusersService, getusersByIdService, getusersService, updateusersService } from "../users/users.service";


export const createusersController = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const password = user.password;
    const hashedPassword = await bycrypt.hashSync(password, 10)
    user.password = hashedPassword;

    console.log("I am here")
    console.log("iam the user", user)

    const created = await createusersService(user);
console.log("I am here again")
    if (!created) return res.json({ message: "users not created" });
    return res.status(201).json({ message: created });
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({ error: error });
  }
};


export const getusersController = async (_req: Request, res: Response) => {
  try {
    const users = await getusersService();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json(users);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};



export const getusersByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const users = await getusersByIdService(id);
    if (!users) return res.status(404).json({ message: "users not found" });
    return res.status(200).json({ data: users });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};


export const updateusersController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const users = req.body;
    const existingusers = await getusersByIdService(id);
    if (!existingusers) return res.status(404).json({ message: "users not found" });

    const updated = await updateusersService(id, users);
    if (!updated) return res.status(400).json({ message: "users not updated" });
    return res.status(200).json({ message: "users updated successfully" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};


export const deleteusersController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const existingusers = await getusersByIdService(id);
    if (!existingusers) return res.status(404).json({ message: "users not found" });

    const deleted = await deleteusersService(id);
    if (!deleted) return res.status(400).json({ message: "users not deleted" });

    return res.status(204).json({ message: "users deleted successfully" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};