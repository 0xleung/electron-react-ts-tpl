import React from 'react';
import { Counter as CounterF } from '../../features/counter/Counter';

const Counter = ():JSX.Element=>{
    return (
        <React.Fragment>
            <CounterF/>
        </React.Fragment>
    )
}

export default Counter