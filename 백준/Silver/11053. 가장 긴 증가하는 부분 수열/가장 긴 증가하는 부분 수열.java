import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
    static int[] arr;
    static int[] dp;
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        arr = new int[n];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        dp = new int[n];

        for (int i = 0; i < n; i++) {
            LIS(i);
        }

        int max = dp[0];
        for (int i = 1; i < n; i++) {
            max = Math.max(max, dp[i]);
        }

        System.out.println(max);
    }
    static int LIS(int n) {
        // 탐색하지 않던 위치의 경우 1로 초기화
        // arr[2]의 경우
        if (dp[n] == 0) {
            dp[n] = 1;

            // n 이전의 노드들을 탐색
            for (int i = n - 1; i >= 0; i--) {
                // 이전의 노드 중 arr[n]의 값보다 작은 걸 발견했을 경우
                // 이전 노드 중 최대를 찾아 1을 더해줌
                // 1을 더하는 이유는 최대 길이가 증가하기 때문
                if (arr[i] < arr[n]) {
                    dp[n] = Math.max(dp[n], LIS(i) + 1);
                }
            }
        }
        return dp[n];
    }
}