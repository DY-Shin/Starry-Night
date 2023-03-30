package com.gog.starrynight.common.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Component
public class UriUtil {

    private static String scheme;
    private static String domain;
    private static String port;

    @Value("${app.uri.scheme}")
    public void setScheme(String scheme) {
       this.scheme = scheme;
    }

    @Value("${app.uri.domain}")
    public void setDomain(String domain) {
        this.domain = domain;
    }

    @Value("${app.uri.port}")
    public void setPort(String port) {
        this.port = port;
    }

    public static String buildUri(String path) {
        return ServletUriComponentsBuilder.newInstance()
                .scheme(scheme)
                .host(domain)
                .port(port)
                .path(path)
                .toUriString();
    }
}
