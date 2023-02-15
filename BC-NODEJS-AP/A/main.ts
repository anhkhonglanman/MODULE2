
// let arrayName: type[];

let skills: string[];

skills = [];
skills[0] = "Problem Solving";
skills[1] = "Programing";

skills.push('Software Design');
console.log(skills)

let series = [ 1, 2, 3];

let doubleIt = series.map(e => e * 2);
console.log(doubleIt)

let scores: (string | number)[];

scores = ['Programing', 5, 'Software Design', 4];

console.log(scores)


enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer (month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;

    }
    return isSummer;
}

console.log(isItSummer(Month.Jun))

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};
const request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if(request.status === ApprovalStatus.approved){
    //send an email
    console.log('Send email to the Application...')
}

let skill: [string, number];
skill = ['Programing', 5]