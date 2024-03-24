import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int fact = 1;
        for (int i = n; i > 0; i--) {
            fact *= n;
            n--;
        }

        System.out.println(fact);
    }
}