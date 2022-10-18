import React from 'react';

import Card from './Card';

export default function Average(props){
    return(
        <Card title="Number's Average" green>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>5</strong>
                </span>
            </div>
        </Card>
    );
}