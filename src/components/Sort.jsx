import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

function Sort(props){
    const { min, max } = props;
    const ramdomNumber = parseInt(Math.random() * (min - max) + max);
    return(
        <Card title="Number's sort" purple>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{ ramdomNumber }</strong>
                </span>
            </div>
        </Card>
    );
}

function mapStateToProps(state){
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(Sort);