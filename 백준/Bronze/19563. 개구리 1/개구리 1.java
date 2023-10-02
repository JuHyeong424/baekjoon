import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
    	Scanner sc = new Scanner(System.in);
		int A = sc.nextInt();
		int B = sc.nextInt();
		int C = sc.nextInt();
        
        int a=(int)(Math.abs(A));
        int b=(int)(Math.abs(B));
        String s="";
        
       if(C>=a+b) {
    	   if((a+b)%2==0 && C%2==0) {
    		   s="YES";
    	   }else if((a+b)%2!=0 && C%2!=0) {
    		   s="YES";
    	   }else {
    		   s="NO";
    	   }
       }else {
    	   s="NO";
       }
       System.out.println(s);
    }
}