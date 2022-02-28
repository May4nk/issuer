//actions/issues.js
import { getIssues, postIssues, patchIssues, deleteIssues } from '../api/issues.js';

//GET issues
export const fetchIssue = () => async(dispatch) => {
    try{
        const { data } = await getIssues();

        dispatch({ type: 'ALL' , payload: data });

    } catch(err){
        console.log(err);
    }
}

//POST issue
export const createIssue = (newIssue) => async(dispatch) => {
    try{
        const { data } = await postIssues(newIssue);

        dispatch({ type: 'CREATE' , payload: data });

    } catch(err){
        console.log(err);
    }
}

export const updateIssue = (id, newIssue) => async(dispatch) => {
    try{
        const { data } = await patchIssues(id, newIssue);
        
        dispatch({ type: 'UPDATE' , payload: data });

    } catch(err){
        console.log(err);
    }
}

export const removeIssue = (id) => async(dispatch) => {
    try{
        await deleteIssues(id);
        
        dispatch({ type: 'DELETE' , payload: id  });

    } catch(err){
        console.log(err);
    }

}
