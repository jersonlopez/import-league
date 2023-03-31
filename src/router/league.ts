import { Router } from 'express';
import { importLeague } from '../controllers/league';
// import { BattleController } from '../controllers/battle.controller';

const router = Router();

router.get('/import', importLeague)

export default router;
