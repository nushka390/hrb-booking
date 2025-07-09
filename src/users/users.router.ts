import {Express} from "express";
import {
  createusersController,

  getusersController,
  getusersByIdController,
  updateusersController,
  deleteusersController
} from "../users/users.controller";

const user = (app: Express) => {
    app.route("/auth/register").post(
        async(req, res, next) => {
           try {
            await createusersController(req, res)
           } catch (error) {
            next(error)
           } 
        }
    )


    app.route("/users").get(
        async(req, res, next) => {
           try {
            await getusersController(req, res)
           } catch (error) {
            next(error)
           } 
        }
    )


    app.route("/user/:id").get(
        async(req, res, next) => {
           try {
            await getusersByIdController(req, res)
           } catch (error) {
            next(error)
           } 
        }
    )

     app.route("/user/:id").put(
        async(req, res, next) => {
           try {
            await updateusersController(req, res)
           } catch (error) {
            next(error)
           } 
        }
    )


    app.route("/user/:id").delete(
        async(req, res, next) => {
           try {
            await deleteusersController(req, res)
           } catch (error) {
            next(error)
           } 
        }
    )

}

export default user;

// const router = express.Router();
// router.post("/", (req, res, next) => {
//   Promise.resolve(createusersController(req, res,)).catch(next);
// });

// // router.get("/", getAllBookingsController);

// router.route("/").get((req, res, next) => {
//   Promise.resolve(getusersController(req, res)).catch(next);
// });

// router.get("/:id", (req, res, next) => {
//   Promise.resolve(getusersByIdController(req, res)).catch(next);
// });

// router.put("/:id", (req, res, next) => {
//   Promise.resolve(updateusersController(req, res)).catch(next);
// });

// router.delete("/:id", (req, res, next) => {
//   Promise.resolve(deleteusersController(req, res)).catch(next);
// });

// export default router;