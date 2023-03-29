import React from "react"

function New() {
    return (
        <div>
            <form action="logs" method="POST">
                <label htmlFor="tit">Title: </label><br />
                <input type="text" id="tit" name="title" /><br /><br />

                <label htmlFor="ent"><Entry></Entry>:</label><br />
                <input type="texttarea" id="ent" name="entry" /><br /><br />

                <label htmlFor="">Ship Is Broken:</label>
                <input type="checkbox" id="rdy" name="shipIsBroken" /><br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default New;