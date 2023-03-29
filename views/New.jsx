import React from "react"

function New() {
    return (
        <div>
            <form action="/" method="POST">
                <label htmlFor="ttl">Title: </label><br />
                <input type="text" id="ttl" name="title" /><br /><br />

                <label htmlFor="en">Entry:</label><br />
                <input type="texttarea" id="en" name="entry" /><br /><br />

                <label htmlFor="">Ship Is Broken:</label>
                <input type="checkbox" id="sib" name="shipIsBroken" /><br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default New;