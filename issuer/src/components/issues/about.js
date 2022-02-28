//components//about.js
import './issues.css';

import { useSelector } from 'react-redux';

const About = ({see, setSee, about, setAbout }) =>{
    const show = see? 'display-block': 'display-none';
    
    const task = useSelector((state) => (about !== 0?state.issueReducers.find(i => i._id === about ): null));

    const handleClose = () => {
        setAbout(0);
        setSee(false);
    }
    return (
        <div className={show}>
            <div className='overlay'>
                <div className='modale-box'>
                    <div className='modale-header'>
                        About
                        <i className='material-icons grey-text right' onClick={ handleClose }> cancel</i>
                        
                    </div>
                    <hr />
                    <div className='grey-text'>
                        priority: {task? task.priority : 'NA' }
                    </div>
                    <div className='modale-body'>
                        { task? task.title : 'NA' }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

