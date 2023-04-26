import RequestService from "./requestService";
import {apiUrl} from "../../constant";

class NetworkService {
  async signIn(payload) {
    return RequestService.get(apiUrl, {
      headers: payload.payload,
    });
  }
}

export default new NetworkService();
