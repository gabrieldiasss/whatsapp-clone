import React from 'react'

import './list.scss'

function ChatList({ identificatedChat, list, active }) {

    return(
        <div className={`chatList ${active? 'active' : '' } `}
            onClick={identificatedChat}
         >

            <img src={list.avatar} />

            <div className="lines" >

                <div className="line" >
                    <p>{list.name}</p>
                    <span>15:00</span>
                </div>

                <div className="line" >
                    <div>{list.lastMessage}</div>
                </div>

            </div>

        </div>
    )

}

export default ChatList