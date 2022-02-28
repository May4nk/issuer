//components/issues/home.js
import './issues.css';

//hooks
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Issue from './issue.js';
import { createIssue, fetchIssue, updateIssue } from '../../actions/issues.js';

const Home = () =>{
    const dispatch = useDispatch();
    
    const [issue, setIssue] = useState({ projectname:'', title:'', description:'', priority:'' });
    
    //update Id
    const [updateId, setUpdateId] = useState(0);
    
    //finding updateId
    const foundId = useSelector((state) => (updateId !== 0? state.issueReducers.find((l) => l._id === updateId): null));
   
    useEffect(() => { 
      dispatch(fetchIssue());
      if(updateId !==0) setIssue(foundId)
    }, [dispatch, updateId]);

    const issued = useSelector((state) => state.issueReducers);

    const user = JSON.parse(window.localStorage.getItem('profile'));

    //handling submit
    const handleSubmit= (e) =>{
        e.preventDefault();
        if(updateId === 0){
            dispatch(createIssue(issue));
            setIssue({ projectname:'', title:'', description:'', priority:'' });
        }else{
            setUpdateId(0);
            dispatch(updateIssue(updateId, issue));
            setIssue({ projectname:'', title:'', description:'', priority:'' });
        }
    }

    const handleClear = () => {
        setUpdateId(0);
        setIssue({ projectname:'', title:'', description:'', priority:'' });
    }
    return (
        <div className='row col s12'>
            <div className='col s8'>
                <div className='issuebox'>
                    {issued.map((i, idx) =>(
                    <div key={ idx }>
                        <Issue all={ i } setUpdateId={ setUpdateId }/>
                    </div>
                    ))}
                </div>
            </div>
            <div className='col s4'>
                <div className='issuecreate'>
                    <div className='create_title'>
                        {updateId !== 0? 'Update Issue...' : 'Create your issues here...' } 
                        {updateId !==0 ? (<i className='material-icons grey-text cross right' onClick={ handleClear }>clear</i>) : null }
                    </div>
                    <hr/>
                    <form onSubmit={ handleSubmit }>
                        <div className='input-field col s12'>
                            <input id='inpt1' placeholder='Project Name...' type='text' name='projectname' value={ issue.projectname } onChange={ (e)=> setIssue({ ...issue, projectname:e.target.value })}/>
                        </div>
                        <div className='input-field col s12'>
                            <input id='inpt1' placeholder='Title...' type='text' name='title' value={ issue.title } onChange={ (e)=> setIssue({ ...issue, title:e.target.value })} />
                        </div>
                        <div className='input-field col s12'>
                            <textarea id='txtarea' placeholder='Description...' name='description'value={ issue.description } onChange={ (e)=> setIssue({ ...issue, description:e.target.value })}> 
                            </textarea>
                        </div>
                        <div className='input-field col s12'>
                            <select className='browser-default selbox' placeholder='Priority...' name='priority' value={ issue.priority } onChange={ (e)=> setIssue({ ...issue, priority:e.target.value })}>
                                <option value="" disabled> Priority... </option>
                                { [...Array(5).keys()].map((i) => (
                                    <option value={i} key={i}>{i}</option>
                                ))}
                            </select>
                        </div>
                        <div className='center'>
                            { user?.result? (
                            <button id='bt' className="btn waves-effect waves-light center grey" >
                                <i className="material-icons center black-text">send</i>
                            </button>
                            ) : (
                                <div className='col s12'>
                                    <div className='log'>
                                    Login to submit issue
                                    </div>
                                </div>
                           )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;

