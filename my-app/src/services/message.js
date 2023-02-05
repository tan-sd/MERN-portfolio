import http from "../http-common";

class DataService {
    createMessage(data) {
        return http.post("/data", data);
      }
    }

export default new DataService();