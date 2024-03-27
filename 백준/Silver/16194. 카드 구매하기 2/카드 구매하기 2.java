import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        // arr: n개를 사기 위한 비용
        int[] arr = new int[n+1];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 1; i <= n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        // dp: n개를 사기 위한 최대 비용
        int[] dp = new int[n+1];
        dp[0] = 0;

        // dp[i - j] + arr[j]
        // i - j개 구하는 최대가격 + j개 비용
        // dp[]를 최대로 채운 다음 최소값을 찾는다. 
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                dp[i] = Math.max(dp[i], dp[i - j] + arr[j]);
            }

            for (int j = 1; j <= i; j++) {
                dp[i] = Math.min(dp[i], dp[i - j] + arr[j]);
            }
        }

        System.out.println(dp[n]);
    }
}