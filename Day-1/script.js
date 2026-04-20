// return the names of the students whom score are below 80 of the average.

const students = [
  {
    id: 1,
    name: "Aarav",
    age: 21,
    marks: [78, 85, 92],
    courses: ["React", "Node", "DB"]
  },
  {
    id: 2,
    name: "Diya",
    age: 22,
    marks: [88, 91, 95],
    courses: ["React", "AI", "ML"]
  },
  {
    id: 3,
    name: "Kabir",
    age: 20,
    marks: [60, 65, 70],
    courses: ["HTML", "CSS"]
  },
  {
    id: 4,
    name: "Meera",
    age: 23,
    marks: [90, 93, 89],
    courses: ["Node", "DB", "DevOps"]
  },
  {
    id: 5,
    name: "Rohan",
    age: 21,
    marks: [72, 75, 70],
    courses: ["React", "CSS"]
  },
  {
    id: 6,
    name: "Isha",
    age: 22,
    marks: [95, 98, 97],
    courses: ["AI", "ML", "Data Science"]
  },
  {
    id: 7,
    name: "Arjun",
    age: 24,
    marks: [80, 82, 84],
    courses: ["Node", "React"]
  },
  {
    id: 8,
    name: "Sneha",
    age: 20,
    marks: [88, 86, 90],
    courses: ["React", "DB", "Node"]
  },
  {
    id: 9,
    name: "Vikram",
    age: 23,
    marks: [55, 60, 58],
    courses: ["HTML", "CSS"]
  },
  {
    id: 10,
    name: "Ananya",
    age: 22,
    marks: [92, 94, 96],
    courses: ["AI", "React", "Node"]
  }
];

// avarage marks < 80;

let result = students.reduce((acc , el)=>{
    let length = el.marks.length;
    let avg = 0;
    for(let i = 0;i < length;i++){
        avg += el.marks[i];
    }
    avg = avg / length;
    
    if(avg < 80) acc.push(el.name);
    
    return acc;
} , []);

console.log(result);

