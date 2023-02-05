import http from "../http-common";

class DataService {
    createMessage(data) {
        return http.post("/contact", data);
      }
    }

export default new DataService();