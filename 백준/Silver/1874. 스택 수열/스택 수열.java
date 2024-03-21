import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();
        Stack<Integer> st = new Stack<>();

        int first = 0;

        for (int i = 0; i < n; i++) {
            int num = Integer.parseInt(br.readLine());

            if (num > first) {
                for (int j = first + 1; j <= num; j++) {
                    st.push(j);
                    sb.append("+" + "\n");
                }
                first = num;
            } else if (st.peek() != num) {
                System.out.println("NO");
                return;
            }
            st.pop();
            sb.append("-" + "\n");
        }

        System.out.println(sb);
    }
}