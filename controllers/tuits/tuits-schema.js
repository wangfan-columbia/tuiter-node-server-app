import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   tuit: String,
                                   likes: Number,
                                   liked: Boolean,
                                    dislikes:Number
                               }, {collection: 'tuits'});
export default schema;