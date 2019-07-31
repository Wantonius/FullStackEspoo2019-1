package com.opiframe.swipeexample;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;

public class MyViewPagerAdapter extends FragmentPagerAdapter {
    public MyViewPagerAdapter(FragmentManager fm) {
        super(fm);
    }

    @Override
    public Fragment getItem(int position) {
        Fragment temp = new MyFragment();
        int pos = position +1;
        Bundle data = new Bundle();
        data.putInt("currentpage",pos);
        temp.setArguments(data);
        return temp;
    }

    @Override
    public int getCount() {
        return 5;
    }

    public CharSequence getPageTitle(int position) {
        return "Page "+(position+1);
    }
}
