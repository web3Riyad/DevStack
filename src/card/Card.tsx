import { use } from "react";
import type { CardType } from "../types/CardType";
import Card_container from "./Card_container";



const Card = ({ cardPromise }:{cardPromise : Promise<CardType[]>}) => {
    const cards_element = use(cardPromise);

    return (
      <div className="grid w-full grid-cols-1 lg:grid-cols-4 gap-6">
        {/* All Cards Section (Takes 3 columns out of 4) */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards_element.map((card) => (
              <Card_container key={card.id} {...card} />
            ))}
          </div>
        </div>

        {/* Selected Card Section (Takes 1 column out of 4) */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 flex min-h-[360px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center shadow-sm">
            <div className="mb-2 text-3xl font-light text-gray-400">+</div>
            <h3 className="text-base font-semibold text-gray-800">Selected Items</h3>
            <p className="mt-1 text-sm text-gray-500">Your selected items will appear here.</p>
          </div>
        </div>
      </div>
    );
};

export default Card;