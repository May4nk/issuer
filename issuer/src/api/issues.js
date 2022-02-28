//api/issues.js
import axios from 'axios';

const headers = {
    header : {
        'Content-Type': 'application/json'
    }
}

const URL = 'http://localhost:5000';

//api requests
export const getIssues = () => axios.get(URL);
export const postIssues = (newIssue) => axios.post(URL, newIssue, headers);
export const patchIssues = (id, newIssue) => axios.patch(`${URL}/${id}`, newIssue, headers);
export const deleteIssues = (id) => axios.delete(`${URL}/${id}`);

