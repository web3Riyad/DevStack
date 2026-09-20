import type { CardType } from '../types/CardType';
import { FaStar, FaCheck } from "react-icons/fa6";

interface CardContainerProps {
    singleCard: CardType;
    onAddToStack: (card: CardType) => void;
    isAdded: boolean;
}

const Card_container = ({ singleCard, onAddToStack, isAdded }: CardContainerProps) => {
    return (
        <div className="h-full w-full">
            <div className="h-full">
                <div className="singleCard-wrapper h-full">
                    <div className="singleCard flex flex-col justify-between h-full w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-200">
                        <div>
                            <div className="flex items-center justify-between">
                                <img src={singleCard.icon} alt={singleCard.name} className="h-10 w-10 object-contain" />
                                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600 border border-pink-100">
                                    {singleCard.badge}
                                </span>
                            </div>

                            <div className="mt-4">
                                <h2 className="text-xl font-bold text-gray-800">{singleCard.name}</h2>
                                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{singleCard.description}</p>
                            </div>
                        </div>

                        <div>
                            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-gray-50 p-2.5">
                                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                                    {singleCard.category}
                                </span>
                                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                                    {singleCard.difficulty}
                                </span>
                                <span className="flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                                    <FaStar className="text-yellow-400" />
                                    {singleCard.rating}
                                </span>
                            </div>

                            <div className="mt-4">
                                <button
                                    onClick={() => onAddToStack(singleCard)}
                                    disabled={isAdded}
                                    className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                                        isAdded
                                            ? "bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300"
                                            : "bg-black text-white hover:bg-gray-800 active:scale-[0.98] cursor-pointer"
                                    }`}
                                >
                                    {isAdded ? (
                                        <>
                                            <FaCheck className="text-xs text-emerald-600" />
                                            <span>✓ Added to Stack</span>
                                        </>
                                    ) : (
                                        "Add to Stack"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card_container;