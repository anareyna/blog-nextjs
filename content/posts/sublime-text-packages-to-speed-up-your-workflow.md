---
date: "2014-06-23T18:15:19-05:00"
title: "Sublime Text Packages to speed up your workflow"
image: "blog/original-sublime.jpg"
---

Sublime Text is one of the fastest code editors that has emerged in recent years. It has a great community that produces a lot of packages (or plugins) to speed up the development of your projects. It supports OS X, Linux and Windows platforms.

If you are not using Sublime Text you can find more information and download version 2 [here](http://www.sublimetext.com/) or version 3 (beta) [here](http://www.sublimetext.com/3).

Today we will see some tips and packages that you might find very useful:

### Shortcuts

All shortcut combinations that come as default with Sublime are in the menu Preferences -> Key Binding – Default

If you want to edit or add a shortcut you have to find and copy the lines of code that you want to customize from the file “Key Bindings – Default” and paste it into the file “Key Bindings – User” from the same menu. Let’s say we want to bind this shortcut “ctrl + alt + c” to comment some lines of code, we would have to add the following lines in the “Key Bindings – User” file:

```js
{ "keys": ["ctrl+/"], "command": "toggle_comment", "args": { "block": false } },
{ "keys": ["ctrl+shift+c"], "command": "toggle_comment", "args": { "block": true } },
```

Other hidden Sublime feature and a time-saver is for copying or cutting lines of code, just place the cursor in any part of your code and press “ctrl + c” (no need to select the entire line) and you’re ready to paste it.

### Packages

In order to use packages you need to install “Package control”, just copy a block of code in the Sublime console (View menu -> Show console) and you’re ready to go. Follow the instructions in [this link](https://sublime.wbond.net/installation).

Once you have Package control installed, you can go to the Preferences menu -> Package Control -> Install Package or use the shortcul “ctrl+shift+p” to start searching any of the packages listed below.

#### [SideBarEnhancements](https://github.com/titoBouzout/SideBarEnhancements)

Adds improvements to files and folders of the Sublime sidebar, you will notice many options such as “Open in browser”, “Rename…”, etc.

#### [BracketHighligter](https://github.com/facelessuser/BracketHighlighter)

The name is self explanatory, it helps a lot to identify the beginning and ending of your lines of code in a much quicker way `[]`, `()`, `{}`, `""`, `''`, `<tag></tag>`.  

#### [Emmet](http://docs.emmet.io/)

Emmet allows you to write huge code blocks in HTML at the speed of light, all you have to do is use HTML and css selectors.

#### [GitGutter](https://github.com/jisaacks/GitGutter)

This package shows an icon in the left side of the window, right next to the the line numbers, it shows if a line of code has been added, modified or deleted.

#### [HTMLBeautify](https://github.com/rareyman/HTMLBeautify)

Gives format (indentation) to HTML code making it easier to read.

#### [JsFormat](https://github.com/jdc0589/JsFormat)

This is also a package to give format to Javascript code.

#### [Sublimerge Pro](http://www.sublimerge.com/)

It searches for differences between two files, two branches, revisions, etc., highlighting changes and lines with colors in a very intuitive way. The default shortcut is “ctrl+alt+d”.

### Themes

#### [Theme – Nil](https://github.com/nilium/st2-nil-theme)

#### [Theme – Spacegray](http://kkga.github.io/spacegray/)

#### [Theme – Soda](https://github.com/buymeasoda/soda-theme/)

If you know about more packages or tips for Sublime Text, please leave a comment below.
