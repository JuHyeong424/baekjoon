import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        long m = Long.parseLong(st.nextToken());
        long n = Long.parseLong(st.nextToken());

        for (long i = m; i <= n; i++) {
            if (is_prime(i)) {
                System.out.println(i);
            }
        }
    }
    // 소수 찾기
    // 소수가 아니면 false
    private static boolean is_prime(long a) {
        if (a < 2) {
            return false;
        } if (a == 2) {
            return true;
        }

        for (int i = 2; i <= Math.sqrt(a); i++) {
            if (a % i == 0) {
                return false;
            }
        }
        return true;
    }
}