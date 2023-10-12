import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import Modal from "./Modal";
import users from "./dummy";
import { useRouter } from "next/router";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedCard, setEditedCard] = useState({});
  const [cards, setCards] = useState(users);
  const router = useRouter()

  const handleEdit = (card) => {
    setEditedCard(card);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === editedCard.id) {
          return editedCard;
        }
        return card;
      });
    });
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full font-arone">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-12 pt-12 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white group flex items-start p-3 justify-between rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div>
              <img
                src={card.avatar}
                alt={`${card.name}'s avatar`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <h2 className="text-2xl font-semibold text-blue-600">
                Name: {card.name}
              </h2>
              <h3 className="text-lg font-semibold text-gray-700">
                Age: {card.age}
              </h3>
              <h4 className="text-lg font-semibold text-gray-700">
                DOB: {card.dob}
              </h4>
              <h4 className="text-lg font-semibold text-gray-700">
                Country: {card.country}
              </h4>
              <p className="mt-2 text-gray-600">{card.content}</p>
            </div>
            <button
              onClick={() => handleEdit(card)}
              className="group-hover:block hidden text-pink-400"
            >
              <AiOutlineEdit size={20} />
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleSave}
        title="Edit Card"
      >
        <input
          type="text"
          className="border-1 rounded-md p-2"
          value={editedCard ? editedCard.name : ""}
          onChange={(e) =>
            setEditedCard({ ...editedCard, name: e.target.value })
          }
        />
      </Modal>
      <div className="flex items-center justify-center mt-4">
        <button onClick={()=>{router.push('/')}} className="py-1 px-4 text-white bg-pink-600 rounded-md">Home</button>
      </div>
    </section>
  );
};

export default Users;
