import React, {ReactElement} from 'react';
import Navbar from "../Navbar";

const DefaultLayout = ({children}: { children: ReactElement }) => {
    return (
        <>
            <Navbar />
            <main className="container">
                {children}
            </main>
        </>
    );
};

export default DefaultLayout;