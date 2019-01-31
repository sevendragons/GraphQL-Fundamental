import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const ItemSchema = new Schema ({
  id: { type: String },
  text: { type: String },
  timeISO: { type: String },
  time: { type: Number },
  title: { type: String, required: true },
  delete: { type: Boolean }
});

export default mongoose.model('item', ItemSchema)
