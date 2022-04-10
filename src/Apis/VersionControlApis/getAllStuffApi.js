import { requester } from "~/Functions/Utils/requester";
// import { StuffStore } from "~/Functions/Utils/StuffStore";
// import { getApiUrlAndMethod } from "~/Functions/Utils/utils";

const getAllStuffApi = async (data) => {
  try {
    // const {
    //   versionControlRouterTemplate: { baseUrl, getAllStuffs },
    // } = StuffStore.templates.routerTemplates;

    const response = await requester({
      data,
      // ...getApiUrlAndMethod(baseUrl, getAllStuffs),
      url: "/versionControl/getAllStuff",
      method: "get",
    });

    return response;
  } catch (error) {
    logger.log("getAllStuffApi catch", error);
    throw error;
  }
};
export { getAllStuffApi };