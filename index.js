// Your code here

function createEmployeeRecord(employee) {
    // returns JavaScript Object with keys:
    return {
        firstName: employee[0],  
        familyName:employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeArray){
  return employeeArray.map(employee => createEmployeeRecord(employee));
}

function createTimeInEvent(employee, timeInStamp){
  let [date, time] = tmeInStamp.split(' ')
  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(time, 10),
    date: date
  })
  return employee;
}

