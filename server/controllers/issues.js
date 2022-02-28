//controllers/issues
import issuesModel from '../models/issues.js';

import mongoose from 'mongoose';

const mongooseChecker = (id, res) => {
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({ msg: ' Not Valid Id ' });
    }
}


export const getIssue = async (req, res) => {
    try{
        const allIssue = await issuesModel.find();

        res.status(200).json(allIssue);

    }catch(err){
        res.status(400).json({ msg: 'No issues registered...' })
    }
}

export const createIssue = async (req, res) => {
    const body = req.body;

    const newIssue = issuesModel(body);
    try{
        await newIssue.save();

        res.status(201).json(newIssue);

    } catch(err){
        res.status(400).json({ msg: "can't create new issue." });
    }
}

export const updateIssue = async (req, res) => {
    const { id: _id } = req.params;
    const newIssue = req.body;
    
    mongooseChecker( _id, res ) ;

    const updateIss = { ...newIssue , _id }

    const updatedIss = await issuesModel.findByIdAndUpdate(_id, updateIss, { new: true});

    res.json(updatedIss);
}

export const deleteIssue = async (req, res) => {
    const { id } = req.params;

    mongooseChecker( id, res );

    await issuesModel.findByIdAndRemove(id);
    
    res.json({ msg: 'deleted' });
}
