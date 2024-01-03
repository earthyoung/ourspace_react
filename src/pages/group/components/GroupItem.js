import React from "react";
import Button from "../../../components/Button";

const GroupItem = ({type, name}) => {

    const enterGroup = () => {

    }

    const deleteGroup = () => {

    }

    const Buttons = () => {
        if (type === "SINGLE") {
            return (
                <div className="group-button">
                    <Button text={"enter"} handleOnClick={enterGroup} />
                </div>
            )
        } else {
            return (
                <div className="group-button">
                    <Button text={"enter"} handleOnClick={enterGroup} />
                    <Button text={"leave"} handleOnClick={deleteGroup} />
                </div>
            )
        }
    }

    return (
        <div className="GroupItem">
            <div className="group-type">
                <strong>{type}</strong>
            </div>
            <br />
            <div className="group-name">
                {(name) ? (name.slice(0, 25)) : name}
            </div>
            <Buttons />
        </div>
    )
}

export default React.memo(GroupItem);
