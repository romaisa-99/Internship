
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post: {}
};

const reducer = (state, action) => {
    switch (action.type) {

        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            };

        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something Went Wrong'
            };

        default:
            return state;
    }
};

function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const { loading, post, error } = state;

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_ERROR'
                });
            });
    }, []);

    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    );
}

export default DataFetchingTwo;
