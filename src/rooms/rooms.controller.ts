

import { Request, Response } from "express";
import { createroomsService, getroomsService, getroomsByIdService, updateroomsService, deleteroomsService } from '../rooms/rooms.service';


export const createroomsController = async (req: Request, res: Response) => {
  try {
    const rooms = req.body;
    const created = await createroomsService(rooms);
    if (!created) return res.json({ message: "rooms not created" });
    return res.status(201).json({ message: created });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};


export const getroomsController = async (req: Request, res: Response) => {
  try {
    const rooms = await getroomsService();
    if (!rooms || rooms.length === 0) {
       res.status(404).json({ message: "No rooms found" });
       return;
    }
     res.status(200).json(rooms);
  } catch (error: any) {
     res.status(500).json({ error: error.message });
  }
};



export const getroomsByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const rooms = await getroomsByIdService(id);
    console.log(rooms)
    if (!rooms) return res.status(404).json({ message: "rooms not found" });
    return res.status(200).json({ data: rooms });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};


export const updateroomsController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const rooms = req.body;
    const existingrooms = await getroomsByIdService(id);
    if (!existingrooms) return res.status(404).json({ message: "rooms not found" });

    const updated = await updateroomsService(id, rooms);
    if (!updated) return res.status(400).json({ message: "rooms not updated" });
    return res.status(200).json({ message: "rooms updated successfully" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};


export const deleteroomsController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const existingrooms = await getroomsByIdService(id);
    if (!existingrooms) return res.status(404).json({ message: "rooms not found" });

    const deleted = await deleteroomsService(id);
    if (!deleted) return res.status(400).json({ message: "rooms not deleted" });

    return res.status(204).json({ message: "rooms deleted successfully" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};