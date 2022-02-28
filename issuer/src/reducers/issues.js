//reducers/issues.js
const issueReducers = (issues=[], action) => {
    switch( action.type ){
        case 'ALL':
            return action.payload;
        case 'CREATE':
            return [ ...issues, action.payload];
        case 'UPDATE':
            return issues.map((issue) => (issue._id === action.payload._id? action.payload: issue ));
        case 'DELETE':
            return issues.filter((issue) => (issue._id !== action.payload ));
        default:
            return issues;
    }
}

export default issueReducers;
