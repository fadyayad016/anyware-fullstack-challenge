import { Router } from 'express';
import { AnnouncementController } from '../controllers/announcement.controller';

const router = Router();
const announcementController = new AnnouncementController();

router.get('/', (req, res) => announcementController.getAll(req, res));
router.post('/', (req, res) => announcementController.create(req, res));

router.put('/:id', (req, res) => announcementController.update(req, res));
router.delete('/:id', (req, res) => announcementController.delete(req, res));

export default router;