import { Router, Request, Response } from "express";
import {indexController} from '../controllers/indexController';

const router: Router = Router();

router.get("/", indexController.index);

router.get("/add", (req: Request, res: Response) => {
  res.send("Form");
});

router.get('/about', (req: Request, res: Response) => {
    res.render("about");
})

export default router;
