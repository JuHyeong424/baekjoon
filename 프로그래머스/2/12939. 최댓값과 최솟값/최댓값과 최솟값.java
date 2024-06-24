import java.util.*;

class Solution {
     static String solution(String s) {
        String[] arr = s.split(" ");
        int[] intArr = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            intArr[i] = Integer.parseInt(arr[i]);
        }

        int max = intArr[0];
        int min = intArr[0];

        for (int i = 0; i < intArr.length; i++) {
            if (max < intArr[i]) {
                max = intArr[i];
            }
            if (min > intArr[i]) {
                min = intArr[i];
            }
        }

         String answer = min + " " + max;
         return answer;
    }
}

class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String result = Solution.solution(str);
        System.out.println(result);
    }
}