//routes/issues
import express from 'express';

//controllers
import { getIssue, createIssue, updateIssue, deleteIssue } from '../controllers/issues.js';

//router
const router = express.Router();

//routes
router.get('/', getIssue);
router.post('/', createIssue);
router.patch('/:id', updateIssue);
router.delete('/:id', deleteIssue);

export default router;
