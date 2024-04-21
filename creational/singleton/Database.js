class Database {
    dummyData = [
        {id: 1, name: "John Doe"}
    ] 
    constructor() {
        console.log('New Database connection');
    }

    findAll() {
        return this.dummyData;
    }

    findById(id) {
        return this.dummyData.find(user => user.id === id);
    }
}

export default Database;
