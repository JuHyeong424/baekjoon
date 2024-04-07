public class Main {
    public static void main(String args[]) {
        boolean[] arr = new boolean[10001];

        for (int i = 1; i <= 10000; i++) {
            int a = i;

            while (true) {
                String s = String.valueOf(a);
                int sum = 0;

                for (int j = 0; j < s.length(); j++) {
                    int n = Character.getNumericValue(s.charAt(j));
                    sum += n;
                }

                int m = a + sum;

                if (m <= 10000) {
                    a = m;
                    arr[m] = true;
                } else {
                    break;
                }
            }
        }

        for (int i = 1; i <= 10000; i++) {
            if (arr[i]) continue;
            System.out.println(i);
        }
    }
}