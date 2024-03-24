import java.io.*;
import java.math.BigInteger;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        BigInteger fact = new BigInteger("1");
        for (int i = 1; i <= n; i++) {
            fact = fact.multiply(BigInteger.valueOf(i));
        }

        String s = String.valueOf(fact);
        long count = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
           if (s.charAt(i) == '0') {
               count++;
           } else {
               break;
           }
        }

        System.out.println(count);
    }
}