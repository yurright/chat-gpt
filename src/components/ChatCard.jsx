const ChatCard = ({ answer, question }) => {
  return (
    <li className="flex flex-col-reverse gap-4 mb-6">
      <div className=" self-start bg-blue-200 rounded-lg ml-4 mr-16 py-1 px-2 shadow-lg whitespace-pre-wrap">
        {answer}
      </div>
      <div className=" self-end bg-yellow-200 rounded-lg mr-4 ml-16 py-1 px-2 shadow-lg ">
        {question}
      </div>
    </li>
  );
};

export default ChatCard;
