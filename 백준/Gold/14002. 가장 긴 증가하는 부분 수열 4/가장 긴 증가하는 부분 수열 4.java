import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
    static int[] arr;
    static int[] dp;
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(br.readLine());
        arr = new int[n];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        dp = new int[n];

        for (int i = 0; i < n; i++) {
            dp[i] = 1;

            for (int j = 0; j < i; j++) {
                if (arr[j] < arr[i] && dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                }
            }
        }

        int max = 0;
        int index = 0;

        for (int i = 0; i < dp.length; i++) {
            if (max < dp[i]) {
                max = dp[i];
                index = i;
            }
        }

        System.out.println(max);

        sb.append(arr[index] + " ");
        max -= 1;

        for (int i = index - 1; i >= 0; i--) {
            if (dp[i] == max && arr[i] < arr[index]) {
                sb.insert(0, arr[i] + " ");
                max--;
            }
        }

        System.out.println(sb);
    }
}