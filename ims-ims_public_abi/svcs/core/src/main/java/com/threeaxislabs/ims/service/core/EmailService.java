package com.threeaxislabs.ims.service.core;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;

@Service
public class EmailService {
    private final String senderEmail = "netslambda2023@gmail.com";
    private final String senderPassword = "pvblgsbllusgngdu";
    private int lastProcessedMessageNumber = 0; // Variable to store the message number of the last processed email

    public void sendEmail(String recipient, String subject, String body) {
        System.out.println("Email Send Works");
        // Email configuration
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.starttls.required", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
        props.put("mail.smtp.ssl.protocols", "TLSv1.2");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(senderEmail, senderPassword);
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(senderEmail));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(recipient));
            message.setSubject(subject);
            message.setText(body);

            Transport.send(message);

            System.out.println("Email sent successfully!");
        } catch (MessagingException e) {
            System.out.println("Failed to send email: " + e.getMessage());
        }
    }


    @Scheduled(fixedDelay = 60000) // Run every 60 seconds
    public void receiveEmailsScheduled() {
        // Email account credentials
        String receiverEmail = "netslambda2023@gmail.com";
        String receiverPassword = "anxelnomshatujtv";

        // Email server configuration
        Properties props = new Properties();
        props.put("mail.store.protocol", "imaps");
        props.put("mail.imap.host", "imap.gmail.com");
        props.put("mail.imap.port", "993");
        props.put("mail.imap.ssl.enable", "true");

        Session session = Session.getDefaultInstance(props, null);

        try {
            Store store = session.getStore();
            store.connect("imap.gmail.com", receiverEmail, receiverPassword);

            Folder inbox = store.getFolder("INBOX");
            inbox.open(Folder.READ_ONLY);
            System.out.println("Email Receiving Successful");

            Message[] messages = inbox.getMessages();
            for (Message message : messages) {
                if (message.getMessageNumber() > lastProcessedMessageNumber) {
                    System.out.println("Subject: " + message.getSubject());
                    System.out.println("From: " + message.getFrom()[0]);

                    Object content = message.getContent();
                    if (content instanceof String) {
                        // If the content is a plain text message
                        String body = (String) content;
                        System.out.println("Body: " + body);
                    } else if (content instanceof Multipart) {
                        // If the content is a multi-part message (e.g., HTML message with attachments)
                        Multipart multiPart = (Multipart) content;
                        for (int i = 0; i < multiPart.getCount(); i++) {
                            BodyPart bodyPart = multiPart.getBodyPart(i);
                            if (bodyPart.isMimeType("text/plain")) {
                                String body = (String) bodyPart.getContent();
                                System.out.println("Body: " + body);
                            }
                        }
                    }

                    System.out.println("-------------------------------------");
                    lastProcessedMessageNumber = message.getMessageNumber(); // Update the last processed message number

                }
            }

            inbox.close(false);
            store.close();
        } catch (Exception e) {
            System.out.println("Failed to receive email: " + e.getMessage());
        }
        }
}
