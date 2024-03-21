import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();
        Stack<Character> st = new Stack<>();
        int count = 0;

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                st.push(s.charAt(i));
            } else if (s.charAt(i) == ')'){
                if (s.charAt(i-1) == '(') {
                    st.pop();
                    count += st.size();
                } else if (s.charAt(i-1) == ')'){
                    count += 1;
                    st.pop();
                }
            }
        }

        System.out.println(count);
    }
}