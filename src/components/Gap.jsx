import React from 'react';
import './gap.css';
import { connect } from 'react-redux';

import Card from './Card';
import { changeMinNumber } from '../store/actions/numbers.actionCreator';

function Gap(props){
    const { min, max } = props;

    return(
        <Card title="Number's Gap" red>
            <div className="gap">
                <span>
                    <strong>Min:</strong>
                    <input 
                        type="number" 
                        value={ min } 
                        onChange={e => props.changeMin(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={ max } readOnly/>
                </span>
            </div>
        </Card>
    );
}

function mapStateToProps(state){
    return{
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeMin(newNumber){
            const action = changeMinNumber(newNumber);
            dispatch(action);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    
    )(Gap);