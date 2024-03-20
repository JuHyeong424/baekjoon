import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int n = Integer.parseInt(br.readLine());
        int[] qList = new int[n];
        int[] current = new int[n];

        StringTokenizer st1 = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            qList[i] = Integer.parseInt(st1.nextToken());
        }

        StringTokenizer st2 = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            current[i] = Integer.parseInt(st2.nextToken());
        }

        int m = Integer.parseInt(br.readLine());
        int[] arr = new int[m];

        StringTokenizer st3 = new StringTokenizer(br.readLine());
        for (int i = 0; i < m; i++) {
            arr[i] = Integer.parseInt(st3.nextToken());
        }

        Deque<Integer> dq = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            if (qList[i] == 0) {
                dq.addFirst(current[i]);
            }
        }

        for (int i = 0; i < m; i++) {
            dq.add(arr[i]);
            sb.append(dq.pollFirst()).append(" ");
        }

        System.out.println(sb);
    }
}