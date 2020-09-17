import React from "react";
import { Table } from 'react-bootstrap'

const List = (props) => {

    return (
        <div className="container">
            {/* A JSX comment */}

            {/* <div>
                <p>Valinta 2.</p>
            </div>
            */}
            <li>
                {props.note.content}
            </li>
        </div>
    )
}

export default List