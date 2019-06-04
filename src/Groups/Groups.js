import React from "react"

import Group from "./Group/Group.js"

const Groups = ({groups, saves}) => {
    
    const renderGroups = () => {
        let arrayGroups = []
        
        for(let key in groups){
            arrayGroups.push(groups[key])
        }
        return arrayGroups.map(c => 
            <Group key={c.sample} saves={saves} {...c} />
        )
    }

    return (
        <div className="mixer__groups">
            {renderGroups()}
        </div>
    )
}

export default Groups