import java.io.*;
import java.math.BigInteger;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        long count5 = five(n) - five(m) - five(n - m);
        long count2 = two(n) - two(m) - two(n - m);

        System.out.println(Math.min(count2, count5));
    }

    public static long five(long num) {
        int count = 0;

        while (num >= 5) {
            count += num / 5;
            num /= 5;
        }
        return count;
    }

    public static long two(long num) {
        int count = 0;

        while (num >= 2) {
            count += num / 2;
            num /= 2;
        }
        return count;
    }
}