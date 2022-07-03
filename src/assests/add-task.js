function taskPopup() {
    const taskBtn = document.getElementById('createTaskBtn');
    const popup = document.querySelector('.task-popup');

    taskBtn.addEventListener('click', () => {
        console.log('calling from taskPopup function');
        popup.removeAttribute('style');
    });
}

export default taskPopup;