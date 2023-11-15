import axios from "axios";
import { useState } from "react";

const ChatBar = () => {
  const [newQuestion, setNewQuestion] = useState("");

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      if (!newQuestion) return;

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

      setNewQuestion("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" h-24">
      <form className="0 h-full items-center flex px-4" onSubmit={onSubmitChat}>
        <input
          className="  grow py-1 px-2 focus:outline-none border-2 focus:border-pink-400 mr-4 rounded-lg"
          onChange={(e) => setNewQuestion(e.target.value)}
          type="text"
          disabled={false}
        />
        <input
          className="bg-pink-400 w-28 py-[6px] text-sm font-semibold text-white hover:bg-pink-600 active:bg-pink-400 rounded-lg"
          type="submit"
          value="검 색"
          disabled={true}
        />
      </form>
    </div>
  );
};

export default ChatBar;

// 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
