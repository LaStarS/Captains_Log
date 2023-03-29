import React from 'react'


function Index(props) {
    console.log(props.captLogs)
    return (
            <div>
                <h1>Log Entry</h1>
                <ul>
                    {props.logs.map((log, index) => 
                        <li key={index}>
                            <a href={`/captLogs/${log._id}`}><strong>{log.title}</strong></a>
                        </li>
                    )}
                </ul>
                <a href="/captLogs/new">Add...</a>

                <br/><br/><br/>

                <form action="/captLogs/seed" method="POST">
                    <button>SEED</button>
                </form>

                <br/>

                <form action="/captLogs/clear?_method=DELETE" method="POST">
                    <button>CLEAR</button>
                </form>
            </div>
     
    )
}

export default Index