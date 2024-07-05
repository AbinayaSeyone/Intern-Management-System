package com.threeaxislabs.ims.service;

import java.util.Properties;

public class ServiceProps {
    public static Properties getInstance() {

        Properties output = new Properties();
        output.put("server.address", "localhost");
        output.put("server.port", 8080);
        output.put("server.error.whitelabel.enabled", "false");

        output.put("server.tomcat.min-spare", "16");
        output.put("server.tomcat.max-threads", "1024");
        output.put("server.tomcat.max-connections", "10240");

        output.put("server.compression.enabled", "false");

        return output;
    }
}
