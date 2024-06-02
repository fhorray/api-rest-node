import { Router } from "express";

const router = Router();

router.get("/user", (req, res) => {
  const body = req.body;

  res.json(body);
});

export { router };
