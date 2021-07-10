import React, { useState } from 'react'

// Libs
import EmojiPicker from 'emoji-picker-react'

// Images
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SendIcon from '@material-ui/icons/Send';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import MicIcon from '@material-ui/icons/Mic';

// Components
import MessageWindow from '../MessageWindow/MessageWindow'

import './chatWindow.scss'

function ChatWindow({ user, list }) {

    const [ emojiOpen, setEmojiOpen ] = useState(false)
    const [text, setText] = useState('')
    const [ listening, setListening ] = useState(false)
    const [ messages, setMessages ] = useState([

        {
            author: 1,
            body: "Olá como você está?"
        },

        {
            author: 2,
            body: "Estou bem, e vc?"
        },

        {
            author: 1,
            body: "Eu estou ótimo"
        },

        {
            author: 1,
            body: "eu consegui um emprego novo"
        }, 

        {
            author: 1,
            body: "Olá como você está?"
        },

        {
            author: 2,
            body: "Estou bem, e vc?"
        },

        {
            author: 1,
            body: "Eu estou ótimo"
        },

        {
            author: 1,
            body: "Olá como você está?"
        },

        {
            author: 2,
            body: "Estou bem, e vc?"
        },

        {
            author: 1,
            body: "Eu estou ótimo"
        },

        {
            author: 1,
            body: "Olá como você está?"
        },

        {
            author: 2,
            body: "Estou bem, e vc?"
        },

        {
            author: 1,
            body: "Eu estou ótimo"
        },

        {
            author: 1,
            body: "eu consegui um emprego novo"
        }, 

        {
            author: 1,
            body: "Olá como você está?"
        },

        {
            author: 2,
            body: "Estou bem, e vc?"
        },

        {
            author: 1,
            body: "Eu estou ótimo"
        },

        {
            author: 1,
            body: "Olá como você está?"
        },

        {
            author: 2,
            body: "Estou bem, e vc?"
        },

        {
            author: 1,
            body: "Eu estou ótimo"
        },


    ])

    let recognition = null

    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    if(SpeechRecognition !== undefined ) {
        recognition = new SpeechRecognition()
    }

    const handleEmojiOpen = () => {
        setEmojiOpen(true)
    }

    const handleEmojiClose = () => {
        setEmojiOpen(false)
    }

    function handleEmojiClick(e, emojiObject) {

        setText( text + emojiObject.emoji )

    }

   const handleMicClick = () => {

        if(recognition !== null ) {

            recognition.onstart = () => {
                setListening(true)
            }

            recognition.onend = () => {
                setListening(false)
            }

            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript )
            }      
            
            recognition.start()

        }

    }

    return(

        <div className="chatWindow" >

            <header>

                <div className="header-infos" >
                    <img src={list.avatar} />
                    <h3>{list.name}</h3>
                </div>

                <div className="header-btns" >

                    <div className="header-btn" >
                        <SearchIcon style={{color: "#919191"}} />
                    </div>

                    <div className="header-btn" >
                        <MoreVertIcon style={{color: "#919191"}} />
                    </div>

                </div>

            </header>

            <main>

                {messages.map((message, key) => {

                    return (

                        <MessageWindow
                            key={key}
                            datas={message}
                            user={user}
                        />

                    )

                })}

            </main>

            <div className="emoji-area" style={{height: emojiOpen ? '300px' : '0px' }} >

                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />

            </div>

            <footer>

                <div className="icon-pre" >

                    <div className="btn" onClick={handleEmojiClose} style={{ width: emojiOpen? '40px' : '0px' }} >
                        <CloseIcon style={{color: "#919191"}} />
                    </div>

                    <div className="btn" onClick={handleEmojiOpen} >
                        <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : "#919191"}} />
                    </div>
                    
                </div>

                <div className="input-area" >
                    <input 
                        type="text"
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={(e) => setText(e.target.value) }
                    />
                </div>

                <div className="icon-pos" >

                    {text === '' && (

                        <div className="btn" onClick={handleMicClick} >
                            <MicIcon style={{color: listening? '#126ece' : "#919191"}} />
                        </div>

                    )}
                    
                    {text !== '' && (

                        <div className="btn" >
                            <SendIcon style={{color: "#919191"}} />
                        </div>

                    )}
                    
                    
                </div>

            </footer>
            
        </div>

    )
}

export default ChatWindow;