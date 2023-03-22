package com.gog.starrynight.security.oauth.provider;

import java.util.Map;

public interface OAuthUserInfo {
    String getProvider();

    String getProviderId();

    String getName();

    String getEmail();

    Map<String, Object> getAttributes();
}
