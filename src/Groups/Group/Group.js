import React from "react"

import "./Group.css"

const Group = ({sample = "", 
               isSample = false, 
               saves = {}, 
               inputText,
               idx,
               changeWindow,
               loadSample
            }) => {
    
    const renderSample = 
        <div className="mixer__group">
            <div className="mixer__sample_header">Sample</div>
            <div className="mixer__sample_load"
                 onClick={e => changeWindow(idx)}>
                &dArr;
            </div>
            <textarea 
                className="mixer__sample_wrapper"
                cols="30" 
                rows="10"
                defaultValue={sample}
                onChange={e => inputText(e.target.value, idx)}
            />
        </div>

    const createLink = (save, name) => (
        <button key={save.human_name} 
                className="mixer__load_link"
                onClick={
                    e => {
                        loadSample(idx, name)
                        changeWindow(idx)
                    }
                }>
            {save.human_name}
        </button>
    )

    const renderLoad = 
        <div className="mixer__group">
            <input type="text" className="mixer__load_search"/>
            <div className="mixer__load_sample"
                 onClick={e => changeWindow(idx)}>
                &larr;
            </div>
            <div className="mixer__load_link_wrapper">
            {
                (() => {
                    let array = []

                    for (const key in saves) {
                        array.push([saves[key], key])
                    }

                    return array.map(s => createLink(s[0], s[1]))
                })()
            }
            </div>
        </div>

    return (
        <div className="mixer__group_wrapper">
            { 
                // (() => 
                    isSample ? renderSample : renderLoad
                // )()
            }
        </div>
    )
} 

export default Group