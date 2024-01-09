import java.io.*;
public class Main {
    public static void main(String[] args) {
        try{
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

            String[] menu = new String[5];
            for(int i=0;i<5;i++) {
                menu[i]=br.readLine();
            }

            int min1 = Integer.parseInt(menu[0]);
            int min2 = Integer.parseInt(menu[3]);

            for(int i=0;i<3;i++) {
                int current = Integer.parseInt(menu[i]);
                if(current<min1) {
                    min1=current;
                }
            }
            for(int i=3;i<5;i++) {
                int current2 = Integer.parseInt(menu[i]);
                if(current2<min2) {
                    min2=current2;
                }
            }

            bw.write(Integer.toString(min1+min2-50));

            bw.flush();
            bw.close();
            br.close();
        }catch(IOException e) {
            e.printStackTrace();
        }
    }
}
