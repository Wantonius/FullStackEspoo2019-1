package com.opiframe.mybrowser;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    private WebView browser;
    private EditText urledit;
    private Button goButton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        browser = findViewById(R.id.browser);
        browser.setWebViewClient(new WebViewClient());
        browser.getSettings().setJavaScriptEnabled(true);
        browser.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        urledit = findViewById(R.id.urledit);
        goButton = findViewById(R.id.gobutton);
        goButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(urledit.getText().toString().isEmpty()) {
                    return;
                }
                String tempUrl = urledit.getText().toString();
                if(!tempUrl.startsWith("http"))  {
                    tempUrl = "http://"+tempUrl;
                }
                browser.loadUrl(tempUrl);
            }
        });
    }
}
