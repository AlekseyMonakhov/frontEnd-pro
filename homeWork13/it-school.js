class itSchool {
    availabelCourses = [];
    startedLearningGroups = [];

    constructor(name, description, maxGroupscount, maxStudentsCountPerGroup) {
        this.name = name;
        this.description = description;
        this.maxGroupscount = maxGroupscount;
        this.maxStudentsCountPerGroup = maxStudentsCountPerGroup;
    }

    registerCourse(courseName, totalLessons, availabelTeachersAmount) {
        if (!this.availabelCourses.some((course) => course.name === courseName)) {
            return `Course ${courseName} already exist`
        }
        this.availabelCourses.push(new Course(courseName, totalLessons, availabelTeachersAmount));
    }

    startLearningGroup(courseName, teacherName, amountOfStudents) {
        const courseForNewLearningGroup = this.availabelCourses.find((course) => (course.name === courseName) && course.availabelTeachersAmount);
        if (courseForNewLearningGroup) {
            this.startedLearningGroups.push(new learningGroup(courseName, teacherName, amountOfStudents));
            courseForNewLearningGroup.availabelTeachersAmount -= 1;
        }
        
    }

    endLearningGroup(courseName, teacherName) {

        this.startedLearningGroups = this.startedLearningGroups
            .filter((group) => (group.courseName !== courseName) && (group.teacherName !== teacherName));
        
    }

    getLearningGroups(courseName) {
        return this.startedLearningGroups.filter((group) => group.courseName === courseName);

    }

}