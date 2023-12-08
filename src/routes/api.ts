import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Agora vai!");
});

router.get("/ping", (req: Request, res: Response) => {
  res.json({ pong: true });
});

export default router;
