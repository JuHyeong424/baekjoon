import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();

        Stack<Integer> s = new Stack<>();
        int[] arr = new int[n];
        int[] count = new int[n];
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < n; i++) {
            int nge = Integer.parseInt(st.nextToken());
            arr[i] = nge;
            if (map.containsKey(nge)) {
                map.put(nge, map.get(nge) + 1);
            } else {
                map.put(nge, 1);
            }
        }

        for (int i = 0; i < n; i++) {
            if(map.containsKey(arr[i])) {
                count[i] = map.get(arr[i]);
            }
        }

        for (int i = 0; i < n; i++) {
            while (!s.isEmpty() && count[s.peek()] < count[i]) {
                arr[s.pop()] = arr[i];
            }
            s.push(i);
        }

        while (!s.isEmpty()) {
            arr[s.pop()] = -1;
        }

        for (int i = 0; i < n; i++) {
            sb.append(arr[i]).append(' ');
        }

        System.out.println(sb);
    }
}