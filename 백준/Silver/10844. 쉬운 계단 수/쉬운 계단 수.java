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

        // 쉽게 보기 위해 n + 1
        dp = new long[n + 1][10];

        // 한 자리는 경우의 수가 1밖에 없으므로 1로 초기화
        for (int i = 0; i < 10; i++) {
            dp[1][i] = 1;
        }

        for (int i = 2; i <= n; i++) {
            for (int j = 0; j < 10; j++) {
                if (j == 0) {
                    dp[i][j] = dp[i - 1][1] % m;
                } else if (j == 9) {
                    dp[i][j] = dp[i - 1][8] % m;
                } else{
                    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % m;
                }
            }
        }

        long count = 0;

        // 마지막 자릿수 1 ~ 9까지의 경우의 수 모두 더함
        for (int i = 1; i <= 9; i++) {
            count += dp[n][i];
        }

        System.out.println(count % m);
    }
}