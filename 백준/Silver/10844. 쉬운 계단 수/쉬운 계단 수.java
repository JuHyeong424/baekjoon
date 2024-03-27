import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {
    static long[][] dp;
    static int n;
    final static long m = 1000000000;

    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());

        dp = new long[n + 1][10];

        for (int i = 0; i < 10; i++) {
            dp[1][i] = 1;
        }

        long count = 0;

        for (int i = 1; i <= 9; i++) {
            count += stairs(n, i);
        }

        System.out.println(count % m);
    }

    public static long stairs(int a, int b) {
        if (a == 1) {
            return dp[1][b];
        }

        if (dp[a][b] == 0) {
            if (b == 0) {
                dp[a][b] = stairs(a - 1, 1);
            } else if (b == 9) {
                dp[a][b] = stairs(a - 1, 8);
            } else {
                dp[a][b] = stairs(a - 1, b - 1) + stairs(a - 1, b + 1);
            }
        }

        return dp[a][b] % m;
    }
}