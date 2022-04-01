import Api from "./Api";
const resource = "/okr";

export default {
  gets() {
    return Api.get(`${resource}`);
  },
  create(data) {
    return Api.post(`${resource}`, data);
  },
  patch(Id, name) {
    return Api.patch(`${resource}/${Id}`, name);
  },
  delete(Id) {
    return Api.delete(`${resource}/${Id}`);
  },
};
