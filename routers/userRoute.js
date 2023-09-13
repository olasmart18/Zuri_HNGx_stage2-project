import express from 'express';
import { newUser, getSingleUser } from '../controllers/userController.js'
const router = express.Router()

router.post('/', newUser);
router.get('/:user_id',getSingleUser)

export default router;