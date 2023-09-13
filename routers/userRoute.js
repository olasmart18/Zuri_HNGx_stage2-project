import express from 'express';
import {
  newUser,
  getSingleUser,
  updateUser,
  deleteUser
} from '../controllers/userController.js';
const router = express.Router();

router.post('/', newUser);
router.get('/:user_id', getSingleUser);
router.put('/:user_id', updateUser);
router.delete('/:user_id', deleteUser);

export default router;
