﻿import type { NextApiRequest, NextApiResponse } from 'next'
import { tweets } from './data'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(tweets)
}
