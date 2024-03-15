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

        // 이진 탐객을 위한 정렬
        Arrays.sort(getArray);

        int checkCount = Integer.parseInt(br.readLine());
        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < checkCount; i++) {
            int checkHave = Integer.parseInt(st.nextToken());
            // getArrat와 checkHave를 이진탐색하여 boolean 얻기
            boolean found = binarySearch(getArray, checkHave);
            // true면 1, 아니면 0
            System.out.print(found ? "1 " : "0 ");
        }
    }

    // 이진탐색, 중앙에서 비교
    // static은 해당 메서드가 객체의 인스턴스에 속하지 않고 클래스에 직접 속함
    // 이는 해당 메서드를 객체의 생성 없이도 호출
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

            // 같은게 없으면 false
            return false;
    }
}