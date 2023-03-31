import { NextFunction, Request, Response } from 'express';
import { importLeagueInfo } from '../services/league';

export const importLeague = (req: Request, res: Response, next: NextFunction) =>
  importLeagueInfo(req.body.leagueCode)
    .then(info => {
      res.status(200).send(info);
    })
    .catch(next);
