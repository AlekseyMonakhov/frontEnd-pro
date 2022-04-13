const itSchool = {
    name: "Simle online school",
    description: "Simle online school description",
    maxGroupCount: 5,
    maxStudentsCountPerGroup: 12,
    availabelCourses: ["Front-end Basic", "Front-end Pro"],
    startedGroups: [],
    supportedEventTypes: {
        GROUP_STARTED: "GROUP_STARTED", 
        GROUP_ENDED: "GROUP_ENDED",
        DONE_LESSON: "DONE_LESSON",
        REMOVE_COURSE: "REMOVE_COURSE",
        ADD_COURSE: "ADD_COURSE", 
    },


    __callbacks: {},

    addCourse(courseName) {
        if (!this.availabelCourses.includes(courseName)) {
            this.availabelCourses.push(courseName);
            this.dispatch(this.supportedEventTypes.ADD_COURSE, courseName);
        }else {
            console.log(`Course ${courseName} already exist`);
        }

    },

    removeCourse(courseName) {
        if (this.availabelCourses.includes(courseName)) {
            this.availabelCourses = this.availabelCourses.filter((availabelCourses) => availabelCourses !== courseName);
            this.dispatch(this.supportedEventTypes.REMOVE_COURSE, courseName);
            
        }else {
            console.log(`Cant remove course ${courseName}`);
        }

    },

    doneLesson(courseName) {
        if (this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)) {
            this.startedGroups.find((startedGroup) => startedGroup.courseName === courseName).passedLessons++;
            this.dispatch(this.supportedEventTypes.DONE_LESSON, courseName);
        }else {
            console.log(`Cour ${courseName} dont find`);
        }
    },

    startLearningGroup(courseName, amountOfStudents, totalLessons) {
        if(this.availabelCourses.includes(courseName)) {
            if(amountOfStudents <= this.maxStudentsCountPerGroup){
                if(!this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)) {
                    this.startedGroups.push({ courseName, amountOfStudents, totalLessons, passedLessons: 0});
                    this.dispatch(this.supportedEventTypes.GROUP_STARTED, courseName);
                }else{
                    console.log(`Group with ${courseName} alredy started` );
                }
            }else {
                console.log(`We not supported ${amountOfStudents} amount of students `);
            }
        }else {
            console.log(`Sorry, curs ${courseName} not supported yet`);
        }
    },



    endLearningGroup(courseName) {
        if (this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName )) {
            if (this.startedGroups.some((startedGroup) => startedGroup.passedLessons >= startedGroup.totalLessons)) {
                this.startedGroups = this.startedGroups.filter((startedGroup) => startedGroup.courseName !== courseName );
                this.dispatch(this.supportedEventTypes.GROUP_ENDED, courseName);
            }else{
                console.log(`Lessons dont passed`);
            }
        }else {
            console.log(`You are trying to finish not existing group`);
        }
    },


    on(eventName, callback) {
        if (eventName in this.supportedEventTypes) this.__callbacks[eventName] = callback;
    },


    dispatch(eventName, data) {
        this.__callbacks[eventName] && this.__callbacks[eventName](data);
    }

};
itSchool.on(
    itSchool.supportedEventTypes.GROUP_STARTED,    
    (courseName) => console.log(`О, стартовала новая группа по курсу ${courseName}!`),
);


itSchool.on(
    itSchool.supportedEventTypes.GROUP_ENDED,
    (courseName) => console.log(`О, похоже группа по курсу ${courseName} закончила свое обучение!`),
);
itSchool.on(
    itSchool.supportedEventTypes.DONE_LESSON,
    (courseName) => console.log(`О, кто то прошел урок по курсу ${courseName}!`),
);
itSchool.on(
    itSchool.supportedEventTypes.REMOVE_COURSE,
    (courseName) => console.log(`О, курс ${courseName} удалён!`),
);
itSchool.on(
    itSchool.supportedEventTypes.ADD_COURSE,
    (courseName) => console.log(`О, курс ${courseName} добавлен!`),
);
// start 

itSchool.startLearningGroup("Front-end Pro", 10, 32);

itSchool.removeCourse("Front-end Basic");

itSchool.doneLesson("Front-end Pro");
itSchool.doneLesson("Front-end Pro");
itSchool.addCourse("Front-end Basic");
// конец групп
itSchool.endLearningGroup("Front-end Pro")
console.log(itSchool.availabelCourses);
