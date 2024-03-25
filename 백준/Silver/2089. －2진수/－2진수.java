import java.io.*;
import java.math.BigInteger;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();

        if (n == 0) {
            sb.append(0);
        } else {
            while (n != 1) {
                sb.append(Math.abs(n % -2));
                n = (int) (Math.ceil((double) n / -2));
            }
            sb.append(1);
        }
        
        System.out.println(sb.reverse());
    }
}