package cn.antiy.weiqin.adbsocketserver;

import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintStream;
import java.net.ServerSocket;
import java.net.Socket;

import static cn.antiy.weiqin.adbsocketserver.R.id.msg;

public class MainActivity extends AppCompatActivity {
    private TextView mTextView = null;
    String message = null;
    Handler handler = new Handler();
    ServerSocket serverSocket = null;

    public void initView() {
        mTextView = (TextView)findViewById(msg);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initView();
        try {
            serverSocket = new ServerSocket(12345);
            mTextView.setText("Waiting connection...");
        } catch (IOException e) {
            e.printStackTrace();
        }

        new Thread() {
            public void run() {
                while(true) {
                    try {
                        Socket socket = serverSocket.accept();
                        handler.post(new Runnable() {
                            @Override
                            public void run() {
                            mTextView.setText("connected!");
                            }
                        });
                        new Thread(new ServerThread(socket)).start();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }.start();
    }

    public class ServerThread implements Runnable {
        private Socket socket = null;
        private BufferedReader bufferedReader = null;
        private InputStream inputStream = null;
        private OutputStream outputStream = null;
        private PrintStream printStream = null;

        public ServerThread(Socket socket) throws IOException {
            this.socket = socket;
            // 获取该socket对应的输入流
            inputStream = socket.getInputStream();
            bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        }

        public void run() {
            try {
                while ((message = bufferedReader.readLine()) != null) {
                    handler.post(new Runnable() {
                        @Override
                        public void run() {
                            mTextView.setText("From PC: " + message);
                        }
                    });
                    if (message.equalsIgnoreCase("bye")) {
                        try {
                            inputStream.close();
                            if(outputStream != null)
                                outputStream.close();
                            socket.close();
                            handler.post(new Runnable() {
                                @Override
                                public void run() {
                                    mTextView.append("\n" + "connect closed!");
                                }
                            });
                            break;
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                    outputStream = socket.getOutputStream();
                    printStream = new PrintStream(outputStream);
                    printStream.println("From Server: " + message);
                }
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                try {
                    if(inputStream != null)
                        inputStream.close();
                    if(outputStream != null)
                        outputStream.close();
                    socket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}