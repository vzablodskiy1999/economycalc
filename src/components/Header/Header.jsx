import React from "react";
import styles from './Header.module.scss'

export const Header = ({...props}) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <span className={styles.logo}>
                    {props.app.appName}
                </span>
            </div>
        </header>
    )
}

