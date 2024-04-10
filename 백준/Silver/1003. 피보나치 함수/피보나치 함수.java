import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[][] dp = new int[41][2];

        dp[0][0] = 1;
        dp[0][1] = 0;
        dp[1][0] = 0;
        dp[1][1] = 1;

        for (int j = 2; j <= 40; j++) {
            dp[j][0] = dp[j - 1][0] + dp[j - 2][0];
            dp[j][1] = dp[j - 1][1] + dp[j - 2][1];
        }

        for (int i = 0; i < n; i++) {
            int m = Integer.parseInt(br.readLine());
            System.out.println(dp[m][0] + " " + dp[m][1]);
        }
    }
}