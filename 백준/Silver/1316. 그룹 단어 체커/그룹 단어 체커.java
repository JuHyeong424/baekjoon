import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num=sc.nextInt();
        int count=0;

        String[] word = new String[num];
        for(int i=0;i<num;i++) {
            word[i]=sc.next();
            if(isGroupWord(word[i])) {
                count++;
            }
        }
        System.out.println(count);
    }
    private static boolean isGroupWord(String word) {
        boolean[] visited=new boolean[26];

        for(int i=0;i<word.length();i++) {
            char ch=word.charAt(i);

            if(visited[ch-'a']) {
                return false;
            }
            
            visited[ch-'a']=true;

            while(i<word.length()-1 && word.charAt(i)==word.charAt(i+1)) {
                i++;
            }
        }
        return true;
    }
}
