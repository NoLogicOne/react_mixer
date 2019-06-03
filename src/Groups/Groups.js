import React from "react"

import Group from "./Group/Group.js"

const Groups = ({groups}) => {
    
    const renderGroups = () => {
        let arrayGroups = []
        
        for(let key in groups){
            arrayGroups.push(groups[key])
        }
        return arrayGroups.map(c => 
            <Group key={c.sample} sample={c.sample} />
        )
    }

    return (
        <div className="groups">
            {renderGroups()}
        </div>
    )
}

export default Groups