import { UsersType } from '../types/users';

export const updatedObjectInArray = (items: Array<UsersType>, id: number, newObject: {}) => {
  return items.map((item) => {
    if (item.id === id) return { ...item, ...newObject };

    return item;
  });
};
