import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        Queue<Integer> q = new LinkedList<>();
        Stack<Integer> s = new Stack<>();
        StringTokenizer st = new StringTokenizer(br.readLine());

        for(int i = 0; i < n; i++) {
            q.offer(Integer.parseInt(st.nextToken()));
        }

        int order = 1;
        while(!q.isEmpty()) {
            if(q.peek() == order) {
                q.poll();
                order++;
            } else if(!s.empty() && s.peek() == order) {
                s.pop();
                order++;
            } else {
                s.push(q.poll());
            }
        }

        while (!s.isEmpty()) {
            if(s.peek() == order) {
                s.pop();
                order++;
            } else {
                System.out.println("Sad");
                return; // 메소드 즉시 종료
            }
        }
        System.out.println("Nice");
    }
}