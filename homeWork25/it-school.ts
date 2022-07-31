class ItSchool {
    public availableCourses: Course[] = [];
    public startedLearningGroups: LearningGroup[] = [];
    constructor(
        public name: string,
        public description: string,
        public maxGroupsCount: number,
        public maxStudentsCountPerGroup: number
    ) {
    }

    registerCourse(courseName: string, totalLessons: number, availableTeachersAmount: number): string | void {
        if (this.availableCourses.some((course) => course.name === courseName)) {
            return `Course ${courseName} already exists.`;
        }
        this.availableCourses.push(new Course(courseName, totalLessons, availableTeachersAmount))
    }

    startLearningGroup(courseName: string, teacherName: string, amountOfStudents: number): void {
        const courseForNewLearningGroup: Course | undefined = this.availableCourses
            .find((course) => (course.name === courseName) && (course.availableTeachersAmount));
        if (courseForNewLearningGroup) {
            this.startedLearningGroups.push(new LearningGroup(courseName, teacherName, amountOfStudents));
            courseForNewLearningGroup.availableTeachersAmount -= 1;
        }
    }

    endLearningGroup(courseName: string, teacherName: string): void {
        this.startedLearningGroups = this.startedLearningGroups
            .filter((group) => (group.courseName !== courseName) && (group.teacherName !== teacherName));
    }
    getLearningGroups(courseName:string) {
        return this.startedLearningGroups.filter((group) => group.courseName === courseName);
    }

}