import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String n = br.readLine();
        int m = Integer.parseInt(br.readLine());
        Stack<Character> st1 = new Stack<>();
        Stack<Character> st2 = new Stack<>();
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < n.length(); i++) {
            st1.push(n.charAt(i));
        }

        for (int i = 0; i < m; i++) {
            String s = br.readLine();
            char c = s.charAt(0);

            switch (c) {
                case 'L':
                    if (!st1.isEmpty())
                        st2.push(st1.pop());
                    break;
                case 'D':
                    if (!st2.isEmpty())
                        st1.push(st2.pop());
                    break;
                case 'B':
                    if (!st1.isEmpty())
                        st1.pop();
                    break;
                case 'P':
                    st1.push(s.charAt(2));
                    break;
            }
        }

        while (!st1.isEmpty()) {
            st2.push(st1.pop());
        }

        while (!st2.isEmpty()) {
            sb.append(st2.pop());
        }

        System.out.println(sb);
    }
}