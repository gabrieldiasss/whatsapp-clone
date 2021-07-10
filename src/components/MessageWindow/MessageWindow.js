import React from 'react'
import './messageWindow.scss'

function MessageWindow({ datas, user }) {

    return(

        <div className="message-lines" style={{justifyContent: user.id === datas.author ? 'flex-end' : 'flex-start' }} >

            <div className="message-item" >
                <h3>{datas.body}</h3>
                <span>15:00</span>
            </div>

        </div>
    )
}

export default MessageWindow