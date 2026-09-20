import type { CardType } from '../types/CardType';
import { FaTrash, FaXmark } from 'react-icons/fa6';

interface YourStackProps {
  selectedCards: CardType[];
  onRemoveFromStack: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ selectedCards, onRemoveFromStack, onRemoveAll }: YourStackProps) => {
  const count = selectedCards.length;

  return (
    <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
          <p className="text-xs font-medium text-pink-600 mt-0.5">
            {count} {count === 1 ? 'Technology' : 'Technologies'} Selected
          </p>
        </div>

        
      </div>

      {/* Empty State */}
      {count === 0 ? (
        <div className="flex min-h-[260px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/70 p-6 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-2xl font-light text-pink-500 border border-pink-100">
            +
          </div>
          <h3 className="text-sm font-semibold text-gray-800">Your stack is empty</h3>
          <p className="mt-1 text-xs text-gray-500 max-w-[200px]">
            Pick technology cards from the left to build your stack.
          </p>
        </div>
      ) : (
        /* selected item list */
        <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-1">
          {selectedCards.map((item) => (
            <div
              key={item.id}
              className="group flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all hover:border-pink-200 hover:bg-pink-50/30 hover:shadow-xs"
            >
              {/* selected items details */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 border border-gray-200 shadow-xs">
                  <img src={item.icon} alt={item.name} className="h-full w-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-sm font-bold text-gray-800">{item.name}</h4>
                  <span className="inline-block rounded-md bg-gray-200/70 px-2 py-0.5 text-[10px] font-medium text-gray-600 mt-0.5">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Remove  Button */}
              <button
                onClick={() => onRemoveFromStack(item.id)}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-red-100 hover:text-red-600 transition-colors cursor-pointer"
                title={`Remove ${item.name} from stack`}
              >
                <FaXmark className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      )}
      <div>
        {count > 0 && (
          <button
            onClick={onRemoveAll}
            className="w-full flex items-center justify-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-100 active:scale-95 cursor-pointer"
            title="Remove all items from stack"
          >
            <FaTrash className="text-xs" />
            <span>Remove All</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default YourStack;
