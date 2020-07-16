import {CurrencyModel} from "../models/currency.model";
import {CHANGE_CURRENCY} from "../constants/actions";

const initialState = {
    appName: "Unit Economy Calculator",
    currency: CurrencyModel.UAH
}

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY: {
            return {
                ...state,
                currency: action.payload.currency
            }
        }
        default: {
            return state;
        }
    }
}
