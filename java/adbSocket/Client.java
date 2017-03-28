import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.Socket;
import java.util.Scanner;
import java.lang.String;

public class Client {
    public static void main(String[] args) throws IOException {
        Runtime.getRuntime().exec("adb forward tcp:11010 tcp:12345");

        Socket socket = null;
        String message = null;
        InputStream inputStream = null;
        BufferedReader bufferedReader = null;
        OutputStream outputStream = null;
        PrintStream printStream = null;
        Scanner input = new Scanner(System.in);

        try {
            socket = new Socket("127.0.0.1", 11010);
            System.out.println("connected!");

            inputStream = socket.getInputStream();
            outputStream = socket.getOutputStream();
            printStream = new PrintStream(outputStream);

            while(true) {
                message = input.next();
                printStream.println(message);

                if (message.equalsIgnoreCase("bye")) {
                    outputStream.close();
                    if (inputStream != null)
                        inputStream.close();
                    socket.close();
                    break;
                }

                bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
                message = bufferedReader.readLine();
                System.out.println(message);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (socket != null)
                socket.close();
        }
    }
}
