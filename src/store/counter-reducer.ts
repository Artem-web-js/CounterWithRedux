import {counterGetValues} from '../services/localStorageServices'

const INCREMENT = 'INCREMENT'
const RESET = 'RESET'
const SET_VALUE = 'SET_VALUE'
const CHANGE_MIN_VALUE = 'CHANGE_MIN_VALUE'
const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE'

type IncrementType = {
    type: typeof INCREMENT
}

type ResetType = {
    type: typeof RESET
}

type SetValueType = {
    type: typeof SET_VALUE
    minValue: number
    maxValue: number
}

type ChangeMinValueType = {
    type: typeof CHANGE_MIN_VALUE
    minValue: number
}

type ChangeMaxValueType = {
    type: typeof CHANGE_MAX_VALUE
    maxValue: number
}

export type ActionsType = IncrementType
    | ResetType
    | SetValueType
    | ChangeMinValueType
    | ChangeMaxValueType

const initialState = {
    counter: 0,
    maxValue: counterGetValues().maxValue,
    minValue: counterGetValues().minValue,
    error: false,
    setButton: false,
    incrementButton: true,
    resetButton: true
}

export type StateType = {
    counter: number
    maxValue: number
    minValue: number
    error: boolean
    setButton: boolean
    incrementButton: boolean
    resetButton: boolean
}

export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    const copyState = {...state}
    switch (action.type) {
        case INCREMENT: {
            copyState.counter += 1
            if (copyState.counter === copyState.maxValue) {
                copyState.incrementButton = true
                copyState.resetButton = false

                return copyState
            } else {
                return copyState
            }
        }
        case RESET: {
            copyState.counter = copyState.minValue
            copyState.incrementButton = false
            copyState.resetButton = true
            return copyState
        }
        case SET_VALUE: {
            copyState.counter = action.minValue
            copyState.setButton = true
            copyState.incrementButton = false
            return copyState
        }
        case CHANGE_MIN_VALUE: {
            if (copyState.minValue < 0
                || copyState.minValue > copyState.maxValue
                || copyState.minValue === copyState.maxValue) {
                copyState.error = true
                copyState.setButton = true
            } else {
                copyState.error = false
                copyState.setButton = false
            }
            copyState.minValue = action.minValue
            copyState.incrementButton = true
            return copyState
        }
        case CHANGE_MAX_VALUE: {
            if (copyState.maxValue < 0
                || copyState.minValue > copyState.maxValue
                || copyState.minValue === copyState.maxValue) {
                copyState.error = true
                copyState.setButton = true
            } else {
                copyState.error = false
                copyState.setButton = false
            }
            copyState.maxValue = action.maxValue
            copyState.incrementButton = true
            return copyState
        }
        default:
            return state
    }
}

export const increment = (): IncrementType => ({type: INCREMENT})
export const reset = (): ResetType => ({type: RESET})
export const setValue = (minValue: number, maxValue: number): SetValueType => ({type: SET_VALUE, minValue, maxValue})
export const changeMinValue = (minValue: number): ChangeMinValueType => ({type: CHANGE_MIN_VALUE, minValue})
export const changeMaxValue = (maxValue: number): ChangeMaxValueType => ({type: CHANGE_MAX_VALUE, maxValue})
