import java.util.*;

public class Main {
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
        
       int N=sc.nextInt();
       int[][] arr = new int[N][2];
       
       for(int i=0;i<N;i++) {
    		   arr[i][0]=sc.nextInt();
    		   arr[i][1]=sc.nextInt();
    	   
       }
       int count=0;
       
       Arrays.sort(arr, new Comparator<int[]>() {
			public int compare(int[] o1, int[] o2) {
				return o1[0]-o2[0];
			}
		});

       int a=arr[0][0];
       int b=arr[0][1];
       
       for(int i=1;i<N;i++) {
    	   int c=arr[i][0];
    	 	 if(c==a) {
    		 	 if(arr[i][1]!=b) {
    			   count++;
    		 	 }
    		   }
    		a=c;
    		b=arr[i][1];
       }
       System.out.println(count);
    }
}