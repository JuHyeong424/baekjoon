import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[] arr = new int[n + 1];
        StringTokenizer st = new StringTokenizer(br.readLine());

        for (int i = 1; i <= n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        int[] dp = new int[n + 1];

        for (int i = 1; i <= n; i++) {
            dp[i] = 1;

            for (int j = 1; j < i; j++) {
                if(arr[j] < arr[i] && dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                }
            }
        }

        int[] dp1 = new int[n + 1];

        for (int i = n; i >= 1; i--) {
            dp1[i] = 1;

            for (int j = n; j > i; j--) {
                if(arr[j] < arr[i] && dp1[i] < dp1[j] + 1) {
                    dp1[i] = dp1[j] + 1;
                }
            }
        }

        int[] max = new int[n + 1];
        int result = 0;

        for (int i = 1; i <= n; i++) {
            max[i] = (dp[i] + dp1[i]) - 1;
            result = Math.max(result, max[i]);
        }

        System.out.println(result);
    }
}