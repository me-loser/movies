import express from "express";
import userCtrl from "../controllers/user.controller";
import authCtrl from "../controllers/auth.controller";

const router = express.Router();

router.route("/api/users").get(userCtrl.list).post(userCtrl.create);

// read only requires authentication but update and remove require both authentication and authorization
router
  .route("/api/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

router.param("userId", userCtrl.userById);
// The routes having parameter as userId will first execute the userById and then it will propogate controll to the next relevant controller function

export default router;
