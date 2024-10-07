// Manager is also a subclass of Person, showing more advanced features
public class Manager extends Employee {
    private int teamSize;

    // Constructor for Manager
    public Manager(String name, int age, String jobTitle, double salary, int teamSize) {
        super(name, age, jobTitle, salary);  // Reusing the Employee constructor
        this.teamSize = teamSize;
    }



    public int getTeamSize() {
        return teamSize;
    }
    public void setTeamSize(int teamSize) {
        if (teamSize > 0) {
            this.teamSize = teamSize;
        }
    }


    // Overriding the displayInfo method again for Manager-specific information
    @Override
    public void displayInfo() {
        super.displayInfo();  // Calls Employee's displayInfo method
        System.out.println("Team Size: " + teamSize);
    }

    // Overloading the bonus method to show different behavior based on parameters
    public double bonus() {
        return super.getAge() > 40 ? 5000 : 3000;  // Older managers get a bigger bonus
    }

    public double bonus(double percentage) {
        return super.getAge() > 40 ? 5000 + (5000 * percentage / 100) : 3000 + (3000 * percentage / 100);
    }
}
