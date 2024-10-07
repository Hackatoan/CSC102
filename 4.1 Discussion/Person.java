public class Person {
    // Fields (private for encapsulation)
    private String name;
    private int age;
    
    // Constructor (initializes the object)
    public Person(String name, int age) {
        this.name = name;  // 'this' keyword refers to the object's fields
        this.age = age;
    }

    // Public getter and setter methods (providing controlled access to private fields)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age > 0) {  // Simple validation to ensure correct data
            this.age = age;
        }
    }

    // Public method
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}
