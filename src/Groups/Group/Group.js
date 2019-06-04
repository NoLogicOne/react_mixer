import React from "react"

import "./Group.css"

const Group = ({sample = "", isSample = false, saves = {}}) => {
    const renderSample = 
        <div className="mixer__group">
            <div className="mixer__sample_header">Sample</div>
            <div className="mixer__sample_load">X</div>
            <textarea 
                cols="30" 
                rows="10"
                defaultValue={sample}
            />
        </div>

    const createLink = (save) => (
        <button key={save.human_name} className="mixer__load_link">
            {save.human_name}
        </button>
    )

    const renderLoad = 
        <div className="mixer__group">
            <input type="text" className="mixer__load_search"/>
            <div className="mixer__load_sample">X</div>
            <div className="mixer__load_link_wrapper">
            {
                (() => {
                    let array = []

                    for (const key in saves) {
                        array.push(saves[key])
                    }

                    return array.map(save => createLink(save))
                })()
            }
            </div>
        </div>

    return (
        <div className="mixer__group_wrapper">
            { 
                (() => 
                    isSample ? renderSample : renderLoad
                )()
            }
        </div>
    )
} 

export default Group