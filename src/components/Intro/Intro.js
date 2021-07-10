import React from 'react' 

import ComputerIcon from '@material-ui/icons/Computer';

import './intro.scss'

function ConnectCell() {

    return(

        <main className="intro" >

            <img src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg" alt=""/>
            <h1>Mantenha seu celular conectado</h1>
            <h3>O Whatsapp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</h3>

            
            <div className="text-bottom" >

                <div className="line"></div>

                <div className="bottom" >
                    <ComputerIcon style={{color: "#919191"}} />
                    <p>O WhatsApp está disponível para Windows, <span>Baixe-o aqui</span>.</p>
                </div>

               
            </div>
            
        </main>
    )
}

export default ConnectCell