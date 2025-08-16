// src/services/announcement.service.ts
import { injectable } from 'tsyringe';
import AnnouncementModel from '../models/announcement.model';

interface IAnnouncement {
  author: string;
  role: string;
  content: string;
}

@injectable()
export class AnnouncementService {
  async getAll() {
    return AnnouncementModel.find();
  }

  async create(data: IAnnouncement) {
    const newAnnouncement = new AnnouncementModel(data);
    return newAnnouncement.save();
  }

  // Add this update method
  async update(id: string, data: Partial<IAnnouncement>) {
    return AnnouncementModel.findByIdAndUpdate(id, data, { new: true });
  }

  // Add this delete method
  async delete(id: string) {
    return AnnouncementModel.findByIdAndDelete(id);
  }
}