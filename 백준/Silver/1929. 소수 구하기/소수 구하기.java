import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        boolean[] prime = new boolean[m + 1];

        prime[0] = prime[1] = true;

        // 이미 true이면 넘기기 ex) 4, 6
        for (int i = 2; i <= Math.sqrt(prime.length); i++) {
            if (prime[i]) {
                continue;
            }

            // j = i * 2가 아닌 이유는 2배수에 걸러졌기 때문
            // 따라서 제곱수부터 시작
            // i만큼 증가
            for (int j = i * i; j < prime.length; j = j + i) {
                prime[j] = true;
            }
        }

        for (int i = n; i <= m; i++) {
            if (!prime[i]) {
                System.out.println(i);
            }
        }
    }
}