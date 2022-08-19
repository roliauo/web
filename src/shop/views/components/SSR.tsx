import React, { useEffect, useState } from "react";

function SSR () {
    const [isServerSideRendered, setServerSideRendered] = useState(false);

    useEffect(() => {
        setServerSideRendered(true);
    }, [])

    return (
        <>
        {
            isServerSideRendered ?
            <div> SSR </div>
            :
            <div> loading... </div>

        }
        </>
    )
}