import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.render('pages/user/user'));

export const userPageRouter = router;
