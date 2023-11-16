import { useEffect, useRef } from "react";
import ChatCard from "./ChatCard";

const ChatView = ({ chatList }) => {
  const ulRef = useRef(); //ul 태그에 달 거라 ulRef라 명명

  useEffect(() => {
    ulRef.current.scrollTop = ulRef.current.scrollHeight;
    // ulRef.current.hidden = true;
    //console.log(ulRef);
  }, [chatList]);

  return (
    <div className=" h-screen grow max-w-[560px] flex flex-col justify-end">
      <ul ref={ulRef} className=" mb-24 overflow-y-auto">
        {chatList.length === 0
          ? "채팅이 없습니다"
          : chatList.map((v, i) => (
              <div>
                <ChatCard key={i} answer={v.answer} question={v.question} />
              </div>
            ))}
      </ul>
    </div>
  );
};

export default ChatView;
