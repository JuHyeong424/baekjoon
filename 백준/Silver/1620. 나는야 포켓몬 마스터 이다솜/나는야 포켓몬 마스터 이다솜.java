import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        Map<String, Integer> map = new HashMap<>();
        Map<Integer, String> reverseMap = new HashMap<>();

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            String name = st.nextToken();
            map.put(name, i+1);
            reverseMap.put(i+1, name);
        }

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            String question = st.nextToken();

            if (isAlphabet(question)) {
                if (map.containsKey(question)) {
                    int value = map.get(question);
                    sb.append(value + "\n");
                }
            } else {
                int num = Integer.parseInt(question);
                String n = reverseMap.get(num);
                sb.append(n + "\n");
            }
        }

        System.out.println(sb);
    }

    public static boolean isAlphabet(String str) {
        for (char c : str.toCharArray()) {
            if (!Character.isLetter(c)) {
                return false;
            }
        }
        return true;
    }
}