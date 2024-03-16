import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());
        Map<String, String> map = new HashMap<>();

        for (int i = 0; i < num; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String name = st.nextToken();
            String inOut = st.nextToken();

            if (inOut.equals("enter")) {
                map.put(name, inOut);
            } else if (inOut.equals("leave")) {
                map.remove(name);
            }
        }

        ArrayList<String> list = new ArrayList<>(map.keySet());
        Collections.sort(list, Collections.reverseOrder());

        StringBuilder sb = new StringBuilder();

        for (String s : list) {
            sb.append(s+"\n");
        }

        System.out.println(sb);
    }
}