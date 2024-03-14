import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        double sum = 0.0;
        double numSum = 0.0;

        for (int i = 0; i < 20; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String name = st.nextToken();
            double num = Double.parseDouble(st.nextToken());
            String grade = st.nextToken();

            if (grade.equals("A+")) {
                sum += num * 4.5;
            } else if (grade.equals("A0")) {
                sum += num * 4.0;
            } else if (grade.equals("B+")) {
                sum += num * 3.5;
            } else if (grade.equals("B0")) {
                sum += num * 3.0;
            } else if (grade.equals("C+")) {
                sum += num * 2.5;
            } else if (grade.equals("C0")) {
                sum += num * 2.0;
            } else if (grade.equals("D+")) {
                sum += num * 1.5;
            } else if (grade.equals("D0")) {
                sum += num * 1.0;
            } else if (grade.equals("F")) {
                sum += 0.0;
            } else if (grade.equals("P")) {
                sum += 0.0;
                numSum -= num;
            }

            numSum += num;
        }

        double result = (Math.round(sum/numSum*1000000)/1000000.0);
        System.out.println(result);
    }
}