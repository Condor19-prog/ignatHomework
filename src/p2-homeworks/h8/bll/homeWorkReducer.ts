import {initialPeopleType} from "../HW8";

export const homeWorkReducer = (state: Array<initialPeopleType>, action: any): any => {
    let copyState = [...state]
    switch (action.type) {
        case "sort":
            switch (action.payload) {
                case 'up': {
                    return copyState.sort((a, b) => {
                        return b.age - a.age
                    })
                }
                case 'down':
                    return copyState.sort((a, b) => {
                        return a.age - b.age
                    })
                default:
                    return copyState
                case "check": {
                    return copyState.filter(p => p.age > action.payload).sort((a, b) => a.age - b.age)
                }
                    return state
            }
    }
}
