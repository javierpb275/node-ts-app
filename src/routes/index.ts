import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

router.get("/add", (req: Request, res: Response) => {
  res.send("Form");
});

export default router;
