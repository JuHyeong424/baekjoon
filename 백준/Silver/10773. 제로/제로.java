import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < n; i++) {
            int k = Integer.parseInt(br.readLine());

            if (k == 0) {
                stack.pop();
            } else {
                stack.push(k);
            }
        }

        int sum = 0;

        while (true) {
            if (stack.empty())
                break;
            sum += stack.pop();
        }

        System.out.println(sum);
    }
}