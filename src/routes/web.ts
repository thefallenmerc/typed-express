import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.json({ message: "Express Sample With Typescript" });
});

export default router;
