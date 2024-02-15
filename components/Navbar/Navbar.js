import React from "react";
import Link from "next/link";

function Navbar(){
    return(
        <>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </div>
        </>
    )
}

export { Navbar };