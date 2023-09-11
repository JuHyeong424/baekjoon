import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        String[] arr = new String[N];
        
        for(int i = 0; i < N; i++) {
            arr[i] = sc.next();
        }
        
        int a = 1; // 초기값을 1로 설정

        // 모든 단어의 마지막 문자가 다음 단어의 첫 문자와 같은지 확인
        for(int i = 0; i < N - 1; i++) {
            if (arr[i].charAt(arr[i].length() - 1) != arr[i + 1].charAt(0)) {
                a = 0; // 조건을 만족하지 않으면 a를 0으로 설정하고 반복문 종료
                break;
            }
        }
        
        System.out.println(a);
    }
}
