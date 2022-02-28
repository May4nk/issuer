import { signupUsers, loginUsers } from '../api/users.js';

export const signIn = (logUsr, history) => async (dispatch) => {
    try{
        const { data } = await loginUsers(logUsr);

         dispatch({ type: 'AUTH', payload: data });

         history('/');
    } catch (err) {
        console.log(err.message);
    }
}


export const signUp = (newUsr, history) => async (dispatch) => {
    try{
        const { data } = await signupUsers(newUsr);

         dispatch({ type: 'AUTH', payload: data });

         history('/');
    } catch (err) {
        console.log(err);
    }
}

