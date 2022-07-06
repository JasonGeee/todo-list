import {toDate, isToday, isThisWeek, subDays } from 'date-fns'

const Project = (name, tasks) => {
    const setName = (name) => { name };
    const getName = () => { return name };
    const setTasks = (tasks) => { tasks };
    const getTasks = () => { return tasks };
    const getTask = (taskName) => {
        return tasks.find((task) => task.getName() === taskName);
    };
    
    const contains = (taskName) => {
        return tasks.some((task) => task.getName() === taskName);
    };

    const addTask = (newTask) => {
        if (tasks.find((task) => task.getName() === newTask.name)) {
            return tasks.push(newTask);
        }
    } ;

    const deleteTask = (taskName) => {
        tasks = tasks.filter((task) => task.name !== taskName);
    };

    const getTasksToday = () => {
        return tasks.filter((task) => {
            const taskDate = new Date(task.getDateFormatted());
            return isToday(toDate(taskDate));
        });
    };

    const getTasksThisWeek = () => {
        return tasks.filter((task) => {
            const taskDate = new Date(task.getDateFormatted());
            return isThisWeek(subDays(toDate(taskDate), 1));
        });
    }
};

export default Project;