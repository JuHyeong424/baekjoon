import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num=sc.nextInt();
        Person[] people = new Person[num];
        for(int i=0;i<num;i++) {
            int weight = sc.nextInt();
            int height = sc.nextInt();
            people[i]=new Person(weight, height);
        }
        for(int i=0;i<num;i++) {
            for(int j=0;j<num;j++) {
                if(i!=j && people[i].weight>people[j].weight && people[i].height>people[j].height) {
                    people[j].rank++;
                }
            }
        }
        for(Person person : people) {
            System.out.print(person.rank+" ");
        }
    }
}
class Person {
    int weight, height, rank;
    public Person(int weight, int height) {
        this.weight=weight;
        this.height=height;
        this.rank=1;
    }
}