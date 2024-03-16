import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        Set<Integer> setA = new HashSet<>();
        Set<Integer> setB = new HashSet<>();

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            int a = Integer.parseInt(st.nextToken());
            setA.add(a);
        }

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < m; i++) {
            int b = Integer.parseInt(st.nextToken());
            setB.add(b);
        }

        Set<Integer> a_b = new HashSet<>(setA);
        a_b.removeAll(setB);

        Set<Integer> b_a = new HashSet<>(setB);
        b_a.removeAll(setA);

        int count = a_b.size() + b_a.size();
        System.out.println(count);
    }
}