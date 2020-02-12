/**
 * Import dependencies
 */
import { Router } from "express";

/**
 * Import Router
 */
import WebRouter from '../routes/web';

/**
 * Intantiate Router
 */
const router = Router();

/**
 * Use Routes
 */
router.use('/', WebRouter);

/**
 * Export the router for app
 */
export default router;