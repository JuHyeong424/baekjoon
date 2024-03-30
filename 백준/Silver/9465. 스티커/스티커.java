import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        StringTokenizer st;

        for (int i = 0; i < n; i++) {
            int m = Integer.parseInt(br.readLine());
            int[][] arr = new int[2][m + 1];
            arr[0][0] = arr[1][0] = 0;

            for (int k = 0; k < 2; k++) {
                st = new StringTokenizer(br.readLine());
                for (int j = 1; j <= m; j++) {
                    arr[k][j] =Integer.parseInt(st.nextToken());
                }
            }

            for (int j = 2; j <= m; j++) {
                arr[0][j] += Math.max(arr[1][j - 2], arr[1][j - 1]);
                arr[1][j] += Math.max(arr[0][j - 2], arr[0][j - 1]);
            }

            System.out.println(Math.max(arr[0][m], arr[1][m]));
        }
    }
}