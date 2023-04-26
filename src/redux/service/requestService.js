import axios from "axios";

class RequestService {
  async get(url, header) {
    return await axios.get(url, header);
  }
}

export default new RequestService();
