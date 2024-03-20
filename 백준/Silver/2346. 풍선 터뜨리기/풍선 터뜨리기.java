import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(br.readLine());
        Deque<int[]> dq = new ArrayDeque<>();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] arr = new int[n];

        for (int i = 0; i < n; i++){
             arr[i] = Integer.parseInt(st.nextToken());
        }

        int idx = arr[0];
        sb.append("1 ");
        for (int i = 1; i < n; i++) {
            dq.add(new int[] {(i+1), arr[i]});
        }

        while (!dq.isEmpty()) {
            if(idx > 0) {
                for (int i = 0; i < idx-1; i++) {
                    dq.addLast(dq.removeFirst());
                }

                int[] nxt = dq.poll();
                idx = nxt[1];
                sb.append(nxt[0] + " ");

            } else if (idx < 0) {
                for (int i = idx; i < -1; i++) {
                    dq.addFirst(dq.removeLast());
                }

                int[] nxt = dq.pollLast();
                idx = nxt[1];
                sb.append(nxt[0] + " ");
            }

        }
        System.out.print(sb.toString());
    }
}