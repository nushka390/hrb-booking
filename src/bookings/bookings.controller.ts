

// // import { Request, Response } from "express";
// // import { createbookingsService, getbookingsService, getbookingsByIdService, updateBookingService, deletebookingsService } from '../bookings/bookings.service';


// // export const createbookingsController = async (req: Request, res: Response) => {
// //   try {
// //     const bookings = req.body;
// //     const created = await createbookingsService(bookings);
// //     if (!created) return res.json({ message: "bookings not created" });
// //     return res.status(201).json({ message: created });
// //   } catch (error: any) {
// //     return res.status(500).json({ error: error.message });
// //   }
// // };


// // export const getbookingsController = async (_req: Request, res: Response) => {
// //   try {
// //     const bookings = await getbookingsService();
// //     if (!bookings || bookings.length === 0) {
// //       return res.status(404).json({ message: "No bookings found" });
// //     }
// //     return res.status(200).json(bookings);
// //   } catch (error: any) {
// //     return res.status(500).json({ error: error.message });
// //   }
// // };



// // export const getbookingsByIdController = async (req: Request, res: Response) => {
// //   try {
// //     const id = parseInt(req.params.id);
// //     if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

// //     const bookings = await getbookingsByIdService(id);
// //     if (!bookings) return res.status(404).json({ message: "bookings not found" });
// //     return res.status(200).json({ data: bookings });
// //   } catch (error: any) {
// //     return res.status(500).json({ error: error.message });
// //   }
// // };


// // export const updatebookingsController = async (req: Request, res: Response) => {
// //   try {
// //     const id = parseInt(req.params.id);
// //     if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

// //     const bookings = req.body;
// //     const existingbookings = await getbookingsByIdService(id);
// //     if (!existingbookings) return res.status(404).json({ message: "bookings not found" });

// //     const updated = await updateBookingService(id, bookings);
// //     if (!updated) return res.status(400).json({ message: "bookings not updated" });
// //     return res.status(200).json({ message: "bookings updated successfully" });
// //   } catch (error: any) {
// //     return res.status(500).json({ error: error.message });
// //   }
// // };


// // export const deletebookingsController = async (req: Request, res: Response) => {
// //   try {
// //     const id = parseInt(req.params.id);
// //     if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

// //     const existingbookings = await getbookingsByIdService(id);
// //     if (!existingbookings) return res.status(404).json({ message: "bookings not found" });

// //     const deleted = await deletebookingsService(id);
// //     if (!deleted) return res.status(400).json({ message: "bookings not deleted" });

// //     return res.status(204).json({ message: "bookings deleted successfully" });
// //   } catch (error: any) {
// //     return res.status(500).json({ error: error.message });
// //   }
// // };


// import { Request, Response } from "express";
// import bycrypt from "bcryptjs"

// import {  deletebookingsService, getBookingByIdService, getbookingsService,  } from "../bookings/bookings.service";


// // export const createbookingsController = async (req: Request, res: Response) => {
// //   try {
// //     const user = req.body;
// //     const password = user.password;
// //     const hashedPassword = await bycrypt.hashSync(password, 10)
// //     user.password = hashedPassword;

// //     console.log("I am here")
// //     console.log("iam the user", user)

// //     const created = await createusersService(user);
// // console.log("I am here again")
// //     if (!created) return res.json({ message: "users not created" });
// //     return res.status(201).json({ message: created });
// //   } catch (error: any) {
// //     console.log(error)
// //     return res.status(500).json({ error: error });
// //   }
// // };


// export const getbookingsController = async (_req: Request, res: Response) => {
//   try {
//     const bookings = await getbookingsService();
//     if (!bookings || bookings.length === 0) {
//       return res.status(404).json({ message: "No bookings found" });
//     }
//     return res.status(200).json(bookings);
//   } catch (error: any) {
//     return res.status(500).json({ error: error.message });
//   }
// };



// export const getbookingsByIdController = async (req: Request, res: Response) => {
//   try {
//     const id = parseInt(req.params.id);
//     if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

//     const bookings = await getBookingByIdService(id);
//     if (!bookings) return res.status(404).json({ message: "bookings not found" });
//     return res.status(200).json({ data: bookings });
//   } catch (error: any) {
//     return res.status(500).json({ error: error.message });
//   }
// };


// // export const updatebookingsController = async (req: Request, res: Response) => {
// //   try {
// //     const id = parseInt(req.params.id);
// //     if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

