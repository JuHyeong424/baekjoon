import java.util.Scanner;
 
public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int N = sc.nextInt();
		int[] arr = new int[N];
		for(int i=0;i<N;i++) {
			arr[i]=sc.nextInt();
		}
		int count=0;
		int result=0;
		int j=0;
		
		for(int i=0;i<N;i++) {
			for(int k=1;k<=arr[i];k++) {
				if(arr[i]%k==0) {
					count++;
					}
				}
			if(count==2) {
				result++;
			}
			count=0;
		}
		System.out.println(result);
	}
}