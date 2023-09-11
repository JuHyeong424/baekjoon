import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int N = sc.nextInt();
		int M = sc.nextInt();
		
		int a = N-1;
		int b = (M-1)*N;
		
		System.out.println(a+b);
	}
}