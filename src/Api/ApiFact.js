import OkrApi from "./OkrApi";

const apis = {
  ork: OkrApi,
};

export const ApiFact = {
  get: (name) => apis[name],
};
