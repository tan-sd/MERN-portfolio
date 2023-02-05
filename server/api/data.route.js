import express from "express";
import dataCtrl from "./datans.controller.js";
import contactCtrl from './contact.controller.js';

const router = express.Router();

router.route("/").get(dataCtrl.apiGetData);

router
  .route("/contact")
  .post(contactCtrl.apiPostMessage)
  .put(contactCtrl.apiUpdateMessage)
  .delete(contactCtrl.apiDeleteMessage)

export default router;