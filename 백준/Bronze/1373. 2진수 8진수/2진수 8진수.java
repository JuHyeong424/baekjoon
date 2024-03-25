import java.io.*;
import java.math.BigInteger;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();
        
        BigInteger n = new BigInteger(s, 2);
        String oct = n.toString(8);

        System.out.println(oct);
    }
}