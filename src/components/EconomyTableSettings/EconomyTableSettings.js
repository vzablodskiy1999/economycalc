import React, {useEffect, useState} from "react";
import {Button, DropdownItem, FormControl, InputGroup, DropdownButton} from "react-bootstrap";
import {CurrencyModel} from "../../models/currency.model";

export const EconomyTableSettings = ({...props}) => {
    const [salesChannelName, setSalesChannelName] = useState("");
    const [addColumnBtnDisabled, setAddColumnBtnDisabled] = useState(true);
    const {currency} = props.common;

    const handleInputChange = (event) => {
        setSalesChannelName(event.target.value);
    }

    useEffect(() => {
        salesChannelName.length ? setAddColumnBtnDisabled(false) : setAddColumnBtnDisabled(true);
    }, [salesChannelName])

    const handleSelectClick = (event) => {
        props.changeCurrency(event);
    }

    const handleAddColumnClick = () => {
        props.addColumn(salesChannelName);
        setSalesChannelName("");
    }

    return (
        <div>
            <div className="row mb-3">
                <div className="col-12 d-flex justify-content-end align-items-start">
                    <DropdownButton id="currencySelect" title={currency} className="mr-2" variant="primary">
                        <DropdownItem onSelect={handleSelectClick} eventKey={CurrencyModel.UAH}>
                            { CurrencyModel.UAH }
                        </DropdownItem>
                        <DropdownItem onSelect={handleSelectClick} eventKey={CurrencyModel.USD}>
                            { CurrencyModel.USD }
                        </DropdownItem>
                    </DropdownButton>
                    <label className="mr-2">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    Your sales channel name
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="sales-channel" aria-describedby="basic-addon3" value={salesChannelName} onChange={handleInputChange}/>
                        </InputGroup>
                    </label>
                    <Button variant="primary" onClick={handleAddColumnClick} disabled={addColumnBtnDisabled}>
                        Add column
                    </Button>
                </div>
            </div>
        </div>
    )
}