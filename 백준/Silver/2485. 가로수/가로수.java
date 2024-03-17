import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());
        int[] arr = new int[num];

        for (int i = 0; i < num; i++) {
            int tree = Integer.parseInt(br.readLine());
            arr[i] = tree;
        }

        int[] arr2 = new int[num-1];
        for (int i = 0; i < arr2.length; i++) {
            arr2[i] = arr[i+1] - arr[i];
        }

        int gcd = 0;
        for (int i = 0; i < arr2.length; i++) {
            gcd = gcd(arr2[i], gcd);
        }

        int sum = 0;
        for (int i = 0; i < arr2.length; i++) {
            sum += (arr2[i] / gcd) - 1;
        }

        System.out.println(sum);
    }

    public static int gcd(int a, int b) {
        while (b != 0) {
            int tmp = a % b;
            a = b;
            b = tmp;
        }
        return a;
    }
}