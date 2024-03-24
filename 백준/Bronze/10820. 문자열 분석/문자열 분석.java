import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = "";

        while ((s = br.readLine()) != null) {
            int[] arr = new int[4];

            for (int i = 0; i < s.length(); i++) {
                if ('a' <= s.charAt(i) && s.charAt(i) <= 'z') {
                    arr[0]++;
                } else if ('A' <= s.charAt(i) && s.charAt(i) <= 'Z') {
                    arr[1]++;
                } else if ('0' <= s.charAt(i) && s.charAt(i) <= '9') {
                    arr[2]++;
                } else if (s.charAt(i) <= ' ') {
                    arr[3]++;
                }
            }

            System.out.println(arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3]);
        }
    }
}