package com.piking.app;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.idehub.Billing.InAppBillingBridgePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new InAppBillingBridgePackage("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAh3RXVAsdcShkIGhOdcQHzpf1S3zLX17lJbPGLEGzTE00JN+TCfDJ/DwW1wLK8/T0tod2TgBBYNxYSbvN+UeZXADMwEBoojZwXU3Tp/KVZazy5cEk0EgR/fclFBuOf5fq4RIV0YBDKCfPkv2pZQti96fBF50+DNn9VSqvdfyopFZUf69c4LWitkITzTU1jwyn95JF9pdSqDcZrMoWs4PcV3DnkRvsMrnrh8JsgHKCm0xy2Lumn4b2LbSBO5AhOZVv17gbsj94LqhA+VUjX2rJxvTuMN1X4q7r9IVii+xJFSjbtjbs+eaRwcjqd5uwP1XgikYNnIHqSFcjHrDK3N+22wIDAQAB")
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
