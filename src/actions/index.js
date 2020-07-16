import {ADD_COLUMN, CHANGE_CURRENCY, CHANGE_FIELD_VALUE, REMOVE_COLUMN} from "../constants/actions";

export const addColumn = (name) => ({
    type: ADD_COLUMN,
    payload: {
        name: name
    }
});

export const removeColumn = (id) => ({
    type: REMOVE_COLUMN,
    payload: {
        id: id
    }
})

export const changeFieldValue = (field, id, value) => ({
    type: CHANGE_FIELD_VALUE,
    payload: {
        field: field,
        id: id,
        value: value
    }
})

export const changeCurrency = (currency) => ({
    type: CHANGE_CURRENCY,
    payload: {
        currency: currency
    }
})