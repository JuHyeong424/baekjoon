import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        long[][] dp = new long[n + 1][10];
        int m = 10007;

        for (int j = 0; j < 10; j++) {
            dp[1][j] = 1;
        }

        for (int i = 1; i <= n; i++) {
            dp[i][0] = 1;
        }

        for (int i = 2; i <= n; i++) {
            for (int j = 1; j < 10; j++) {
                dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % m;
            }
        }

        int sum = 0;
        for (int j = 0; j < 10; j++) {
            sum += dp[n][j];
        }

        System.out.println(sum % m);
    }
}