import { Router } from 'express';
import { importLeague } from '../controllers/league';

const router = Router();

router.get('/import', importLeague)

export default router;
