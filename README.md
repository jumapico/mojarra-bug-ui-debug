Projects used to find a bug with `<ui:debug hotkey="x"/>` in mojarra 4.0.

Tested with:

* 23 ~> wildfly 26.1.3.Final
* 40 ~> wildfly 27.0.1.Final

As an example of the generated javascript code for each version of mojarra:

* ui_debug-23.js
* ui_debug-40.js

For the differences in the files, in mojarra 4.0 when the name of the variable
`jsfFaceletsDebug` is changed to `faceletsDebug` in the file
[UIDebug](https://github.com/eclipse-ee4j/mojarra/blob/3c5a76b3e64d0a8a432a9d3ab6000d09ba7eccc3/impl/src/main/java/com/sun/faces/facelets/tag/ui/UIDebug.java)
a bug is introduced, due that a function with the name `faceletsDebug` already
exists.
