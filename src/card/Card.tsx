import { use, useState } from "react";
import type { CardType } from "../types/CardType";
import Card_container from "./Card_container";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

const Card = ({ cardPromise }:{cardPromise : Promise<CardType[]>}) => {
    const cards_element = use(cardPromise);
    const [selectedCards, setSelectedCards] = useState<CardType[]>([]);

    const handleAddToStack = (card: CardType) => {
        const isAlreadyAdded = selectedCards.some((item) => item.id === card.id);
        if (isAlreadyAdded) {
            toast.warn(`${card.name} is already in your stack!`, {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        setSelectedCards((prev) => [...prev, card]);
        toast.success(`${card.name} added to stack!`, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    const handleRemoveFromStack = (id: number) => {
        const itemToRemove = selectedCards.find((item) => item.id === id);
        setSelectedCards((prev) => prev.filter((item) => item.id !== id));
        if (itemToRemove) {
            toast.info(`${itemToRemove.name} removed from stack`, {
                position: "top-right",
                autoClose: 2000,
            });
        }
    };

    const handleRemoveAll = () => {
        setSelectedCards([]);
        toast.info("All items removed from stack", {
            position: "top-right",
            autoClose: 2000,
        });
    };

    return (
      <div className="grid w-full grid-cols-1 lg:grid-cols-4 gap-6">
        {/* All Cards Section (Takes 3 columns out of 4) */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards_element.map((card) => {
              const isAdded = selectedCards.some((item) => item.id === card.id);
              return (
                <Card_container
                  key={card.id}
                  singleCard={card}
                  onAddToStack={handleAddToStack}
                  isAdded={isAdded}
                />
              );
            })}
          </div>
        </div>

        {/* Selected Card Section (Takes 1 column out of 4) */}
        <div className="lg:col-span-1">
          <YourStack
            selectedCards={selectedCards}
            onRemoveFromStack={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    );
};

export default Card;