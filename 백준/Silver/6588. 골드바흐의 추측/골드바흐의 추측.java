import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static boolean[] prime;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int max = 1000000;
        prime = new boolean[max+1];
        get_prime();

        String input = " ";
        while (!(input = br.readLine()).equals("0")) {
            int n = Integer.parseInt(input);
            boolean b = false;

            for (int i = 3; i <= n; i++) {
                if (!prime[i]) {
                    int m = n - i;

                    if (!prime[m]) {
                        bw.write(n + " = " + i + " + " + m + "\n");
                        b = true;
                        break;
                    }
                }
            }

            if (!b)
                bw.write( "Goldbach's conjecture is wrong.");
        }

        bw.flush();
        bw.close();
    }

    public static void get_prime() {
        prime[0] = prime[1] = true;

        for (int i = 2; i <= Math.sqrt(prime.length); i++) {
            if (prime[i])
                continue;

            for (int j = i * i; j < prime.length; j += i)
                prime[j] = true;
        }
    }
}