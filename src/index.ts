console.log("Hotel Booking System is running!");
import Express  from "express"
import paymentsRouter from "./payments/payments.router" 
import usersRouter from "./users/users.router"
 import roomsRouter from"./rooms/rooms.router"
 import bookingsRouter from "./bookings/bookings.router"
import user from "./users/users.router";
 
//  import hotelsRouter from "./hotels/hotels.router"
// import ticketsRouter from "./tickets/tickets.router"


export const app = Express();
const PORT = 8085;

app.use(Express.json())



//Routes to our application
 app.use("/api/payments",paymentsRouter)
 app.use("/api/users",usersRouter)
 app.use("/rooms",roomsRouter)
 app.use("/bookings",bookingsRouter)
//  app.use("/api/hotels",hotelsRouter)
//  app.use("/api/tickets",ticketsRouter)
user(app)
 





// // carRouter(app)
// //CustomerRouter(app)
// // insuranceRouter(app)
// // LocationRouter(app)
// // MaintenanceRouter(app)
 app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
