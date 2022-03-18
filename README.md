# Install tiptap-vuetify on Nuxt project
This document describes how to add tiptap-vuetify to a [Nuxt project](https://github.com/iliyaZelenko/tiptap-vuetify) (with NPM). Project I tried this on uses Vue 2.6.14 and Nuxt 2.15.8.

Inspired by [tiptap-vuetify-nuxt](https://github.com/iliyaZelenko/tiptap-vuetify-nuxt).

## Install packages
> npm install @nuxtjs/vuetify -D <br>
> npm install --save tiptap-vuetify

<br><br>

## Edit `nuxt.config.js`
Add modules
```javascript
modules: [
    '@nuxtjs/vuetify',		
]
```

Transpile
```javascript
build: {
    transpile: [
        'vuetify/lib', 
        'tiptap-vuetify'
    ]
}
```

Add plugin
```javascript
plugins: [
    {  src: `~/plugins/tiptap-vuetify.js`, mode: 'client' },
]
```
<br><br>

## Add plugin (`plugins/tiptap-vuetify.js`)
```javascript
import Vue from 'vue'
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
import 'tiptap-vuetify/dist/main.css'

export default ({ app }) => {
  Vue.use(TiptapVuetifyPlugin, {
    vuetify: app.vuetify,
    iconsGroup: 'mdi'
  })
}
```
<br><br>

## Add rich text editor as component (`Editor.vue`)
```html
<template>
  <ClientOnly>
    <!-- Use the component in the right place of the template -->
    <tiptap-vuetify v-model="content" :extensions="extensions" />
    <template #placeholder>Loading...</template>
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
  components: { TiptapVuetify },
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
```
<br><br>

## Use component on view
```html
<template>
    <div data-app>
        <Editor />
    </div>
</template>

<script>
import Editor from '../components/Editor.vue';

export default {
  components: {
    Editor,
  },
};
</script>
```
<br><br>

## Run project
Install dependencies
>npm install

Serve with hot reload at localhost:3000
>npm run dev
