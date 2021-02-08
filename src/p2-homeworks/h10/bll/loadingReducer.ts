const initState = {
    isLoading: false
};

type actionType = loadingACType
type initialStateType = typeof initState

export const loadingReducer = (state = initState, action: actionType): initialStateType => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {...state, ...action.payload}
        }
        default:
            return state;
    }
};

type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => ({type: 'LOADING', payload: {isLoading}})