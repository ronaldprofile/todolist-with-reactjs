import { Router, Response, Request } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.send("Hello World");
});

routes.post("/signup", (req: Request, res: Response) => {
  return res.json({ message: "Account created." });
});

export { routes };
