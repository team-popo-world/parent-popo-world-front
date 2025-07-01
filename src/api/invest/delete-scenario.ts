import apiClient, { ApiError } from "../api";

export const deleteScenario = async (scenarioId: string) => {
  try {
    const response = await apiClient.post(`/api/chatbot/delete`, {
      scenarioId: scenarioId,
    });
    console.log("deleteScenario", response);
    if (response.status == 200) {
      console.log("deleteScenario", response);
      return true;
    }
    return false;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    return false;
  }
};
