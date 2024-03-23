import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        String s = br.readLine();

        double[] dArr = new double[n];

        for (int i = 0; i < n; i++) {
            dArr[i] = Double.parseDouble(br.readLine());
        }

        Stack<Double> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (Character.isAlphabetic(c)) {
                stack.push(dArr[c - 'A']);
            } else {
                double a = stack.pop();
                double b = stack.pop();

                if (c == '+') {
                    stack.push(b + a);
                } else if ( c== '-') {
                    stack.push(b - a);
                } else if (c == '*') {
                    stack.push(b * a);
                } else if (c == '/') {
                    stack.push(b / a);
                }
            }
        }

        System.out.printf("%.2f", stack.pop());
    }
}