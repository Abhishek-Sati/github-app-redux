import React from "react"

export default function Error() {
    return (
        <div className='mainbox'>
            <div className='err'>
                <div>4</div>
                <div>0</div>
                <div>4</div>
            </div>
            <div className='msg'>
                Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first
                place?
                <p>
                    Let's go <a href='/'>home</a> and try from there.
                </p>
            </div>
        </div>
    )
}
