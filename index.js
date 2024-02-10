// Часть 1

const EmployeeDB = { // Создание объекта "EmployeeDB"**:
    employees: {}, //  Использование литерала объекта для инициализации.
  
    // Метод для добавления сотрудника
    addEmployee: function(id, name, position) {
      if (!this.employees[id]) { // Проверяем не существует ли сотрудник с таким id
        this.employees[id] = { name, position }; // Добавляем сотрудника
      } else {
        console.log(`Employee with ID ${id} already exists.`);
      }
    },
  
    // Метод для удаления сотрудника
    deleteEmployee: function(id) {
      if (this.employees[id]) {
        delete this.employees[id]; // Удаляем сотрудника с таким id
      } else {
        console.log(`Employee with ID ${id} does not exist.`);
      }
    },
  
    // Метод для обновления информации о сотруднике
    updateEmployee: function(id, name, position) {
      if (this.employees[id]) {
        this.employees[id] = { name, position }; // Обновляем 
      } else {
        console.log(`Employee with ID ${id} does not exist.`);
      }
    },
  
    // Метод для чтения информации о сотруднике
    readEmployees() {
        console.log("Employees:", this.employees);
      }
    };

  // Добавление сотрудников
EmployeeDB.addEmployee("001", "Anna", "Director", "Management");
EmployeeDB.addEmployee("002", "Jack", "Administrator", "IT");

// Чтение данных
EmployeeDB.readEmployees();

  // Часть 2

// Модификация данных
function capitalizeNames() {
    for (let id in EmployeeDB.employees) {
      let employee = EmployeeDB.employees[id];
      employee.name = employee.name.toUpperCase();
    }
  }
  
  function lowercaseDepartments() {
    for (let id in EmployeeDB.employees) {
      let employee = EmployeeDB.employees[id];
      employee.department = employee.department.toLowerCase();
    }
  }
  
  // Вызов функций модификации
  capitalizeNames();
  lowercaseDepartments();

  // Часть 3

  // Клонирование
function cloneEmployeeDB() {
    return JSON.parse(JSON.stringify(EmployeeDB));
  }
  
  // Слияние
  function mergeEmployeeDBs(db1, db2) {
    return { ...db1, ...db2 };
  }
  
  // Обход свойств
  function printUniqueDepartments() {
    const departments = new Set();
    for (let id in EmployeeDB.employees) {
      let { department } = EmployeeDB.employees[id];
      departments.add(department);
    }
    console.log("Уникальные отделы:", ...departments);
  }

// Часть 4

// Сравнение объектов
function compareEmployees(employee1, employee2, fields) {
    for (let field of fields) {
      if (employee1[field] !== employee2[field]) {
        return false;
      }
    }
    return true;
  }
  
  // Объекты не могут быть сравнены напрямую как примитивы, потому что объекты - это ссылочные типы данных.Два объекта считаются равными только если они ссылаются на один и тот же экземпляр.
  





  