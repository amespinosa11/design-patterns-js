import { Database } from './DatabaseConn';

class DatabaseConn {
    client = null;
    constructor() {
        if(!this.client) {
            this.client = new Database();
        }
    }

    findUser(id) {
        return this.client.findById(id);
    }
}
