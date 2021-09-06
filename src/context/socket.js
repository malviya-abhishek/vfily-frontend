import socketio from "socket.io-client";
const SOCKET_URL = "https://vfily-api.herokuapp.com/";
export const socket = socketio.connect(SOCKET_URL);
// export const SocketContext = React.createContext();
