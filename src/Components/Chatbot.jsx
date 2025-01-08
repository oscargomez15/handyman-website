import React, { useState } from 'react'
import { LexRuntimeV2Client, RecognizeTextCommand } from '@aws-sdk/client-lex-runtime-v2'
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity'
import '../Styling/Chatbot.css'
import botImage from '../Assets/bot-image.jpg'

import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaRegSquareMinus } from 'react-icons/fa6'
import { BsArrowUpSquare } from 'react-icons/bs'

export const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isMinimized, setMinimized] = useState(true);

    const lexClient = new LexRuntimeV2Client({
        region: "us-east-1",
        credentials: fromCognitoIdentityPool({
            clientConfig:{region: "us-east-1"},
            identityPoolId: "us-east-1:68798e67-b1d0-4669-9611-af7e34efed0c",
        }),
    });

    const sendMessage = async (message) => {
        const command = new RecognizeTextCommand({
            botId:'7A6FMZ0NSB',
            botAliasId: 'XPK5BIBXY4',
            localeId: 'en_US',
            text: message,
            sessionId: "user-id"
        });
        try{
            const response = await lexClient.send(command);
            console.log(response.messages);
            return response.messages[0].content
        }catch(err){
            console.error(err);
        }
    }

    const handleSendMessage = async () => {
        if (input.trim()) {
          const newMessages = [...messages, { text: input, sender: "user" }];
          setMessages(newMessages);
          setInput("");

          const response = await sendMessage(input);
          setMessages([...newMessages, { text: response, sender: "bot" }]);
        }
      };

      const handleMinimize = () => {
        setMinimized(!isMinimized);
      }

      const handleFocus = (e) => {
        if((e.key === "Enter" || e.key === '') && input !== ''){
            handleSendMessage();
        }
      }
      return (
        <div className="chatbot-container">
            {isMinimized ?
            <div className="hidden-chat" onClick={handleMinimize}>
                <div className="hidden-text-container">
                    <h3>Chat with a Specialist</h3>
                    <BsArrowUpSquare/>
                </div>
            </div>
            :
            <div className='chatbot'>
                <div className="chatbot-heading-container">
                    <img src={botImage} alt="" />
                    <div className="heading-text-group">
                        <h3 className='chatbot-heading'> Chat with Laura </h3>
                        <h5 className='heading-status'>Home Renovation Specialist</h5>
                    </div>
                    <FaRegSquareMinus onClick={handleMinimize}/>
                </div>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                    {msg.text}
                </div>
                ))}
            </div>
            <div className="input-container">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => handleFocus(e)}
                className='user-input'/>
                <button onClick={handleSendMessage} className='chat-send-btn'><FaArrowAltCircleRight/></button>
            </div>
        </div>}
        </div>
      );
    };
