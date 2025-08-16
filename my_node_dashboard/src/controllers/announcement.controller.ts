// src/controllers/announcement.controller.ts
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AnnouncementService } from '../services/announcement.service';

export class AnnouncementController {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const announcementService = container.resolve(AnnouncementService);
      const announcements = await announcementService.getAll();
      res.json(announcements);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
  async create(req: Request, res: Response): Promise<void> {
    try {
      const announcementService = container.resolve(AnnouncementService);
      const newAnnouncement = await announcementService.create(req.body);
      res.status(201).json(newAnnouncement);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
  async update(req: Request, res: Response): Promise<void> {
    try {
      const announcementService = container.resolve(AnnouncementService);
      const updatedAnnouncement = await announcementService.update(req.params.id, req.body);
      res.json(updatedAnnouncement);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const announcementService = container.resolve(AnnouncementService);
      await announcementService.delete(req.params.id);
      res.json({ message: 'Announcement deleted successfully.' });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}