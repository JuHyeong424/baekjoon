import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        int max = 1000000;

        // 소수 구하기, 소수 false
        boolean[] num = new boolean[max + 1];
        num [0] = num [1] = true;
        for (int i = 0; i <= Math.sqrt(max); i++) {
            if (!num[i]) {
                for (int j = i*i; j < num.length; j = j+i) {
                    num[j] = true;
                }
            }
        }

        while (t-- > 0) {
            int tmp = Integer.parseInt(br.readLine());
            int count = 0;

            for (int i = 2; i <= tmp / 2; i++) {
                if (!num[i] && !num[tmp - i])
                    count++;
            }
            System.out.println(count);
        }
    }
}