import React from 'react';
import './gap.css';

import Card from './Card';

export default function Gap(){
    return(
        <Card title="Number's Gap" red>
            <div className="gap">
                <span>
                    <strong>Min:</strong>
                    <input type="nuber" value={0} readOnly/>
                </span>
                <span>
                    <strong>Max:</strong>
                    <input type="nuber" value={10} readOnly/>
                </span>
            </div>
        </Card>
    );
}