export default class Task {
    constructor(title) {
        this.id = Date.now(); // Unique ID based on timestamp
        this.title = title;
        this.completed = false;
    }
}