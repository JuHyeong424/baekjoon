import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        int max = 1000000;

        // 소수 구하기, 소수 false, 에라토스테네스 체
        boolean[] num = new boolean[max + 1];
        // 0과 1은 소수가 아나므로 true
        num [0] = num [1] = true;
        // 제곱근 함수
        for (int i = 2; i <= Math.sqrt(max); i++) {
            // num[i]가 false이면
            if (!num[i]) {
                // i의 배수들을 true로 거름
                for (int j = i*i; j < num.length; j = j+i) {
                    num[j] = true;
                }
            }
        }

        // t가 0보다 클때까지 반복
        while (t-- > 0) {
            // 한줄씩 입력받음
            int tmp = Integer.parseInt(br.readLine());
            // 두 소수의 합으로 표현수
            int count = 0;

            // 두 소수의 합 구하기
            for (int i = 2; i <= tmp / 2; i++) {
                if (!num[i] && !num[tmp - i])
                    count++;
            }

            System.out.println(count);
        }
    }
}