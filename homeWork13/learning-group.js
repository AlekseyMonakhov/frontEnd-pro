class learningGroup {
    passedLessons = [];
    constructor (courseName, teacherName, amountOfStudents) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
    }

    doneLesson (title, topics) {

        if (this.passedLessons.some((lesson) => lesson.title === title)) {
            return `Lesson with title  ${title} alredy exist`;
        }
        const newLesson = new Lesson(title, topics);
        this.passedLessons.push(new Lesson(title, topics));
    }
}