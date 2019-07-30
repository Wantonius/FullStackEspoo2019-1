package com.opiframe.shoppinglistpart1;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private EditText typeedit,priceedit,countedit;
    private Button savebutton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        typeedit = findViewById(R.id.typeedit);
        priceedit = findViewById(R.id.priceedit);
        countedit = findViewById(R.id.countedit);
        savebutton = findViewById(R.id.savebutton);
        setResult(Activity.RESULT_CANCELED);
        savebutton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                ShoppingItem item = new ShoppingItem();
                item.setType(typeedit.getText().toString());
                int tempCount = 0;
                double tempPrice = 0.0d;
                try {
                    tempCount = Integer.parseInt(countedit.getText().toString());
                } catch(NumberFormatException e) {
                    return;
                }
                try {
                    tempPrice = Double.parseDouble(priceedit.getText().toString());
                } catch(NumberFormatException e) {
                    return;
                }
                item.setCount(tempCount);
                item.setPrice(tempPrice);
                Intent intent = getIntent();
                intent.putExtra("shoppingitem",item);
                setResult(Activity.RESULT_OK,intent);
                finish();
            }
            });

    }


}
