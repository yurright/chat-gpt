import { useState } from "react";
import { CgCloseR } from "react-icons/cg";

const ChatSideCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li
        onClick={onClickModal}
        className="mb-2 truncate cursor-pointer hover:bg-pink-100 rounded-lg pl-2 "
      >
        {`•  ${question}`}
      </li>
      {isOpen && (
        <div
          className="bg-black bg-opacity-20 rounded-lg p-2 fixed w-full h-full top-0 left-0 z-10 "
          onClick={onClickModal}
        >
          <div className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg ">
            <button className=" self-end mr-8 " onClick={onClickModal}>
              <CgCloseR />
            </button>
            <div className="font-semibold">Q. {question}</div>

            <div>A. {answer}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSideCard;
