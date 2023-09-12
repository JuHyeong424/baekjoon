import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int[] arr = new int[N];
        
        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
        }
       int count=0;
       int count2=0;
       
       for(int i=0;i<N;i++) {
    		   if(arr[i]%2!=0) 
    			   count++;
    		   if(arr[i]%2==0) 
    			   count2++;
    	   
       }
       
       if(N%2==0) {
    		  if(count==count2) {
    			   System.out.println(1);
	    	  }else {
	    		  System.out.println(0);
	    	  }
    	   
       }else {
    	   if(count>count2) {
	    	   if(count-count2==1 && count+count2==N) {
	    		   System.out.println(1);
	    	   }else {
	    		   System.out.println(0);
	    	   }
    	   }else {
    		   System.out.println(0);
    	   }
       }
    }
}