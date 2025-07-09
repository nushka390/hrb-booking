

import { Request, Response } from "express";
import { createpaymentsService, deletepaymentsService, getpaymentsByIdService, getpaymentsService, updatepaymentsService } from "./payments.service";


export const createpaymentsController = async (req: Request, res: Response) => {
  try {
    const payments = req.body;
    const created = await createpaymentsService(payments);
    if (!created) return res.json({ message: "payments not created" });
    return res.status(201).json({ message: created });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};


export const getpaymentsController = async (_req: Request, res: Response) => {
  try {
    const payments = await getpaymentsService();
    if (!payments || payments.length === 0) {
      return res.status(404).json({ message: "No payments found" });
    }
    return res.status(200).json(payments);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};



export const getpaymentsByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const payments = await getpaymentsByIdService(id);
    if (!payments) return res.status(404).json({ message: "payments not found" });
    return res.status(200).json({ data: payments });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};


export const updatepaymentsController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const payments = req.body;
    const existingpayments = await getpaymentsByIdService(id);
    if (!existingpayments) return res.status(404).json({ message: "payments not found" });

    const updated = await updatepaymentsService(id, payments);
    if (!updated) return res.status(400).json({ message: "payments not updated" });
    return res.status(200).json({ message: "payments updated successfully" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};


export const deletepaymentsController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const existingpayments = await getpaymentsByIdService(id);
    if (!existingpayments) return res.status(404).json({ message: "payments not found" });

    const deleted = await deletepaymentsService(id);
    if (!deleted) return res.status(400).json({ message: "payments not deleted" });

    return res.status(204).json({ message: "payments deleted successfully" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};