import axios from "axios";

const JSON_SERVER_HOST = "https://magnificent-perpetual-channel.glitch.me";

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
    return response.data;
  } catch (err) {
    console.log(err);
    alert("뭔가 잘못된거 같아요! 데이터를 로드 할 수가 없어요");
  }
};
// ["expenses", id]
export const getExpense = async ({ queryKey }) => {
  try {
    const response = await axios.get(
      `${JSON_SERVER_HOST}/expenses/${queryKey[1]}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    alert("뭔가 잘못된거 같아요! 데이터를 로드 할 수가 없어요");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const { data } = await axios.post(
      `${JSON_SERVER_HOST}/expenses`,
      newExpense
    );
    return data;
  } catch (err) {
    console.log(err);
    alert("뭔가 잘못된거 같아요! 데이터가 써지지가 않아요!");
  }
};

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  console.log(updatedExpense);
  try {
    const { data } = await axios.put(
      `${JSON_SERVER_HOST}/expenses/${id}`,
      rest
    );
    return data;
  } catch (err) {
    console.log(err);
    alert("뭔가 잘못된거 같아요! 데이터가 수정되지가 않아요!");
  }
};

export const deleteExpense = async (id) => {
  try {
    const { data } = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
    return data;
  } catch (err) {
    console.log(err);
    alert("뭔가 잘못된거 같아요! 데이터가 삭제되지가 않아요!");
  }
};
