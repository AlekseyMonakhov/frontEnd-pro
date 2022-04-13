const itSchool = {
    name: "Simle online school",
    description: "Simle online school description",
    maxGroupCount: 5,
    maxStudentsCountPerGroup: 12,
    availabelCourses: ["Front-end Basic", "Front-end Pro"],
    startedGroups: [],
    supportedEventTypes: {
        GROUP_STARTED: "GROUP_STARTED", 
        GROUP_ENDED: "GROUP_ENDED"
    },


    __callbacks: {},

    startLearningGroup(courseName, amountOfStudents) {
        if(this.availabelCourses.includes(courseName)) {
            if(amountOfStudents <= this.maxStudentsCountPerGroup){
                if(!this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)) {
                    this.startedGroups.push({ courseName, amountOfStudents});
                    this.dispatch(this.supportedEventTypes.GROUP_STARTED, courseName)
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
            this.startedGroups = this.startedGroups.filter((startedGroup) => startedGroup.courseName !== courseName );
            this.dispatch(this.supportedEventTypes.GROUP_ENDED, courseName)
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
// start 
itSchool.startLearningGroup("Front-end Pro", 10);
itSchool.startLearningGroup("Front-end Basic", 15);
itSchool.startLearningGroup("Python Basic", 6);

// конец групп
itSchool.endLearningGroup("Front-end Pro");
itSchool.endLearningGroup("Python Basic");

console.log(itSchool.__callbacks);