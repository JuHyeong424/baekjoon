import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[] arr = new int[n + 1];
        int[] plus = new int[n + 1];

        if (n > 1) {
            arr[2] = 3;
            plus[2] = 2;
        }

        for(int i = 4; i <= n; i += 2) {
            plus[i] = plus[i - 2] + arr[i - 4] * 2;
            arr[i] = (arr[i - 2] * 3) + plus[i];
        }

        System.out.println(arr[n]);
    }
}