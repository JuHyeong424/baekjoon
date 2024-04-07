import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        if (n < 5) {
            if (n != 3) {
                System.out.println(-1);
            } else {
                System.out.println(1);
            }
        } else if (n % 5 == 0) {
            System.out.println(n / 5);
        } else if (n % 5 == 3) {
            System.out.println(n / 5 + 1);
        } else if (n % 5 == 1) {
            System.out.println(n / 5 + 1);
        } else if (n % 5 == 2) {
            if (n == 7) {
                System.out.println(-1);
            } else {
                System.out.println(n / 5 + 2);
            }
        } else if (n % 5 == 4) {
            System.out.println((n + 1) / 5 + 1);
        }
    }
}