import * as types from "./constants.js"

export const inputText = (text, idx) => {
    return {
        type: types.INPUT_TEXT,
        text,
        idx
    }
}

export const addWindow = () => ({
    type: types.ADD_WINDOW
})

export const saveSample = (sample, human_name) => ({
    type: types.SAVE_SAMPLE,
    sample,
    human_name
})

export const changeWindow = (idx) => ({
    type: types.CHANGE_WINDOW,
    idx
})

export const getMix = (groups) => ({
    type: types.GET_MIX,
    groups
})