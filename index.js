// Write your solution in this file!
const employee = {
    name: "Erkut Cakmak",
    streetAddress: "120 Parliament",
};

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = {...employee};
    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, name, streetAddress) {
    newEmployee.streetAddress = "12 Broadway";
    return newEmployee;
};

function deleteFromEmployeeByKey(newEmployee, name) {
    const deletedEmployee = {...newEmployee};
    delete deletedEmployee.name;
    return deletedEmployee;
};

function destructivelyDeleteFromEmployeeByKey(newEmployee, name) {
    delete newEmployee.name;
    return newEmployee;
}