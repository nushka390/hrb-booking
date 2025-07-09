

import { Request, Response } from "express";
import { createhotelsService, gethotelsService, gethotelsByIdService, updatehotelsService, deletehotelsService } from '../hotels/hotels.service';


export const createhotelsController = async (req: Request, res: Response) => {
  try {
    const hotels = req.body;
    const created = await createhotelsService(hotels);
    if (!created) return res.json({ message: "hotels not created" });
    return res.status(201).json({ message: created });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};


export const gethotelsController = async (_req: Request, res: Response) => {
  try {
    const hotels = await gethotelsService();
    if (!hotels || hotels.length === 0) {
      return res.status(404).json({ message: "No hotels found" });
    }
    return res.status(200).json(hotels);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};



export const gethotelsByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const hotels = await gethotelsByIdService(id);
    if (!hotels) return res.status(404).json({ message: "hotels not found" });
    return res.status(200).json({ data: hotels });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};


export const updatehotelsController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const rooms = req.body;
    const existingrooms = await gethotelsByIdService(id);
    if (!existingrooms) return res.status(404).json({ message: "rooms not found" });

    const updated = await updatehotelsService(id, rooms);
    if (!updated) return res.status(400).json({ message: "hotels not updated" });
    return res.status(200).json({ message: "hotels updated successfully" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};


export const deletehotelsController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const existinghotels = await gethotelsByIdService(id);
    if (!existinghotels) return res.status(404).json({ message: "rooms not found" });

    const deleted = await deletehotelsService(id);
    if (!deleted) return res.status(400).json({ message: "rooms not deleted" });

    return res.status(204).json({ message: "rooms deleted successfully" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};