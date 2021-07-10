import React, { useState } from 'react'

import Intro from './components/Intro/Intro'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';

import ChatList from './components/List/List'
import ChatWindow from './components/ChatWindow/ChatWindow'

import './App.scss'

function App() {

	const [lists, setLists] = useState([

		{
			chatId: 1,
			avatar: "https://avatars.githubusercontent.com/u/71296002?v=4",
			name: "Gabriel",
			lastMessage: "Como abre a geladeria?"
		},

		{
			chatId: 2,
			avatar: "https://avatars.githubusercontent.com/u/2254731?v=4",
			name: "Diego",
			lastMessage: "Eu gostaria de fazer um freela tlgd"
		},

		{
			chatId: 3,
			avatar: "https://avatars.githubusercontent.com/u/6643122?v=4",
			name: "Mayk",
			lastMessage: "Flw"
		},

		{
			chatId: 4,
			avatar: "https://avatars.githubusercontent.com/u/7559318?v=4",
			name: "Lucas",
			lastMessage: "Até semana que vem meu mano, boa sorte na sua entrevista"
		}
	])

	const [activeChat, setActiveChat ] = useState({})

	const [ user, setUser ] = useState(

		{
			id: 1,
			avatar: "https://mk0anatomieunes58h83.kinstacdn.com/wp-content/themes/cera/assets/images/avatars/user-avatar.png"
		}

	)

	return (
		<div className="app-window">
			
			<aside className="sidebar" >

				<header>
					<img src={user.avatar} />
					<div className="header-btns" >
						<div>
							<DonutLargeIcon style={{color: "rgb(145 145 145)"}} />
						</div>

						<div>
							<ChatIcon style={{color: "rgb(145 145 145)"}} />
						</div>

						<div>
							<MoreVertIcon style={{color: "rgb(145 145 145)"}} />
						</div>

					</div>
				</header>

			<div className="search" >

				<div className="fake-input" >
					<SearchIcon fontSize="small" style={{color: "#919191"}} />
					<input type="search" placeholder="Escreva ou inicie uma nova conversa" />
				</div>

			</div>

			<div className="list" >
				
				{lists.map((list, key) => {

					return(
						<ChatList
							key={key}
							active={ activeChat.chatId === lists[key].chatId }
							list={list}
							identificatedChat={() => setActiveChat(lists[key])}

						/>
					)
					
				})}
				

			</div>

			</aside>

			<div className="content" >

				{activeChat.chatId === undefined && (
					<Intro />
				)}

				{activeChat.chatId !== undefined && (

					<ChatWindow
						user={user}
						list={lists}
					/>
					
				)}


				
				
				
			</div>
			 

		</div>
	);
}
 
export default App;
