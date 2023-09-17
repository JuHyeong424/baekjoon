import java.util.Scanner;
 
public class Main {
 
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		  
		String s1 = sc.next();
		String s = s1.toUpperCase();
		
		int[] str = new int[26];
		
		for(int i=0;i<s.length();i++) {
			str[s.charAt(i)-'A']++;
		}
		int max=0;
		char ch=' ';
		
		for(int i=0;i<str.length;i++) {
			if(str[i]>max) {
				max=str[i];
				ch = (char)(i+65);
			}else if(str[i]==max) {
				ch='?';
			}
		}
		System.out.println(ch);
	}
}