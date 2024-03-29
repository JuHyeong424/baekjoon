import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        long[] dp = new long[1000001];

        dp[0] = 1;
        dp[1] = 2;
        dp[2] = 4;
        
        for (int i = 0; i < n; i++) {
            int m = Integer.parseInt(br.readLine());

            for (int j = 3; j < m; j++) {
                dp[j] = (dp[j - 1] + dp[j - 2] + dp[j - 3]) % 1000000009;
            }

            System.out.println(dp[m - 1]);
        }
    }
}