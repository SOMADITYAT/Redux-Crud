import axios from "axios"
import { ADD_USER, DELECT_USER, FAIL_REQUEST,  GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./ActionType"
import { toast } from "react-toastify"
import { Toast } from "react-bootstrap"

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}
export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}
export const getUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    }
}

export const delectUser = () => {
    return {
        type: DELECT_USER
    }
}
export const addUser = () => {
    return {
        type: ADD_USER
    }
}
export const updateUser = () => {
    return {
        type: UPDATE_USER
    }
}
export const getUserObj = (data) => {
    return {
        type: GET_USER_OBJ,
        payload:data
    }
}
export const FetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:3000/user/').then(res => {
            const userlist = res.data;
            dispatch(getUserList(userlist));
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}
export const FetchUserObj = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:3000/user/'+code).then(res => {
            const userlist = res.data;
            dispatch(getUserObj(userlist));
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}
export const Removeuser = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.delete('http://localhost:3000/user/' + code).then(res => {
            dispatch(delectUser());
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}
export const FunctionAddUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.post('http://localhost:3000/user/',data).then(res => {
            dispatch(addUser());
            toast.success('done')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}
export const FunctionUpdateUser = (data,code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.put('http://localhost:3000/user/'+code ,data).then(res => {
            dispatch((updateUser()));
            Toast.success('done')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}
