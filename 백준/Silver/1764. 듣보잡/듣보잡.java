import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        Map<String, Integer> map = new HashMap<>();

        for (int i = 0; i < n; i++) {
            String s = br.readLine();
            map.put(s, 0);
        }

        int count = 0;
        ArrayList<String> list = new ArrayList<>();

        for (int j = 0; j < m; j++) {
            String s = br.readLine();

            if (map.containsKey(s)) {
                count++;
                list.add(s);
            }
        }

        Collections.sort(list);

        System.out.println(count);
        for (String str : list) {
            System.out.println(str);
        }
    }
}