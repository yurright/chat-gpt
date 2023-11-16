import axios from "axios";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

const ChatBar = ({ setChatList, chatList }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      if (!newQuestion) return;

      setIsLoading(true);

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: newQuestion,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_KEY}`,
          },
        }
      );
      console.log(response);
      setChatList([
        ...chatList,
        {
          question: newQuestion,
          answer: response.data.choices[0].message.content,
        },
      ]);

      setNewQuestion("");

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className=" h-24 absolute bottom-0 w-full">
      <form className="0 h-full items-center flex px-4" onSubmit={onSubmitChat}>
        <input
          className={`grow py-1 px-2 focus:outline-none border-2 focus:border-pink-400 mr-4 rounded-lg ${
            isLoading && "bg-gray-100 text-gray-500"
          } `}
          onChange={(e) => setNewQuestion(e.target.value)}
          type="text"
          disabled={isLoading}
          value={newQuestion}
          placeholder="무엇이든 물어보세요! Chat-GPT"
        />

        <button
          className="bg-pink-400 w-28 py-[6px] text-sm font-semibold text-white hover:bg-pink-600 active:bg-pink-400 rounded-lg flex justify-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <CgSpinner size={22} className="animate-spin " />
          ) : (
            "검 색"
          )}
        </button>
      </form>
    </div>
  );
};

export default ChatBar;
