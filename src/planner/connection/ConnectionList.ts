import {Connection} from "./Connection.ts";

export class ConnectionList {
    list: Array<Connection> = [];

    public addConnection(conn: Connection) {
        // проверить что уже существует.
        this.list.push(conn);
    }
}