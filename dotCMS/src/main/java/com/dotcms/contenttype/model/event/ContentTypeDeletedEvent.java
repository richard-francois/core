package com.dotcms.contenttype.model.event;

public class ContentTypeDeletedEvent {
    private String contentTypeVar;

    public ContentTypeDeletedEvent(final String contentTypeVar) {
        this.contentTypeVar = contentTypeVar;
    }

    public String getContentTypeVar() {
        return contentTypeVar;
    }
}
