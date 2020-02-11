import express, { Request, Response } from 'express';
import SampleValidator from '../validators/sample-validator';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.json({ message: "Express Sample With Typescript" });
});

export default router;
