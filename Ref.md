curl -H "Accept: application/vnd.github.everest-preview+json" \
    -H "Authorization: token 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" \
    --request POST \
    --data '{"event_type": "strapi_updates"}' \
    https://api.github.com/repos/fperera123/com.temp/dispatches