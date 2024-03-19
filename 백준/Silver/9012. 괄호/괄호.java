import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.EmptyStackException;
import java.util.Stack;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

            while (n-- > 0) {
                Stack<String> stack = new Stack<>();
                try {
                String s = br.readLine();

                for (int i = 0; i < s.length(); i++) {
                    char c = s.charAt(i);

                    if (c == '(') {
                        stack.push(s);
                    } else if (c == ')') {
                        stack.pop();
                    }
                }

                if (stack.isEmpty()) {
                    System.out.println("YES");
                } else {
                    System.out.println("NO");
                }

            } catch(EmptyStackException e) {
                    System.out.println("NO");
                }
        }
    }
}