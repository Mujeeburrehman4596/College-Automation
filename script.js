// Add course functionality
const courseList = document.getElementById('courseList');
const addCourseButton = document.getElementById('addCourseButton');
const newCourse = document.getElementById('newCourse');

addCourseButton.addEventListener('click', () => {
  if (newCourse.value.trim() !== '') {
    const courseItem = document.createElement('li');
    courseItem.classList.add('list-group-item');
    courseItem.textContent = newCourse.value;
    courseList.appendChild(courseItem);
    newCourse.value = '';
  }
});

// Student Enrollment Submission
const enrollStudentForm = document.getElementById('enrollStudentForm');

enrollStudentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Student enrolled successfully!');
});

// You can add more JS for handling fees, students, and other dynamic content.
