import { Router } from 'express'

import leagueRouter from './league';

const router = Router()

router.use('/leagues', leagueRouter);

export default router
