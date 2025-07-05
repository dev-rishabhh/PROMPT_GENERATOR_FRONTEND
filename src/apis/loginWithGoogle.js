import { BASE_URL } from "./api";

export const loginWithGoogle = async (idToken) => {
    
  const response = await fetch(`${BASE_URL}/auth/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ idToken }),
  });
  const data = await response.json();
  return data;
};