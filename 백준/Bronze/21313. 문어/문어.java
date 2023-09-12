import java.util.*;

public class Main {
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
        
       int N = sc.nextInt();
       int[] arr = new int[N];
       
       for(int i=0;i<N/2;i++) {
    	   if(N%2==0) {
    		   arr[i*2]=1;
    		   arr[i*2+1]=2;
    		   arr[N-1]=2;
    	   }else {
    		   arr[i*2]=1;
    		   arr[i*2+1]=2;
    		   arr[N-2]=2;
    		   arr[N-1]=3;
    	   }
       }
      for(int i=0;i<N;i++) {
    	  System.out.print(arr[i]+" ");
      }
    }
}