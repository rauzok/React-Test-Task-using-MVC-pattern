import { IUserData } from "../store/models";

export const getDataFromLS = () => {
  const id = localStorage.getItem('id');
  const name = localStorage.getItem('name');
  const age = localStorage.getItem('age');
  const aboutPerson = localStorage.getItem('aboutPerson');

  return {
    id,
    name,
    age,
    aboutPerson
  };
}

export const removeDataFromLS = () => {
  localStorage.removeItem('id');
  localStorage.removeItem('name');
  localStorage.removeItem('age');
  localStorage.removeItem('aboutPerson');
}


export const setItemIntoLS = ({ id, name, age, aboutPerson }: IUserData ) => {
  localStorage.setItem('id', id);
  localStorage.setItem('name', name);
  localStorage.setItem('age', age);
  localStorage.setItem('aboutPerson', aboutPerson);
}