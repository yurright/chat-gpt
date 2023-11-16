import ChatSideCard from "./ChatSideCard";

const ChatSide = ({ chatList }) => {
  return (
    <div className="mx-2">
      <div className="w-52 py-1 mb-4 text-center w-full bg-pink-400 rounded-lg mt-4 font-semibold text-white ">
        질문 한 눈에 보기
      </div>
      <ul className=" w-52">
        {chatList?.map((v, i) => (
          <ChatSideCard key={i} question={v.question} answer={v.answer} />
        ))}
      </ul>
    </div>
  );
};

export default ChatSide;
