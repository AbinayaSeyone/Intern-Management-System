package com.threeaxislabs.ims.util;
import com.password4j.Password;

public class PasswordUtils {

    public static String hashPassword(String plainText) {
        return Password.hash(plainText).withBcrypt().getResult();
    }

    public static boolean matchPassword(String plainText, String hashed) {
        return Password.check(plainText, hashed).withBcrypt();
    }
}