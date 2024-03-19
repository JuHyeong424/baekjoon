import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.EmptyStackException;
import java.util.Stack;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

            while (true) {
                String s = br.readLine();

                if (s.equals("."))
                    break;

                Stack<Character> stack = new Stack<>();

                try {
                    for (int i = 0; i < s.length(); i++) {
                        char c = s.charAt(i);

                        if (c == '(' || c == '[') {
                            stack.push(c);
                        } else if (c == ')') {
                            if (stack.empty() || stack.peek() != '(') {
                                stack.push(c);
                                break;
                            }else {
                                stack.pop();
                            }
                        } else if (c == ']') {
                            if (stack.empty() || stack.peek() != '[') {
                                stack.push(c);
                                break;
                            }else {
                                stack.pop();
                            }
                        }
                    }


                    if (stack.empty()) {
                        System.out.println("yes");
                    } else {
                        System.out.println("no");
                    }
                } catch(EmptyStackException e) {
                    System.out.println("no");
                }
        }
    }
}