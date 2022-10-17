import { ApiConstants } from "../constants/api.constants";
import axios from "axios";
import { IUserData } from "../store/models";

export const getUsers = async() => {
  const endpoint = `${ApiConstants}/users`;

  const response = await axios.get(endpoint);

  return response;
}

export const deleteUser = async(id: string) => {
  const endpoint = `${ApiConstants}/users/${id}`;

  const response = await axios.delete(endpoint);

  return response;
}

export const updateUser = async(data: IUserData) => {
  const endpoint = `${ApiConstants}/users/${data.id}`;

  const response = await axios.put(endpoint, data);

  return response;
}

export const addUser = async() => {
  const endpoint = `${ApiConstants}/users`;

  const response = await axios.post(endpoint);

  return response;
}
