const loans = [
  {
    name: "Rahul",
    loanDate: "2024-01-01",
    tenure: 30,
    currentDate: "2024-03-10",
    status: "unpaid"
  },
  {
    name: "Priya",
    loanDate: "2024-03-01",
    tenure: 60,
    currentDate: "2024-04-01",
    status: "paid"
  },
  {
    name: "Amit",
    loanDate: "2024-02-01",
    tenure: 45,
    currentDate: "2024-04-05",
    status: "unpaid"
  },
  {
    name: "Sneha",
    loanDate: "2024-01-15",
    tenure: 20,
    currentDate: "2024-03-01",
    status: "unpaid"
  },
  {
    name: "Vikram",
    loanDate: "2024-02-10",
    tenure: 25,
    currentDate: "2024-03-20",
    status: "paid"
  },
  {
    name: "Neha",
    loanDate: "2024-01-05",
    tenure: 40,
    currentDate: "2024-03-25",
    status: "unpaid"
  },
  {
    name: "Arjun",
    loanDate: "2024-03-01",
    tenure: 15,
    currentDate: "2024-03-25",
    status: "unpaid"
  },
  {
    name: "Kiran",
    loanDate: "2024-02-20",
    tenure: 10,
    currentDate: "2024-03-10",
    status: "paid"
  },
  {
    name: "Pooja",
    loanDate: "2024-01-12",
    tenure: 50,
    currentDate: "2024-04-15",
    status: "unpaid"
  },
  {
    name: "Rohit",
    loanDate: "2024-03-10",
    tenure: 30,
    currentDate: "2024-04-05",
    status: "unpaid"
  }
];
function getOverdueLoans(loans) {
  return loans
    .filter(({ status }) => status === "unpaid")
    .map(({ name, loanDate, currentDate, tenure }) => {
      const loan = new Date(loanDate);
      const current = new Date(currentDate);

      const daysPassed = Math.floor(
        (current - loan) / (1000 * 60 * 60 * 24)
      );

      const dueDays = daysPassed - tenure;

      return {
        name,
        dueDays
      };
    })
    .filter(loan => loan.dueDays > 0); // only overdue loans
}

console.log(getOverdueLoans(loans));