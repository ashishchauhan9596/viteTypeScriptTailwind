import { useState } from 'react';
import PlusIcon from '@/icons/PlusIcon';
import { Column } from '@/types';
import ColumnContainer from './ColumnContainer';

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  function generateId(): number {
    return Math.floor(Math.random() * 10001);
  }
  const createNewColumn = () => {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  };

  return (
    <div
      className='
      m-auto
      flex
      min-h-screen
      w-full
      items-center
      overflow-x-auto
      overflow-y-hidden
      px-[40px]
    '>
      <div className='m-auto flex gap-2'>
        <div className='flex gap-4'>
          {columns.map(col => (
            <ColumnContainer
              key={col.id}
              column={col}
            />
          ))}
        </div>
        <button
          onClick={createNewColumn}
          className='
          h-[60px]
          w-[350px]
          min-w-[350px]
          cursor-pointer
          rounded-lg
          bg-mainBackgroundColor
          border-2
          border-columnBackgroundColor
          p-4
          ring-rose-500
          hover:ring-2
          flex
          gap-2
          justify-center
        '>
          <PlusIcon />
          Add Columns
        </button>
      </div>
    </div>
  );
};

export default KanbanBoard;
