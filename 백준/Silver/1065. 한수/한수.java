import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        if (n < 100) {
            System.out.println(n);
        } else if (n <= 1000) {
            int a = 0, b = 0, c = 0;
            int count = 0;

            for (int i = 100; i <= n; i++) {
                c = i % 10;
                b = i / 10 % 10;
                a = i / 100;

                if (a - b == b - c) {
                    count++;
                }
            }

            System.out.println(99 + count);
        }
    }
}