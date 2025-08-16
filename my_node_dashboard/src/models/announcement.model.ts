import { Schema, model } from 'mongoose';

const announcementSchema = new Schema({
  author: { type: String, required: true },
  role: { type: String, required: true },
  content: { type: String, required: true },
}, {
  timestamps: true,
});

const AnnouncementModel = model('Announcement', announcementSchema);

export default AnnouncementModel;