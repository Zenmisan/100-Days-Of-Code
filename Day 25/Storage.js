export default class Store {
    static getTasks() {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }

    static addTask(task) {
        const tasks = Store.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static removeTask(id) {
        let tasks = Store.getTasks();
        // FILTER: Keep everything EXCEPT the one with this ID
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static toggleTask(id) {
        let tasks = Store.getTasks();
        // MAP: Find the task and flip its status
        tasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}