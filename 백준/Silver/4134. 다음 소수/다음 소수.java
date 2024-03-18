import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = (sc.nextInt());
        long[] arr = new long[num];

        for (int i = 0; i < num; i++) {
            long x = sc.nextLong();
            arr[i] = x;
        }

        long result = 0;
        for (int i = 0; i < num; i++) {
            result = next_prime(arr[i]);
            System.out.println(result);
        }
    }

    private static long next_prime(long a) {
        while(!(is_prime(a))) {
            a++;
        }
        return a;
    }

    private static boolean is_prime(long a) {
        if (a < 2) {
            return false;
        } if (a == 2) {
            return true;
        }

        for (int i = 2; i <= Math.sqrt(a); i++) {
            if (a % i == 0) {
                return false;
            }
        }
        return true;
    }
}