// //     const bookings = req.body;
// //     const existingbookings = await getBookingByIdService(id);
// //     if (!existingbookings) return res.status(404).json({ message: "bookings not found" });

// //     const updated = await updateBookingService(id, bookings);
// //     if (!updated) return res.status(400).json({ message: "bookings not updated" });
// //     return res.status(200).json({ message: "bookings updated successfully" });
// //   } catch (error: any) {
// //     return res.status(500).json({ error: error.message });
// //   }
// // };


// export const deletebookingsController = async (req: Request, res: Response) => {
//   try {
//     const id = parseInt(req.params.id);
//     if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

//     const existingusers = await getBookingByIdService(id);
//     if (!existingusers) return res.status(404).json({ message: "bookings not found" });

//     const deleted = await deletebookingsService(id);
//     if (!deleted) return res.status(400).json({ message: "bookings not deleted" });

//     return res.status(204).json({ message: "bookings deleted successfully" });
//   } catch (error: any) {
//     return res.status(500).json({ error: error.message });
//   }
// };


import {
    createbookingsService,
    getAllbookingsService,
   getbookingsByIdService,
    updatebookingsService,
    deletebookingsService,
  } from "../bookings/bookings.service";
 
  import { Request, Response } from "express";
 
  // CREATE booking controller
  export const createbookingController = async (req: Request, res: Response) => {
    try {
      const booking = req.body;
 
      // Ensure required fields are present and valid
      if (!booking.carID || !booking.customerID || !booking.rentalStartDate || !booking.rentalEndDate) {
         res.status(400).json({ message: "Missing required fields" });
         return;
      }
 
      booking.rentalStartDate = new Date(booking.rentalStartDate);
      booking.rentalEndDate = new Date(booking.rentalEndDate);
 
      const newBooking = await createbookingsService(booking);
      if (!newBooking) {
         res.status(400).json({ message: "Booking not created" });
         return;
      }
 
     res.status(201).json({ message: "Booking created successfully", booking: newBooking });
    } catch (error: any) {
       res.status(500).json({ error: error.message });
    }
  };
 
  // GET all bookings controller
  export const getAllBookingsController = async (_req: Request, res: Response) => {
    try {
      const bookings = await getAllbookingsService();
      if (!bookings || bookings.length === 0) {
         res.status(404).json({ message: "No bookings found" });
         return;
      }
 
       res.status(200).json({ data: bookings });
       return;
    } catch (error: any) {
       res.status(500).json({ error: error.message });
       return;
    }
  };
 
  // GET booking by ID controller
  export const getBookingByIdController = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
         res.status(400).json({ message: "Invalid booking ID" });
         return;
      }
 
      const booking = await getbookingsByIdService(id);
      if (!booking) {
         res.status(404).json({ message: "Booking not found" });
         return;
      }
 
     res.status(200).json({ data: booking });
     return;
    } catch (error: any) {
       res.status(500).json({ error: error.message });
       return;
    }
  };
 
  // UPDATE booking by ID controller
  export const updateBookingController = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
         res.status(400).json({ message: "Invalid booking ID" });
         return;
      }
 
      const updates = req.body;
      if (updates.rentalStartDate) updates.rentalStartDate = new Date(updates.rentalStartDate);
      if (updates.rentalEndDate) updates.rentalEndDate = new Date(updates.rentalEndDate);
 
      const existingBooking = await getbookingsByIdService(id);
      if (!existingBooking) {
        res.status(404).json({ message: "Booking not found" });
        return;
      }
 
      const updated = await updatebookingsService(id, updates);
      if (!updated) {
         res.status(400).json({ message: "Booking not updated" });
         return;
      }
 
       res.status(200).json({ message: "Booking updated successfully" });
       return;
    } catch (error: any) {
       res.status(500).json({ error: error.message });
       return;
    }
  };
 
  // DELETE booking by ID controller
  export const deleteBookingController = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
         res.status(400).json({ message: "Invalid booking ID" });
         return;
      }
 
      const existingBooking = await getbookingsByIdService(id);
      if (!existingBooking) {
     res.status(404).json({ message: "Booking not found" });
     return;
      }
 
      const deleted = await deletebookingsService(id);
      if (!deleted) {
         res.status(400).json({ message: "Booking not deleted" });
         return;
      }
 
       res.status(204).json({ message: "Booking deleted successfully" });
       return;
    } catch (error: any) {
       res.status(500).json({ error: error.message });
       return;
    }
  };