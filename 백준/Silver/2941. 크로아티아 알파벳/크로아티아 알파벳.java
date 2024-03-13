import java.util.*;

public class Main {
    public static void main(String[] args) {
        String[] arr = new String[]
                {"c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="};
        Scanner sc = new Scanner(System.in);
        String str = sc.next();

        for (int i = 0; i < arr.length; i++) {
            if (str.contains(arr[i]))
                str = str.replace(arr[i], "!");
        }
        System.out.println(str.length());
    }
}