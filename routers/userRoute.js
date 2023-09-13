import express from 'express';
import { newUser, getSingleUser, updateUser } from '../controllers/userController.js'
const router = express.Router()

router.post('/', newUser);
router.get('/:user_id',getSingleUser)
router.put('/:user_id', updateUser)

export default router;