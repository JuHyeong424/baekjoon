import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int x = Integer.parseInt(br.readLine());

        int count = 1;
        int prev_count = 0;

        while (true) {
            if (x <= count + prev_count) {
                if (count % 2 == 1) {
                    System.out.println((count - (x - prev_count - 1)) + "/" + (x - prev_count));
                    break;
                } else {
                    System.out.println((x - prev_count) + "/" + (count - (x - prev_count - 1)));
                }   break;
            } else {
                prev_count += count;
                count++;
            }
        }
    }
}