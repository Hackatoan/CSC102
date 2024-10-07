// Employee is a subclass of Person
public class Employee extends Person {
    private String jobTitle;
    private double salary;

    // Constructor to initialize Employee with inherited and new fields
    public Employee(String name, int age, String jobTitle, double salary) {
        super(name, age);  // Calls the constructor of the Person class
        this.jobTitle = jobTitle;
        this.salary = salary;
    }

    // Overriding the displayInfo method to add job-specific information
    @Override
    public void displayInfo() {
        // Calling the original displayInfo method from the superclass
        super.displayInfo();  
        System.out.println("Job Title: " + jobTitle + ", Salary: $" + salary);
    }
}
