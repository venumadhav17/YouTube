import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  //API Polling
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(), // name: "Akshay"
          message: makeRandomMessage(20) + "🚀"
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className='w-full h-[600px] ml-2 py-15 px-3 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
          {/* <ChatMessage name='Akshay' message='This is React Live' /> */}
          {/** <ChatMessage name='Akshay' message='This is React Live' />
      <ChatMessage name='Akshay' message='This is React Live' />*/}
        </div>
      </div>

      <form
        className='w-full px-3 py-2 ml-2 border border-black'
        onSubmit={(e) => {
          e.preventDefault();
          //console.log("ON Form Submit", liveMessage);
          dispatch(
            addMessage({
              name: generateRandomName(),
              message: liveMessage
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className='px-2 w-70'
          type='text'
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
      </form>
    </>
  );
};

export default LiveChat;
