import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        ArrayList<Long> list = new ArrayList<>();
        long count = 0;

        while (true) {
            count = 0;
            long n = Long.parseLong(br.readLine());

            if (n == 0)
                break;

            for (long i = n + 1; i <= (2 * n); i++) {
                if (is_prime(i)) {
                    count++;
                }
            }
            list.add(count);
        }

        Long[] result = list.toArray(new Long[0]);
        for (Long l : result)
            System.out.println(l);
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