import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        String s = br.readLine();
        Stack<Character> st = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '<') {
                while (!st.isEmpty()) {
                    sb.append(st.pop());
                }
                while (s.charAt(i) != '>') {
                    sb.append(s.charAt(i++));
                }
                sb.append(s.charAt(i));
            } else if (s.charAt(i) == ' ') {
                while (!st.isEmpty()) {
                    sb.append(st.pop());
                }
                sb.append(s.charAt(i));
            } else {
                st.push(s.charAt(i));
            }
        }

        while (!st.isEmpty()) {
            sb.append(st.pop());
        }

        System.out.println(sb);
    }
}