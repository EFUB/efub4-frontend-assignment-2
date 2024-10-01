interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>){
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

const studentUser: User<Student> = {
  name: "맹구",
  profile: {
    type: "student",
    school: "돌대학교",
  },
};

goToSchool(studentUser);