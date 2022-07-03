function createProject() {
    const projectBtn = document.getElementById('projectBtn');
    const projectPopup = document.querySelector('.project-popup');
    const addBtn = document.getElementById('add');
    const cancelBtn = document.getElementById('cancel');

    projectBtn.addEventListener('click', (e) => {
        console.log('from createproject function');
        console.log(e.target);
        projectPopup.removeAttribute('style');
    });

    cancelBtn.addEventListener('click', () => {
        projectPopup.style.display = 'none';
    });
}

export default createProject;