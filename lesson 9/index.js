const itSchool = {
    name: "Simle online school",
    description: "Simle online school description",
    maxGroupCount: 5,
    maxStudentsCountPerGroup: 12,
    availabelCourses: ["Front-end Basic", "Front-end Pro"],
    startedGroups: [],


    __callbacks: {},

    startLearningGroup(courseName, amountOfStudents) {
        if(this.availabelCourses.includes(courseName)) {
            if(amountOfStudents <= this.maxStudentsCountPerGroup){
                if(!this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)) {
                    this.startedGroups.push({ courseName, amountOfStudents});
                    console.log(`Started ${courseName} group `);
                    this.dispatch(`GROUP_STARTED`, courseName)
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
            this.dispatch(`GROUP_ENDED`)
            console.log(`Group ${courseName} Finished`);
        }else {
            console.log(`You are trying to finish not existing group`);
        }
    },


    on(eventName, callback) {
        this.__callbacks[eventName] = callback;
    },


    dispatch(eventName, data) {
        this.__callbacks[eventName] && this.__callbacks[eventName](data);
    }

};
itSchool.on(
    "GROUP_STARTED",
    (courseName) => console.log(`О, стартовала новая группа по курсу ${courseName}!`),
);


itSchool.on(
    "GROUP_ENDED",
    (courseName) => console.log(`О, похоже группа по курсу ${courseName} закончила свое обучение!`),
);
// start 
itSchool.startLearningGroup("Front-end Pro", 10);
itSchool.startLearningGroup("Front-end Basic", 13);
itSchool.startLearningGroup("Python Basic", 6);

// конец групп
itSchool.endLearningGroup("Front-end Pro");
itSchool.endLearningGroup("Python Basic");