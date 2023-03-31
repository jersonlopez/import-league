import { Router } from 'express'

import leagueRouter from './league';
// import battleRouter from './battle.routes';

const router = Router()

// router.use('/monsters', monsterRouter);
router.use('/leagues', leagueRouter);

export default router
