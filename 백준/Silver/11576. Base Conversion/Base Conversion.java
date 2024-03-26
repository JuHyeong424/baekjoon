import java.io.*;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        int num = Integer.parseInt(br.readLine());
        int dec = 0;

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < num; i++) {
            int l = Integer.parseInt(st.nextToken());
            dec = dec * n + l;
        }

        ArrayList<Integer> list = new ArrayList<>();

        while (dec > 0) {
            int result = dec % m;
            list.add(result);
            dec /= m;
        }

        for (int i = list.size() - 1; i >= 0; i--) {
            System.out.print(list.get(i) + " ");
        }
    }
}