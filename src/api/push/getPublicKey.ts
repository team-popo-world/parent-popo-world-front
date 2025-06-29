import apiClient from "../../api/api";

export const getPublicKey = async () => {
  try {
    const response = await apiClient.get("/api/push/public-key");
    return response.data;
  } catch (error) {
    console.error("Failed to subscribe", error);
    throw error;
  }
};
