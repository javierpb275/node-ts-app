import { Router } from "express";
import { booksController } from "../controllers/booksController";

const router: Router = Router();

router.get("/", booksController.index);
router.get("/add", booksController.renderBookForm);
router.post("/add", booksController.saveBook);

export default router;
