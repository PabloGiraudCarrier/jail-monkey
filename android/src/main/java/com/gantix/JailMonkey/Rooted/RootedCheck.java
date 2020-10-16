package com.gantix.JailMonkey.Rooted;

import android.content.Context;

import java.util.HashMap;
import java.util.Map;

import com.scottyab.rootbeer.RootBeer;
import android.os.Build;

public class RootedCheck {

    /**
     * Checks if the device is rooted.
     *
     * @return <code>true</code> if the device is rooted, <code>false</code> otherwise.
     */
    public static Map<String, Object> isSmellingShit(Context context) {
        CheckApiVersion check;
        final Map<String, Object> result = new HashMap<>();
        if (android.os.Build.VERSION.SDK_INT >= 23) {
            check = new GreaterThan23();
        } else {
            check = new LessThan23();
        }
        result.put("result", check.checkRooted() || rootBeerCheck(context));
        return result;
    }

    private static boolean rootBeerCheck(Context context) {
        RootBeer rootBeer = new RootBeer(context);
        
        return rootBeer.isRootedWithoutBusyBoxCheck();
    }
}
