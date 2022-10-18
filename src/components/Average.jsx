import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

function Average(props){
    const { min, max } = props;
    return(
        <Card title="Number's Average" green>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Average);