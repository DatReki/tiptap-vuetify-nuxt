<template>
<ClientOnly>
    <!-- Use the component in the right place of the template -->
    <div>
        <tiptap-vuetify v-model="content" :extensions="extensions" />
        <div class="preview">
            <h3 class="mt-4 primary--text">Preview</h3>
            <v-divider />
            <div class="tiptap-vuetify-editor__content" v-html="content" />
            <h3 class="mt-2 primary--text">HTML</h3>
            <v-divider />
            <div class="mt-3">{{ content }}</div>
        </div>
    </div>
    <template #placeholder>
      <p>Loading...</p>
    </template>
</ClientOnly>
</template>

<script>
// import the component and the necessary extensions
import {
    TiptapVuetify,
    Heading,
    Bold,
    Italic,
    Strike,
    Underline,
    Code,
    Image,
    Paragraph,
    BulletList,
    OrderedList,
    ListItem,
    Link,
    Blockquote,
    HardBreak,
    HorizontalRule,
    History,
} from "tiptap-vuetify";

export default {
    // specify TiptapVuetify component in "components"
    components: {
        TiptapVuetify
    },
    data: () => ({
        // declare extensions you want to use
        extensions: [
            History,
            Blockquote,
            Link,
            Underline,
            Strike,
            Italic,
            ListItem,
            BulletList,
            OrderedList,
            [
                Heading,
                {
                    options: {
                        levels: [1, 2, 3],
                    },
                },
            ],
            Bold,
            Link,
            Code,
            Image,
            HorizontalRule,
            Paragraph,
            HardBreak,
        ],
        // starting editor's content
        content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `,
    }),
};
</script>
