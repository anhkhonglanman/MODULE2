var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, dateOfBirth, address, jobPosition) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
        this._address = address;
        this._jobPosition = jobPosition;
    }
    Object.defineProperty(Employee.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "lastname", {
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "dateOgBirth", {
        get: function () {
            return this._dateOfBirth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "dateOfBirth", {
        set: function (value) {
            this._dateOfBirth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "jobPosition", {
        get: function () {
            return this._jobPosition;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    EmployeeManager.removeEmployee = function (index) {
        this.employees.splice(index, 1);
    };
    EmployeeManager.updateEmployee = function (index, employee) {
        this.employees[index] = employee;
    };
    EmployeeManager.getEmployee = function (index) {
        return this.employees[index];
    };
    EmployeeManager.getAllEmployees = function () {
        return this.employees;
    };
    EmployeeManager.employees = [];
    return EmployeeManager;
}());
// th??m nh??n s???
EmployeeManager.addEmployee(new Employee("Nguyen", "Ty", 01 / 01 / 1990, "123 Ninh So, VN", "Senior Software Engineer"));
// hi??n th??? danh s??ch nh??n s???
console.log(EmployeeManager.getAllEmployees());
// c???p nh???t th??ng tin nh??n s???
EmployeeManager.updateEmployee(0, new Employee("Tran", "Ty", 01 / 01 / 1990, "123 Ninh So, VN", "Senior Software Engineer"));
// hi???n th??? danh s??ch nh??n s???
console.log(EmployeeManager.getAllEmployees());
// X??a nh??n s???
EmployeeManager.removeEmployee(0);
// hi???n th??? danh s??ch nh??n s???
console.log(EmployeeManager.getAllEmployees());
