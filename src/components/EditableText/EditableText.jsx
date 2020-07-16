import React, {useEffect, useRef, useState} from "react";
import {FormControl} from "react-bootstrap";
import styles from "./EditableText.module.scss"

export const EditableText = ({...props}) => {
    const [value, changeValue] = useState(props.passedText);
    const [editMode, setEditMode] = useState(false);
    const ref = useRef(null);
    const {field, id} = props;

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    const handleClickOutside = (event) => {
        if (!ref.current.contains(event.target)) setEditMode(false);
    }

    const handleInputChange = (event) => {
        const inputValue = +event.target.value;
        const maxLength = 10;
        if (!isFinite(inputValue) || inputValue.toString().length > maxLength) {
            return false;
        } else {
            changeValue(inputValue);
        }
    }

    useEffect(() => {
        const emitChange = () => {
            props.changeFieldValue(field, id, value);
        }
        emitChange();
    }, [field, id, value])

    const handleEditClick = () => {
        setEditMode(true)
    }

    const handleInputEnter = (event) => {
        if (event.charCode === 13) {
            setEditMode(false);
        }
    }

    const renderComponent = () => {
        if (editMode) {
            return (
                <FormControl value={ value } onChange={handleInputChange} onKeyPress={handleInputEnter} className={styles.input}/>
            )
        }

        return (
            <span onClick={handleEditClick} className={styles.text}>
                { value }
            </span>
        )

    }

    return (
        <div ref={ref}>
            { renderComponent() }
        </div>
    )
}