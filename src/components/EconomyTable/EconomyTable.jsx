import React from "react";
import {Table} from "react-bootstrap";
import styles from './EconomyTable.module.scss'
import EditableText from "../../containers/EditableText";
import {rowType} from "../../models/rowType.module";

const rowsSettings = [
    {
        rowName: "Name of sales channel",
        key: "salesChannelName",
        rowType: rowType.REMOVABLE
    },
    {
        rowName: "User of Lead Acquisition",
        key: "uola",
        unit: "Users",
        rowType: rowType.EDITABLE,
    },
    {
        rowName: "Buyers",
        key: "buyers",
        unit: "Users",
        rowType: rowType.EDITABLE,
    },
    {
        rowName: "Conversion",
        key: "conversion",
        unit: "%",
        rowType: rowType.CALCULATIVE,
    },
    {
        rowName: "Cost per action",
        key: "cpa",
        unit: "currency",
        rowType: rowType.EDITABLE,
    }
]

export const EconomyTable = ({...props}) => {
    const {currency} = props.common;
    const cols = props.cols.cols;

    const handleClickRemove = (colId) => {
        props.removeColumn(colId);
    }

    const renderTable = () => {
        const table = rowsSettings.map((row, i) => {
            const renderColumns = cols.map(col => {
                if (row.rowType === rowType.EDITABLE) {
                    return (
                        <td key={col.id + i}>
                            <EditableText passedText={col[row.key]} field={row.key} id={col.id}/>
                        </td>
                    )
                } else {
                    return (
                        <td key={col.id}>
                            {col[row.key]}
                            {row.rowType === rowType.REMOVABLE &&
                            <i className={"fas fa-trash " + styles["icon--remove"]} onClick={() => handleClickRemove(col.id)}/>
                            }
                        </td>
                    )
                }
            })

            if (i === 0) {
                return (
                    <thead key={i}>
                        <tr>
                            <td className={styles.row__name}>
                                {row.rowName}
                            </td>
                            <td>
                                {row.unit === "currency" ? currency : row.unit}
                            </td>
                            {renderColumns}
                        </tr>
                    </thead>
                )
            }
            return (
                <tbody key={i}>
                    <tr>
                        <td>
                            {row.rowName}
                            {row.rowType === rowType.EDITABLE &&
                            <i className={"fas fa-edit " + styles["row__type-icon"]}/>
                            }
                            {row.rowType === rowType.CALCULATIVE &&
                            <i className={"fas fa-calculator " + styles["row__type-icon"]}/>
                            }
                        </td>
                        <td>
                            {row.unit === "currency" ? currency : row.unit}
                        </td>
                        {renderColumns}
                    </tr>
                </tbody>
            )
        })

        return table;
    }

    return (
        <Table striped responsive hover variant="dark" className={styles.table}>
            {renderTable()}
        </Table>

    )
}