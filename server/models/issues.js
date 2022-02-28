//models/issues
import mongoose from 'mongoose';

//issues table Schema
const issuesSchema = mongoose.Schema({
    projectname : { type: String },
    title : { type: String },
    description : { type: String },
    priority : { type: String },
    lastUpdated : { type: Date, default: new Date() },
    added : { type: Date, default: new Date() }
});

const issuesModel = mongoose.model('issues', issuesSchema);

export default issuesModel;

