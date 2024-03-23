import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();
        Stack<Character> st = new Stack<>();
        StringBuilder sb = new StringBuilder();

        for (char c : s.toCharArray()) {
            if (Character.isAlphabetic(c)) {
                sb.append(c);
            } else {
                if (c == '(') {
                    st.push(c);
                } else if (c == ')') {
                    while (st.peek() != '(') {
                        sb.append(st.pop());
                    }
                    st.pop();
                } else if (c == '*' || c == '/') {
                    while (!st.isEmpty() && (st.peek() == '*' || st.peek() == '/')) {
                        sb.append(st.pop());
                    }
                    st.push(c);
                } else if (c == '+' || c == '-') {
                    while (!st.isEmpty() && (st.peek() != '(')) {
                        sb.append(st.pop());
                    }
                    st.push(c);
                }
            }
        }

        while (!st.isEmpty()) {
            sb.append(st.pop());
        }

        System.out.println(sb);
    }
}