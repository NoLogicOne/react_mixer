import {data} from "./data/initialState.js"
import * as types from "./constants.js"


export const groups = (state = data.groups, action) => {
	let { type } = action
	let { text, idx, name, sample } = action
	
	let res = {...state}
	
	switch (type) {
		case types.ADD_WINDOW:
			let id = "group" + (Object.keys(state).length + 1);
			res[id] = {}
			return res
		
		case types.INPUT_TEXT:
			res[idx].sample = text
			return res

		case types.CHANGE_WINDOW:
			res[idx].isSample = !res[idx].isSample
			return res
		
		case types.LOAD_SAMPLE:
			res[idx].sample = sample
			return res

		default:
			return state
	}
}

export const mix = (state = data.mix, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export const saves = (state = data.saves, action) => {
	switch (action.type) {
		default:
			return state
	}
}
