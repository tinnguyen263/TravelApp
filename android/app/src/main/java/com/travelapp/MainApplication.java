package com.travelapp;

import android.app.Application;

import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements NavigationApplication {

    @Override
    public boolean isDebug() {
       // Make sure you are using BuildConfig from your own application
       return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
       // Add additional packages you require here
       // No need to add RnnPackage and MainReactPackage
       return Arrays.<ReactPackage>asList(
           // eg. new VectorIconsPackage()
       );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
       return getPackages();
    }

    @Override
    public String getJSMainModuleName() {
        return "index";
    }
}
