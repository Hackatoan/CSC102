public class Main {
    public static void main(String[] args) {
        // Create a Person object
        Person person = new Person("Alice", 30);
        person.displayInfo();

        // Create an Employee object
        Employee employee = new Employee("Bob", 40, "Software Engineer", 90000);
        employee.displayInfo();

        // Create a Manager object
        Manager manager = new Manager("Charlie", 50, "Project Manager", 120000, 10);
        manager.displayInfo();

        // Polymorphism in action
        Person p = new Manager("Dana", 45, "Senior Manager", 150000, 20);
        p.displayInfo();  // Will call Manager's displayInfo because of polymorphism

        // Calling overloaded methods
        Manager m = new Manager("Eve", 55, "Operations Manager", 130000, 15);
        System.out.println("Bonus: $" + m.bonus());
        System.out.println("Bonus with 10% increase: $" + m.bonus(10));
    }
}
