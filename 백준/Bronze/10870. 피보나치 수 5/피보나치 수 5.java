import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num=sc.nextInt();

        ArrayList<Integer> list = new ArrayList<>();
        list.add(0);
        list.add(1);
        for(int i=2;i<num+1;i++) {
            int last = list.get(i-1);
            int secondLast = list.get(i-2);
            list.add(last+secondLast);
        }
        System.out.println(list.get(num));
    }
}
