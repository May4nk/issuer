//component/issues/issue.js
import './issues.css';

//hooks
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { removeIssue } from '../../actions/issues.js';

import About from './about.js';

const Issue = ({ all, setUpdateId }) =>{
    const dispatch = useDispatch();

    const [see, setSee] = useState(false);
    const [about, setAbout] = useState(0);
    
    const user = JSON.parse(window.localStorage.getItem('profile'));

    const handleClick = (id) => {
        setAbout(id);
        setSee(true);
    }
    return (
        <>
        <About see={ see } setSee={ setSee } about={ about } setAbout={ setAbout }/>
        <div className='issue' >
            <div className='issue_title' onClick={ () => handleClick(all._id)}>
              { all.title }
            </div>
            {user?.result?(
            <div className='icns'>
                <i className='material-icons right tiny' onClick={ ()=> dispatch(removeIssue(all._id)) }>
                    delete
                </i>
                <i className='material-icons right tiny' onClick={ () => setUpdateId(all._id) }> 
                    edit 
                </i>
            </div>
             ):(null)}
        </div>
       </>
    );
}

export default Issue;
