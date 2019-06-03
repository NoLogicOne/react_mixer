import React from "react"

const Group = ({sample, isSample = false, saves = {}}) => {
    return (
        <div className="samle">
            {sample}
        </div>
    )
}

export default Group