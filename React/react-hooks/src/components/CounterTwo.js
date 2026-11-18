
import React, { useReducer } from 'react'

const initialState = {
    firstCount: 0,
    secondCount: 10
}

const reducer = (state, action) => {
    switch (action.type) {

        case 'increment':
            return { ...state, firstCount: state.firstCount + action.value }

        case 'decrement':
            return { ...state, firstCount: state.firstCount - action.value }

        case 'increment2':
            return { ...state, secondCount: state.secondCount + action.value }

        case 'decrement2':
            return { ...state, secondCount: state.secondCount - action.value }

        case 'reset':
            return initialState

        default:
            return state
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>First Counter - {count.firstCount}</div>
            <div>Second Counter - {count.secondCount}</div>

            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
                Increment by 1
            </button>

            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
                Decrement by 1
            </button>

            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
                Increment Counter 2
            </button>

            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
                Decrement Counter 2
            </button>

            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
                Increment by 5
            </button>

            <button onClick={() => dispatch({ type: 'decrement', value: 10 })}>
                Decrement by 10
            </button>

            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </div>
    )
}

export default CounterTwo
