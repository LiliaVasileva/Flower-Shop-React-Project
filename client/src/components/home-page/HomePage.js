import {Fragment} from "react";

import Main from "./main-section/Main";
import Catalog from "./catalog/Catalog";
import History from "./history/History";
import Contacts from "./contacts/Contacts";


function HomePage() {
    return (
        <Fragment>
            <Main />
            <Catalog />
            <History />
            <Contacts />
        </Fragment>
    )
}

export default HomePage;

