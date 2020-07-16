import {ADD_COLUMN, CHANGE_FIELD_VALUE, REMOVE_COLUMN} from "../constants/actions";
import {randomString} from "../utils/utilityFunctions";

const initialStateMock = {
    cols: [
        {
            id: randomString(),
            salesChannelName: "Inst",
            uola: 0,
            buyers: 0,
            cpa: 0
        },
        {
            id: randomString(),
            salesChannelName: "Vk",
            uola: 0,
            buyers: 0,
            cpa: 0
        },
        {
            id: randomString(),
            salesChannelName: "Facebook",
            uola: 0,
            buyers: 0,
            cpa: 0
        },
        {
            id: randomString(),
            salesChannelName: "Google",
            uola: 2,
            buyers: 3,
            cpa: 0
        }
    ]
}

const mathColumnFormulas = (col) => {
    const calcConversion = Math.round((col.buyers / col.uola) * 100)
    return {
        ...col,
        conversion: isFinite(calcConversion) ? calcConversion : 0
    }
}

const initialState = {
    ...initialStateMock,
    cols: initialStateMock.cols.map(col => {
        return mathColumnFormulas(col)
    })
}

export const colsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLUMN: {
            const newColumn = {
                id: randomString(),
                salesChannelName: action.payload.name,
                uola: 0,
                buyers: 0,
                cpa: 0
            }
            return {
                ...state,
                cols: [...state.cols, mathColumnFormulas(newColumn)]
            }
        }
        case REMOVE_COLUMN: {
            return {
                ...state,
                cols: state.cols.filter(col => col.id !== action.payload.id)
            }
        }
        case CHANGE_FIELD_VALUE: {
            return {
                ...state,
                cols: state.cols.map(item => {
                    if (item.id === action.payload.id) {
                        const changedObj = {...item, [action.payload.field]: action.payload.value};
                        return mathColumnFormulas(changedObj);
                    } else return item;
                })
            }
        }
        default: {
            return state;
        }
    }
}
