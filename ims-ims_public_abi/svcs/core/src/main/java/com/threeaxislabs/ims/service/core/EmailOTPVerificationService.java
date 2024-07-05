
//package com.threeaxislabs.ims.service.core;
//
//import org.springframework.stereotype.Service;
//
//import javax.mail.*;
//import javax.mail.internet.InternetAddress;
//import javax.mail.internet.MimeMessage;
//import java.util.Properties;
//import java.util.Random;
//
//@Service
//public class EmailOTPVerificationService {
//
//    public void EmailOTPVerificationService(String recipientEmail) {
//        // Generate a random 6-digit OTP
//        String otp = generateOTP();
//
//        // Send the OTP via email
//        String subject = "OTP Verification Code";
//        String body = "Your OTP for verification is: " + otp;
//
//        sendEmail(recipientEmail, subject, body);
//
//        // Now you can use the `otp` variable for further verification steps.
//    }
//
//    public String generateOTP() {
//        // Generate a random 6-digit OTP
//        Random random = new Random();
//        int otp = 100000 + random.nextInt(900000);
//        return String.valueOf(otp);
//    }
//
//    public void sendEmail(String recipientEmail, String subject, String body) {
//        // Replace these with your email credentials
//        final String senderEmail = "netslambda2023@gmail.com";
//        final String senderPassword = "anxelnomshatujtv";
//
//        Properties prop = new Properties();
//        prop.put("mail.smtp.auth", "true");
//        prop.put("mail.smtp.starttls.enable", "true");
//        prop.put("mail.smtp.starttls.required", "true");
//        prop.put("mail.smtp.host", "smtp.gmail.com");
//        prop.put("mail.smtp.ssl.trust", "smtp.gmail.com");
//        prop.put("mail.smtp.ssl.protocols", "TLSv1.2");
//        prop.put("mail.smtp.port", "587");
//
//        Session session = Session.getInstance(prop, new Authenticator() {
//            @Override
//            protected PasswordAuthentication getPasswordAuthentication() {
//                return new PasswordAuthentication(senderEmail, senderPassword);
//            }
//        });
//
//        try {
//            Message message = new MimeMessage(session);
//            message.setFrom(new InternetAddress(senderEmail));
//            message.setRecipient(Message.RecipientType.TO, new InternetAddress(recipientEmail));
//            message.setSubject(subject);
//            message.setText(body);
//            Transport.send(message);
//            System.out.println("OTP sent successfully to " + recipientEmail);
//        } catch (MessagingException e) {
//            e.printStackTrace();
//        }
//    }
//}

//package com.threeaxislabs.ims.service.core;
//
//import org.springframework.stereotype.Service;
//
//import javax.mail.*;
//import javax.mail.internet.InternetAddress;
//import javax.mail.internet.MimeMessage;
//import java.util.Properties;
//import java.util.Random;
//
//@Service
//public class EmailOTPVerificationService {
//
//    private String generatedOTP; // Variable to store the generated OTP
//
//    public String generateOTP() {
//        // Generate a random 6-digit OTP
//        Random random = new Random();
//        int otp = 100000 + random.nextInt(900000);
//        generatedOTP = String.valueOf(otp);
//        return generatedOTP;
//    }
//
//    public void EmailOTPVerificationService(String recipientEmail) {
//        // Generate a random 6-digit OTP
//        generateOTP();
//
//        // Send the OTP via email
//        String subject = "OTP Verification Code";
//        String body = "Your OTP for verification is: " + generatedOTP;
//
//        sendEmail(recipientEmail, subject, body);
//    }
//
//    public boolean verifyOTP(String userOTP) {
//        // Compare the user input OTP with the generated OTP
//        return userOTP.equals(generatedOTP);
//    }
//
//    private void sendEmail(String recipientEmail, String subject, String body) {
//        // Replace these with your email credentials
//        final String senderEmail = "netslambda2023@gmail.com";
//        final String senderPassword = "anxelnomshatujtv";
//
//        Properties prop = new Properties();
//        prop.put("mail.smtp.auth", "true");
//        prop.put("mail.smtp.starttls.enable", "true");
//        prop.put("mail.smtp.starttls.required", "true");
//        prop.put("mail.smtp.host", "smtp.gmail.com");
//        prop.put("mail.smtp.ssl.trust", "smtp.gmail.com");
//        prop.put("mail.smtp.ssl.protocols", "TLSv1.2");
//        prop.put("mail.smtp.port", "587");
//
//        Session session = Session.getInstance(prop, new Authenticator() {
//            @Override
//            protected PasswordAuthentication getPasswordAuthentication() {
//                return new PasswordAuthentication(senderEmail, senderPassword);
//            }
//        });
//
//        try {
//            Message message = new MimeMessage(session);
//            message.setFrom(new InternetAddress(senderEmail));
//            message.setRecipient(Message.RecipientType.TO, new InternetAddress(recipientEmail));
//            message.setSubject(subject);
//            message.setText(body);
//            Transport.send(message);
//            System.out.println("OTP sent successfully to " + recipientEmail);
//        } catch (MessagingException e) {
//            e.printStackTrace();
//        }
//    }
//}

package com.threeaxislabs.ims.service.core;

import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;
import java.util.Random;

@Service
public class EmailOTPVerificationService {

    private String generatedOTP; // Variable to store the generated OTP

    public String generateOTP() {
        // Generate a random 6-digit OTP
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        generatedOTP = String.valueOf(otp);
        return generatedOTP;
    }

    public String EmailOTPVerificationService (String recipientEmail) {
        // Generate a random 6-digit OTP
        String y=generateOTP();


        // Send the OTP via email
        String subject = "OTP Verification Code";
        String body = "Your OTP for verification is: " + generatedOTP;

        sendEmail(recipientEmail, subject, body);

        return y;
    }

    public boolean verifyOTP(String userOTP) {
        // Compare the user input OTP with the generated OTP
        return userOTP.equals(generatedOTP);
    }

    private void sendEmail(String recipientEmail, String subject, String body) {
        // Replace these with your email credentials
        final String senderEmail = "netslambda2023@gmail.com";
        final String senderPassword = "anxelnomshatujtv";

        Properties prop = new Properties();
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.starttls.enable", "true");
        prop.put("mail.smtp.starttls.required", "true");
        prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.ssl.trust", "smtp.gmail.com");
        prop.put("mail.smtp.ssl.protocols", "TLSv1.2");
        prop.put("mail.smtp.port", "587");

        Session session = Session.getInstance(prop, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(senderEmail, senderPassword);
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(senderEmail));
            message.setRecipient(Message.RecipientType.TO, new InternetAddress(recipientEmail));
            message.setSubject(subject);
            message.setText(body);
            Transport.send(message);
            System.out.println("OTP sent successfully to " + recipientEmail);
        } catch (MessagingException e) {
            e.printStackTrace();
 }
}
}