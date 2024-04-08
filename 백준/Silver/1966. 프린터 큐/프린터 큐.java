import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        StringTokenizer st;

        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            int m = Integer.parseInt(st.nextToken());
            int l = Integer.parseInt(st.nextToken());
            LinkedList<int[]> q = new LinkedList<>();
            st = new StringTokenizer(br.readLine());

            for (int j = 0; j < m; j++) {
                int k = Integer.parseInt(st.nextToken());
                q.offer(new int[]{j, k} );
            }

            int count = 0;

            while (!q.isEmpty()) {
                int[] first = q.poll();
                boolean max = true;

                for (int j = 0; j < q.size(); j++) {
                    if(first[1] < q.get(j)[1]) {
                        q.offer(first);

                        for (int k = 0; k < j; k++) {
                            q.offer(q.poll());
                        }

                        max = false;
                        break;
                    }
                }

                if(!max) continue;
                count++;
                if(first[0] == l) break;
            }
            System.out.println(count);
        }
    }
}