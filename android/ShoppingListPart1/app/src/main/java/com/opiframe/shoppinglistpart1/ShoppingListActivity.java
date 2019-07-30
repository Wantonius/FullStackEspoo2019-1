package com.opiframe.shoppinglistpart1;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.List;

public class ShoppingListActivity extends AppCompatActivity {

    private ListView lw;
    private ShoppingAdapter adapter;
    private Button addButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_shopping_list);
        lw = findViewById(R.id.lw);
        adapter = new ShoppingAdapter(this,0,0);
        lw.setAdapter(adapter);
        addButton = findViewById(R.id.backbutton);
        addButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ShoppingListActivity.this,MainActivity.class);
                startActivityForResult(i,100);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode == 100) {
            if(resultCode == Activity.RESULT_OK) {
                ShoppingItem temp = (ShoppingItem)data.getSerializableExtra("shoppingitem");
                adapter.add(temp);
            }
        }
    }

    private class ShoppingAdapter extends ArrayAdapter<ShoppingItem> {

        public ShoppingAdapter(Context context, int resource) {
            super(context, resource);
        }

        public ShoppingAdapter(Context context, int resource, int textViewResourceId) {
            super(context, resource, textViewResourceId);
        }

        public ShoppingAdapter(Context context, int resource, ShoppingItem[] objects) {
            super(context, resource, objects);
        }

        public ShoppingAdapter(Context context, int resource, int textViewResourceId, ShoppingItem[] objects) {
            super(context, resource, textViewResourceId, objects);
        }

        public ShoppingAdapter(Context context, int resource, List<ShoppingItem> objects) {
            super(context, resource, objects);
        }

        public ShoppingAdapter(Context context, int resource, int textViewResourceId, List<ShoppingItem> objects) {
            super(context, resource, textViewResourceId, objects);
        }

        public View getView(int position, View convertView, ViewGroup parent) {
            if(convertView == null) {
                convertView = getLayoutInflater().inflate(R.layout.row_layout,null);
            }
            TextView type = convertView.findViewById(R.id.typerowtextview);
            TextView count = convertView.findViewById(R.id.countrowtextview);
            TextView price = convertView.findViewById(R.id.pricerowtextview);
            ShoppingItem temp = adapter.getItem(position);
            type.setText(temp.getType());
            count.setText(""+temp.getCount());
            price.setText(""+temp.getPrice());
            return convertView;
        }
    }
}
