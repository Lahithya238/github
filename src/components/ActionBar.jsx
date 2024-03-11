import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


const ActionBar = ({ actionList }) => {
    console.log("actions", actionList)
    const handleAction = (callAction) => {
        console.log("actionlist", callAction);
        if (callAction.action) {
            callAction.action();
        }
    }


    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        actionList && actionList.length > 0 && actionList.map((items) => (
                            <Dropdown.Item onClick={() => handleAction(items)}>{items.title}</Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default ActionBar

{/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item> */ }