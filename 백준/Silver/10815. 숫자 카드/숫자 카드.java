import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int getCount = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] getArray = new int[getCount];

        for (int i = 0; i < getCount; i++) {
            int getHave = Integer.parseInt(st.nextToken());
            getArray[i] = getHave;
        }

        Arrays.sort(getArray);

        int checkCount = Integer.parseInt(br.readLine());
        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < checkCount; i++) {
            int checkHave = Integer.parseInt(st.nextToken());
            boolean found = binarySearch(getArray, checkHave);
            System.out.print(found ? "1 " : "0 ");
        }
    }

        private static boolean binarySearch(int[] arr, int target) {
            int left = 0;
            int right = arr.length - 1;

            while (left <= right) {
                int mid = (left + right) / 2;

                if (arr[mid] == target) {
                    return true;
                } else if (arr[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            return false;
    }
}