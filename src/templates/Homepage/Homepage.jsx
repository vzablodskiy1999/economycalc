import React from "react";
import styles from "./Homepage.module.scss"
import EconomyTable from "../../containers/EconomyTable";
import EconomyTableSettings from "../../containers/EconomyTableSettings";

export const Homepage = () => {
    return (
        <div className={`container ` + styles.container}>
            <p className={styles["hero-text"]}>
                Test project. Source link: <a href="https://www.uplab.ru/blog/unit-economics-how-to-evaluate-the-success-of-the-business/">https://www.uplab.ru/blog/unit-economics-how-to-evaluate-the-success-of-the-business/</a>
            </p>
            <div>
                <p>
                    You can calculate unit economic for your project using next formula:
                </p>
                <p>
                    <strong>
                        Profit = UA x (ARPU - CPA)
                    </strong>
                </p>
                <ul>
                    <li>
                        <p>
                            <strong>UA (User Acquisition)</strong> = amount of users you attract.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>ARPU (Avenue Revenge Per User)</strong> = average revenue from attracted user. <br />
                            You can get <strong>ARPU</strong> using next formula:
                        </p>
                        <p>
                            <strong>
                                ARPU = ARPPU x C1
                            </strong>
                        </p>
                        <ul>
                            <li>
                               <p>
                                   <strong>ARPPU (Average revenue per paying user)</strong> = average revenue from one paying user.
                               </p>
                            </li>
                            <li>
                                <p>
                                    <strong>C1</strong> = the percent of users that made first deal.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <strong>CPA (Cost per Action)</strong> = how much you spend to attract user.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Profit</strong> = revenue that we get excluding costs / revenue you get excluding expenses on cost price of deal.
                        </p>
                    </li>
                </ul>
            </div>
            <EconomyTableSettings />
            <EconomyTable />
        </div>
    )
}